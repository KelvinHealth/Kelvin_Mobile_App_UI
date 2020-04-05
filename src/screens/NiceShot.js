import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Svg, { Path, Stop, Defs, Mask, LinearGradient } from "react-native-svg";
import { NavigationContainer } from '../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../node_modules/@react-navigation/stack';
import { Center } from "../../node_modules/@builderx/utils";
import App from '../../App';

function NiceShot({navigation}) {
    return (
        <View style={styles.root}>
          <View style={styles.bgWhiteStack}>
            <View style={styles.bgWhite}>
              <View style={styles.bgWhite1}></View>
            </View>
            <View style={styles.img}>
              <View style={styles.bc092569E2C43B7815Ec368171Df82A}>
                <Image
                  source={require("../assets/images/3c92f928d0e19bf8877b78f170c9882e2743ed60.png")}
                  resizeMode="cover"
                  style={styles.d449E647Cb5C46DaB8C10A1D57Fd8975}
                ></Image>
              </View>
            </View>
            <Center horizontal>
              <Text
                style={
                  styles.pleaseReturnToTheAppIn2HoursAndTakeAnotherThermalSelfie
                }
              >
                Please return to the App in 2 hours and take another Thermal Selfie.
              </Text>
            </Center>
            <Text style={styles.niceShot}>Nice shot!</Text>
            <Text style={styles.lifestyle}>PROJECT KELVIN</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SetReminder")}
              style={styles.button}
            >
              <View style={styles.bg2}>
                <Text style={styles.setReminder}>SET REMINDER</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.bottom}>
              <View style={styles.homeIndicatorLight}>
                <View style={styles.bg1}>
                  <View style={styles.indicator}></View>
                </View>
              </View>
            </View>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      root: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,1)"
      },
      bgWhite: {
        top: 0,
        left: 0,
        height: 812,
        position: "absolute",
        opacity: 1,
        right: 0
      },
      bgWhite1: {
        width: 375,
        height: 812,
        backgroundColor: "rgba(255,255,255,1)",
        opacity: 1
      },
      img: {
        top: 0,
        left: 0,
        height: 453,
        position: "absolute",
        right: 0,
        opacity: 1
      },
      bc092569E2C43B7815Ec368171Df82A: {
        width: 375,
        height: 453,
        backgroundColor: "transparent",
        opacity: 1,
        borderBottomLeftRadius: 80,
        overflow: "hidden"
      },
      d449E647Cb5C46DaB8C10A1D57Fd8975: {
        width: 653,
        height: 453,
        backgroundColor: "transparent",
        opacity: 1,
        marginLeft: -124
      },
      pleaseReturnToTheAppIn2HoursAndTakeAnotherThermalSelfie: {
        width: 298,
        height: 51,
        color: "rgba(118,118,118,1)",
        position: "absolute",
        bottom: 204,
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        textAlign: "center"
      },
      niceShot: {
        top: 501,
        left: 0,
        color: "rgba(0,0,0,1)",
        position: "absolute",
        right: 0,
        opacity: 1,
        fontSize: 32,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 40,
        letterSpacing: -0.51,
        textAlign: "center"
      },
      lifestyle: {
        top: 479,
        left: 0,
        color: "rgba(163,169,175,1)",
        position: "absolute",
        right: 0,
        opacity: 1,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: 1,
        textAlign: "center"
      },
      button: {
        left: 95,
        height: 44,
        position: "absolute",
        right: 96,
        bottom: 135,
        opacity: 1
      },
      bg2: {
        width: 184,
        height: 44,
        backgroundColor: "rgba(95,69,145,1)",
        borderTopLeftRadius: 52,
        borderTopRightRadius: 52,
        borderBottomRightRadius: 52,
        borderBottomLeftRadius: 52
      },
      setReminder: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 18,
        letterSpacing: 0.06,
        textAlign: "center",
        marginTop: 14
      },
      bottom: {
        top: 788,
        left: 0,
        width: 375,
        height: 24,
        position: "absolute",
        opacity: 1
      },
      homeIndicatorLight: {
        width: 375,
        height: 24,
        opacity: 1
      },
      bg1: {
        width: 375,
        height: 24,
        backgroundColor: "transparent"
      },
      indicator: {
        width: 134,
        height: 3,
        backgroundColor: "rgba(85,88,105,1)",
        opacity: 0.5,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        borderBottomRightRadius: 1,
        borderBottomLeftRadius: 1,
        marginTop: 12,
        marginLeft: 121
      },
      bgWhiteStack: {
        height: 812
      }
    });

export default NiceShot;
