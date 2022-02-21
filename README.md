
 # Notification Banner React Native Base Component

This Component is made give some userfeedback at alert, info, error or something like that.

## NativeBase Expo Template

The official NativeBase template for [Expo](https://docs.expo.io/)

## Useage

```sh
expo init my-app --template @native-base/expo-template
```

#### Render a Notification on your Screen

```
   <NotificationBanner
          showNotification={showNotification}
          setShowNotification={setShowNotification}
          duration={duration}
          status={status}
          colorScheme={colorScheme}
          titleText={titleText}
          descriptionText={descriptionText}
        />
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `{AshowNotification}` | `boolean` | **Required**. Store the state |
| `setShowNotification` | `function` | **Required**. Triggered the state change |
| `{duration}` | `number` | **Required**. Close the notification after xxxx ms |
| `{status}` | `string` | **Required**. success, error, info, warning |
| `{colorScheme}` | `string` | **Required**. success, error, info, warning |
| `{titleText}` | `string` | **Required**. Event created successfully. |
| `{descriptionText}` | `string` | **Required**. Your event is ready to join. Check Events Tab! |

## Preview

![Preview Banner](https://github.com/Gismo1337/notification-banner-alert-react-native-base-component/blob/main/assets/demoimg.png?raw=true)

## 🔗 Links
[![devto](https://img.shields.io/badge/dev.to-000?style=for-the-badge&logo=dev.to&logoColor=white)](https://dev.to/gismo1337)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sebastianrichter1337/)
[![youtube](https://img.shields.io/badge/youtube-f70025?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/gismo1337dev)
[![expo](https://img.shields.io/badge/expo-000000?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/@g1sm0?tab=snacks)
## Authors

- [@gismo1337](https://www.github.com/gismo1337)

