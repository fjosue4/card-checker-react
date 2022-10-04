import './App.css';
import { CardModule } from './components/CardModule/CardModule';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HowItWorks } from './components/HowItWorks/HowItWorks';

function App() {
  return (
    <div>
      <Header />
      <h1>Welcome to the card checker tool!</h1>
      <CardModule />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;