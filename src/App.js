import { ThemeProvider } from 'styled-components';
import Cta from './components/Cta/Cta';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Shortener from './components/Shortener/Shortener';
import ShortenerProvider from './context/ShortenerContext';
import GlobalStyle from './theme/GlobalStyles';
import { theme } from './theme/mainTheme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Intro />
      <ShortenerProvider>
        <Shortener />
      </ShortenerProvider>
      <Features />
      <Cta />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
