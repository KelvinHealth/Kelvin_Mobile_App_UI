import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image, TouchableOpacity } from "react-native";
import Svg, { Path, Stop, Defs, LinearGradient } from "react-native-svg";
import { NavigationContainer } from '../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../node_modules/@react-navigation/stack';
import { Center } from "../../node_modules/@builderx/utils";
import App from '../../App';

function ProfileInfo1({navigation}) {
  return (
    <View style={styles.root}>
      <View style={styles.bg2}>
        <View style={styles.bgGradientStack}>
          <ImageBackground
            style={styles.bgGradient}
            imageStyle={styles.bgGradient_imageStyle}
            source={require("../assets/images/Gradient_GvJFG0A.png")}
          ></ImageBackground>
          <Svg viewBox="-0 -0 375 605.1826171875" style={styles.bg1}>
            <Path
              strokeWidth={0}
              fill="rgba(255,255,255,1)"
              fillOpacity={1}
              strokeOpacity={1}
              d="M0.00 0.00 L375.00 0.00 L375.00 605.18 L0.00 605.18 Z"
            ></Path>
          </Svg>
          <Text style={styles.personalInfo}>Personal Info.</Text>
          <View style={styles.img}>
            <View style={styles.c2D47Ed03911499684Ca32Acef4Eff30}>
              <Image
                source={require("../assets/images/36fe60d7429b94a375cb8bccbc609987f4fdbf38.png")}
                resizeMode="cover"
                style={styles.a488410A241C9Bfcf998E9Ab0Adb5}
              ></Image>
            </View>
          </View>
          <Text style={styles.loremIpsum4}>
            It is of key importance that we know certain Personal Details about
            you, in order to provide you maximally-correct results of your
            Health Status. Please move forward and fulfill the input fields.
          </Text>
        </View>
        <View style={styles.bgGradientStackFiller}></View>
        <View style={styles.endWrapperFillerRow}>
          <View style={styles.endWrapperFiller}></View>
          <View style={styles.rect3Row}>
            <View style={styles.rect3}>
              <View style={styles.button222Stack}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Welcome")}
                  style={styles.button222}
                >
                  <Svg viewBox="-0 -0 52 52" style={styles.ellipse8112}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(144,144,144,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M26.00 52.00 C40.36 52.00 52.00 40.36 52.00 26.00 C52.00 11.64 40.36 0.00 26.00 0.00 C11.64 0.00 0.00 11.64 0.00 26.00 C0.00 40.36 11.64 52.00 26.00 52.00 Z"
                    ></Path>
                  </Svg>
                </TouchableOpacity>
                <Text style={styles.loremIpsum2}>&gt;</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfileInfo2")}
              style={styles.button223}
            >
              <View style={styles.rect2Stack}>
                <View style={styles.rect2}>
                  <Svg viewBox="-0 -0 52 52" style={styles.ellipse8113}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(95,69,145,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M26.00 52.00 C40.36 52.00 52.00 40.36 52.00 26.00 C52.00 11.64 40.36 0.00 26.00 0.00 C11.64 0.00 0.00 11.64 0.00 26.00 C0.00 40.36 11.64 52.00 26.00 52.00 Z"
                    ></Path>
                  </Svg>
                </View>
                <Text style={styles.loremIpsum3}>&gt;</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(240,240,240,1)"
  },
  bg2: {
    backgroundColor: "rgba(247,247,250,1)",
    flex: 1
  },
  bgGradient: {
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    position: "absolute",
    right: 0,
    height: 0,
    width: 0,
    opacity: 0
  },
  bgGradient_imageStyle: {
    opacity: 1
  },
  bg1: {
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "transparent",
    right: 0,
    height: 0,
    width: 0,
    opacity: 0
  },
  personalInfo: {
    top: 442,
    left: 25,
    color: "rgba(0,0,0,1)",
    position: "absolute",
    opacity: 1,
    fontSize: 32,
    fontFamily: "Roboto",
    fontWeight: "700",
    lineHeight: 40,
    letterSpacing: -0.51
  },
  img: {
    top: 45,
    left: 0,
    height: 380,
    position: "absolute",
    right: 0,
    opacity: 1
  },
  c2D47Ed03911499684Ca32Acef4Eff30: {
    width: 375,
    height: 380,
    backgroundColor: "transparent",
    opacity: 1,
    borderTopRightRadius: 130,
    borderBottomLeftRadius: 130,
    overflow: "hidden"
  },
  a488410A241C9Bfcf998E9Ab0Adb5: {
    width: 375,
    height: 380,
    backgroundColor: "transparent",
    opacity: 1
  },
  loremIpsum4: {
    top: 495,
    left: 25,
    color: "rgba(59,59,59,1)",
    position: "absolute",
    right: 10,
    fontSize: 18,
    fontFamily: "Roboto",
    lineHeight: 20,
    letterSpacing: 0
  },
  bgGradientStack: {
    height: 605
  },
  bgGradientStackFiller: {
    flex: 1
  },
  endWrapperFiller: {
    flex: 1,
    flexDirection: "row"
  },
  rect3: {
    width: 54,
    height: 52,
    transform: [
      {
        rotate: "-180.00deg"
      }
    ],
    marginRight: 13
  },
  button222: {
    top: 0,
    left: 0,
    height: 52,
    position: "absolute",
    opacity: 1,
    right: 0
  },
  ellipse8112: {
    width: 52,
    height: 52,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 2
  },
  loremIpsum2: {
    top: 4,
    left: 18,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 36,
    fontFamily: "Roboto",
    lineHeight: 43,
    letterSpacing: 0,
    textAlign: "center"
  },
  button222Stack: {
    height: 52
  },
  button223: {
    width: 54,
    height: 52
  },
  rect2: {
    top: 0,
    left: 0,
    height: 52,
    position: "absolute",
    opacity: 1,
    right: 0
  },
  ellipse8113: {
    width: 52,
    height: 52,
    backgroundColor: "transparent",
    borderColor: "transparent",
    marginLeft: 2
  },
  loremIpsum3: {
    top: 4,
    left: 18,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 36,
    fontFamily: "Roboto",
    lineHeight: 43,
    letterSpacing: 0,
    textAlign: "center"
  },
  rect2Stack: {
    height: 52
  },
  rect3Row: {
    height: 52,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  endWrapperFillerRow: {
    height: 52,
    flexDirection: "row",
    marginBottom: 63,
    marginLeft: 127,
    marginRight: 127
  }
});

export default ProfileInfo1;
