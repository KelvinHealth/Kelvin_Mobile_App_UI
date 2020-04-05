import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Svg, { Path, Stop, Defs, LinearGradient } from "react-native-svg";
import { NavigationContainer } from '../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../node_modules/@react-navigation/stack';
import { Center } from "../../node_modules/@builderx/utils";
import App from '../../App';

function ConnectCamera({navigation}) {
    return (
        <View style={styles.root}>
          <ImageBackground
            source={require("../assets/images/bg-kelvin2.jpg")}
            resizeMode="cover"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <View style={styles.usbColumn}>
              <View style={styles.usb}>
                <View style={styles.a51C8046DcBe28920B09786841}>
                  <Image
                    source={require("../assets/images/36ccee1ad6769bf5d2fd04b510bb0d232242cb4e.png")}
                    resizeMode="cover"
                    style={styles.c3273F04520A7622Adb966C5F4C}
                  ></Image>
                </View>
              </View>
              <Text style={styles.connectTheCamera}>Connect The Camera</Text>
            </View>
            <View style={styles.usbColumnFiller}></View>
            <TouchableOpacity
              onPress={() => navigation.navigate("QuickTest")}
              style={styles.button}
            >
              <View style={styles.bg9}>
                <Text style={styles.continue}>CONTINUE</Text>
              </View>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      root: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,1)"
      },
      image: {
        width: 375,
        height: 812
      },
      image_imageStyle: {},
      usb: {
        width: 296,
        height: 281,
        opacity: 1,
        marginLeft: 32
      },
      a51C8046DcBe28920B09786841: {
        width: 296,
        height: 281,
        backgroundColor: "transparent",
        opacity: 1,
        overflow: "hidden"
      },
      c3273F04520A7622Adb966C5F4C: {
        width: 296,
        height: 281,
        backgroundColor: "transparent",
        opacity: 1
      },
      connectTheCamera: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 26,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 26,
        letterSpacing: -0.42,
        textAlign: "center",
        marginTop: 50
      },
      usbColumn: {
        marginTop: 111,
        marginRight: 15
      },
      usbColumnFiller: {
        flex: 1
      },
      button: {
        width: 157,
        height: 56,
        alignSelf: "flex-end",
        marginBottom: 146,
        marginRight: 15
      },
      bg9: {
        backgroundColor: "rgba(95,69,145,1)",
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30,
        flex: 1
      },
      continue: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 18,
        textAlign: "center",
        marginTop: 20,
        marginLeft: 25
      }
    });

export default ConnectCamera;
