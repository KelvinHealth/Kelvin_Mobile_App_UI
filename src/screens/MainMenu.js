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

function MainMenu({navigation}) {
    return (
        <View style={styles.root}>
          <View style={styles.bg11Stack}>
            <View style={styles.bg11}>
              <View style={styles.kelvinIncRow}>
                <Text style={styles.kelvinInc}>Kelvin Inc.</Text>
                <View style={styles.bg13}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Dashboard")}
                    style={styles.button7}
                  >
                    <Svg viewBox="-0 -0 16 16" style={styles.path245}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M15.00 7.25 C15.00 7.25 15.81 7.25 15.97 7.97 C15.91 8.27 15.69 8.75 15.00 8.75 C15.00 8.75 8.70 8.75 8.70 8.75 C8.62 9.43 8.42 10.49 7.94 11.60 C7.59 10.80 7.35 9.86 7.27 8.75 C7.27 8.75 1.00 8.75 1.00 8.75 C1.00 8.75 0.19 8.75 0.03 8.03 C0.09 7.73 0.31 7.25 1.00 7.25 C1.00 7.25 7.30 7.25 7.30 7.25 C7.38 6.57 7.58 5.51 8.06 4.40 C8.41 5.20 8.65 6.14 8.73 7.25 Z M15.97 7.97 C16.00 7.84 16.00 7.75 16.00 7.75 C16.00 7.75 16.00 8.25 16.00 8.25 C16.00 8.15 15.99 8.06 15.97 7.97 Z M0.03 8.03 C0.00 8.16 0.00 8.25 0.00 8.25 C0.00 8.25 0.00 7.75 0.00 7.75 C0.00 7.85 0.01 7.94 0.03 8.03 Z M15.25 0.00 C10.98 0.00 8.99 2.28 8.06 4.40 C6.12 0.00 0.75 0.00 0.75 0.00 Z M7.94 11.60 C9.88 16.00 15.25 16.00 15.25 16.00 C15.25 16.00 0.75 16.00 0.75 16.00 C5.02 16.00 7.01 13.72 7.94 11.60 Z"
                      ></Path>
                    </Svg>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={styles.kelvinHealth}>@kelvin_health</Text>
              <View style={styles.group}>
                <TouchableOpacity style={styles.button}
                onPress={() => navigation.navigate("AboutUs")}
                >
                  <View style={styles.homeRow}>
                    <View style={styles.home}>
                      <View style={styles.path122Stack}>
                        <Svg
                          viewBox="-0.75 -0.75 18.0540657043457 19.7267398834229"
                          style={styles.path122}
                        >
                          <Path
                            strokeWidth={1.5}
                            fill="transparent"
                            stroke="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.75 6.60 L8.28 0.75 L15.80 6.60 L15.80 15.80 C15.80 16.73 15.06 17.48 14.13 17.48 L2.42 17.48 C1.50 17.48 0.75 16.73 0.75 15.80 Z"
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.75 -0.75 8.01802206039429 11.36337184906006"
                          style={styles.path123}
                        >
                          <Path
                            strokeWidth={1.5}
                            fill="transparent"
                            stroke="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.75 9.11 L0.75 0.75 L5.77 0.75 L5.77 9.11 "
                          ></Path>
                        </Svg>
                      </View>
                    </View>
                    <Text style={styles.aboutUs}>About Us</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}
                onPress={() => navigation.navigate("TheCamera")}
                >
                  <View style={styles.usersRow}>
                    <View style={styles.users}>
                      <View style={styles.ellipse74Stack}>
                        <Svg
                          viewBox="-0.75 -0.75 9.690695762634281 9.690696239471439"
                          style={styles.ellipse74}
                        >
                          <Path
                            strokeWidth={1.5}
                            fill="transparent"
                            stroke="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M4.10 7.44 C5.94 7.44 7.44 5.94 7.44 4.10 C7.44 2.25 5.94 0.75 4.10 0.75 C2.25 0.75 0.75 2.25 0.75 4.10 C0.75 5.94 2.25 7.44 4.10 7.44 Z"
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.75 -0.75 5.5155735015869105 9.481612205505371"
                          style={styles.path244}
                        >
                          <Path
                            strokeWidth={1.5}
                            fill="transparent"
                            stroke="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.75 0.75 C2.23 1.13 3.27 2.46 3.27 3.99 C3.27 5.52 2.23 6.85 0.75 7.23 "
                          ></Path>
                        </Svg>
                      </View>
                      <View style={styles.path242Row}>
                        <Svg
                          viewBox="-0.75 -0.75 16.3813924789429 8.01802349090576"
                          style={styles.path242}
                        >
                          <Path
                            strokeWidth={1.5}
                            fill="transparent"
                            stroke="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M14.13 5.77 L14.13 4.10 C14.13 2.25 12.63 0.75 10.79 0.75 L4.10 0.75 C2.25 0.75 0.75 2.25 0.75 4.10 L0.75 5.77 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.75 -0.75 5.50900936126709 7.9092960357666"
                          style={styles.path243}
                        >
                          <Path
                            strokeWidth={1.5}
                            fill="transparent"
                            stroke="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M3.26 5.66 L3.26 3.99 C3.26 2.46 2.23 1.13 0.75 0.75 "
                          ></Path>
                        </Svg>
                      </View>
                    </View>
                    <Text style={styles.aboutTheCamera}>About the Camera</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button3}
                onPress={() => navigation.navigate("Statements")}
                >
                  <View style={styles.calendarRow}>
                    <View style={styles.calendar}>
                      <View style={styles.rectangle449Stack}>
                        <View style={styles.rectangle449}></View>
                        <Svg
                          viewBox="-0.75 -0.75 3.010000228881836 6.3453481197357195"
                          style={styles.line53}
                        >
                          <Path
                            strokeWidth={1.5}
                            fill="transparent"
                            stroke="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.75 0.75 L0.75 4.10 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.75 -0.75 3.010000228881836 6.3453481197357195"
                          style={styles.line54}
                        >
                          <Path
                            strokeWidth={1.5}
                            fill="transparent"
                            stroke="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.75 0.75 L0.75 4.10 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.75 -0.75 18.0540657043457 3.010000228881836"
                          style={styles.line55}
                        >
                          <Path
                            strokeWidth={1.5}
                            fill="transparent"
                            stroke="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.75 0.75 L15.80 0.75 "
                          ></Path>
                        </Svg>
                      </View>
                    </View>
                    <Text style={styles.medicalStatements}>Medical Statements</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button4}>
                  <View style={styles.userMinusRow}>
                    <View style={styles.userMinus}>
                      <Svg
                        viewBox="-0.75 -0.75 9.69069671630859 9.690696239471439"
                        style={styles.ellipse70}
                      >
                        <Path
                          strokeWidth={1.5}
                          fill="transparent"
                          stroke="rgba(255,255,255,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M4.10 7.44 C5.94 7.44 7.44 5.94 7.44 4.10 C7.44 2.25 5.94 0.75 4.10 0.75 C2.25 0.75 0.75 2.25 0.75 4.10 C0.75 5.94 2.25 7.44 4.10 7.44 Z"
                        ></Path>
                      </Svg>
                      <Svg
                        viewBox="-0.75 -0.75 15.5450553894043 8.01802349090576"
                        style={styles.path238}
                      >
                        <Path
                          strokeWidth={1.5}
                          fill="transparent"
                          stroke="rgba(255,255,255,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M13.30 5.77 L13.30 4.10 C13.30 2.25 11.80 0.75 9.95 0.75 L4.10 0.75 C2.25 0.75 0.75 2.25 0.75 4.10 L0.75 5.77 "
                        ></Path>
                      </Svg>
                    </View>
                    <Text style={styles.contactUs}>Contact Us</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button6}
                onPress={() => navigation.navigate("TermsConditions")}
                >
                  <Text style={styles.termsAndConditions}>
                    Terms and Conditions
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button5}
                onPress={() => navigation.navigate("Welcome")}
                >
                  <Text style={styles.logOut}>Log Out</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.mask10}>
              <View style={styles.mask11}>
                <View style={styles.photo}>
                  <View style={styles.f4Acc17F8843A1BeacBb0107Ba49B0}>
                    <Image
                      source={require("../assets/images/0d5f95bde0e7748b100d143c071ea30224257761.png")}
                      resizeMode="cover"
                      style={styles.ec33D4F2F466C9Cc32219Fdc9Fe34}
                    ></Image>
                  </View>
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
      bg11: {
        top: 1,
        left: 0,
        width: 334,
        height: 627,
        backgroundColor: "rgba(36,19,50,1)",
        position: "absolute",
        borderTopRightRadius: 60,
        borderBottomRightRadius: 60
      },
      kelvinInc: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 42,
        fontFamily: "Roboto",
        fontWeight: "700",
        marginTop: 8
      },
      bg13: {
        width: 24,
        height: 24,
        backgroundColor: "transparent",
        marginLeft: 26
      },
      button7: {
        width: 23,
        height: 23,
        marginTop: 1,
        marginLeft: 1
      },
      path245: {
        width: 16,
        height: 16,
        backgroundColor: "transparent",
        transform: [
          {
            rotate: "45.00deg"
          }
        ],
        borderColor: "transparent",
        marginTop: 3,
        marginLeft: 3
      },
      kelvinIncRow: {
        height: 52,
        flexDirection: "row",
        marginTop: 30,
        marginLeft: 20,
        marginRight: 36
      },
      kelvinHealth: {
        width: 133,
        height: 19,
        color: "rgba(255,255,255,1)",
        opacity: 0.56,
        fontSize: 14,
        fontFamily: "Roboto",
        marginTop: 10,
        marginLeft: 20
      },
      group: {
        width: 206,
        height: 303,
        marginTop: 146,
        marginLeft: 20
      },
      button: {
        width: 142,
        height: 17,
        flexDirection: "row",
        marginLeft: 1
      },
      home: {
        width: 15,
        height: 17,
        opacity: 0.6
      },
      path122: {
        top: 0,
        left: 0,
        width: 18,
        height: 20,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      path123: {
        top: 9,
        left: 5,
        width: 8,
        height: 11,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      path122Stack: {
        width: 18,
        height: 20,
        marginTop: -1,
        marginLeft: -1
      },
      aboutUs: {
        width: 108,
        height: 18,
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 16,
        fontFamily: "Roboto",
        marginLeft: 19
      },
      homeRow: {
        height: 17,
        flexDirection: "row",
        flex: 1
      },
      button2: {
        width: 206,
        height: 18,
        flexDirection: "row",
        marginTop: 31
      },
      users: {
        width: 18,
        height: 15,
        opacity: 0.6,
        marginTop: 3
      },
      ellipse74: {
        top: 0,
        left: 0,
        width: 10,
        height: 10,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      path244: {
        top: 0,
        left: 9,
        width: 6,
        height: 9,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      ellipse74Stack: {
        width: 15,
        height: 10,
        marginTop: -1,
        marginLeft: 3
      },
      path242: {
        width: 16,
        height: 8,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      path243: {
        width: 6,
        height: 8,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      path242Row: {
        height: 8,
        flexDirection: "row",
        marginLeft: -1,
        marginRight: -3
      },
      aboutTheCamera: {
        width: 171,
        height: 18,
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 16,
        fontFamily: "Roboto",
        marginLeft: 17
      },
      usersRow: {
        height: 18,
        flexDirection: "row",
        flex: 1
      },
      button3: {
        width: 205,
        height: 27,
        flexDirection: "row",
        marginTop: 31,
        marginLeft: 1
      },
      calendar: {
        width: 15,
        height: 17,
        opacity: 0.6
      },
      rectangle449: {
        top: 3,
        left: 1,
        width: 15,
        height: 15,
        backgroundColor: "transparent",
        position: "absolute",
        opacity: 1,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 1.5,
        borderTopLeftRadius: 2,
        borderTopRightRadius: 2,
        borderBottomRightRadius: 2,
        borderBottomLeftRadius: 2
      },
      line53: {
        top: 0,
        left: 11,
        width: 3,
        height: 6,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      line54: {
        top: 0,
        left: 4,
        width: 3,
        height: 6,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      line55: {
        top: 7,
        left: 0,
        width: 18,
        height: 3,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      rectangle449Stack: {
        width: 18,
        height: 18,
        marginTop: -1,
        marginLeft: -1
      },
      medicalStatements: {
        width: 170,
        height: 27,
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 16,
        fontFamily: "Roboto",
        marginLeft: 20
      },
      calendarRow: {
        height: 27,
        flexDirection: "row",
        flex: 1
      },
      button4: {
        width: 141,
        height: 17,
        flexDirection: "row",
        marginTop: 23,
        marginLeft: 2
      },
      userMinus: {
        width: 13,
        height: 15,
        opacity: 0.6,
        marginTop: 2
      },
      ellipse70: {
        width: 10,
        height: 10,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: -1,
        marginLeft: 2
      },
      path238: {
        width: 16,
        height: 8,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: -1
      },
      contactUs: {
        width: 108,
        height: 18,
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 16,
        fontFamily: "Roboto",
        marginLeft: 20
      },
      userMinusRow: {
        height: 17,
        flexDirection: "row",
        flex: 1
      },
      button6: {
        width: 175,
        height: 16,
        marginTop: 65,
        marginLeft: 4
      },
      termsAndConditions: {
        color: "rgba(255,255,255,1)",
        opacity: 0.56,
        fontSize: 16,
        fontFamily: "Roboto"
      },
      button5: {
        width: 65,
        height: 16,
        marginTop: 42,
        marginLeft: 5
      },
      logOut: {
        color: "rgba(255,255,255,1)",
        opacity: 0.56,
        fontSize: 16,
        fontFamily: "Roboto"
      },
      mask10: {
        top: 0,
        left: 0,
        width: 334,
        height: 152,
        position: "absolute",
        opacity: 1
      },
      mask11: {
        width: 334,
        height: 152,
        backgroundColor: "transparent",
        opacity: 1,
        borderTopRightRadius: 60,
        overflow: "hidden"
      },
      photo: {
        width: 325,
        height: 264,
        opacity: 1,
        marginTop: -70,
        marginLeft: -34
      },
      f4Acc17F8843A1BeacBb0107Ba49B0: {
        width: 325,
        height: 264,
        backgroundColor: "transparent",
        opacity: 0.27,
        overflow: "hidden"
      },
      ec33D4F2F466C9Cc32219Fdc9Fe34: {
        width: 325,
        height: 307,
        backgroundColor: "transparent",
        opacity: 0.27,
        marginTop: -21
      },
      bg11Stack: {
        width: 334,
        height: 628,
        marginTop: 36
      }
    });

export default MainMenu;
