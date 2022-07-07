# Study

## React Navtie + Typescript 환경에서 env 파일 사용하기
1. `react-native-dotenv` & `@types/react-native-dotenv` 설치
  ```
  npm i react-native-dotenv
  # or
  yarn add react-native-dotenv
  ```
  ```
  npm i -D @types/react-native-dotenv
  # or
  yarn add -D  @types/react-native-dotenv
  ```
<br/>

2. `babel.config.js` 수정
```js
module.exports = function () {
  return {
    //...,
    plugins: [
      ["module:react-native-dotenv"],
    ],
  };
};
```

<br/>

3. `env` 파일 root 경로에 추가, 앱 다시 실행
```
API_KEY = 1234
```
```js
const API_KEY = process.env.API_KEY;
```
