import Template from "./template/Template";
import ProductDetail from "./products/detail/ProductDetail";
import {Switch, Route, withRouter} from "react-router-dom";
import Landing from "./landing/Landing";
import ProductList from "./products/ProductList";
import {ShoppingCartProvider} from "./context/ShoppingCartContext";

function App() {
  return (
      <ShoppingCartProvider>
        <Template>
          <Switch>
            <Route path="/products" exact>
              <ProductList />
            </Route>
            <Route path="/products/:categoryName" exact>
              <ProductList />
            </Route>
            <Route path="/products/view/:productId" component={withRouter(ProductDetail)} exact>
            </Route>
            <Route path="/" exact>
              <Landing />
            </Route>
          </Switch>
        </Template>
      </ShoppingCartProvider>
  );
}

export default App;
