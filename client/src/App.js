// Import Components
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Products } from './components/home/Products';
import { TeamList } from './components/team/TeamList';
import { PortfolioList } from './components/portfolio/PortfolioList';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<PortfolioList />} />
      </Routes>

      <Products />
      <TeamList />
    </div>
  );
}

export default App;
