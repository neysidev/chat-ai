import { Box, Flex } from "@chakra-ui/react"
import { useRouter } from "next/navigation"
import { useHotkeys } from "react-hotkeys-hook"

import Icon from "../common/Icon"
import PageLink from "./PageLink"
import SearchButton from "./SearchButton"

export default function ActionsButtons() {
  const router = useRouter()

  useHotkeys("shift+n", () => router.push("/"))
  useHotkeys("shift+e", () => router.push("/explore"))
  useHotkeys("shift+h", () => router.push("/history"))

  return (
    <Flex
      flexDirection="column"
      gap={1}
      borderBottomWidth="1px"
      borderBottomStyle="dashed"
      pb={4}
      borderColor="border"
    >
      <PageLink
        href="/"
        shortcut="N"
        icon={<Icon name="home" />}
        label="Home"
        value="home"
      />
      <SearchButton />
      <PageLink
        shortcut="E"
        href="/explore"
        icon={<Icon name="explore" />}
        label="Explore"
        value="explore"
      />
      <PageLink
        shortcut="H"
        href="/history"
        label="History"
        value="history"
        icon={
          <Icon name="history" size={23} stroke="none" fill="currentColor" />
        }
      />
    </Flex>
  )
}
