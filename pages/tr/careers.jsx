import { Box, Center, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import PagesBreadcrumb from '../../components/shared/PagesBreadcrumb';
import Head from 'next/head';

function CareersPage() {
  return (
    <>
 <Head></Head>

<main>
  <CareersCTA />
  <CareersContent />
</main>

    </>
  )
}

const CareersCTA = () => {
    return (
      <>
       <Flex h={"250px"} bg="primary" w="100%" color="white" justify={"center"}>
        <Center>
          <Flex direction={"column"}>
            <Text as="h1" fontSize={65}>Kariyer</Text>
            <Center>
              <PagesBreadcrumb currentPage={"Kariyer"} />
            </Center>
          </Flex>
        </Center>
      </Flex>
      </>
    );
  };


const CareersContent = () => {
    return (
      <>
        <Box >
         
        </Box>
      </>
    );
  };


export default CareersPage