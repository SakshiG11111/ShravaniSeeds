import { 
    Box,
    Center,
    GridItem,
    Heading,
    Image,
    Link,
    Stack
} from "@chakra-ui/react";

import WheatImage from "../../assets/Shravani_Seeds2.png";
import SoyaImage from "../../assets/Shravani_Seeds1.png";


export default function ProductCard({product,handleReadMore})
{
    return (
        <GridItem>
            <Center py={12}>
                <Box
                    role={"group"}
                    p={6}
                    maxW={"330px"}
                    w={"full"}
                    boxShadow={"2xl"}
                    rounded={"lg"}
                    pos={"relative"}
                    zIndex={1}
                    _hover={{ transform: "scale(1.05)" }}
                >
                    <Box
                        rounded={"lg"}
                        mt={-12}
                        pos={"relative"}
                        height={"390px"}
                        _after={{
                            transition: "all .3s ease",
                            content: '""',
                            w: "full",
                            h: "full",
                            pos: "absolute",
                            top: 5,
                            left: 0,
                            backgroundImage: `url(${product.type === "Wheat Seed" ? WheatImage : SoyaImage
                                })`,
                            filter: "blur(15px)",
                            zIndex: -1,
                        }}
                        _groupHover={{
                            _after: {
                                filter: "blur(20px)",
                            },
                        }}
                    >
                        <Image
                            rounded={"lg"}
                            height={"100%"}
                            width={282}
                            userSelect={"none"}
                            objectFit={"cover"}
                            src={
                                product.type === "Wheat Seed" ? WheatImage : SoyaImage
                            }
                            alt="#"
                        />
                    </Box>
                    <Stack pt={10} align={"center"}>
                        <Heading
                            fontSize={"2xl"}
                            fontFamily={"body"}
                            fontWeight={500}
                        >
                            {product.name}
                        </Heading>
                        <Link
                            textDecoration="underline"
                            onClick={() => handleReadMore(product)}
                        >
                            Show Details
                        </Link>
                    </Stack>
                </Box>
            </Center>
        </GridItem>
    );
}