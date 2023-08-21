"use client"
import { styled } from '@macaron-css/react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { Box } from '@radix-ui/themes';
import { Text } from '@radix-ui/themes';
import { vars } from '../styles/theme';

type TooltipPrimitiveProps = React.ComponentProps<typeof TooltipPrimitive.Root>;
type TooltipProps = TooltipPrimitiveProps &
  React.ComponentProps<typeof TooltipPrimitive.Content> & {
    children: React.ReactElement;
    content: React.ReactNode;
    multiline?: boolean;
  };

const StyledContent = styled(TooltipPrimitive.Content, {
  base: {
    backgroundColor: '$transparentPanel',
    borderRadius: '$1',
    padding: '$1 $2',
  },

  variants: {
    multiline: {
      true: {
        maxWidth: 250,
        pb: 7,
      },
    },
  },
});

export function Tooltip({
  children,
  content,
  open,
  defaultOpen,
  onOpenChange,
  delayDuration,
  disableHoverableContent,
  multiline,
  ...props
}: TooltipProps) {
  const rootProps = { open, defaultOpen, onOpenChange, delayDuration, disableHoverableContent };
  return (
    <TooltipPrimitive.Root {...rootProps}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <StyledContent side="top" align="center" sideOffset={5} {...props} multiline={multiline}>
          <Text
            size="1"
            as="p"
            style={{
              color: vars.colors.loContrast,
              lineHeight: multiline ? '20px' : (undefined as any),
            }}
          >
            {content}
          </Text>
          <Box style={{ color: vars.colors.transparentExtreme }}>
            <TooltipPrimitive.Arrow width={11} height={5} style={{ fill: 'currentColor' }} />
          </Box>
        </StyledContent>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
