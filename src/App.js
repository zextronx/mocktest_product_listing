import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import ProductList from './components/product-list/ProductList.component';
import ProductDeatils from './components/product-details/ProductDetails.component';

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/product/:id">
            <ProductDeatils />
          </Route>
          <Route path="/">
            <ProductList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
