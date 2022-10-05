import './App.css';
import './responsive.css';
import { CardModule } from './components/CardModule/CardModule';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HowItWorks } from './components/HowItWorks/HowItWorks';
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark")
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div className='App' id={theme}>
      <Header onClick={toggleTheme}/>
      <h1>Welcome to the card checker tool!</h1>
      <CardModule />
      <HowItWorks />
      <Footer />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;