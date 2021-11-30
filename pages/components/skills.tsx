import {
  Box,
  Text,
  Stack,
  List,
  Center,
  Grid,
  ListItem,
  ListIcon,
  Progress,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaReact, FaHtml5, FaGit, FaCss3, FaJs, FaBootstrap } from 'react-icons/fa';
import { SiChakraui, SiNextdotjs, SiNodedotjs } from 'react-icons/si';

export default function SkillsUp() {
  return (
    <Center py={10}>
      <Box
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Stack
          textAlign={'center'}
          p={6}
          color={useColorModeValue('gray.800', 'white')}
          align={'center'}>
          <Stack direction={'row'} align={'center'} justify={'center'}>
            <Text fontSize={'3xl'} fontWeight={'500'}>
              Professional
            </Text>
          </Stack>
        </Stack>
        <Box bg={useColorModeValue('gray.50', 'gray.900')} px={6} py={10}>
          <List spacing={3}>
            <ListItem>
              <Stack direction="row" align={'center'} justify={'center'}>
                <ListIcon as={FaGit} color="black.400" fontSize="2xl" />
                <Progress colorScheme="green" size="sm" value={90} width="100%" />
              </Stack>
            </ListItem>
            <ListItem>
              <Stack direction="row" align={'center'} justify={'center'}>
                <ListIcon as={FaHtml5} color="red.400" fontSize="2xl" />
                <Progress colorScheme="green" size="sm" value={95} width="100%" />
              </Stack>
            </ListItem>
            <ListItem>
              <Stack direction="row" align={'center'} justify={'center'}>
                <ListIcon as={FaCss3} color="blue.400" fontSize="2xl" />
                <Progress colorScheme="green" size="sm" value={80} width="100%" />
              </Stack>
            </ListItem>
            <ListItem>
              <Stack direction="row" align={'center'} justify={'center'}>
                <ListIcon as={FaBootstrap} color="purple.500" fontSize="2xl" />
                <Progress colorScheme="green" size="sm" value={40} width="100%" />
              </Stack>
            </ListItem>
            <ListItem>
              <Stack direction="row" align={'center'} justify={'center'}>
                <ListIcon as={FaJs} color="yellow.400" fontSize="2xl" />
                <Progress colorScheme="green" size="sm" value={50} width="100%" />
              </Stack>
            </ListItem>
            <ListItem>
              <Stack direction="row" align={'center'} justify={'center'}>
                <ListIcon as={FaReact} color="blue.400" fontSize="2xl" />
                <Progress colorScheme="green" size="sm" value={40} width="100%" />
              </Stack>
            </ListItem>
            <ListItem>
              <Stack direction="row" align={'center'} justify={'center'}>
                <ListIcon as={SiNodedotjs} color="green.400" fontSize="2xl" />
                <Progress colorScheme="green" size="sm" value={40} width="100%" />
              </Stack>
            </ListItem>
            <ListItem>
              <Stack direction="row" align={'center'} justify={'center'}>
                <ListIcon as={SiNextdotjs} color="black.600" fontSize="2xl" />
                <Progress colorScheme="green" size="sm" value={40} width="100%" />
              </Stack>
            </ListItem>
            <ListItem>
              <Stack direction="row" align={'center'} justify={'center'}>
                <ListIcon as={SiChakraui} color="green.400" fontSize="2xl" />
                <Progress colorScheme="green" size="sm" value={40} width="100%" />
              </Stack>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Center>
  );
}
