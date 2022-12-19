import { useEffect, useRef, useState } from "react";
import { DealerSignal } from '../types/DealerSignal'
import { flushSync } from "react-dom";
import { v4 as uuidv4 } from 'uuid';
import { Badge, Box, Card, Center, CircularProgress, Container, Divider, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import MessageCard from "./components/MessageCard";

const SOCKET_ENDPOINT = 
  "wss://dealer-status-reporter-devprem.leverex.io/websocket";

enum WebsocketConnection {
  CONNECTING,
  CONNECTED,
  ERROR
}

export default function App() {
  const [connection, setConnection] = useState<WebsocketConnection>(WebsocketConnection.CONNECTING);
  const [messages, setMessages] = useState<DealerSignal[]>([]);

  useEffect(() => {
    const socket = new WebSocket(SOCKET_ENDPOINT);

    socket.onopen = () => {
      setConnection(WebsocketConnection.CONNECTED)
    };

    socket.onerror = (e) => {
      setConnection(WebsocketConnection.ERROR)
    };

    socket.onmessage = (message) => {
      setMessages([JSON.parse(message.data), ...messages]);
    };

    return () => {
      socket.close();
    }

  }, [messages]);
  return (
    <Container maxW='container.lg' h='full'>
      <Box h='8%' bgColor='gray.400' mb={2} position='sticky' top={0} zIndex={100}>
        <Text fontSize='xl'>WebSocket dealer</Text>
        <Flex gap={2} align='center'>
          {connection == WebsocketConnection.CONNECTING && <Badge color='blue.400'>Connecting...</Badge>}
          {connection == WebsocketConnection.CONNECTED && <Badge color='green.400'>Connected</Badge>}
          {connection == WebsocketConnection.ERROR && <Badge color='red.400'>Error</Badge>}
          {connection != WebsocketConnection.ERROR && <CircularProgress isIndeterminate color="green.400" size={4}/>}
        </Flex>
      </Box>
      <Box h='91%' overflow='auto'>
        {messages.length && (
          <VStack>
            {messages.map((message) => {
              const id = uuidv4();
              return <MessageCard key={id} message={message} />
            })}
          </VStack>
        ) || (
          <Center h='full'>
            <Text fontSize='5xl'>Waiting for messages</Text>
          </Center>
        )}
      </Box>
    </Container>
  );
}
