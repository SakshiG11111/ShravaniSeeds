import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Table,
  Tbody,
  Tr,
  Td,
  Icon,
} from "@chakra-ui/react";
import {
  FiTrendingUp,
  FiClock,
  FiDroplet,
  FiMaximize,
  FiBarChart2,
  FiSun,
  FiCloudRain,
  FiBarChart,
} from "react-icons/fi";
import { FaSeedling } from 'react-icons/fa';


export default function ProductModal({ isOpen, onClose, product }) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "xs", sm: "md", md: "lg", lg: "xl" }}
    >
      <ModalOverlay />
      <ModalContent marginTop={(product && product.type==='Wheat Seed'?"2rem":"4rem")}>
        <ModalHeader>Product Details</ModalHeader>
        <ModalCloseButton />
        {(product && product.type==='Wheat Seed'?<ModalBody>
          {product && ( // Conditional rendering to check if product is not null
            <Table variant="simple" size={{ base: "sm", md: "md" }}>
              <Tbody>
                <Tr>
                  <Td fontWeight="bold" width={{ base: "50%", md: "45%" }}>
                    <Icon as={FaSeedling } mr={2} /> Product Name
                  </Td>
                  <Td width={{ base: "50%", md: "60%" }}>{product.name}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" width={{ base: "50%", md: "45%" }}>
                    <Icon as={FiTrendingUp} mr={2} /> Average Yield (q/ha)
                  </Td>
                  <Td width={{ base: "50%", md: "60%" }}>
                    {product.average_yield_qha}
                  </Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" width={{ base: "50%", md: "45%" }}>
                    <Icon as={FiClock} mr={2} /> Sowing Time
                  </Td>
                  <Td width={{ base: "50%", md: "60%" }}>
                    {product.sowing_time}
                  </Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" width={{ base: "50%", md: "45%" }}>
                    <Icon as={FiDroplet} mr={2} /> Seed Rate (kg/ha)
                  </Td>
                  <Td width={{ base: "50%", md: "60%" }}>
                    {product.seed_rate_kg_ha}
                  </Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" width={{ base: "50%", md: "45%" }}>
                    <Icon as={FiMaximize} mr={2} /> Row Spacing (cm)
                  </Td>
                  <Td width={{ base: "50%", md: "60%" }}>
                    {product.row_spacing_cm}
                  </Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" width={{ base: "50%", md: "45%" }}>
                    <Icon as={FiCloudRain} mr={2} /> No of Irrigation
                  </Td>
                  <Td width={{ base: "50%", md: "60%" }}>
                    {product.irrigation_count}
                  </Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" width={{ base: "50%", md: "45%" }}>
                    <Icon as={FiBarChart2} mr={2} /> Plant Height (cm)
                  </Td>
                  <Td width={{ base: "50%", md: "60%" }}>
                    {product.plant_height_cm}
                  </Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" width={{ base: "50%", md: "45%" }}>
                    <Icon as={FiSun} mr={2} /> Days of Maturity
                  </Td>
                  <Td width={{ base: "50%", md: "60%" }}>
                    {product.days_of_maturity}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          )}
        </ModalBody>
        :<ModalBody>
          {product && ( // Conditional rendering to check if product is not null
            <Table variant="simple" size={{ base: "sm", md: "md" }}>
              <Tbody>
                <Tr>
                  <Td fontWeight="bold" width={{ base: "50%", md: "45%" }}>
                    <Icon as={FaSeedling } mr={2} /> Product Name
                  </Td>
                  <Td width={{ base: "50%", md: "60%" }}>{product.name}</Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" width={{ base: "50%", md: "45%" }}>
                    <Icon as={FiClock} mr={2} /> Duration
                  </Td>
                  <Td width={{ base: "50%", md: "60%" }}>
                    {product.duration}
                  </Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" width={{ base: "50%", md: "45%" }}>
                    <Icon as={FiBarChart} mr={2} /> Yield
                  </Td>
                  <Td width={{ base: "50%", md: "60%" }}>
                    {product.yield}
                  </Td>
                </Tr>
                <Tr>
                  <Td fontWeight="bold" width={{ base: "50%", md: "45%" }}>
                    <Icon as={FiDroplet} mr={2} /> Seed Rate (kg/ha)
                  </Td>
                  <Td width={{ base: "50%", md: "60%" }}>
                    {product.seed_rate}
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          )}
        </ModalBody>)}
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
