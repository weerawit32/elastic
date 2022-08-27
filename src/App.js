// import logo from './logo.svg';
import "./App.css";
import NavScrollExample from "./section/navBar";
import SearchObserve from "./section/SearchObserve";
import AllCustomer from "./section/AllCustomer";
import MoreAbout from "./section/MoreAbout";
import Product from "./section/Product";
// import Products from "./section/Products";
import Advantage from "./section/Adventage";
import Footer from "./section/Footer/Footer";
import ProductStart from "./section/ProductStart";
// import navBars2 from "./section/navBars";

function App() {
  return (
    <div className="App">
      <NavScrollExample />
      <SearchObserve />
      <AllCustomer />
      <Product />
      <ProductStart />
      <Advantage />
      <MoreAbout />
      <Footer />
    </div>
  );
}

export default App;

// function ContainerInsideExample() {
//   return (
//     <Navbar expand="lg" variant="light" bg="light">
//       <Container>
//         <Navbar.Brand href="#">Navbar</Navbar.Brand>
//       </Container>
//     </Navbar>
//   );
// }

// export default ContainerInsideExample;
