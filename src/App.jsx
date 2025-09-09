import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
