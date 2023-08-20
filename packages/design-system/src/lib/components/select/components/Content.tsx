'use client';
import * as SelectPrimitive from '@radix-ui/react-select';
import { styled } from '@macaron-css/react';
import { ChevronUpIcon, ChevronDownIcon } from '@radix-ui/react-icons';

const SelectViewport = styled(SelectPrimitive.Viewport, {
    base: {
        padding: 5,
    }
});

const SelectContent = styled(SelectPrimitive.Content, {
    base: {
        overflow: 'hidden',
        backgroundColor: '$gray1',
        borderRadius: 6,
        zIndex: 1000,
        boxShadow:
            '0px 10px 25px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
        border: '1px solid $overlay7',
    }
});

const scrollButtonStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    backgroundColor: '$gray1',
    color: '$primary11',
    cursor: 'default',
};

const SelectScrollUpButton = styled(SelectPrimitive.ScrollUpButton, { base: scrollButtonStyles });

const SelectScrollDownButton = styled(SelectPrimitive.ScrollDownButton, { base: scrollButtonStyles });


const Content = ({ children }: { children: JSX.Element, }) => {
    return (
        <SelectPrimitive.Portal>
            <SelectContent>
                <SelectScrollUpButton>
                    <ChevronUpIcon />
                </SelectScrollUpButton>
                <SelectViewport>
                    {children}
                </SelectViewport>
                <SelectScrollDownButton>
                    <ChevronDownIcon />
                </SelectScrollDownButton>
            </SelectContent>
        </SelectPrimitive.Portal>
    )
}

export default Content