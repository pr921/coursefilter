//import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './FilterableProductTable';
import { PRODUCTS } from "./FilterableProductTable";

function App() {
  return (
    <div className="App">
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

export default App;
