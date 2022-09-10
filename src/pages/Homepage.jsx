import {
  Badge,
  Box,
  Stack,
  VisuallyHidden,
  chakra,
  Code,
  Heading,
  List,
  ListItem,
  OrderedList,
  Tag,
  Text,
  Flex,
  Center,
  Grid,
  GridItem,
  Container,
  Image,
  Button, 
  Spacer,
  Icon,
  HStack

} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import React from 'react'
//import {Logo} from './Logo'
//import { Copyright } from './Copyright.tsx'
//import { SocialMediaLinks } from './SocialMediaLinks'
import { Layout } from '../components/Layout'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import clockWeight from '../images/clock_weight.png'
import gymPartner from '../images/partner.png'
import gmap from '../images/gmap.png'


export default function Homepage() {
  const {currentUser} = useAuth()
  return (
    <Layout>
      <Center >
        <Heading>
          <chakra.span
            fontWeight='blue'
            fontStyle='italic'
            fontSize='9xl'
            color='pink.300'
            mx={2}
          >
            LiftWithMe
          </chakra.span>
        </Heading>
      </Center>
      {/* maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" */}
      {/* <Badge fontSize="md" colorScheme='messenger' mx={2} textTransform='capitalize' borderRadius='md'>Hey: {`${currentUser}`}</Badge> */}
      <Grid gap={4} padding='5'>
        <GridItem colSpan={2}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box m='1' as="a">
              <HStack>
                <Stack align='center'>
                  <Image src={gmap} htmlHeight={400}/>
                  <Heading m="2" mb="0" as="h4" size="md">Choose a Gym</Heading>
                  <Text align='center' fontWeight='light'>Select the closest gym near you based on your location</Text> 
                </Stack>
              </HStack>

              {/* <Flex>
                <Spacer />
                <Button variant='solid' colorScheme = 'blue' size ='sm'>
                  Check it Out
                </Button>
              </Flex> */}
            </Box>
          </Box>
        </GridItem>
        <GridItem colStart={4} colEnd={6} >
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box m="1" as="a">
              <HStack>
                <Stack align='center'>
                  <Image htmlWidth={200} align='center' src={clockWeight} marginTop='3' marginBottom={2}/>
                  <Heading m="2" mb="0" as="h4" size="md">Enter Time and Workout</Heading>
                  <Text align='center' fontWeight='light'>Select your approximate arrival time and what body parts you will be <Badge ml='1' colorScheme='yellow'>hitting!</Badge></Text> 
                </Stack>
              </HStack>
            </Box>
          </Box>
        </GridItem>
        <GridItem colStart={7} colEnd={9}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box m="1" as="a">
              <HStack>
                <Stack align='center'>
                  <Image  align='center' src={gymPartner} marginTop='3' marginBottom={2}/>
                  <Heading m="2" mb="0" as="h4" size="md">Match with a Gym Buddy</Heading>
                  <Text align='center' fontWeight='light'>Select someone to lift with based on your query filters</Text> 
                </Stack>
              </HStack>
            </Box>
          </Box>
        </GridItem>
      </Grid>
      <Container>
        During <Badge variant='outline' ml='1' colorScheme='red'>COVID</Badge> many people became invested in working out. But due to wearing masks and social distancing
        it became difficult to workout out with a partner. One of the best things about working out is interacting with others at the gym and lifting with your friends. 
        Having someone to spot you, to push you, and motivate you are key in order to not only maximize results but to have a good time. 
        Additionally, our lives are busy and sometimes our schedules with our friends don't line up: can't workout together. 
        You know that big guy at the gym that you stare at during your sets? What if you could lift with him, cool right. 
        That's what this platform is about, a way to connect gym enthusiasts to have great workouts by decreasing anxiety and increasing gains in the hour or so you spend in the gym. 
      </Container>
      
    </Layout>
  )
}
