import { createGlobalTheme, createTheme, createThemeContract } from '@macaron-css/core';
import { ColorTheme, ColorBase, createThemeValue } from '../utils/radixColors';
import { createAllThemes, mapObject, toProviderThemes } from '../utils';

const splitThemeContractTwelve = (primary: string) => {
    const obj: Record<string, null> = {}
    for (let i=1; i<=12; i++) {
        obj[`${primary}${i}`] = null
    }
    return obj
}

export const vars = createThemeContract({
    color: {
        ...splitThemeContractTwelve('primary'),
        ...splitThemeContractTwelve('secondary'),
        ...splitThemeContractTwelve('accent'),
        ...splitThemeContractTwelve('gray'),
        ...splitThemeContractTwelve('error'),
        ...splitThemeContractTwelve('success'),
        ...splitThemeContractTwelve('info'),
        ...splitThemeContractTwelve('warning'),
        ...splitThemeContractTwelve('overlay'),
    },
});


// #region color themes
const crimsonTheme: ColorBase = {
    primary: 'crimson',
    secondary: 'crimsonA',
    accent: 'crimsonDark',
    gray: 'mauve',
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
}

const tealTheme: ColorBase = {
    primary: 'teal',
    secondary: 'tealA',
    accent: 'tealDark',
    gray: 'sage',
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
}

const indigoTheme: ColorBase = {
    primary: 'indigo',
    secondary: 'indigoA',
    accent: 'indigoDark',
    gray: 'slate',
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
}

// (avocadoTheme, true, 'grass', 'olive', 'red', 'green', 'blue', 'yellow', avocadoVariables, 'gold')
const avocadoTheme: ColorBase = {
    primary: 'grass',
    secondary: 'gold',
    accent: 'grass',
    gray: 'olive',
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
}

const violetTheme: ColorBase = {
    primary: 'violet',
    secondary: 'violetA',
    accent: 'violetDark',
    gray: 'mauve',
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
}

const lavendarBlushTheme: ColorBase = {
    primary: 'pink',
    secondary: 'plum',
    accent: 'pinkDark',
    gray: 'mauve',
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
}

const matchaTheme: ColorBase = {
    primary: 'grass',
    secondary: 'grassA',
    accent: 'grassDark',
    gray: 'sage',
    error: 'red',
    success: 'green',
    info: 'blue',
    warning: 'yellow',
}

const baseThemes = {
    crimson: crimsonTheme,
    teal: tealTheme,
    violet: violetTheme,
    matcha: matchaTheme,
    blueberry: indigoTheme,
    lavendarBlush: lavendarBlushTheme,
    avocado: avocadoTheme,
}

// shouldn't name change be easy? can you make variants of an existing theme from planda?
const lightThemeConfigs = mapObject(baseThemes, (theme) => ({ ...theme, isLight: true }))

const darkThemeConfigs = {
    ...Object.entries(lightThemeConfigs).reduce((acc, [name, config]) => {
        return {
            ...acc,
            [`${name}Dark`]: { ...config, isLight: false },
        }
    }, {} as Record<string, ColorTheme>),
}

export const allThemeConfigs = {
    ...lightThemeConfigs,
    ...darkThemeConfigs
}

export const themes: Record<string, any> = mapObject(allThemeConfigs, (config) => createThemeValue(config))

const createdThemes = createAllThemes(themes)

export const providerThemes = toProviderThemes(createdThemes)
// #endregion

export const globalStyles = {
    '*': {
        margin: 0,
        padding: 0,
    },
    html: {
        margin: 0,
        minHeight: '100%',
    },
    ':root': {
        margin: 0,
        fontFamily: '$system',
        height: "100%",
        color: "$primary12",
        boxSizing: "border-box",
        '-moz-box-sizing': "border-box",
        '-webkit-box-sizing': "border-box",
        scrollBehavior: 'smooth',
        scrollbarColor: 'auto transparent',
        background: '$primary1',
        fontSize: "1em",
    },
    body: {
        minHeight: "100vh",
        minWidth: "100vw",
        fontSize: '1em',
        margin: 0,
        padding: 0,
        background: '$primary1',
        // display: 'flex',
        // alignItems: 'stretch',
    },
    'h1, h2, h3, h4, h5, h6': {
        color: '$primary11',
        margin: 0,
        display: "block",
        fontWeight: "bold"
    },
    main: { // TODO: delete this when done testing
        backgroundColor: '$primary1',
        width: '100vw'
    },
    sub: {
        verticalAlign: 'bottom',
        position: 'relative',
        bottom: '-0.5em',
        color: '$unimportant',
        fontSize: '0.65em',
    },
    textarea: {
        fontFamily: '$system',
        padding: 5,
        letterSpacing: 0.8,
        boxSizing: 'border-box',
        background: '$overlayB11',
        '&:focus': {
            // border: '$focus',
            outline: 'none !important',
            // border: '1px solid red',. .
            boxShadow: '$focus'
        }
    },
    a: {
        textDecoration: 'none'
    },
    '.gap': {
        display: 'flex',
        gap: 15
    },
    '.center': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    li: {
        marginInline: 40
    }
}