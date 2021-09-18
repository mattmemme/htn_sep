import * as React from "react"
import {
  Badge,
  Box,
  Flex,
  Image,
  LinkBox,
  LinkOverlay,
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
    <LinkBox p="5" borderWidth="1px" rounded="md">
      <Flex align="baseline" mt={2}>
        <Text
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="pink.800"
        >
          {"Username:" && customer.husername}
          {"Email:" && customer.email}
        </Text>
      </Flex>
      <Link href={`/students/${customer._id}`} passHref>
        <LinkOverlay>
          <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
            {customer.name}
          </Text>
        </LinkOverlay>
      </Link>
    </LinkBox>
  )
}