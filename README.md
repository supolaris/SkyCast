Project Dependencies

# React Native Navigation

```bash
yarn add @react-navigation/native
```

```bash
yarn add react-native-screens react-native-safe-area-context
```

### Native Stack

```bash
yarn add @react-navigation/native-stack
```

### Bottom Tabs

```bash
yarn add @react-navigation/bottom-tabs
```

# Lottiefiles

```bash
yarn add lottie-react-native
```

for TypeScript

```bash
npm i --save-dev @types/react-native-vector-icons
```

Edit android/app/build.gradle (NOT android/build.gradle) and add:

```bash
apply from: file("../../node_modules/react-native-vector-icons/fonts.gradle")
```

# Linear Gradient

```bash
yarn add react-native-linear-gradient
```

# Async Storage

```bash
yarn add @react-native-async-storage/async-storage
```

# Geo locaiton

```bash
yarn add react-native-get-location
```

Android post install
For Android you need to define the location permissions on AndroidManifest.xml.

<!-- Define ACCESS_FINE_LOCATION if you will use enableHighAccuracy=true  -->

```bash
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
```

<!-- Define ACCESS_COARSE_LOCATION if you will use enableHighAccuracy=false  -->

```bash
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>
```

# Axios

```bash
$ npm install axios
```
