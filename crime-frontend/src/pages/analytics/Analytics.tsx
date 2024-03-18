// import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { Box, Flex, Grid, GridItem, IconButton, Input, InputGroup, InputLeftElement, Spacer, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import GraphComponent from "../../components/graph/ExampleGraph";
import RelationSidebar from "./components/Sidebar";
// import { useRelation } from "./services/api";
export default function Analytics() {

    // const relation = useRelation()
    // console.log(relation?.data)





    const imageWrapperRef = useRef(null);

    return (
        // <Box
        //     ref={imageWrapperRef}
        //     position="relative"
        //     flex={'flex-start'}
        //     // bgColor={'red'}
        //     h="full"

        // >
        <Grid
            templateAreas={`
            "searchbar sidebar" 
            "canvas sidebar"`}
            //   gridTemplateRows={'50px 1fr 30px'}
            //   gridTemplateColumns={'150px 1fr'}
            // h='200px'
            gap='0.5'
            // h="full"

            // color='blackAlpha.700'
            fontWeight='bold'
        >
   
            <GridItem area={'searchbar'}>
                <InputGroup m='0.5vw'>
                    <InputLeftElement
                        pointerEvents='none'
                        // fontSize='1.2em'
                    >
                        <Search2Icon />
                    </InputLeftElement>
                    <Input placeholder='Search...'
                        maxWidth={'50%'}
                    />
                </InputGroup>
            </GridItem>
            {/* <Flex color='white' height={'100%'} > */}
            <GridItem area={'canvas'}>
                <Box
                    bg={useColorModeValue('white', 'gray.900')}
                // height={'100%'}
                >
                    <GraphComponent />
                </Box>
            </GridItem>
            <GridItem area={'sidebar'}>
                <RelationSidebar />
            </GridItem>

            {/* </Flex> */}
        </Grid>
        // </Box>
    )
}




