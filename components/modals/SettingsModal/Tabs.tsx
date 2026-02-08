import { Box, Button } from "@chakra-ui/react"
import Icon from "@/components/common/Icon"
import { IconName } from "@/components/common/icons"
import { SettingsTab, useSettingsStore } from "@/stores/settingsStore"

interface Item {
  name: string
  value: SettingsTab
  icon: IconName
}

const items: Item[] = [
  { name: "General", value: "general", icon: "settings" },
  { name: "Personalized", value: "personalized", icon: "user" },
  { name: "Speech", value: "speech", icon: "microphone" },
  { name: "Data controls", value: "dataControls", icon: "server" },
  { name: "Security", value: "security", icon: "lock" },
]

export default function Tabs() {
  const { activeTab, setActiveTab } = useSettingsStore()

  return (
    <Box as="ul" gap={2} mb={8}>
      {items.map(({ name, value, icon }) => (
        <Box as="li" key={value}>
          <Button
            variant="ghost"
            onClick={() => setActiveTab(value)}
            display="flex"
            w="full"
            textAlign="left"
            fontWeight="medium"
            fontSize="sm"
            alignItems="center"
            gap={{ base: 0, sm: 2 }}
            p={2}
            borderRadius="md"
            bg={activeTab === value ? "bg.muted" : "transparent"}
            opacity={activeTab === value ? 1 : 0.75}
            _hover={{ opacity: 1 }}
          >
            <Icon name={icon} size={18} />
            <Box as="span" display={{ base: "none", sm: "block" }} flex={1}>
              {name}
            </Box>
          </Button>
        </Box>
      ))}
    </Box>
  )
}
