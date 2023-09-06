import { Box, VStack, Text } from '@chakra-ui/react'
import React from 'react'
// import { CheckCircleIcon } from '@chakra-ui/icons';
import { useSearchParams } from 'react-router-dom';

const Paysuccess = () => {

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")
    return (
        // <Box textAlign={'center'}>
        //     <Text>   Yes   </Text>
        //     <VStack>
        //         <Text textColor={'gray.100'} fontSize={'25px'} fontWeight={'bold'}>Your Order is placed, Successfully.</Text>
        //         <Text textColor={'black'} >your payment id is : {referenceNum}</Text>
        //     </VStack>
        // </Box>
        <Box >
            <VStack h="100vh" justifyContent='center' alignItems={"center"}>
                {/* <CheckCircleIcon boxSize={'50px'} color={'green.500'} /> */}

                <Text textColor={'blackAlpha'} textTransform={"uppercase"} fontSize={'25px'} fontWeight={'bold'}>Your Order is placed, Successfully.</Text>
                <Text textColor={'black'} >your payment id is : {referenceNum}</Text>
            </VStack>
        </Box>
    )
}
export default Paysuccess;
