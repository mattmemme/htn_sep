import { Grid, SimpleGrid, Flex } from '@chakra-ui/react'
import axios from 'axios'
import StudentListItem from "../components/StudentListItem"
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [customers, setCustomers] = useState<any[]>([])
  console.log("customers:", customers)

  useEffect(() => {
    axios.get("/api/students").then((response) => {
        setCustomers(response.data.customers)
    })
  }, [])

  return (
    <Flex h="100vh" w="100%">
      <Head>
        <title>Frosh Funds</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {customers && <StudentGrid customers={customers} />}
    </Flex>

  )
}

const StudentGrid = (props: { customers: any[] }) => {
    return (
      <SimpleGrid columns={2} spacing={10} width="100%" padding={10}>
        {props.customers.map((customer) => (
          <StudentListItem key={customer._id} customer={customer} />
        ))}
      </SimpleGrid>
    )
  }

export default Home