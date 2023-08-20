"use client"
import { Button } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import getNextTheme, { isDarkTheme } from

const DarkThemeButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      style={{ position: 'fixed', zIndex: 999, right: 15, top: 15 }}
      onClick={() => setTheme(getNextTheme(theme, undefined, isDarkTheme(theme) ? 'light' : 'dark'))}
    >
      Toggle theme
    </Button>
  );
}

export default DarkThemeButton
