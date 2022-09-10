import { Text, TextProps, Badge } from '@chakra-ui/react'
import * as React from 'react'

export const Copyright = (props) => (
  <Badge fontSize="sm" colorScheme='teal' mx={2} textTransform='capitalize' borderRadius='md' {...props}>
    {new Date().getFullYear()} LiftWithMe, Inc. Created by Ruhan Ponnada.
  </Badge>
)

