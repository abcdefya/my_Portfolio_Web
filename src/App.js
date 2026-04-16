import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
      <NavBar language={language} setLanguage={setLanguage} />
      <Banner language={language} />
      <Skills language={language} />
      <Projects language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </div>
  );
}

export default App;
