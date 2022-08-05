import './App.css';
import Header from './Header';

const navItems = [
	{id: 1, title: 'Pricing'},
	{id: 2, title: 'Product'},
	{id: 3, title: 'About Us'},
	{id: 4, title: 'Careers'},
	{id: 5, title: 'Community'}
];

function App() {
  return (
    <div className="App">
      <Header navItems={ navItems } />
    </div>
  );
}

export default App;
