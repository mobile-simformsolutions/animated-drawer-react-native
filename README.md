# SimformRN

The repository for _SimformRN_, a react-native boiler-plate.

**Project Name**: `SimformRN`

**Bundle Id**: `com.simform.SimformRN`   **Package Name**: `com.simformrn`

[![license](https://img.shields.io/badge/LICENSE-MIT-brightgreen)](https://opensource.org/licenses/mit-license.html) [![react-native](https://img.shields.io/badge/react--native-61.0.4-brightgreen)](https://facebook.github.io/react-native/docs/0.59/getting-started) [![codebeat badge](https://codebeat.co/badges/9797c001-b8c3-4ce3-965d-257f4b77ab62)](https://codebeat.co/a/developer-0209bfcf-9e1a-4b86-a052-d18287f88f7c/projects/github-com-simformsolutions-react-native-boilerplate-latest-master) [![code-style](https://img.shields.io/badge/code%20style-standard%20JS-brightgreen)](https://standardjs.com/)

---

##  Project Desctiption
this is a unassigned task for react navigation v5 and custom drawer animation 

## Prerequisites

**iOS** : XCode(10.2) onwards

**Android** : Android Studio(3.4) with gradle(5.1.1) onwards

**Editor** : Visual Studio Code

## How to Setup Project

**Step 1:** Clone this repository.

**Step 2:** Go to the cloned repo and open it in termianl.

**Step 3:** Install the dependencies with `$ npm i`

**Step 4:** Run the npm script to install the cocoapods `$ npm podinstall`

## How to Run the Project

1. Open the project directory in to terminal
2. Run and build for either OS
    * Run iOS app
        ```bash 
        npm run ios
        ```
    * Run Android app
      ```bash 
      npm run android
      ```
    * Note: This npm scripts will lint your code first. If there are no lint errors, then it will run the ios or android app. Otherwise it will show the lint errors in the terminal.

## Reusablity
- **How it can be reused?**
  - Clone the repository
  - Install [react-native-rename](https://www.npmjs.com/package/react-native-rename) as global dependency
- There are two bugs with this lib though.	
  - If your old project name and new project name have same strings in them, it won't rename the ios .pbxproj, .xcodeproj and .xcworkspace files.
  - To overcome this, we can rename the project with a totally different name first and than can rename it with the actual name.
  ```bash 
    first command: <project_root_directory>$react-native-rename "TestApp" -b com.simform.testapp

    second command: <project_root_directory>$react-native-rename "SimformRN" -b com.simform.simformrn
  ```

## [Template generator](./Template.md)
- **Why generator?**
  - Generator will help us to save 5-15 minutes time when creating every module, screen, component, reducer, saga, service etc.


## Coding Style used

This project adheres to JavaScript Standard for codinng style. To maintain coding standards, utilising features of ES6 and follow best development practices of react-native, this project also uses [ES6](http://es6-features.org/#Constants), some rules of [eslint-airbnb](https://github.com/airbnb/javascript), [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) and [eslint-plugin-react-native](https://github.com/intellicode/eslint-plugin-react-native).

**Do not disable lint inside the code. Try to understand the rule and then follow it into your code. Disabling lint will be considered a violation of coding standards. Exceptions will be allowed by the code-reviewer and team lead after understanding the need to ignore lint.**

1. **To Lint**
  
   Use the npm script `lint`. To run it
  ```bash 
    npm run lint
  ```
2. **Auto Lint on Commit**
   
   This is implemented using [husky](https://github.com/typicode/husky). So husky will prevent code-cmmits having lint errors. There is no additional setup needed.

3. **Understanding Linting Errors**

   The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## Extra steps for android

- run following command 
 - npm run android

## Extra steps for ios

- run following command
  - npm run ios 

- You will need all the certificates to run the ios project in a real device.

## List of all dependencies used in the project with their usage

List all dependencies from the package.json file along with their usage. This list must be updated every time you change/add any dependecy. 

- **Framework:**
  - [React Native](https://github.com/facebook/react-native)

- **State management libraries:** 
  - [Redux](http://redux.js.org/), [React Redux](https://react-redux.js.org/), [Redux Persist](https://github.com/rt2zz/redux-persist), [Seamless-Immutable](https://github.com/rtfeldman/seamless-immutable)

- **API & Middleware libraries:**
  - [API Sauce](https://github.com/infinitered/apisauce), [Redux Sauce](https://github.com/jkeam/reduxsauce), [Redux Saga](https://redux-saga.js.org/)

- **Libraries used for navigation:**
  - [@react-navigation/native](https://github.com/react-navigation/react-navigation), [react-native-gesture-handler](https://github.com/kmagiera/react-native-gesture-handler), [react-native-reanimated](https://github.com/kmagiera/react-native-reanimated),[@react-navigation/drawer](https://reactnavigation.org/docs/drawer-based-navigation/)[@react-navigation/stack](https://reactnavigation.org/docs/hello-react-navigation)
- **Libraries used for forms and validations:**
  - [formik](https://jaredpalmer.com/formik/), [yup](https://github.com/jquense/yup)
- **Libraries used for UI:**
  - [native-base](https://nativebase.io/),[react-native-image-crop-picker](https://github.com/ivpusic/react-native-image-crop-picker)
- **Libraries used for storage:** 
  - [async-storage](https://github.com/react-native-community/async-storage)

## Following accounts are used for the mentioned platform

- no account used as of now


## Troubleshoot Notes

- There are no known issues for run or build processes right now.

## Notes
 
  - no notes
