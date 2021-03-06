# 👀 Todo & Travel App
> Work Hard 📝 Travel Hard ✈️ <br/>

<br/>

## Component & API 정리
- [💽 AsyncStorage - expo](https://react-native-async-storage.github.io/async-storage/)
- [✍️ TextInput](https://reactnative.dev/docs/textinput)
  - `input` 태그와 비슷하지만, `mobile`에 최적화된 `props`가 있다!
  - `keyboardType`, `returnKeyType`, `autoCapitalize` 등등
- [🚨 Alert](https://reactnative.dev/docs/alert)
  - `api`를 제공할 뿐만 아니라 `dialog UI`도 설정 가능하다.
  - `prompt method`는 `iOS`에서만 가능하다.
  - `prompt method`를 `android`에서도 사용하고 싶어 [react-native-dialog](https://www.npmjs.com/package/react-native-dialog)라는 `third-party package`를 이용했다.
- [🎨 Appearance](https://reactnative.dev/docs/appearance)
  - OS 테마값 (`light` or `dark`)를 읽어오기 위해 사용했다. 
  - 그 전에 `app.json`에서 설정 변경이 필요하다.
 ```
 // app.json
 {
  "expo": {
    "userInterfaceStyle": "automatic",
    "ios": {
      "userInterfaceStyle": "automatic"
    },
    "android": {
      "userInterfaceStyle": "automatic"
    }
  }
}
```

>`Expo`를 이용해서 RN 앱을 개발하면 `app.json`을 통해 JS 코드로 할 수 없는 영역들을 설정할 수 있다. <br/>
> ex) `name`, `slug`, `splash`, `icon`, `locales`, `isTabletOnly`, `usesAppleSignIn` 등등 <br/>
> - [👉 사용가능한 app.json 설정들 더 알아보기](https://docs.expo.dev/versions/latest/config/app/)
> - [👉 Configuration with app.json / app.config.js](https://docs.expo.dev/workflow/configuration/)

<br/>

> 비슷하면서 다른 컴포넌트들
- [❗ TouchableOpacity](https://reactnative.dev/docs/touchableopacity)
  - view가 터치에 적절하게 반응하도록 하는 wrapper
  - 누르면 래핑된 view의 `opacity`가 감소하여 흐리게 표시된다.
- [💫 TouchableHighlight](https://reactnative.dev/docs/touchablehighlight)
    - view가 터치에 적절하게 반응하도록 하는 wrapper
    - 누르면 래핑된 view의 `background`를 표시한다.
- [🙅‍♀️ TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback)
  - `Press`에 반응하는 모든 요소는 시각적 피드백이 있어야 하니까 웬만해서는 사용하지 말아야 한다.
- [👇 Pressable](https://reactnative.dev/docs/pressable)
  - `children`에 대한 다양한 `Press` 상호 작용 단계를 감지할 수 있는 wrapper
  - 앞선 컴포넌트들보다 섬세한 설정이 가능하다. (`ex. hitSlop`)


<br/>

## Tech Stack
<img alt="TypeScript" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=flat-square&logo=TypeScript&logoColor=white"/> <img alt="React Native" src ="https://img.shields.io/badge/React Native-61DAFB.svg?&style=flat-square&logo=React&logoColor=white"/>
<img alt="Expo CLI" src ="https://img.shields.io/badge/Expo CLI-000020.svg?&style=flat-square&logo=Expo&logoColor=white"/>
<img alt="Styled Components" src ="https://img.shields.io/badge/Styled Components-DB7093.svg?&style=flat-square&logo=styled-components&logoColor=white"/>

<br/>

> [👉 expo에 공개된 앱 보러가기](https://expo.dev/@eunnbi/whthapp)
