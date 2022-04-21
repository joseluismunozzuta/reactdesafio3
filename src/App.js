import logo from './logo.svg';
import './App.css';
import DaisyNavBar from './components/DaisyNavBar';
import ItemListContainer from './components/ItemListContainer';
import Item from './components/Item';

function App() {

  return (
    <div className="App">
      <DaisyNavBar/>
      <ItemListContainer>
        <Item name='Laptop ASUS' price='1000'/>
        <Item name='Laptop MSI' price='1500'/>
        <Item name='Laptop Lenovo' price='800'/>
        <Item name='Galaxy Tab' price='900'/>
      </ItemListContainer>
    </div>
  );
}

export default App;
