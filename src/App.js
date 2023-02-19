import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Footer from './components/Footer';
import Main from './pages/Main';
import GlobalStyle from './styles/GlobalStyle';
import { Theme } from './styles/Theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </ThemeProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
