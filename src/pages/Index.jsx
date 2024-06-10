import { Container, VStack, Heading, Input, Button, List, ListItem, Text, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.md" p={4}>
      <VStack spacing={8}>
        {/* Header */}
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Todo App
        </Heading>

        {/* Main Section */}
        <Box w="100%">
          <VStack spacing={4}>
            <Input placeholder="Add a new todo" size="lg" />
            <Button colorScheme="teal" size="lg" w="100%">
              Add Todo
            </Button>
            <List spacing={3} w="100%">
              <ListItem p={4} shadow="md" borderWidth="1px" borderRadius="md">
                Sample Todo 1
              </ListItem>
              <ListItem p={4} shadow="md" borderWidth="1px" borderRadius="md">
                Sample Todo 2
              </ListItem>
            </List>
          </VStack>
        </Box>

        {/* Footer */}
        <Box as="footer" w="100%" textAlign="center" py={4} borderTopWidth="1px">
          <Text>© 2023 Todo App. All rights reserved.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;