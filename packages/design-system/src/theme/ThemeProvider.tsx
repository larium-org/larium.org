'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import React from 'react';

import './global.css';
import { lightModeColorTheme, darkModeColorTheme } from './themes/colors/colorTheme.css';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: lightModeColorTheme,
        dark: darkModeColorTheme,
      }}
    >
      {children}
    </NextThemeProvider>
  );
};

export default ThemeProvider;
