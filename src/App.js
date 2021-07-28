import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './styles';
import { Item } from './components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
        <Item />
    </ThemeProvider>
  );
}

export default App;
