import { Box, useColorModeValue } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/navigation/TopBar'
export default function Dashboard() {
    return (
        <>
            <TopBar />
            <Box bg={useColorModeValue('gray.500', 'gray.700')} mt={2} height={'90vh'} >
                <Outlet />
            </Box>


        </>
    )
}
