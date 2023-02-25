import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ChannelService from './components/ChannelTalk/ChannelService';
import FloatingButton from './components/ChannelTalk/FloatingButton';
import Header from './components/Header/Header';
import Main from './pages/Main';
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
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <FloatingButton />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
