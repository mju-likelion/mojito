import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ChannelService from './components/ChannelTalk/ChannelService';
import FloatingButton from './components/ChannelTalk/FloatingButton';
import Footer from './components/Footer/Footer';
import Main from './pages/Main';
import Networking from './pages/Networking';
import GlobalStyle from './styles/GlobalStyle';
import { Theme } from './styles/Theme';

function App() {
  ChannelService.boot({
    pluginKey: process.env.REACT_APP_CHANNEL_TALK, // fill your plugin key
    customLauncherSelector: '#custom-button', // 커스텀 버튼
    hideChannelButtonOnBoot: true,
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/networking" element={<Networking />} />
        </Routes>
        <FloatingButton />
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
