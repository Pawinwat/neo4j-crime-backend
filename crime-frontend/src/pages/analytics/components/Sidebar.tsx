import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons"
import { useDisclosure, Spacer, Flex, useColorModeValue, IconButton, Box, List, ListItem, ListIcon, Divider,Icon  } from "@chakra-ui/react"
import { useRelation } from "../services/api"
import { 
    MdSettings ,
     MdLocalPolice,
     MdEventNote,
     MdCalendarMonth,
     MdFeedback,
     MdPlace,
     MdCategory,
     MdCalendarToday
    } from 'react-icons/md'

const icon = {
    'Force':MdLocalPolice,
    'Case':MdFeedback,
    'Month':MdCalendarMonth,
    'Place':MdPlace,
    'Category':MdCategory,
    'Year':MdCalendarToday
}

const RelationSidebar = () => {
    const { isOpen, onToggle } = useDisclosure()
    const { data } = useRelation()


    return (
        <>
            {/* <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}> */}

            <Spacer />

            {/* <Flex  height="100%"> */}

                <Box
                    id='real-sidebar'
                    transition="0.11s ease"
                    bg={useColorModeValue('white', 'gray.900')}
                    borderRight="1px"
                    borderRightColor={useColorModeValue('gray.200', 'gray.700')}
                    w={{ base: 'full', md: isOpen ? '30vw' : 10 }}
                    // height="87vh"
                    height={'100%'}
                >
                    <IconButton
                        aria-label={""}
                        onClick={onToggle}
                        icon={!isOpen ? <ArrowLeftIcon /> : <ArrowRightIcon />
                        } />
    
                    {isOpen&& <List spacing={3}>
                        {data?.map((rec: any) => (
                            <>
                            <ListItem key={rec._fields} >
                                {/* <ListIcon as={MdCheckCircle} color='green.500' /> */}
                                <ListIcon as={icon[rec._fields[0][0] as 'Force'] || MdSettings} color='green.500' />

                                {rec._fields[0][0]}
                                -
                                ({rec._fields[1]})
                                -
                                {rec._fields[2][0]}

                                <ListIcon as={icon[rec._fields[2][0] as 'Force'] || MdSettings} color='green.500' />

                            </ListItem>
                            <Divider/>
                            </>
                        ))}
                    </List>}
                </Box>
            {/* </Flex> */}
        </ >
    )
}


export default RelationSidebar