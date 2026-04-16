import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { PortfolioAssistant } from "./components/PortfolioAssistant";

function App() {
  const [language, setLanguage] = useState("en");
  const skipToMain = language === "vi" ? "Bỏ qua đến nội dung chính" : "Skip to main content";

  return (
    <div className="App">
      <a className="skip-link" href="#main-content">{skipToMain}</a>
      <NavBar language={language} setLanguage={setLanguage} />
      <main id="main-content">
        <Banner language={language} />
        <Skills language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>
      <Footer language={language} />
      <PortfolioAssistant language={language} />
    </div>
  );
}

export default App;
