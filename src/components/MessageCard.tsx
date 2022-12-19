import React, { FC } from 'react'
import { Badge, Box, Card, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { DealerSignal } from '../../types/DealerSignal';
import { v4 as uuidv4 } from 'uuid';
import TakerBalance from './TakerBalance';


type Props = {
    message: DealerSignal
}

const MessageCard: FC<Props> = ({ message }) => {
  return (
    <Card minW={600} align='start' gap={4} as={VStack} p={2} bgColor='gray.200'>
			<Flex gap={4}>
				<VStack align='start'>
					<Text fontSize='xl'>Maker</Text>
					<Badge>{ message.data.balances.maker.name }</Badge>
					<Badge>
						{new Date(message.data.balances.maker._timestamp).toLocaleDateString()}
					</Badge>
				</VStack>
				<VStack align='start'>
					<Text fontSize='xl'>Balances</Text>
					<HStack align='start'>
					{Object.entries(message.data.balances.maker.balances).map(([key, value]) => {
						const id = uuidv4()
						return (
							<VStack minW={100} spacing={0} p={1} borderRadius='lg' bgColor='gray.100'>
								<Text fontSize='xs'>{key}</Text>
								<Divider/>
								<Text fontSize='lg'>{value}</Text>
							</VStack>
						)
					})}
					</HStack>
				</VStack>
			</Flex>
			<Divider borderColor='gray.300' />
			<Flex gap={4}>
				<VStack align='start'>
					<Text fontSize='xl'>Taker</Text>
					<Badge>{ message.data.balances.taker.name }</Badge>
					<Badge>{new Date(message.data.balances.taker._timestamp).toLocaleDateString()}</Badge>
				</VStack>
				<VStack align='start'>
					<Text fontSize='xl'>Balances</Text>
					<VStack align='start'>
						<Text fontSize='sm'>Exchange</Text>
						<HStack>
							{Object.entries(message.data.balances.taker.balances.exchange).map(([key, value]) => {
								const id = uuidv4()
									return <TakerBalance key={id} label={key} values={value}/>
							})}
						</HStack>
					</VStack>
					<VStack align='start'>
						<Text fontSize='sm'>Margin</Text>
						<HStack>
							{Object.entries(message.data.balances.taker.balances.margin).map(([key, value]) => {
								const id = uuidv4()
									return <TakerBalance key={id} label={key} values={value}/>
							})}
						</HStack>
					</VStack>
				</VStack>
			</Flex>
		</Card>
  )
}

export default MessageCard