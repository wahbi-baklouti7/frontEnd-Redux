import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import ListArticles from "./components/article/ListArticles";
import Cart from "./components/cart/Cart";
import NavScroll from "./components/NavScroll";
import ListCategories from "./components/category/ListCategories";

function App() {


  return (
    <BrowserRouter>
      <NavScroll />
    <Routes>
        <Route path="/" element={<ListArticles />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<ListCategories/>}/>
    </Routes>
  </BrowserRouter>

  )
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<ListArticles />} />
  //   </Routes>
  // </BrowserRouter>;
  // return (
  //   <div className="App">
  //     <ListArticles />
  //   </div>
  // );
}

export default App;
