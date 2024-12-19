import {
    Box,
    Text,
    Flex,
    useDisclosure,
    CloseButton,
    Icon,
    useColorModeValue,
    Drawer,
    DrawerContent,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
} from "@chakra-ui/react";

import { GiPlantRoots, GiWheat } from "react-icons/gi";

import { useState } from "react";
import ProductList from "../ProductList/ProductList";

export default function ProductView({ productType }) {
    return (
        <>
            <Box display={{ base: "none", md: "block" }} width={"100%"} marginTop={{ base: "18%", sm: "8%", md: "8%", lg: "5%" }}>
                <ProductSidebarView productType={productType} />
            </Box>
            <Box display={{ base: "block", md: "none" }} width={"100%"} marginTop={{ base: "21%", sm: "8%", md: "8%", lg: "5%" }}>
                <ProductTabView selectedProductType={productType} />
            </Box>
        </>
    );
}

const ProductTypes = [
    { name: "Wheat Seeds", icon: GiWheat },
    { name: "Soyabean Seeds", icon: GiPlantRoots },
];



function ProductSidebarView({ productType }) {
    const [currentProductType, setCurrentProductType] = useState(productType);

    const { isOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
            <SidebarContent
                handleProductType={setCurrentProductType}
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
            />
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent
                        handleProductType={setCurrentProductType}
                        onClose={onClose}
                    />
                </DrawerContent>
            </Drawer>
            <Box ml={{ base: 0, md: 60 }} p="4">
                <ProductList productType={currentProductType}></ProductList>
            </Box>
        </Box>
    );
}

const SidebarContent = ({ handleProductType, onClose, ...rest }) => {
    let handleOnClick = (productType) => {
        handleProductType(productType);
        onClose();
    };
    return (
        <Box
            bg={useColorModeValue("white", "gray.900")}
            borderRight="1px"
            borderRightColor={useColorModeValue("gray.200", "gray.700")}
            w={{ base: "full", md: 60 }}
            pos="absolute"
            h="fit-content"
            paddingBlock="20px"
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize={"2xl"} fontFamily={"body"} fontWeight={"500"}>
                    Products
                </Text>
                <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
            </Flex>
            {ProductTypes.map((productType) => (
                <NavItem
                    key={productType.name}
                    icon={productType.icon}
                    onClick={() => handleOnClick(productType.name)}
                >
                    {productType.name}
                </NavItem>
            ))}
        </Box>
    );
};

const NavItem = ({ icon, children, ...rest }) => {
    return (
        <Box
            as="a"
            href="#"
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: "green.400",
                    color: "white",
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: "white",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Box>
    );
};

function ProductTabView({ selectedProductType }) {
    return (
        <Tabs isFitted variant='enclosed' >
            <TabList mb='1em'>
                {ProductTypes.map(productType => (
                    <Tab>
                        <Icon
                            mr="3"
                            fontSize="16"
                            _groupHover={{
                                color: "white",
                            }}
                            as={productType.icon}
                        />
                        <Text fontSize='16px'>{productType.name}</Text>
                    </Tab>
                ))}
            </TabList>
            <TabPanels>
                {ProductTypes.map(productType => (
                    <TabPanel paddingTop='0px'>
                        {/* {productType.name} */}
                        <Box ml={{ base: 0, md: 60 }} padding="0px">
                            <ProductList productType={productType.name}></ProductList>
                        </Box>
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
}