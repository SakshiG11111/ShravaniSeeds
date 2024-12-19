import ProductModal from "../ProductModal/ProductModal";
import wheatSeedVarieties from "../../assets/WheatSeedVarieties.json";
import soyabeanSeedVarieties from "../../assets/SoyabeanSeedVarieties.json";
import {
  useDisclosure,
  Input,
  Box,
  Grid,
} from "@chakra-ui/react";
import { useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList({ productType }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State to manage search input

  const handleReadMore = (product) => {
    setSelectedProduct(product); // Store selected product details
    onOpen(); // Open the modal
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase()); // Update search query state
  };

  const filteredVarieties = (
    productType === "Soyabean Seeds"
      ? soyabeanSeedVarieties
      : wheatSeedVarieties
  ).filter(
    (variety) => variety.name.toLowerCase().includes(searchQuery) // Filter varieties based on search query
  );

  return (
    <>
      <Box flexDirection="column" width="100%">
        {/* Search Input */}
        <Box>
          <Input
            placeholder="Search seeds..."
            value={searchQuery}
            onChange={handleSearchChange}
            size="lg"
          />
        </Box>

        {/* Product Grid */}
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
          {filteredVarieties.map((variety) => (<ProductCard key={variety.id} product={variety} handleReadMore={handleReadMore} />))}
        </Grid>
        <ProductModal
          isOpen={isOpen}
          onClose={onClose}
          product={selectedProduct}
        />
      </Box>
    </>
  );
}
