# π Todo & Travel App
> Work Hard π Travel Hard βοΈ <br/>

<br/>

## Component & API μ λ¦¬
- [π½ AsyncStorage - expo](https://react-native-async-storage.github.io/async-storage/)
- [βοΈ TextInput](https://reactnative.dev/docs/textinput)
  - `input` νκ·Έμ λΉμ·νμ§λ§, `mobile`μ μ΅μ νλ `props`κ° μλ€!
  - `keyboardType`, `returnKeyType`, `autoCapitalize` λ±λ±
- [π¨ Alert](https://reactnative.dev/docs/alert)
  - `api`λ₯Ό μ κ³΅ν  λΏλ§ μλλΌ `dialog UI`λ μ€μ  κ°λ₯νλ€.
  - `prompt method`λ `iOS`μμλ§ κ°λ₯νλ€.
  - `prompt method`λ₯Ό `android`μμλ μ¬μ©νκ³  μΆμ΄ [react-native-dialog](https://www.npmjs.com/package/react-native-dialog)λΌλ `third-party package`λ₯Ό μ΄μ©νλ€.
- [π¨ Appearance](https://reactnative.dev/docs/appearance)
  - OS νλ§κ° (`light` or `dark`)λ₯Ό μ½μ΄μ€κΈ° μν΄ μ¬μ©νλ€. 
  - κ·Έ μ μ `app.json`μμ μ€μ  λ³κ²½μ΄ νμνλ€.
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

>`Expo`λ₯Ό μ΄μ©ν΄μ RN μ±μ κ°λ°νλ©΄ `app.json`μ ν΅ν΄ JS μ½λλ‘ ν  μ μλ μμ­λ€μ μ€μ ν  μ μλ€. <br/>
> ex) `name`, `slug`, `splash`, `icon`, `locales`, `isTabletOnly`, `usesAppleSignIn` λ±λ± <br/>
> - [π μ¬μ©κ°λ₯ν app.json μ€μ λ€ λ μμλ³΄κΈ°](https://docs.expo.dev/versions/latest/config/app/)
> - [π Configuration with app.json / app.config.js](https://docs.expo.dev/workflow/configuration/)

<br/>

> λΉμ·νλ©΄μ λ€λ₯Έ μ»΄ν¬λνΈλ€
- [β TouchableOpacity](https://reactnative.dev/docs/touchableopacity)
  - viewκ° ν°μΉμ μ μ νκ² λ°μνλλ‘ νλ wrapper
  - λλ₯΄λ©΄ λνλ viewμ `opacity`κ° κ°μνμ¬ νλ¦¬κ² νμλλ€.
- [π« TouchableHighlight](https://reactnative.dev/docs/touchablehighlight)
    - viewκ° ν°μΉμ μ μ νκ² λ°μνλλ‘ νλ wrapper
    - λλ₯΄λ©΄ λνλ viewμ `background`λ₯Ό νμνλ€.
- [πββοΈ TouchableWithoutFeedback](https://reactnative.dev/docs/touchablewithoutfeedback)
  - `Press`μ λ°μνλ λͺ¨λ  μμλ μκ°μ  νΌλλ°±μ΄ μμ΄μΌ νλκΉ μ¬λ§ν΄μλ μ¬μ©νμ§ λ§μμΌ νλ€.
- [π Pressable](https://reactnative.dev/docs/pressable)
  - `children`μ λν λ€μν `Press` μνΈ μμ© λ¨κ³λ₯Ό κ°μ§ν  μ μλ wrapper
  - μμ  μ»΄ν¬λνΈλ€λ³΄λ€ μ¬μΈν μ€μ μ΄ κ°λ₯νλ€. (`ex. hitSlop`)


<br/>

## Tech Stack
<img alt="TypeScript" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=flat-square&logo=TypeScript&logoColor=white"/> <img alt="React Native" src ="https://img.shields.io/badge/React Native-61DAFB.svg?&style=flat-square&logo=React&logoColor=white"/>
<img alt="Expo CLI" src ="https://img.shields.io/badge/Expo CLI-000020.svg?&style=flat-square&logo=Expo&logoColor=white"/>
<img alt="Styled Components" src ="https://img.shields.io/badge/Styled Components-DB7093.svg?&style=flat-square&logo=styled-components&logoColor=white"/>

<br/>

> [π expoμ κ³΅κ°λ μ± λ³΄λ¬κ°κΈ°](https://expo.dev/@eunnbi/whthapp)
