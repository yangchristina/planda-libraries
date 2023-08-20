import { createGlobalTheme, createTheme, createThemeContract } from '@macaron-css/core';

const config = {
    theme: {
        colors: {
            text: vars.color.primary12,
            outline: vars.color.primary12,
            outlineHover: vars.color.gray12,

            unimportant: vars.color.gray11,
            important: vars.color.primary11,
            highlight: vars.color.warning9,

            canvas: 'hsl(0 0% 93%)',
            panel: vars.color.loContrast,
            shadowLight: 'hsl(206 22% 7% / 35%)',
            shadowDark: 'hsl(206 22% 7% / 20%)',
        },
        fonts: {
            untitled: 'Untitled Sans, -apple-system, system-ui, sans-serif',
            mono: 'Söhne Mono, menlo, monospace',
        },
        shadows: {
            border: `0 0 0 calc(1px / var(--scale-x, 1)) ${vars.color.overlay8}`,
            borderHiContrast: `0 0 0 calc(1px / var(--scale-x, 1)) ${vars.color.overlay12}`,
            common: `0 1px calc(3px / var(--scale-x, 1)) 0 rgba(34, 33, 81, 0.15)`,
            boxShadow: `$border, $common`,
            error: `0px 0px 3px ${vars.color.error11}`,
            success: `0px 0px 3px ${vars.color.success11}`,
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

export const globalVars = createGlobalTheme(':root', config);