import React from 'react';
import Navigation from './components/Navbar';
import InputLineForSearch from './components/Input/Input';



const App: React.FC = () => {
  return (
    <div>
    <Navigation />
    <InputLineForSearch />
    </div>
  );
}

export default App;
