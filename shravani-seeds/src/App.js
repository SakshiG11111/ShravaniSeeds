import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./components/ProductPage/ProductPage";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import FixedContactButtons from "./components/FixedContactButtons/FixedContactButtons";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage productType='Wheat Seeds' />} />
        <Route />
      </Routes>
      <FixedContactButtons />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
