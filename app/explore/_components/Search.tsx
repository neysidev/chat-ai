"use client"

import { Box, Input, VisuallyHidden } from "@chakra-ui/react"
import { Icon } from "@/components/common"
import { useExploreStore } from "@/stores/exploreStore"

export default function Search() {
  const { search, setSearch } = useExploreStore()

  return (
    <Box
      as="section"
      position="sticky"
      top={-4}
      pt={4}
      gap={4}
      bg="bg"
    >
      <Box
        position="absolute"
        left={0}
        right={0}
        top="100%"
        bgGradient="to-b"
        gradientFrom="bg"
        pb={12}
      />
      <Box position="relative">
<VisuallyHidden>
          <label htmlFor="search-input">Search GPTs</label>
        </VisuallyHidden>
        <Input
          aria-label="Search GPTs"
          id="search-input"
          type="text"
          placeholder="Search GPTs"
          value={search}
          onChange={e => setSearch(e.target.value)}
          borderWidth="1px"
          borderColor="border"
          py={2}
          w="full"
          pl={9}
          pr={4}
          borderRadius="xl"
          bg="transparent"
          _focus={{ outline: "none", boxShadow: "0 0 0 2px var(--chakra-colors-blue-600)" }}
        />
        <Box
          position="absolute"
          left={3}
          top="50%"
          transform="translateY(-50%)"
          color="fg.muted"
          pointerEvents="none"
        >
          <Icon size={18} name="search" />
        </Box>
      </Box>
    </Box>
  )
}
