import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StatusBar
} from "react-native";
import Svg, { Path } from "react-native-svg";
import { NavigationContainer } from '../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../node_modules/@react-navigation/stack';
import App from '../../App';

export function EmailVerification({navigation}) {
  return (
    <View style={styles.root}>
      <View style={styles.iPhoneXHomeIndicatorHomeIndicatorOnLightStack}>
        <View style={styles.iPhoneXHomeIndicatorHomeIndicatorOnLight}>
          <View style={styles.rectangle24}></View>
        </View>
        <View style={styles.bottom}>
          <View style={styles.bg13}>
            <View style={styles.homeIndicatorLight}>
              <View style={styles.bg14Stack}>
                <Svg viewBox="-0 -0 375 24" style={styles.bg14}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(36,19,50,1)"
                    d="M0.00 0.00 L375.00 0.00 L375.00 24.00 L0.00 24.00 Z"
                  ></Path>
                </Svg>
                <View style={styles.indicator}></View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button3}
      onPress={() => navigation.navigate("VerificationCode")}
      >
        <View style={styles.bg12}>
          <Text style={styles.verify}>VERIFY</Text>
        </View>
      </TouchableOpacity>
      <Svg viewBox="-1 -1 315 4.009998321533203" style={styles.line301}>
        <Path
          strokeWidth={2}
          fill="transparent"
          stroke="rgba(129,120,137,1)"
          fillOpacity={0.396380007266998}
          strokeOpacity={0.396380007266998}
          d="M312.00 1.00 L1.00 1.00 "
        ></Path>
      </Svg>
      <View style={styles.bg15}>
        <View style={styles.button2Row}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Welcome")}
            style={styles.button2}
          >
            <View style={styles.bg16}>
              <View style={styles.arrowLeft}>
                <View style={styles.line36Stack}>
                  <Svg
                    viewBox="-0.75 -0.75 17 3.010000228881836"
                    style={styles.line36}
                  >
                    <Path
                      strokeWidth={1.5}
                      fill="transparent"
                      stroke="rgba(117,117,117,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M14.75 0.75 L0.75 0.75 "
                    ></Path>
                  </Svg>
                  <Svg viewBox="-0.75 -0.75 10 17" style={styles.path12}>
                    <Path
                      strokeWidth={1.5}
                      fill="transparent"
                      stroke="rgba(117,117,117,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M7.75 14.75 L0.75 7.75 L7.75 0.75 "
                    ></Path>
                  </Svg>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.experimentalPopMusicSessionStack}>
            <Text style={styles.experimentalPopMusicSession}>Your Email</Text>
            <Svg
              viewBox="-0.75 -0.75 18.98291015625 17.3846206665039"
              style={styles.filter}
            >
              <Path
                strokeWidth={1.5}
                fill="transparent"
                stroke="rgba(117,117,117,1)"
                fillOpacity={1}
                strokeOpacity={1}
                d="M16.73 0.75 L0.75 0.75 L7.14 8.31 L7.14 13.54 L10.34 15.13 L10.34 8.31 L16.73 0.75 Z"
              ></Path>
            </Svg>
          </View>
        </View>
      </View>
      <TextInput
        placeholder="email@email.com"
        blurOnSubmit={true}
        keyboardType="email-address"
        returnKeyType="go"
        keyboardAppearance="light"
        style={styles.textInput}
      ></TextInput>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="rgba(255,255,255,1)"
      ></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(36,19,50,1)"
  },
  iPhoneXHomeIndicatorHomeIndicatorOnLight: {
    top: 10,
    left: 121,
    width: 134,
    height: 5,
    position: "absolute",
    opacity: 0.1
  },
  rectangle24: {
    width: 200,
    height: 5,
    backgroundColor: "rgba(0,0,0,1)",
    opacity: 1,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100
  },
  bottom: {
    top: 0,
    left: 0,
    width: 375,
    height: 24,
    position: "absolute",
    opacity: 1
  },
  bg13: {
    width: 375,
    height: 24,
    backgroundColor: "rgba(36,19,50,1)"
  },
  homeIndicatorLight: {
    width: 375,
    height: 24,
    opacity: 1
  },
  bg14: {
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  indicator: {
    top: 12,
    left: 121,
    width: 134,
    height: 3,
    backgroundColor: "rgba(255,255,255,1)",
    position: "absolute",
    opacity: 0.2,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomRightRadius: 1,
    borderBottomLeftRadius: 1
  },
  bg14Stack: {
    width: 375,
    height: 24
  },
  iPhoneXHomeIndicatorHomeIndicatorOnLightStack: {
    width: 375,
    height: 24,
    marginTop: 788
  },
  button3: {
    width: 327,
    height: 52,
    opacity: 1,
    marginTop: -473,
    alignSelf: "center"
  },
  bg12: {
    height: 43,
    marginTop: -20,
    backgroundColor: "rgba(95,69,145,1)",
    borderTopLeftRadius: 52,
    borderTopRightRadius: 52,
    borderBottomRightRadius: 52,
    borderBottomLeftRadius: 52
  },
  verify: {
    height: 43,
    color: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "700",
    lineHeight: 43,
    letterSpacing: 0.06,
    textAlign: "center"
  },
  line301: {
    width: 315,
    height: 4,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginTop: -113,
    alignSelf: "center"
  },
  bg15: {
    height: 156,
    backgroundColor: "rgba(255,255,255,1)",
    borderBottomLeftRadius: 80,
    flexDirection: "row",
    marginTop: -281
  },
  button2: {
    width: 24,
    height: 24,
    opacity: 1,
    marginTop: 8
  },
  bg16: {
    width: 24,
    height: 24,
    backgroundColor: "transparent"
  },
  arrowLeft: {
    width: 14,
    height: 14,
    opacity: 1,
    marginTop: 5,
    marginLeft: 5
  },
  line36: {
    top: 7,
    left: 0,
    width: 17,
    height: 3,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  path12: {
    top: 0,
    left: 0,
    width: 10,
    height: 17,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent"
  },
  line36Stack: {
    width: 17,
    height: 17,
    marginTop: -1,
    marginLeft: -1
  },
  experimentalPopMusicSession: {
    top: 4,
    left: 0,
    width: 320,
    height: 36,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    opacity: 1,
    fontSize: 36,
    fontFamily: "Roboto",
    fontWeight: "700",
    lineHeight: 36,
    letterSpacing: -0.42
  },
  filter: {
    top: 0,
    left: 276,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent",
    height: 0,
    width: 0,
    opacity: 0
  },
  experimentalPopMusicSessionStack: {
    width: 320,
    height: 36,
    marginLeft: 12
  },
  button2Row: {
    height: 36,
    flexDirection: "row",
    flex: 1,
    marginLeft: 19,
    marginTop: 60
  },
  textInput: {
    width: 312,
    height: 33,
    color: "rgba(255,255,255,1)",
    opacity: 1,
    fontSize: 28,
    fontFamily: "Roboto",
    lineHeight: 38,
    letterSpacing: 0.11,
    textAlign: "center",
    marginTop: 73,
    marginLeft: 31
  }
});

export default EmailVerification;
