# Wellcome to QuiqueBank 🤗              ![Visits Counter](https://enuvpj5cvbk9f9f.m.pipedream.net)
## Virtual Wallet with Firebase and React-Native
### Installation
```npm i``` / ```npm install```
### Visualization
You can run the App in three ways:
- Your Phone _(Downloading the Expo App from PlayStore)_
- Your Web Browser _(```expo start```)_
- An Android simulator like Android Studio or Visor _(```expo start```)_
---
### Extra Configuration [ only if you want to run the App on the Web browser _(*_Not recommended_*)_ ]
Go to the following route in node_modules and edit the FlipCard.js file with this changes:
>```node_modules\react-native-flip-card\lib\FlipCard.js```
1. Paste on the top this code:
```javascript
import * as ReactNative from 'react-native-web';
const PropTypes = require('prop-types');
ReactNative.Text.propTypes = { style: PropTypes.any };
ReactNative.View.propTypes = { style: PropTypes.any };
ReactNative.Image.propTypes = { style: PropTypes.any };
ReactNative.ViewPropTypes = { style: PropTypes.any };
```
2. Comment the following line:
```javascript 
import PropTypes from "prop-types";
```
```javascript 
//import PropTypes from "prop-types";
```
### Screens
![](https://github.com/larts85/Wallet-Native/blob/master/assets/WhatsApp%20Image%202020-11-30%20at%2023.55.07.jpeg)
