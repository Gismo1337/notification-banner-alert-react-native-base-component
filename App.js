import React, { useState } from "react";
import {
  Button,
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import NotificationBanner from './components/NotificationBanner.js';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const [showNotification, setShowNotification] = useState(false);
  // Notification Bannerhardcode
  const status = 'success' // success, error, info, warning
  const colorScheme = 'success' // success, error, info, warning
  const titleText = 'Event created successfully.'
  const descriptionText = 'Your event is ready to join. Check Events Tab!'
  const duration = 3000 // Time the notification will be shown before vanish in ms


  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        {showNotification && <NotificationBanner
          showNotification={showNotification}
          setShowNotification={setShowNotification}
          duration={duration}
          status={status}
          colorScheme={colorScheme}
          titleText={titleText}
          descriptionText={descriptionText}
        />}
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Hit the </Text>
            <Code>TOGGLE NOTIFICATION</Code>
            <Text>Button!</Text>
          </HStack>


          <Button
            colorScheme="primary"
            onPress={() => {
              setShowNotification(true)
            }}

          >
            TOGGLE NOTIFICATION
          </Button>
          <ToggleDarkMode />
          <Link href="https://github.com/Gismo1337/notification-banner-alert-react-native-base-component" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Check Github
            </Text>
          </Link>
          <Link href="https://dev.to/gismo1337" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Check Dev.to
            </Text>
          </Link>
          <Link href="https://expo.dev/@g1sm0?tab=snacks" isExternal>
            <Text color="primary.500" underline fontSize={"xl"}>
              Check Expo Snack
            </Text>
          </Link>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
