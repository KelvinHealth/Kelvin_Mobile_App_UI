import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Svg, { Path, Stop, Defs, LinearGradient } from "react-native-svg";
import { NavigationContainer } from '../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../node_modules/@react-navigation/stack';
import { Center } from "../../node_modules/@builderx/utils";
import App from '../../App';

function Dashboard({navigation}) {
    return (
        <View style={styles.root}>
          <View style={styles.button5Stack}>
            <TouchableOpacity
              onPress={() => navigation.navigate("UsefulStats")}
              style={styles.button5}
            >
              <View style={styles.e419A5FCfca4Fe4Ae9FBa247B3344BcStack}>
                <View style={styles.e419A5FCfca4Fe4Ae9FBa247B3344Bc}>
                  <Image
                    source={require("../assets/images/7240bb136c749682da41113028e22c27bb65ac85.png")}
                    resizeMode="cover"
                    style={styles.f6A610D895D74Db7Ae670653Fb8Ebe4B}
                  ></Image>
                </View>
                <View style={styles.overlay4}>
                  <View style={styles.endWrapperFiller}></View>
                  <View style={styles.usefulStatsColumn}>
                    <Text style={styles.usefulStats}>Useful Stats</Text>
                    <Text style={styles.whatIsHappeningAroundYou}>
                      What is happening around you
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
              style={styles.button4}
            >
              <View style={styles.inboxStack}>
                <View style={styles.inbox}>
                  <View style={styles.acc390B8A01F4A2Eb3Cd40F2B2E6Cad2}>
                    <Image
                      source={require("../assets/images/e41ca49b42e7b178d15d120c6b0e6d450cd1a2bc.png")}
                      resizeMode="cover"
                      style={styles.f8B095E796Da43BbA451D3B36D176F53}
                    ></Image>
                  </View>
                </View>
                <View style={styles.overlay1}>
                  <View style={styles.endWrapperFiller}></View>
                  <View style={styles.yourInboxColumn}>
                    <Text style={styles.yourInbox}>Your Inbox</Text>
                    <Text style={styles.whatIsYourDoctorSaying}>
                      What is your Doctor saying
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ConnectCamera")}
              style={styles.button3}
            >
              <View style={styles.testStack}>
                <View style={styles.test}>
                  <View style={styles.dbf42Bf70C34311B5B97270Cf79Be97}>
                    <Image
                      source={require("../assets/images/181d1d466187389b40879ec54225149769f7ed67.png")}
                      resizeMode="cover"
                      style={styles.ceed27D902Bb41378DcdF3842875A858}
                    ></Image>
                  </View>
                </View>
                <View style={styles.overlay2}>
                  <View style={styles.endWrapperFiller}></View>
                  <View style={styles.quickTestColumn}>
                    <Text style={styles.quickTest}>Quick Test</Text>
                    <Text style={styles.justInFewThermalSelfies}>
                      Just in few Thermal Selfies...
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfilePage")}
              style={styles.button2}
            >
              <View style={styles.bg1Stack}>
                <View style={styles.bg1}>
                  <View style={styles.e31B2A394D4Ba9Af0Df6Fc3794Bbbb}>
                    <Image
                      source={require("../assets/images/1361f9c90be49801a6f7a058d47da6c3847a0080.png")}
                      resizeMode="cover"
                      style={styles.e8978612A54E4DebA42254Acd7Bff016}
                    ></Image>
                  </View>
                </View>
                <View style={styles.overlay3}>
                  <View style={styles.endWrapperFiller}></View>
                  <View style={styles.profilePageColumn}>
                    <Text style={styles.profilePage}>Profile Page</Text>
                    <Text style={styles.yourPersonalPage}>Your Personal Page</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.bg5}>
              <View style={styles.button6Row}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("MainMenu")}
                  style={styles.button6}
                >
                  <View style={styles.bg7}>
                    <Svg viewBox="-0 -0 20 13.5" style={styles.path1}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(36,19,50,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M19.00 6.00 C19.00 6.00 19.81 6.00 19.97 6.72 C19.91 7.02 19.69 7.50 19.00 7.50 C19.00 7.50 1.00 7.50 1.00 7.50 C1.00 7.50 0.19 7.50 0.03 6.78 C0.09 6.48 0.31 6.00 1.00 6.00 Z M19.97 6.72 C20.00 6.59 20.00 6.50 20.00 6.50 C20.00 6.50 20.00 7.00 20.00 7.00 C20.00 6.90 19.99 6.81 19.97 6.72 Z M0.03 6.78 C0.00 6.91 0.00 7.00 0.00 7.00 C0.00 7.00 0.00 6.50 0.00 6.50 C0.00 6.60 0.01 6.69 0.03 6.78 Z M11.00 0.00 C11.00 0.00 11.81 0.00 11.97 0.72 C11.91 1.02 11.69 1.50 11.00 1.50 C11.00 1.50 1.00 1.50 1.00 1.50 C1.00 1.50 0.19 1.50 0.03 0.78 C0.09 0.48 0.31 0.00 1.00 0.00 Z M11.97 0.72 C12.00 0.59 12.00 0.50 12.00 0.50 C12.00 0.50 12.00 1.00 12.00 1.00 C12.00 0.90 11.99 0.81 11.97 0.72 Z M0.03 0.78 C0.00 0.91 0.00 1.00 0.00 1.00 C0.00 1.00 0.00 0.50 0.00 0.50 C0.00 0.60 0.01 0.69 0.03 0.78 Z M0.00 1.00 C0.00 1.00 0.00 0.00 0.00 0.00 Z M19.00 12.00 C19.00 12.00 19.81 12.00 19.97 12.72 C19.91 13.02 19.69 13.50 19.00 13.50 C19.00 13.50 9.00 13.50 9.00 13.50 C9.00 13.50 8.19 13.50 8.03 12.78 C8.09 12.48 8.31 12.00 9.00 12.00 Z M19.97 12.72 C20.00 12.59 20.00 12.50 20.00 12.50 C20.00 12.50 20.00 13.00 20.00 13.00 C20.00 12.90 19.99 12.81 19.97 12.72 Z M8.03 12.78 C8.00 12.91 8.00 13.00 8.00 13.00 C8.00 13.00 8.00 12.50 8.00 12.50 C8.00 12.60 8.01 12.69 8.03 12.78 Z"
                      ></Path>
                    </Svg>
                  </View>
                </TouchableOpacity>
                <Text style={styles.experimentalPopMusicSession}>Dashboard</Text>
              </View>
              <View style={styles.button6RowFiller}></View>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditProfile")}
                style={styles.button7}
              >
                <View style={styles.bg8}>
                  <Svg viewBox="-0 -0 18 18" style={styles.ed4DdeA62383980Deabc09}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(120,132,158,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M0.98 13.13 C0.98 13.13 0.00 10.43 0.00 9.00 C0.00 4.01 4.01 0.00 9.00 0.00 C13.99 0.00 18.00 4.01 18.00 9.00 C18.00 13.99 13.99 18.00 9.00 18.00 C7.57 18.00 4.91 17.02 4.91 17.02 L2.21 17.67 L0.33 15.79 L0.98 13.13 Z M1.92 16.04 L4.79 15.34 C4.79 15.34 5.24 15.30 5.40 15.42 C6.50 16.04 7.73 16.36 9.00 16.36 C13.05 16.36 16.36 13.05 16.36 9.00 C16.36 4.95 13.05 1.64 9.00 1.64 C4.95 1.64 1.64 4.95 1.64 9.00 C1.64 10.27 1.96 11.50 2.58 12.60 C2.70 12.80 2.66 13.21 2.66 13.21 L1.92 16.04 Z M5.32 8.18 C5.32 8.18 4.50 7.81 4.50 7.36 C4.50 6.91 5.32 6.55 5.32 6.55 L12.68 6.55 C12.68 6.55 13.50 6.91 13.50 7.36 C13.50 7.81 12.68 8.18 12.68 8.18 Z M7.77 11.45 C7.77 11.45 6.95 11.09 6.95 10.64 C6.95 10.19 7.77 9.82 7.77 9.82 L12.68 9.82 C12.68 9.82 13.50 10.19 13.50 10.64 C13.50 11.09 12.68 11.45 12.68 11.45 Z"
                    ></Path>
                  </Svg>
                </View>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("ConnectCamera")}
              style={styles.button8}
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
                <Text style={styles.loremIpsum3}>+</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      root: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,1)"
      },
      button5: {
        top: 526,
        left: 0,
        width: 375,
        height: 246,
        position: "absolute",
        opacity: 1
      },
      e419A5FCfca4Fe4Ae9FBa247B3344Bc: {
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        position: "absolute",
        opacity: 1,
        borderBottomLeftRadius: 80,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.07843137254902)",
        shadowOpacity: 1,
        shadowRadius: 16,
        overflow: "hidden",
        right: 0,
        bottom: 0
      },
      f6A610D895D74Db7Ae670653Fb8Ebe4B: {
        width: 375,
        height: 250,
        backgroundColor: "transparent",
        opacity: 1,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.07843137254902)",
        shadowOpacity: 1,
        shadowRadius: 16,
        marginTop: -2,
      },
      overlay4: {
        top: 0,
        left: 0,
        width: 375,
        height: 246,
        backgroundColor: "rgba(0,0,0,0.16)",
        position: "absolute",
        borderBottomLeftRadius: 80
      },
      endWrapperFiller: {
        flex: 1
      },
      usefulStats: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 36,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 36,
        marginBottom: 2
      },
      whatIsHappeningAroundYou: {
        color: "rgba(255,255,255,1)",
        opacity: 0.72,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 22
      },
      usefulStatsColumn: {
        width: 198,
        marginBottom: 20,
        marginLeft: 56
      },
      e419A5FCfca4Fe4Ae9FBa247B3344BcStack: {
        flex: 1
      },
      button4: {
        top: 372,
        left: 0,
        width: 375,
        height: 246,
        position: "absolute",
        opacity: 1
      },
      inbox: {
        top: 13,
        left: 0,
        width: 375,
        height: 233,
        position: "absolute",
        opacity: 1
      },
      acc390B8A01F4A2Eb3Cd40F2B2E6Cad2: {
        width: 375,
        height: 233,
        backgroundColor: "transparent",
        opacity: 1,
        borderBottomLeftRadius: 80,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.07843137254902)",
        shadowOpacity: 1,
        shadowRadius: 16,
        overflow: "hidden"
      },
      f8B095E796Da43BbA451D3B36D176F53: {
        width: 375,
        height: 263,
        backgroundColor: "transparent",
        opacity: 1,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.07843137254902)",
        shadowOpacity: 1,
        shadowRadius: 16,
        marginTop: 14,
      },
      overlay1: {
        top: 0,
        left: 0,
        width: 375,
        height: 246,
        backgroundColor: "rgba(0,0,0,0.16)",
        position: "absolute",
        borderBottomLeftRadius: 80
      },
      yourInbox: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 36,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 36,
        marginBottom: 2
      },
      whatIsYourDoctorSaying: {
        color: "rgba(255,255,255,1)",
        opacity: 0.72,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 22
      },
      yourInboxColumn: {
        width: 173,
        marginBottom: 19,
        marginLeft: 53
      },
      inboxStack: {
        width: 375,
        height: 246
      },
      button3: {
        top: 223,
        left: 0,
        width: 375,
        height: 241,
        position: "absolute",
        opacity: 1
      },
      test: {
        top: 22,
        left: 0,
        width: 375,
        height: 219,
        position: "absolute",
        opacity: 1
      },
      dbf42Bf70C34311B5B97270Cf79Be97: {
        width: 375,
        height: 219,
        backgroundColor: "transparent",
        opacity: 1,
        borderBottomLeftRadius: 80,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.07843137254902)",
        shadowOpacity: 1,
        shadowRadius: 16,
        overflow: "hidden"
      },
      ceed27D902Bb41378DcdF3842875A858: {
        width: 375,
        height: 299,
        backgroundColor: "transparent",
        opacity: 1,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.07843137254902)",
        shadowOpacity: 1,
        shadowRadius: 16,
        marginTop: -40,
      },
      overlay2: {
        top: 0,
        left: 0,
        width: 375,
        height: 241,
        backgroundColor: "rgba(0,0,0,0.16)",
        position: "absolute",
        borderBottomLeftRadius: 80
      },
      quickTest: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 36,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 36,
        marginBottom: 6
      },
      justInFewThermalSelfies: {
        color: "rgba(255,255,255,1)",
        opacity: 0.72,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 22
      },
      quickTestColumn: {
        width: 179,
        marginBottom: 19,
        marginLeft: 42
      },
      testStack: {
        width: 375,
        height: 241
      },
      button2: {
        top: 0,
        left: 0,
        width: 375,
        height: 310,
        position: "absolute",
        opacity: 1
      },
      bg1: {
        top: 63,
        left: 0,
        width: 375,
        height: 247,
        position: "absolute",
        opacity: 1
      },
      e31B2A394D4Ba9Af0Df6Fc3794Bbbb: {
        width: 375,
        height: 247,
        backgroundColor: "transparent",
        opacity: 1,
        borderBottomLeftRadius: 80,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.07843137254902)",
        shadowOpacity: 1,
        shadowRadius: 16,
        overflow: "hidden"
      },
      e8978612A54E4DebA42254Acd7Bff016: {
        width: 375,
        height: 332,
        backgroundColor: "transparent",
        opacity: 1,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.07843137254902)",
        shadowOpacity: 1,
        shadowRadius: 16,
        marginTop: -43,
      },
      overlay3: {
        top: 0,
        left: 0,
        width: 375,
        height: 310,
        backgroundColor: "rgba(0,0,0,0.33)",
        position: "absolute",
        borderBottomLeftRadius: 80
      },
      profilePage: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 36,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 36,
        marginBottom: 5
      },
      yourPersonalPage: {
        color: "rgba(255,255,255,1)",
        opacity: 0.72,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 22
      },
      profilePageColumn: {
        width: 250,
        marginBottom: 19,
        marginLeft: 42
      },
      bg1Stack: {
        width: 375,
        height: 310
      },
      bg5: {
        top: 20,
        left: 0,
        height: 135,
        backgroundColor: "rgba(255,255,255,1)",
        position: "absolute",
        borderBottomLeftRadius: 80,
        right: 0,
        flexDirection: "row"
      },
      button6: {
        width: 24,
        height: 24,
        opacity: 1,
        marginTop: 6
      },
      bg7: {
        width: 24,
        height: 24,
        backgroundColor: "transparent"
      },
      path1: {
        width: 20,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: 5,
        marginLeft: 2
      },
      experimentalPopMusicSession: {
        color: "rgba(0,0,0,1)",
        opacity: 1,
        fontSize: 36,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 36,
        letterSpacing: -0.42,
        marginLeft: 45
      },
      button6Row: {
        height: 36,
        flexDirection: "row",
        marginLeft: 25,
        marginTop: 60
      },
      button6RowFiller: {
        flex: 1,
        flexDirection: "row"
      },
      button7: {
        width: 24,
        height: 24,
        opacity: 1,
        marginRight: 20,
        marginTop: 66
      },
      bg8: {
        width: 24,
        height: 24,
        backgroundColor: "transparent"
      },
      ed4DdeA62383980Deabc09: {
        width: 18,
        height: 18,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: 3,
        marginLeft: 3
      },
      button8: {
        width: 54,
        height: 52,
        position: "absolute",
        right: 20,
        bottom: 24
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
      button5Stack: {
        height: 772,
        marginTop: -48
      }
    });

export default Dashboard;
