import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Svg, { Path, Stop, Defs, LinearGradient } from "react-native-svg";
import { NavigationContainer } from '../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../node_modules/@react-navigation/stack';
import { Center } from "../../node_modules/@builderx/utils";
import App from '../../App';

function ProfileInfo3({navigation}) {
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
              <Text style={styles.personalInfo}>Your Age.</Text>
              <View style={styles.style1}>
                <View style={styles.ellipse8114Stack}>
                  <Svg viewBox="-0 -0 52 52" style={styles.ellipse8114}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(129,120,137,1)"
                      fillOpacity={0.21493299305439}
                      strokeOpacity={0.21493299305439}
                      d="M26.00 52.00 C40.36 52.00 52.00 40.36 52.00 26.00 C52.00 11.64 40.36 0.00 26.00 0.00 C11.64 0.00 0.00 11.64 0.00 26.00 C0.00 40.36 11.64 52.00 26.00 52.00 Z"
                    ></Path>
                  </Svg>
                  <View style={styles.x2}>
                    <Svg viewBox="-1 -1 16 16" style={styles.line280}>
                      <Path
                        strokeWidth={2}
                        fill="transparent"
                        stroke="rgba(255,255,255,1)"
                        fillOpacity={0.472297996282578}
                        strokeOpacity={0.472297996282578}
                        d="M13.00 1.00 L1.00 13.00 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
              <View style={styles.style2}>
                <View style={styles.ellipse8115Stack}>
                  <Svg viewBox="-0 -0 52 52" style={styles.ellipse8115}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(95,69,145,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M26.00 52.00 C40.36 52.00 52.00 40.36 52.00 26.00 C52.00 11.64 40.36 0.00 26.00 0.00 C11.64 0.00 0.00 11.64 0.00 26.00 C0.00 40.36 11.64 52.00 26.00 52.00 Z"
                    ></Path>
                  </Svg>
                  <View style={styles.x1}>
                    <View style={styles.line2801Stack}>
                      <Svg viewBox="-1 -1 16 16" style={styles.line2801}>
                        <Path
                          strokeWidth={2}
                          fill="transparent"
                          stroke="rgba(255,255,255,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M13.00 1.00 L1.00 13.00 "
                        ></Path>
                      </Svg>
                      <Svg viewBox="-1 -1 16 16" style={styles.line281}>
                        <Path
                          strokeWidth={2}
                          fill="transparent"
                          stroke="rgba(255,255,255,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M1.00 1.00 L13.00 13.00 "
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                </View>
              </View>
              <Center horizontal>
                <Text style={styles.style3}>29</Text>
              </Center>
              <View style={styles.img1}>
                <View style={styles.fb79Ef332A8D4E3AAef346342C7Aca83}>
                  <Image
                    source={require("../assets/images/cb9da6be70297a871cc09fe1c576e4709c56ec07.png")}
                    resizeMode="cover"
                    style={styles.b441B282440451298A8B950Faea0B1F}
                  ></Image>
                </View>
              </View>
            </View>
            <View style={styles.bgGradientStackFiller}></View>
            <View style={styles.rect3Row}>
              <View style={styles.rect3}>
                <View style={styles.button222Stack}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ProfileInfo2")}
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
              <View style={styles.rect3Filler}></View>
              <TouchableOpacity
                onPress={() => navigation.navigate("ProfileInfo4")}
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
      style1: {
        top: 565,
        left: 25,
        width: 54,
        height: 52,
        position: "absolute",
        opacity: 1
      },
      ellipse8114: {
        top: 0,
        left: 0,
        width: 52,
        height: 52,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      x2: {
        top: 20,
        left: 20,
        width: 12,
        height: 12,
        position: "absolute",
        opacity: 1,
        transform: [
          {
            rotate: "45deg"
          }
        ]
      },
      line280: {
        width: 16,
        height: 16,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: -1,
        marginLeft: -1
      },
      ellipse8114Stack: {
        width: 52,
        height: 52,
        marginLeft: 2
      },
      style2: {
        top: 565,
        width: 54,
        height: 52,
        position: "absolute",
        right: 26,
        opacity: 1
      },
      ellipse8115: {
        top: 0,
        left: 0,
        width: 52,
        height: 52,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      x1: {
        top: 20,
        left: 20,
        width: 12,
        height: 12,
        position: "absolute",
        opacity: 1,
        transform: [
          {
            rotate: "45deg"
          }
        ]
      },
      line2801: {
        top: 0,
        left: 0,
        width: 16,
        height: 16,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      line281: {
        top: 0,
        left: 0,
        width: 16,
        height: 16,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      line2801Stack: {
        width: 16,
        height: 16,
        marginTop: -1,
        marginLeft: -1
      },
      ellipse8115Stack: {
        width: 52,
        height: 52,
        marginLeft: 2
      },
      style3: {
        top: 551,
        color: "rgba(95,69,145,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 80,
        fontFamily: "Roboto",
        lineHeight: 80,
        letterSpacing: -1.29
      },
      img1: {
        top: 45,
        left: 0,
        height: 380,
        position: "absolute",
        right: 0,
        opacity: 1
      },
      fb79Ef332A8D4E3AAef346342C7Aca83: {
        width: 375,
        height: 380,
        backgroundColor: "transparent",
        opacity: 1,
        borderTopRightRadius: 80,
        borderBottomLeftRadius: 80,
        overflow: "hidden"
      },
      b441B282440451298A8B950Faea0B1F: {
        width: 375,
        height: 380,
        backgroundColor: "transparent",
        opacity: 1,
        marginTop: -55,
      },
      bgGradientStack: {
        height: 631
      },
      bgGradientStackFiller: {
        flex: 1
      },
      rect3: {
        width: 54,
        height: 52,
        transform: [
          {
            rotate: "-180.00deg"
          }
        ],
        alignSelf: "flex-end"
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
        fontWeight: "700",
        lineHeight: 43,
        letterSpacing: 0,
        textAlign: "center"
      },
      button222Stack: {
        height: 52
      },
      rect3Filler: {
        flex: 1,
        flexDirection: "row"
      },
      button223: {
        width: 54,
        height: 52,
        alignSelf: "flex-end"
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
        fontWeight: "700",
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
        marginBottom: 43,
        marginLeft: 127,
        marginRight: 127
      }
    });

export default ProfileInfo3;
