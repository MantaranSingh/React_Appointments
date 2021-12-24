import { createTheme, ThemeProvider } from '@mui/material/styles';
import Home from './components/Home';
import AppBar from './components/AppBar';
import { Provider } from 'react-redux';
import store from './store';

const theme = createTheme({
  palette: {
    primary: {
      main: "#bed6e9"
    },
    secondary: {
      main: "#ed7cad"
    },
    text: {
      title: '#529191',
      grey: '#8d8d8d',
    }
  },
  shape: {
    borderRadius: 10,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar />
      <Provider store={store}>
        <Home />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
