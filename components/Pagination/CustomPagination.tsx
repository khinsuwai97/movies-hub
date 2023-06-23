'use client';
import React, { useState, useEffect, useMemo, ChangeEvent, FC } from 'react';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { cyan, grey, blueGrey } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';
import { useTheme } from 'next-themes';

interface CustomPaginationProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
}

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

const CustomPagination: FC<CustomPaginationProps> = ({ page, setPage }) => {
  // this mounted state is added for next js hydration error
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  // Update the paignation buttons only if the theme changes
  const darkModeTheme = useMemo(
    () => createTheme(getDesignTokens(theme as 'light' | 'dark')),
    [theme]
  );
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  const handleChange = (e: ChangeEvent<any>) => {
    setPage(+e.target.textContent);
  };
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
