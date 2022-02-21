import React, { useState } from "react";

import {
    Text,
    HStack,
    Alert,
    IconButton,
    CloseIcon,
    Box,
    PresenceTransition,
    VStack,
} from "native-base";


export default function NotificationBanner(props) {

    const { setShowNotification, duration, colorScheme, showNotification, status, titleText, descriptionText } = props
    const handleClose = () => {
        setShowNotification(!showNotification)
    }

    /***
     * Delay to close notification
     * @param {number} duration      * 
     * use milliseconds
     */
    const _closeOnDelay = (duration) => {
        // Set the date we're counting down to by current timestamp + X seconds 
        var countDownDate = new Date().getTime() + duration

        var x = setInterval(function () {
            var now = new Date().getTime();
            var distance = countDownDate - now;
            if (distance < 0) {
                clearInterval(x);
                console.log('Notification geschlossen nach interval')
                handleClose()
            }
        }, 1000);
    }

    _closeOnDelay(duration)

    return (
        <PresenceTransition style={{
            position: 'absolute',
            zIndex: 1, top: 20
        }} visible={showNotification} initial={{
            opacity: 0
        }} animate={{
            opacity: 1,
            transition: {
                duration: 250,
            }
        }}>
            <Alert
                w="300"
                maxW="300"
                status={status}
                colorScheme={colorScheme}>

                <VStack space={2} flexShrink={1} w="100%">
                    <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                        <HStack flexShrink={1} space={2} alignItems="center">
                            <Alert.Icon />
                            <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                                {titleText}
                            </Text>
                        </HStack>
                        <IconButton variant="unstyled" icon={<CloseIcon size="3" color="coolGray.600" />} onPress={() => { handleClose() }} />
                    </HStack>
                    <Box pl="6" _text={{
                        color: "coolGray.600"
                    }}>
                        {descriptionText}
                    </Box>
                </VStack>
            </Alert>
        </PresenceTransition>

    );
}


