import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import ChannelService from './components/ChannelTalk/ChannelService';
import FloatingButton from './components/ChannelTalk/FloatingButton';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import useRouteTracker from './hooks/useRouteTracker';
import Main from './pages/Main';
import Networking from './pages/Networking';
import NotFoundPage from './pages/NotFound';
import GlobalStyle from './styles/GlobalStyle';
import { Theme } from './styles/Theme';

function App() {
  useRouteTracker();
  ChannelService.boot({
    pluginKey: process.env.REACT_APP_CHANNEL_TALK, // fill your plugin key
    customLauncherSelector: '#custom-button', // 커스텀 버튼
    hideChannelButtonOnBoot: true,
  });
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/networking" element={<Networking />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <FloatingButton />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
