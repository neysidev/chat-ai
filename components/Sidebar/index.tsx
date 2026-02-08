import Image from "next/image"
import Link from "next/link"
import { Box, Flex, Separator } from "@chakra-ui/react"

import Tooltip from "../common/Tooltip"
import ActionsButtons from "./ActionsButtons"
import NewChat from "./NewChat"
import SettingsButton from "./SettingsButton"

export default function Sidebar() {
  return (
    <Box
      as="aside"
      p={4}
      display={{ base: "none", sm: "flex" }}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Flex flexDirection="column" alignItems="center" gap={5}>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={40}
            style={{ borderRadius: "0.75rem" }}
          />
        </Link>
        <NewChat />
        <ActionsButtons />
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        <SettingsButton />
        <Separator mt={2} mb={4} borderStyle="dashed" borderColor="border" />
        <Tooltip place="right" content="Profile" id="profile">
          <Link href="/profile">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={28}
              height={28}
              style={{ borderRadius: "9999px" }}
            />
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  )
}
