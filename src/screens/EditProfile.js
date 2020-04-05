import React, { Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  ImageBackground } from "react-native";
import Svg, { 
    Image as SvgImage,
    Defs,
    Path,
    Mask } from "react-native-svg";
import { NavigationContainer } from '../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../node_modules/@react-navigation/stack';
import { Center } from "../../node_modules/@builderx/utils";
import App from '../../App';

function EditProfile({navigation}) {
    return (
        <ScrollView style={styles.root}>
          <View style={styles.bottomStack}>
            <View style={styles.bottom}>
              <View style={styles.homeIndicatorLight}>
                <View style={styles.bg}>
                  <View style={styles.indicator}></View>
                </View>
              </View>
            </View>

          </View>
          <View style={styles.bg13}>
            <View style={styles.button1Row}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ProfilePage")}
                style={styles.button1}
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
              <Text style={styles.experimentalPopMusicSession1}>Edit Profile</Text>
            </View>
          </View>
          <View style={styles.rect}>
            <View style={styles.text}>
              <Text style={styles.yourGender}>Your Gender.</Text>
            </View>
            <View style={styles.segmentedControl}>
              <View style={styles.bg6}>
                <View style={styles.maleRow}>
                  <Text style={styles.male}>MALE</Text>
                  <View style={styles.bg7}>
                    <Text style={styles.female}>FEMALE</Text>
                  </View>
                </View>
              </View>
            </View>
            <Text style={styles.yourEmailAddress}>Email Address.</Text>
            <TextInput
              placeholder="Enter your Email Address"
              defaultValue="email@email.com"
              style={styles.textInput}
            ></TextInput>
            <View style={styles.bg8}></View>
            <Text style={styles.yourCountry}>Your Country.</Text>
            <TextInput
              placeholder="Enter your Country"
              defaultValue="Bulgaria"
              style={styles.textInput2}
            ></TextInput>
            <View style={styles.bg9}></View>
            <Text style={styles.yourAge}>Your Age.</Text>
            <TextInput
              placeholder="Enter your Age"
              defaultValue="29"
              maxLength={3}
              style={styles.textInput3}
            ></TextInput>
            <View style={styles.bg10}></View>
            <View style={styles.circleRow}>
              <Svg viewBox="-1 -1 24 24" style={styles.circle}>
                <Path
                  strokeWidth={2}
                  fill="transparent"
                  stroke="rgba(231,228,233,1)"
                  fillOpacity={1}
                  strokeOpacity={1}
                  d="M11.00 21.00 C16.52 21.00 21.00 16.52 21.00 11.00 C21.00 5.48 16.52 1.00 11.00 1.00 C5.48 1.00 1.00 5.48 1.00 11.00 C1.00 16.52 5.48 21.00 11.00 21.00 Z"
                ></Path>
              </Svg>
              <View style={styles.group2}>
                <Text style={styles.allowLocationOfTheDevice}>
                  Allow Location of the Device
                </Text>
                <Text style={styles.inOrderToProvideYouAccurateResults}>
                  In order to provide you Accurate Results
                </Text>
              </View>
            </View>
            <View style={styles.group}>
              <View style={styles.bg11}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("ProfilePage")}
                  style={styles.button2}
                >
                  <View style={styles.bg12Stack}>
                    <Svg viewBox="-0 -0 327 52" style={styles.bg12}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M26.00 0.00 L301.00 0.00 C315.36 0.00 327.00 11.64 327.00 26.00 C327.00 40.36 315.36 52.00 301.00 52.00 L26.00 52.00 C11.64 52.00 0.00 40.36 0.00 26.00 C0.00 11.64 11.64 0.00 26.00 0.00 Z"
                      ></Path>
                    </Svg>
                    <Text style={styles.saveChanges}>SAVE CHANGES</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      );
    }
    
    const styles = StyleSheet.create({
      root: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,1)"
      },
      bottom: {
        top: 100,
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
      bg: {
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
      group: {
        bottom: 0,
        marginTop: 180,
        left: 0,
        height: 124,
        position: "relative",
        right: 0
      },
      bg11: {
        backgroundColor: "rgba(36,19,50,1)",
        borderTopLeftRadius: 60,
        flex: 1
      },
      button2: {
        width: 327,
        height: 52,
        opacity: 1,
        marginLeft: 24
      },
      bg12: {
        bottom: 0,
        left: 0,
        width: 327,
        height: 52,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      saveChanges: {
        top: 15,
        left: 89,
        color: "rgba(53,38,65,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 26,
        letterSpacing: 0.07,
        textAlign: "center"
      },
      bg12Stack: {
        width: 327,
        height: 52
      },
      bottomStack: {
        height: 124,
        marginTop: 688
      },
      bg13: {
        height: 156,
        backgroundColor: "rgba(36,19,50,1)",
        borderBottomLeftRadius: 80,
        flexDirection: "row",
        marginTop: -811
      },
      button1: {
        width: 24,
        height: 24,
        opacity: 1,
        marginTop: 4
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
      experimentalPopMusicSession1: {
        width: 320,
        height: 36,
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 36,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 36,
        letterSpacing: -0.42,
        marginLeft: 12
      },
      button1Row: {
        height: 32,
        flexDirection: "row",
        flex: 1,
        marginLeft: 19,
        marginTop: 64
      },
      rect: {
        width: 335,
        height: 474,
        marginTop: 38,
        marginLeft: 20
      },
      text: {
        width: 300,
        height: 50,
        opacity: 1,
        marginLeft: 1
      },
      yourGender: {
        color: "rgba(0,0,0,1)",
        opacity: 1,
        fontSize: 32,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 40,
        letterSpacing: -0.51
      },
      segmentedControl: {
        height: 44,
        opacity: 1
      },
      bg6: {
        width: 335,
        height: 44,
        backgroundColor: "rgba(53,38,65,1)",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        flexDirection: "row"
      },
      male: {
        color: "rgba(255,255,255,1)",
        opacity: 0.6,
        fontSize: 12,
        fontFamily: "Roboto",
        fontWeight: "700",
        marginTop: 10
      },
      bg7: {
        width: 158,
        height: 36,
        backgroundColor: "rgba(95,69,145,1)",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        marginLeft: 73
      },
      female: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 12,
        fontFamily: "Roboto",
        fontWeight: "700",
        textAlign: "center",
        marginTop: 11,
        marginLeft: 8
      },
      maleRow: {
        height: 36,
        flexDirection: "row",
        flex: 1,
        marginRight: 4,
        marginLeft: 64,
        marginTop: 4
      },
      yourEmailAddress: {
        color: "rgba(0,0,0,1)",
        opacity: 1,
        fontSize: 32,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 40,
        letterSpacing: -0.51,
        marginTop: 24,
        marginLeft: 4
      },
      textInput: {
        width: 201,
        height: 20,
        color: "rgba(36,19,50,1)",
        opacity: 0.32,
        fontSize: 16,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.16,
        marginTop: 12,
        marginLeft: 8
      },
      bg8: {
        width: 327,
        height: 2,
        backgroundColor: "rgba(53,38,65,1)",
        opacity: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        marginTop: 7,
        marginLeft: 4
      },
      yourCountry: {
        color: "rgba(0,0,0,1)",
        opacity: 1,
        fontSize: 32,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 40,
        letterSpacing: -0.51,
        marginTop: 25,
        marginLeft: 4
      },
      textInput2: {
        width: 152,
        height: 20,
        color: "rgba(36,19,50,1)",
        opacity: 0.32,
        fontSize: 16,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.16,
        marginTop: 12,
        marginLeft: 8
      },
      bg9: {
        width: 327,
        height: 2,
        backgroundColor: "rgba(53,38,65,1)",
        opacity: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        marginTop: 7,
        marginLeft: 4
      },
      yourAge: {
        color: "rgba(0,0,0,1)",
        opacity: 1,
        fontSize: 32,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 40,
        letterSpacing: -0.51,
        marginTop: 25,
        marginLeft: 4
      },
      textInput3: {
        width: 119,
        height: 20,
        color: "rgba(36,19,50,1)",
        opacity: 0.32,
        fontSize: 16,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.16,
        marginTop: 12,
        marginLeft: 8
      },
      bg10: {
        width: 327,
        height: 2,
        backgroundColor: "rgba(53,38,65,1)",
        opacity: 1,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        marginTop: 7,
        marginLeft: 4
      },
      circle: {
        width: 24,
        height: 24,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: 6
      },
      group2: {
        width: 244,
        height: 36,
        marginLeft: 18
      },
      allowLocationOfTheDevice: {
        color: "rgba(36,19,50,1)",
        opacity: 1,
        fontSize: 16,
        fontFamily: "Roboto",
        lineHeight: 16,
        letterSpacing: -0.16
      },
      inOrderToProvideYouAccurateResults: {
        color: "rgba(153,143,162,1)",
        opacity: 1,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 12,
        letterSpacing: -0.12,
        marginTop: 4
      },
      circleRow: {
        height: 36,
        flexDirection: "row",
        marginTop: 27,
        marginLeft: 4,
        marginRight: 45
      }
    });

export default EditProfile;
