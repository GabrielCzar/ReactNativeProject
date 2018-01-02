# React Native Android Linux

### Commom Erros

- AAPT
	```sudo apt install lib32stdc++6 lib32z1```

- INDEX.ANDROID.BUNDLE
	```mkdir android/app/src/main/assets```
	```react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res```

