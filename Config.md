# React Native Android Linux

### Java

- Java 8.0+

### Android Studio Config

- Android 6.0+
	- Google Apis
	- Android SDK Platform 23
	- Intel x86 Atom_64 System Image
	- Google APIs Intel x86 Atom_64 System Image

- Add to .bashrc or .zshrc
 ```export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/platform-tools```


### Commom Erros

- AAPT
	```sudo apt install lib32stdc++6 lib32z1```

- INDEX.ANDROID.BUNDLE
	```mkdir android/app/src/main/assets```
	```react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res```


