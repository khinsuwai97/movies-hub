'use client';
import React, { useState, useMemo, ChangeEvent } from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { cyan, grey, blueGrey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';
import { useTheme } from 'next-themes';

const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          primary: {
            main: cyan[800],
          },

          text: {
            primary: blueGrey[50],
          },
        }
      : {
          primary: {
            main: cyan[800],
          },
          text: {
            primary: grey[800],
          },
        }),
  },
});

const CustomPagination = () => {
  const [page, setPage] = useState(1);
  const { theme } = useTheme();
  const handleChange = (e: ChangeEvent<any>) => {
    setPage(+e.target.textContent);
  };

  // Update the paignation buttons only if the theme changes
  const darkModeTheme = useMemo(
    () => createTheme(getDesignTokens(theme as 'light' | 'dark')),
    [theme]
  );

  return (
    <div className="flex justify-center items-center md:pb-0 pb-[90px]">
      <ThemeProvider theme={darkModeTheme}>
        <Pagination
          count={10}
          page={page}
          color="primary"
          onChange={handleChange}
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPagination;
