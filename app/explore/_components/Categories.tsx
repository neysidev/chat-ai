import Image from "next/image"
import { Box, SimpleGrid } from "@chakra-ui/react"
import { GPTS, SECTIONS } from "@/fixtures/explore"

export default function Categories() {
  return (
    <Box as="section" pt={8} gap={8}>
      {SECTIONS.map(section => (
        <Box key={section.value} as="section" gap={2}>
          <Box as="header">
            <Box as="h2" fontSize="xl" fontWeight="medium">
              {section.title}
            </Box>
            <Box as="p" color="fg.muted">
              {section.description}
            </Box>
          </Box>
          <SimpleGrid as="ul" columns={{ base: 1, sm: 2 }} gap={2}>
            {GPTS[section.value].map((gpt, index) => (
              <Box
                key={index}
                as="li"
                borderRadius="xl"
                minH={32}
                p={4}
                display="flex"
                alignItems="center"
                userSelect="none"
                cursor="pointer"
                gap={2}
                borderWidth="1px"
                borderColor="border"
                _hover={{
                  borderColor: "transparent",
                  bg: "bg.panel",
                  boxShadow: "sm",
                }}
              >
                <Box
                  w={{ base: "1/4", md: "1/3" }}
                  display="grid"
                  placeItems="center"
                >
                  <Image
                    width={64}
                    height={64}
                    src={`/gpts/${gpt.image}`}
                    alt={gpt.title}
                    style={{ borderRadius: "9999px", border: "1px solid var(--chakra-colors-border)" }}
                  />
                </Box>
                <Box flex={1}>
                  <Box as="h3" fontWeight="medium" mb={1}>
                    {gpt.title}
                  </Box>
                  <Box as="p" fontSize="xs" lineClamp={2} mb={2}>
                    {gpt.description}
                  </Box>
                  <Box as="span" fontSize="xs" color="fg.muted">
                    By {gpt.creator}
                  </Box>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      ))}
    </Box>
  )
}
