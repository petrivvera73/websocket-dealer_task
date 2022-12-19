import { Divider, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

type Props = {
    label: string;
    values: {
        total: number;
        free: number;
        reserved: number;
        
    }
}

const TakerBalance = (props: Props) => {
  return (
    <VStack minW={100} spacing={0} p={1} borderRadius='lg' bgColor='gray.100'>
        <Text fontSize='xs'>{props.label}</Text>
        <Flex w='full' direction='column'>
        <HStack justify='space-between' color='green.500' w='full' spacing={3}>
            <Text fontSize='xs'>free</Text>
            <Text fontWeight='bold' fontSize='xs'>{props.values.free.toFixed(3)}</Text>
        </HStack>
        <Divider borderColor='gray.300'/>
        <HStack justify='space-between' color='orange.400' w='full' spacing={3}>
            <Text fontSize='xs'>reserv.</Text>
            <Text fontWeight='bold' fontSize='xs'>{props.values.reserved.toFixed(3)}</Text>
        </HStack>
        <Divider borderColor='gray.300'/>
        <HStack justify='space-between' color='gray.600' w='full' spacing={3}>
            <Text fontSize='xs'>total</Text>
            <Text fontWeight='bold' fontSize='xs'>{props.values.total.toFixed(3)}</Text>
        </HStack>
        </Flex>
    </VStack>
  )
}

export default TakerBalance