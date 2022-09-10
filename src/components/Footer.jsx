import { Box, Stack, StackDivider, Image } from '@chakra-ui/react'
import * as React from 'react'
import { Copyright } from './Copyright'
import { Logo } from './Logo'
import { SocialMediaLinks } from './SocialMediaLinks'
import Dumbbell from '../images/dumbbell.png'

export function Footer() {
    return (
        <Box
            as="footer"
            role="contentinfo"
            mx="auto"
            maxW="7xl"
            py="12"
            px={{
            base: '4',
            md: '8',
            }}
        >
            <Stack spacing="10" divider={<StackDivider />}>
                <Stack
                    direction={{
                    base: 'column',
                    lg: 'row',
                    }}
                    spacing={{
                    base: '10',
                    lg: '28',
                    }}
                >
                    {/* <Image boxSize="100px" src={Dumbbell} /> */}
                </Stack>
                <Stack
                    direction={{
                    base: 'column-reverse',
                    md: 'row',
                    }}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Copyright />
                    <SocialMediaLinks />
                </Stack>
            </Stack>
        </Box>
    )
}
   
