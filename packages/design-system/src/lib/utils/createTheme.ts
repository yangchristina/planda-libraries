import { createTheme } from '@macaron-css/core';
// const toThemeKey = (key: string) => key.replaceAll(" ", '-') + '-theme'

// type ThemeReturn = ReturnType<typeof createTheme>;  // string
type CreatedThemes = Record<string, [className: string, vars: any]>
export const createAllThemes = (themes: Record<string, any>) => Object.entries(themes).reduce((acc, [key, value]) => {
    // const themeName = toThemeKey(key)
    acc[key] = createTheme(value)
    return acc
}, {} as CreatedThemes)

export const toProviderThemes = (createdThemes: CreatedThemes) => Object.entries(createdThemes).reduce((acc, [key, value]) => {
    acc[key] = value[0]
    return acc
}, {} as Record<string, string>)
