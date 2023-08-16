import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const baseImagePath = "https://appizsoft-static-api.vercel.app/";
function SelectedTechnologiesComponent({selectedTechnologies}) {
  return (
    <>
    <Box my={5}>
          <Box p={8} bg="gray.50" borderRadius="md" boxShadow="lg">
            <Text fontSize="xl" fontWeight="semibold" mb={4} color="blue.600">
              Projede Kullandığımız Teknolojiler
            </Text>
            <Flex direction={"row"} gap={10} flexWrap={"wrap"} my={10}>
              {selectedTechnologies.map((image, index) => (
                <Link key={index} href={`/technologies#${image.id}`} passHref>
                  <Flex direction={"row"} gap={10} flexWrap={"wrap"}>
                    <Image
                      id={image.id}
                      src={baseImagePath + image.imageUrl}
                      alt={`${image.title}`}
                      width={50}
                      height={50}
                      style={{
                        filter: "saturate(.2)",
                      }}
                    />

                  </Flex>
                </Link>
              ))}
            </Flex>
            <Text mt={4} fontSize="sm" color="gray.600">
              Projemizin geliştirilmesinde en güncel ve performans odaklı
              teknolojileri kullanıyoruz. İnovasyon ve kalite için buradayız!
            </Text>
          </Box>
        </Box>
    </>
  )
}

export default SelectedTechnologiesComponent