'use client'
import React from 'react';
import ShravaniSeedsLogo1 from '../../assets/shravani_seeds_logo_3.svg';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  Link,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      position='fixed'
      width={'100%'}
      backgroundColor={'white'}
      zIndex={'1000'}
      top={0}
    >
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.700', 'white')}
        minH={'70px'}
        px={{ base: 5, md: 10 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        align={'center'}
        justify={'space-between'}>

        {/* Mobile Menu Button */}
        <Flex
          flex={{ base: 1, md: 'auto' }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={6} h={6} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        {/* Logo */}
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link href='/'>
            <Image
              height={{ base: '60px', md: '70px' }}
              width={'auto'}
              userSelect={"none"}
              src={ShravaniSeedsLogo1}
              alt='Shravani Seeds'
            />
          </Link>
        </Flex>

        {/* Desktop Navigation */}
        <Flex display={{ base: 'none', md: 'flex' }} ml={10} alignItems="center">
          <DesktopNav />
        </Flex>

        {/* Additional Actions (Optional) */}
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          {/* Example Button, Add Any Call to Action If Needed */}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav toggleMenu={onToggle} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  const navigate = useNavigate();
  const handleClickProduct = () => {
    navigate("/product");
    window.scrollTo(0, 0);
  };
  return (
    <Stack direction={'row'} spacing={{ base: 4, md: 6 }}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
                <Box
                  as="a"
                  p={2}
                  onClick={navItem.label === 'Products' ? handleClickProduct : undefined}
                  href={navItem.label !== 'Products' ? navItem.href ?? '#' : undefined}
                  cursor={'pointer'}
                  fontSize={{ base: 'sm', md: 'md' }}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Box>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
}

const MobileNav = ({toggleMenu}) => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} toggleMenu={toggleMenu} {...navItem}  />
      ))}
    </Stack>
  );
}

const MobileNavItem = ({ toggleMenu, label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();
  const closeMenu=()=>{
    toggleMenu()
  };
  const handleClickProduct = () => {
    closeMenu();
    navigate("/product");
    window.scrollTo(0, 0);
  };
  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        onClick={label === 'Products' ? handleClickProduct : closeMenu}
        href={label !== 'Products' ? href ?? '#' : undefined}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
}

// Navigation Items
const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'Products',
    href: '/product'
  },
  {
    label: 'About',
    href: '/#about'
  },
  {
    label: 'Contact',
    href: '/#contact'
  }
];
