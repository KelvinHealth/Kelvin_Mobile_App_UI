import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Svg, { Path, Defs, Mask } from "react-native-svg";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PhoneVerification from './src/screens/PhoneVerification';
import EmailVerification from './src/screens/EmailVerification';
import VerificationCode from './src/screens/VerificationCode';
import ProfileInfo1 from './src/screens/ProfileInfo1';
import ProfileInfo2 from './src/screens/ProfileInfo2';
import ProfileInfo3 from './src/screens/ProfileInfo3';
import ProfileInfo4 from './src/screens/ProfileInfo4';
import Dashboard from './src/screens/Dashboard';
import ConnectCamera from "./src/screens/ConnectCamera";
import QuickTest from "./src/screens/QuickTest";
import NiceShot from "./src/screens/NiceShot";
import SetReminder from "./src/screens/SetReminder";
import PointStats from "./src/screens/PointStats";
import YourResults from "./src/screens/YourResults";
import ProfilePage from "./src/screens/ProfilePage";
import EditProfile from "./src/screens/EditProfile";
import MainMenu from "./src/screens/MainMenu";
import TermsConditions from "./src/screens/TermsConditions";
import TheCamera from "./src/screens/TheCamera";
import AboutUs from "./src/screens/AboutUs";
import Statements from "./src/screens/Statements";
import Notifications from "./src/screens/Notifications";
import Chat from "./src/screens/Chat";
import UsefulStats from "./src/screens/UsefulStats";
import Login from "./src/screens/Login";

function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.root}>
      <ImageBackground
        source={require("./assets/images/bg-kelvin1.jpg")}
        resizeMode="cover"
        style={styles.image}
        imageStyle={styles.image_imageStyle}
      >
        <Image
          source={require("./assets/images/logo.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.welcomeToKelvin}>Welcome{"\n"}to Kelvin</Text>
        <Text style={styles.innovativeEarlyDiagnosticsToolMadeForYourHealth}>
          Innovative early-diagnostics Tool. {"\n"}Made for your health.
        </Text>
        <Text style={styles.continueWith1}>CONTINUE WITH:</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('EmailVerification')}
          style={styles.button24}
        >
          <View style={styles.bg6}>
            <Text style={styles.email1}>SIGN UP</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={styles.button23}
        >
          <View style={styles.bg5}>
            <Text style={styles.phoneNumber}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar
        animated={false}
        barStyle="light-content"
        hidden={false}
        backgroundColor="rgba(17,11,21,1)"
      ></StatusBar>
    </View>
  );
}

const Stack = createStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="PhoneVerification" component={PhoneVerification} />
        <Stack.Screen name="EmailVerification" component={EmailVerification} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="ProfileInfo1" component={ProfileInfo1} />
        <Stack.Screen name="ProfileInfo2" component={ProfileInfo2} />
        <Stack.Screen name="ProfileInfo3" component={ProfileInfo3} />
        <Stack.Screen name="ProfileInfo4" component={ProfileInfo4} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ConnectCamera" component={ConnectCamera} />
        <Stack.Screen name="QuickTest" component={QuickTest} />
        <Stack.Screen name="NiceShot" component={NiceShot} />
        <Stack.Screen name="SetReminder" component={SetReminder} />
        <Stack.Screen name="PointStats" component={PointStats} />
        <Stack.Screen name="YourResults" component={YourResults} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="TermsConditions" component={TermsConditions} />
        <Stack.Screen name="TheCamera" component={TheCamera} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Statements" component={Statements} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="UsefulStats" component={UsefulStats} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(36,19,50,1)"
  },
  image: {
    height: 812,
    marginTop: 0
  },
  image_imageStyle: {},
  image2: {
    width: 200,
    height: 200,
    marginTop: 72,
    alignSelf: "center"
  },
  welcomeToKelvin: {
    width: 295,
    height: 137,
    color: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 48,
    fontFamily: "Roboto",
    fontWeight: "bold",
    lineHeight: 48,
    textAlign: "center",
    marginTop: 37,
    alignSelf: "center"
  },
  innovativeEarlyDiagnosticsToolMadeForYourHealth: {
    color: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 18,
    fontFamily: "Roboto",
    lineHeight: 20,
    letterSpacing: -0.12,
    textAlign: "center",
    marginTop: 3
  },
  continueWith1: {
    width: 375,
    height: 14,
    color: "rgba(255,255,255,1)",
    opacity: 0.6,
    fontSize: 12,
    fontFamily: "Roboto",
    letterSpacing: -0.24,
    textAlign: "center",
    marginTop: 45,
    alignSelf: "center"
  },
  button24: {
    width: 330,
    height: 52,
    opacity: 1,
    marginTop: 25,
    alignSelf: "center"
  },
  bg6: {
    width: 330,
    height: 52,
    backgroundColor: "rgba(138,86,172,1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40
  },
  email1: {
    color: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "bold",
    lineHeight: 26,
    letterSpacing: 0.06,
    textAlign: "center",
    marginTop: 13
  },
  button23: {
    width: 330,
    height: 52,
    opacity: 1,
    marginTop: 19,
    alignSelf: "center"
  },
  bg5: {
    width: 330,
    height: 52,
    backgroundColor: "rgba(95,69,145,1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40
  },
  phoneNumber: {
    color: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 14,
    fontFamily: "Roboto",
    fontWeight: "bold",
    lineHeight: 26,
    letterSpacing: 0.06,
    textAlign: "center",
    marginTop: 13
  }
});
export default App;