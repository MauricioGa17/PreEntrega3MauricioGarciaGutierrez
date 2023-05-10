import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

//Pages
import Nosotros from './pages/Nosotros'
import Noticias from './pages/Noticias'
import ItemList from "./components/ItemList/ItemList";
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer";
import CartScreen from "./components/CartScreen/CartScreen";
import Checkout from './components/Checkout/Checkout'

//Context
import { CartProvider } from "./context/CartContext";
import { UIProvider } from "./context/UIContext";

const App = () => {

  return (
    <UIProvider>
      <CartProvider>
        <Routes>
          <Route path={'/'} element={<Layout/>}>
            <Route index element={<ItemListContainer/>}/>
            <Route path={"nosotros"} element={<Nosotros/>}/>
            <Route path={"noticias"} element={<Noticias/>}/>
            <Route path={"category"} element={''}/>
            <Route path={"category/:categoryId"} element={<ItemList/>}/>

            <Route path={"item/:itemId"} element={<ItemDetailContainer/>}/>
            <Route path={"cart"} element={<CartScreen/>}/>
            <Route path={"checkout"} element={<Checkout/>}/>
            <Route path="*" element={(
              <h1>404</h1>
            )}/>
          </Route>
        </Routes>
      </CartProvider>
    </UIProvider>
  );
}

export default App;
