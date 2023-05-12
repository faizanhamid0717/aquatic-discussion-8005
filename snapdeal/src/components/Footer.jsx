import React from "react";
// import ReactLogo from "../images/fashiondeal.png"
// const Footer = () => {
//   return <div>Footer</div>;
// };

// export default Footer;

import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';



const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export const Footer=()=> {
  return (
    <Box
      p="50px 0px"
      mt="100px"
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box display={'flex'}>
             

              <img width='60px'  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAkFBMVEX/IkH////
              /HT7/CDT%0D /qLH/P1X/Dzf/ACz/k53/AC//4ub/ztL/ADH/GTz/AC3/ACn/+vv/3OD/8fP/5ej/7e//PFX/a3v/l6L/srr/jZn/QVn/ys//
              YHL/0db/VGj/foz/NE//%0D wcf/S2D/K0j/oKr/h5P/rbX/Y3T/uL//19v/SV7/dYP/xcr/ABz/gY7/UmZ2UhlcAAAGJElEQVR4nO2da1fbMAy
              G24QlpOTSlkIZ93JrC2z7//9unLHWDs%0D 1FiiXZnKPn0/gCVt34VV7J2mikKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqiKIqitBMR4DuGLorkhz
              Nnj2XiO45Witf5mIDTZRXqPqanFAF+MCkCDTElCnA8vq%0D l8x9JMOSML8TnMZ7G4JYtwGuj3NF2RhfiS+Q5mT1Fmxe7f0YgswvFZKJuYnM+2D
              /sQ4yeyCE9Sn2EZosePxczj/c/5gizE8zAOm89Ne8p3PydvZBEuwtjE7DO%0D Ledw/NNWWLMRl3PWXhdht2fv+8y5eySIcjwI4bNLdjl3vD5vygi
              zClf/vaXS2W8zpPs2KiilZiH+Krr8uQW72y6RZ8U+yCGfe01Nru6w0i+wVYzy+86wYybO1G%0D JNmFWuyCOeeI6xqm3VpNvGKLMSjvGsB3BR/aou
              52Z980T1ZhJbSeqBc1Rdj0qz8iCzCK4+K8S8ltVmYF56ExLD5x7U/xYiXXxdj0qzkjizCU3+KUR3uk0mzqglZ%0D iD99pafF+eFiTJr15RRyYerLI
              y5vGlZzu39oCA2Ni9JLgCYltZmY9JTQ0Lj0ctjEL42LMWnW4UE0mK0Xxcib3yCsNCunUwwfhkbyu2UxJs1KGo6igcw95G5pq71%0D 9b9LT72xodIiB
              SbOKS7II5dPTbNO+mPX+5Mu+r6HRKQWn5h2D0NC4lVWM5LhrMSbNaj2P8Exk09Oq09m20qxqRRbib0nF6LMpNibNovMWRettvS7Fq3lossvl6uq%0D 
              klabktoUjuXpbv0lhu4BRkmft/EJo5r3YJsb9HsUb9KEpHuARytXbqn4NmINzkLJDWb9yLqQYIIfiCZpJYt6ypOpt7SmpDTjNwrxlHYukp8An5x38eaeI
              srFIvS0HP%0D jjgNAvzlrWRMDQS4GLgLmCKEMUH/sMmAdfOwG1NzZZPM1v+9LQEl87gaRbmLQustEMpruGLAbc1RSP4WxZcaQdSvsMjtOptPWDKxmClHc
              ZBNaaTGxbF4DU0kF1dYBew%0D qUTQBlxph5DhPNAF+IWnOoH/Vs56W4Ht6QK7gBjF4Ky34R1QcJqVNVcJGuFrII7wBijYBcT4cnyGRj7AdIGnp8/9v2zH
              BZehEeMDRLiA8GwJobQ4MJ+yAdzWhEmX4EqL%0D Ih1Um4e3NVWIRiOWetvQuwbgtiZMo9GCIz3NVsMihLuAOSJjYlCMqBgYIKKtqYJfunmij9DhosEaqhh
              RAk7eGK5jZMPvGcDTrKhcb7aTfrbX9FuIyf4PQLiARVym/ZQMyT%0D fGLjog1HtaNo4toyIuoBs5IvVv4tV7130fiWNFXsAFdMO9IM/uAjri3i46T4I+bCi
              6RW+qkB/FrgYhMLPLKo+JoP7KRxFBgB9MNkdELIm/D90NQl7Y0gosxpGWgtTHIOxKp%0D 4MwPkzJUA5aeSW8gk7FC60TFd4ezoittgFWNy9T8pYMWAeNHLfk
              OS7GqxXgmMHTJ7wU6g5LhZTyUqgr8KorCsJLoa5wXYIivBTqxhtXtwnhpVAniKXehvBSqAMzRs+OcMrVc%0D Oil3ubr3XQfMHj5FlQv+g5wSL0N4aXQYfAPH
              yCccjWERc7uRxJeCh2CxH1nwilXeNik3oZyyhUWRqm3wVxwoYVT6m0oL4Wi4JV6G8IpVyh4pb5GRTflCgG31NsQTrmCcyVaX%0D vVgaCxi0dKjB0NDerSJuK
              EhIvU1hA2NC/nRLbKGhpTU15A0NOSk3kbS0BCUehvCKVc9SEq9DeWUq05kpd5GyNAQlvoahFOuOvAzxewTEUPjzuu0a6eGWhgepN6G39DwIvU2h%0D GO7G/E
              j9TZRxGtoeJJ6G15Dw5fU1+geh+WGP6m3YTQ0FoE0FPMZGj6l3obN0PAr9TZMhoZnqa/BYmhQt+U5wWFo+Jf6GgyGRgBSb0PfIL0MQeptqA2NMKTeBjewppdQ
              pN6G1%0D tAIReprIEfWdBKO1NsQGhohSb0N2dhu4VHBcDDjgbqYhyX1NjHJ/5c3PQvxlPlPfOte3d8UAQf4kdpkr3fHDjyvR1mwX9H/RIkT32AigaIoiqIoiq
              IoiqIoiqIoiqIoiqIoi%0D qIoiqIoin/+AuhcdT/6BXTJAAAAAElFTkSuQmCC'/>
        
         <p style={{color:"black",fontSize:'40px',fontWeight:'600',fontFamily:'Cursive',paddingBottom:'5px'}}>fdeal</p> 
        
            </Box>
            <Text fontSize={'sm'}>
              © 2023 Fashiondeal. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About us</Link>
            <Link href={'#'}>Blog</Link>
            <Link href={'#'}>Contact us</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Testimonials</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Link href={'#'}>Help Center</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Legal</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Satus</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
