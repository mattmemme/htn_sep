import * as React from "react"
import {
  Button,
  Flex,
  Image,
  LinkBox,
  Spacer,
  Text,
} from "@chakra-ui/react"
import { MdStar } from "react-icons/md"
import Link from "next/Link"

interface StudentListItems {
  customer: any
}

export default function ListItem(props: StudentListItems) {
  const { customer } = props
  console.log("customer:", customer)

  return (
    <LinkBox p="5" borderWidth="1px" rounded="md" paddingTop={0}>
      <Flex paddingTop={5} paddingBottom={2} spacing={5}>
        <Image
          height="45px"
          objectFit="contain"
          src="/avatar.png"
          alt="avatar"
          paddingRight={5}
        />
        <Text mt={2} fontSize="xl" fontWeight="bold" color="#2d2d2d">
          {customer.name}
        </Text>
        <Spacer />
        <Button colorScheme="blue" size="sm">
          <Link href={`/students/${customer._id}`}>Donate</Link>
        </Button>
      </Flex>
      
      <Text fontSize="sm" fontWeight="bold" color="#2d2d2d">
        Username: {customer.username}
      </Text>
      <Text fontSize="sm" fontWeight="bold" color="#2d2d2d">
        Email: {customer.email}
      </Text>  
      <br/>
      <Text fontSize="sm">
        About: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      
    </LinkBox>
  )
}