'use client';
import { ComponentProps } from 'react'
import { styled } from '@macaron-css/react';
import { SelectTrigger, Value, SelectIcon } from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import { selectColorVariants } from "../styles";
import { vars } from '../../../styles/theme';

type TriggerProps = ComponentProps<typeof SelectTrigger>
const Trigger = ({ placeholder = 'Select a category', error = false, ...props }: { placeholder?: string, error?: boolean } & TriggerProps) => {
    return (
        // @ts-expect-error
        <StyledTrigger {...props} error={error} aria-label="select-trigger">
            <Value placeholder={placeholder} />
            <SelectIcon>
                <ChevronDownIcon />
            </SelectIcon>
        </StyledTrigger>
    )
}

export default Trigger

const StyledTrigger = styled(SelectTrigger, {
    base: {
        all: 'unset',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        padding: '0 15px',
        fontSize: 13,
        lineHeight: 1,
        height: 35,
        gap: 5,
        backgroundColor: vars.colors.loContrast ,
        boxShadow: '$border',
        color: '$primary12',
        // boxShadow: `0px 0px 3px $colors$gray8`,
        // boxShadow: '$boxShadow',
        gridArea: 'category',

        border: '$boxShadow',
        selectors: {
            '&:hover': { backgroundColor: '$gray3' },
            '&:focus': { boxShadow: `$focus` },
            '&[data-placeholder]': { color: '$gray12' },
        }
    },

    variants: {
        ...selectColorVariants,
        border: {
            thin5: {
                border: '0 0 0 calc(1px / var(--scale-x, 1)) $colors$overlay5',
            },
            thin6: {
                border: '0 0 0 calc(1px / var(--scale-x, 1)) $colors$overlay6',
            },
            thin7: {
                border: '0 0 0 calc(1px / var(--scale-x, 1)) $colors$overlay7',
            },
            thin8: {
                border: '0 0 0 calc(1px / var(--scale-x, 1)) $colors$overlay8',
            },
            thin9: {
                border: '0 0 0 calc(1px / var(--scale-x, 1)) $colors$overlay9',
            },
            thin10: {
                border: '0 0 0 calc(1px / var(--scale-x, 1)) $colors$overlay10',
            },
            thin11: {
                border: '0 0 0 calc(1px / var(--scale-x, 1)) $colors$overlay11',
            },
            thin12: {
                border: '0 0 0 calc(1px / var(--scale-x, 1)) $colors$overlay12',
            },
        }
    },
    defaultVariants: {
        color: 'loContrast'
    }
});