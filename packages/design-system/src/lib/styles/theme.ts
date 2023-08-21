import { createGlobalTheme, createThemeContract } from '@macaron-css/core';
import { ColorTheme, ColorBase, createThemeValue } from '../utils/radixColors';
import { createAllThemes, mapObject, toProviderThemes } from '../utils';
import { merge } from 'lodash';

const splitThemeContractTwelve = (primary: string) => {
    const obj: Record<string, null> = {}
    for (let i = 1; i <= 12; i++) {
        obj[`${primary}${i}`] = null
    }
    return obj
}

const specific = createThemeContract({
    colors: {
        ...splitThemeContractTwelve('accent'),
        loContrast: null,
        hiContrast: null,

        primary1: null,
        primary2: null,
        primary3: null,
        primary4: null,
        primary5: null,
        primary6: null,
        primary7: null,
        primary8: null,
        primary9: null,
        primary10: null,
        primary11: null,
        primary12: null,

        secondary1: null,
        secondary2: null,
        secondary3: null,
        secondary4: null,
        secondary5: null,
        secondary6: null,
        secondary7: null,
        secondary8: null,
        secondary9: null,
        secondary10: null,
        secondary11: null,
        secondary12: null,

        accent1: null,
        accent2: null,
        accent3: null,

        gray1: null,
        gray2: null,
        gray3: null,
        gray4: null,
        gray5: null,
        gray6: null,
        gray7: null,
        gray8: null,
        gray9: null,
        gray10: null,
        gray11: null,
        gray12: null,

        error1: null,
        error2: null,
        error3: null,
        error4: null,
        error5: null,
        error6: null,
        error7: null,
        error8: null,
        error9: null,
        error10: null,
        error11: null,
        error12: null,

        success1: null,
        success2: null,
        success3: null,
        success4: null,
        success5: null,
        success6: null,
        success7: null,
        success8: null,
        success9: null,
        success10: null,
        success11: null,
        success12: null,

        info1: null,
        info2: null,
        info3: null,
        info4: null,
        info5: null,
        info6: null,
        info7: null,
        info8: null,
        info9: null,
        info10: null,
        info11: null,
        info12: null,

        warning1: null,
        warning2: null,
        warning3: null,
        warning4: null,
        warning5: null,
        warning6: null,
        warning7: null,
        warning8: null,
        warning9: null,
        warning10: null,
        warning11: null,
        warning12: null,

        overlay1: null,
        overlay2: null,
        overlay3: null,
        overlay4: null,
        overlay5: null,
        overlay6: null,
        overlay7: null,
        overlay8: null,
        overlay9: null,
        overlay10: null,
        overlay11: null,
        overlay12: null,
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

//#region global themes
const config = {
    colors: {
        text: specific.colors.primary12,
        outline: specific.colors.primary12,
        outlineHover: specific.colors.gray12,

        unimportant: specific.colors.gray11,
        important: specific.colors.primary11,
        highlight: specific.colors.warning9,

        canvas: 'hsl(0 0% 93%)',
        panel: specific.colors.loContrast,
        shadowLight: 'hsl(206 22% 7% / 35%)',
        shadowDark: 'hsl(206 22% 7% / 20%)',
        transparentExtreme: specific.colors.accent3 // NO IDEA WHAT VALUE FOR THIS
    },
    fonts: {
        untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
        mono: 'Söhne Mono, menlo, monospace',
    },
    shadows: {
        border: `0 0 0 calc(1px / var(--scale-x, 1)) ${specific.colors.overlay8}`,
        borderHiContrast: `0 0 0 calc(1px / var(--scale-x, 1)) ${specific.colors.overlay12}`,
        common: `0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15)`,
        boxShadow: `$border, $common`,
        error: `0px 0px 3px ${specific.colors.error11}`,
        success: `0px 0px 3px ${specific.colors.success11}`,
        // Should focus be info or secondary?
        focus: `0 0 0 2px $colors$info7`, // or if want gray focus: `0 0 0 2px $colors$gray7`
        focusBottom: `0 2px 0px 0px $colors$info7`,
        focusPrimary: `0 0 0 2px $colors$primary7`,
        // light: '0 0 0 2px $colors$gray1',
        strong: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    },
    space: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '35px',
        7: '45px',
        8: '65px',
        9: '80px',
    },
    sizes: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '35px',
        7: '45px',
        8: '65px',
        9: '80px',
    },
    // space: {
    //   1: '4px',
    //   2: '8px',
    //   3: '16px',
    //   4: '20px',
    //   5: '24px',
    //   6: '32px',
    //   7: '48px',
    //   8: '64px',
    //   9: '80px',
    // },
    // sizes: {
    //   1: '4px',
    //   2: '8px',
    //   3: '16px',
    //   4: '20px',
    //   5: '24px',
    //   6: '32px',
    //   7: '48px',
    //   8: '64px',
    //   9: '80px',
    // },
    fontSizes: {
        1: '12px',
        2: '13px',
        3: '15px',
        4: '17px',
        5: '19px',
        6: '21px',
        7: '27px',
        8: '35px',
        9: '59px',
    },
    // fontSizes: {
    //   1: '11px',
    //   2: '12px',
    //   3: '15px',
    //   4: '17px',
    //   5: '20px',
    //   6: '22px',
    //   7: '28px',
    //   8: '36px',
    //   9: '60px',
    // },
    radii: {
        1: '4px',
        2: '6px',
        3: '8px',
        4: '12px',
        round: '50%',
        pill: '9999px',
    },
    zIndices: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        max: '999',
    },
    media: {
        bp1: '(min-width: 520px)',
        bp2: '(min-width: 900px)',
        bp3: '(min-width: 1200px)',
        bp4: '(min-width: 1800px)',
        motion: '(prefers-reduced-motion)',
        hover: '(any-hover: hover)',
        dark: '(prefers-color-scheme: dark)',
        light: '(prefers-color-scheme: light)',
    },
};

const root = createGlobalTheme(':root', config);
//#endregion

export const vars = { ...merge({}, root, specific) };