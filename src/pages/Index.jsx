import React, { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, IconButton, List, ListItem } from "@chakra-ui/react";
import { FaThumbsUp, FaEye, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const [channels, setChannels] = useState([]);
  const [channelName, setChannelName] = useState("");
  const [channelUrl, setChannelUrl] = useState("");

  const handleAddChannel = () => {
    if (channelName && channelUrl) {
      setChannels([...channels, { name: channelName, url: channelUrl }]);
      setChannelName("");
      setChannelUrl("");
    }
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">YouTube Channel Exchange</Text>
        <HStack spacing={2} width="100%">
          <Input placeholder="Channel Name" value={channelName} onChange={(e) => setChannelName(e.target.value)} />
          <Input placeholder="Channel URL" value={channelUrl} onChange={(e) => setChannelUrl(e.target.value)} />
          <Button onClick={handleAddChannel}>Add Channel</Button>
        </HStack>
        <List spacing={3} width="100%">
          {channels.map((channel, index) => (
            <ListItem key={index} p={4} borderWidth={1} borderRadius="md" width="100%">
              <HStack justifyContent="space-between">
                <Box>
                  <Text fontWeight="bold">{channel.name}</Text>
                  <Text>{channel.url}</Text>
                </Box>
                <HStack spacing={2}>
                  <IconButton aria-label="Like" icon={<FaThumbsUp />} />
                  <IconButton aria-label="View" icon={<FaEye />} />
                  <IconButton aria-label="Subscribe" icon={<FaUserPlus />} />
                </HStack>
              </HStack>
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
