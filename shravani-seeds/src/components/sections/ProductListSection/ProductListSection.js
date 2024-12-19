import {
  Box,
  Heading,
  Grid,
  Button,
  Flex,
  useDisclosure,
} from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import wheatvaiety from "../../../assets/WheatSeedVarieties.json";
import ProductModal from "../../ProductModal/ProductModal";
import soyabeanseedvariety from "../../../assets/SoyabeanSeedVarieties.json";

import React, { useState } from "react"; // Add useState
import ProductCard from "../../ProductCard/ProductCard";
// Other imports remain the same


export default function ProductListSection() {
  return (
    <Box id="products" py="3rem">
      <Flex justifyContent="center">
        <Heading fontSize={"3xl"} fontFamily={"body"} mb={4} textAlign="center" fontWeight={"600"}>
          Our Products
        </Heading>
      </Flex>
      <ProductList />
    </Box>
  );
}

function ProductList() {
  let varieties = [
    ...wheatvaiety.slice(0, 3),
    ...soyabeanseedvariety.slice(0, 3),
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const handleClickProduct = () => {
    navigate("/product");
    window.scrollTo(0, 0);
  };
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleReadMore = (product) => {
    setSelectedProduct(product); // Store selected product details
    onOpen(); // Open the modal
  };

  return (
    <Flex justifyContent={'center'}>
      <Box flexDirection="column" width="85%">
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)"
          }}
          gap={6}
          width="100%"
        >
          {varieties.map((variety) => (<ProductCard key={variety.type+'-'+variety.id} product={variety} handleReadMore={handleReadMore} />))}
        </Grid>
        <ProductModal
          isOpen={isOpen}
          onClose={onClose}
          product={selectedProduct}
        />

        <Flex justifyContent="center">
          <Button
            colorScheme="green"
            variant="solid"
            size="md"
            onClick={handleClickProduct}
          >
            See More Products
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
