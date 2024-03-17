// import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Spacer, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import GraphComponent from "../../components/graph/ExampleGraph";
export default function Analytics() {


    const imageWrapperRef = useRef(null);

    return (
        <Box
            ref={imageWrapperRef}
            position="relative"
            flex={'flex-start'}
            // bgColor={'red'}
            h="full"

        >
            <Flex color='white' height={'100%'}>

                <Box
                    bg={useColorModeValue('white', 'gray.900')}
                >



                    <GraphComponent />
                </Box>
                <SidebarWithHeader />
            </Flex>

        </Box>
    )
}



const SidebarWithHeader = () => {
    const { isOpen, onToggle } = useDisclosure()



    return (
        <>
            {/* <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}> */}

            <Spacer />

            <Flex direction="row-reverse" height="100%">

                <Box
                    id='real-sidebar'
                    transition="0.11s ease"
                    bg={useColorModeValue('white', 'gray.900')}
                    borderRight="1px"
                    borderRightColor={useColorModeValue('gray.200', 'gray.700')}
                    w={{ base: 'full', md: isOpen ? '30vw' : 10 }}

                    // style={{display:isOpen?'':'none'}}
                    // pos="fixed"
                    height="100%"
                >
                    {/* <Flex h="20" alignItems="center" mx="8" justifyContent="space-between"> */}
                    <IconButton
                        aria-label={""}
                        onClick={onToggle}
                        icon={!isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />
                        } />
                    {/* <CloseButton display={{ base: 'flex', md: 'flex' }}  /> */}
                    {/* </Flex> */}
                    {[].map((link: any) => (
                        <Box key={link.name} >
                            {link.name}
                        </Box>
                    ))}
                </Box>
            </Flex>
        </ >
    )
}

