import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';

const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const CustomTheme: React.FC = ({
  children,
}): JSX.Element => {
  return (
    <ThemeProvider theme={darkTheme}>
      { children }
    </ThemeProvider>  
  );
}
