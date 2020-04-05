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

function AboutUs({navigation}) {
    return (
        <View style={styles.root}>
          <View style={styles.bg163}>
            <View style={styles.button2Row}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Dashboard")}
                style={styles.button2}
              >
                <View style={styles.bg162}>
                  <View style={styles.arrowLeft2}>
                    <View style={styles.line362Stack}>
                      <Svg
                        viewBox="-0.75 -0.75 17 3.010000228881836"
                        style={styles.line362}
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
                      <Svg viewBox="-0.75 -0.75 10 17" style={styles.path122}>
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
              <Text style={styles.experimentalPopMusicSession2}>About Us</Text>
            </View>
          </View>
          <View style={styles.rect}>
            <View style={styles.group}>
              <View style={styles.icon1Row}>
                <View style={styles.icon1}>
                  <View style={styles.ovalStack}>
                    <Svg
                      viewBox="-2 -2 18.838565826416 18.836661338806202"
                      style={styles.oval}
                    >
                      <Path
                        strokeWidth={4}
                        fill="transparent"
                        stroke="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M7.42 12.84 C10.41 12.84 12.84 10.41 12.84 7.42 C12.84 4.43 10.41 2.00 7.42 2.00 C4.43 2.00 2.00 4.43 2.00 7.42 C2.00 10.41 4.43 12.84 7.42 12.84 Z"
                      ></Path>
                    </Svg>
                    <Svg
                      viewBox="-2 -2 39.9954376220703 38.2299575805664"
                      style={styles.path123}
                    >
                      <Path
                        strokeWidth={4}
                        fill="transparent"
                        stroke="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M24.61 32.23 C24.61 32.23 24.30 26.68 25.55 25.67 C27.55 24.21 31.12 20.09 32.28 17.94 C33.40 14.88 34.02 9.59 33.99 6.00 C34.06 0.48 27.92 0.86 27.97 6.00 C28.02 11.14 26.52 15.50 24.61 17.28 C22.71 19.06 20.54 20.62 12.91 20.44 C5.29 20.25 1.91 23.55 2.00 32.23 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <Text style={styles.whoMayUseTheServices}>
                  Who May Use the Services?
                </Text>
              </View>
              <Text
                style={
                  styles.whenOneDoorOfHappinessClosesAnotherOpensButOftenWeLookSoLongAtTheClosedDoorThatWeDoNotSeeTheOneThatHasBeenOpenedForUs1
                }
              >
                When one door of happiness closes, another opens, but often we look
                so long at the closed door that we do not see the one that has been
                opened for us.
              </Text>
              <Text
                style={
                  styles.step1YouMayUseTheServicesOnlyIfYouAgreeToFormABindingContractWithUsAndAreNotAPersonBarredFromReceivingServicesUnderTheLawsOfTheApplicableJurisdictionStep2OurPrivacyPolicyDescribesHowWeHandleTheInformatio
                }
              >
                • Step 1: You may use the Services only if you agree to form a
                binding contract with us and are not a person barred from receiving
                services under the laws of the applicable jurisdiction. {"\n"}
                {"\n"}• Step 2: Our Privacy Policy describes how we handle the
                information you provide to us when you use our Services.
              </Text>
              <View style={styles.iconRow}>
                <View style={styles.icon}>
                  <Svg
                    viewBox="-2 -2 33.5964832305908 39.99560546875"
                    style={styles.shield}
                  >
                    <Path
                      strokeWidth={4}
                      fill="transparent"
                      stroke="rgba(255,255,255,1)"
                      fillOpacity={0.349999994039536}
                      strokeOpacity={0.349999994039536}
                      d="M14.80 34.00 C14.80 34.00 27.60 27.60 27.60 18.00 L27.60 6.80 L14.80 2.00 L2.00 6.80 L2.00 18.00 C2.00 27.60 14.80 34.00 14.80 34.00 Z"
                    ></Path>
                  </Svg>
                </View>
                <Text style={styles.privacy}>Privacy</Text>
              </View>
              <Text
                style={
                  styles.whenOneDoorOfHappinessClosesAnotherOpensButOftenWeLookSoLongAtTheClosedDoorThatWeDoNotSeeTheOneThatHasBeenOpenedForUs
                }
              >
                When one door of happiness closes, another opens, but often we look
                so long at the closed door that we do not see the one that has been
                opened for us.
              </Text>
            </View>
            <View style={styles.group1}>
              <View style={styles.icon12Row}>
                <View style={styles.icon12}>
                  <View style={styles.oval2Stack}>
                    <Svg
                      viewBox="-2 -2 18.838565826416 18.836661338806202"
                      style={styles.oval2}
                    >
                      <Path
                        strokeWidth={4}
                        fill="transparent"
                        stroke="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M7.42 12.84 C10.41 12.84 12.84 10.41 12.84 7.42 C12.84 4.43 10.41 2.00 7.42 2.00 C4.43 2.00 2.00 4.43 2.00 7.42 C2.00 10.41 4.43 12.84 7.42 12.84 Z"
                      ></Path>
                    </Svg>
                    <Svg
                      viewBox="-2 -2 39.9954376220703 38.2299575805664"
                      style={styles.path1232}
                    >
                      <Path
                        strokeWidth={4}
                        fill="transparent"
                        stroke="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M24.61 32.23 C24.61 32.23 24.30 26.68 25.55 25.67 C27.55 24.21 31.12 20.09 32.28 17.94 C33.40 14.88 34.02 9.59 33.99 6.00 C34.06 0.48 27.92 0.86 27.97 6.00 C28.02 11.14 26.52 15.50 24.61 17.28 C22.71 19.06 20.54 20.62 12.91 20.44 C5.29 20.25 1.91 23.55 2.00 32.23 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
                <Text style={styles.whoMayUseTheServices2}>
                  Who May Use the Services?
                </Text>
              </View>
              <Text
                style={
                  styles.whenOneDoorOfHappinessClosesAnotherOpensButOftenWeLookSoLongAtTheClosedDoorThatWeDoNotSeeTheOneThatHasBeenOpenedForUs12
                }
              >
                When one door of happiness closes, another opens, but often we look
                so long at the closed door that we do not see the one that has been
                opened for us.
              </Text>
              <Text
                style={
                  styles.step1YouMayUseTheServicesOnlyIfYouAgreeToFormABindingContractWithUsAndAreNotAPersonBarredFromReceivingServicesUnderTheLawsOfTheApplicableJurisdictionStep2OurPrivacyPolicyDescribesHowWeHandleTheInformatio2
                }
              >
                • Step 1: You may use the Services only if you agree to form a
                binding contract with us and are not a person barred from receiving
                services under the laws of the applicable jurisdiction. {"\n"}
                {"\n"}• Step 2: Our Privacy Policy describes how we handle the
                information you provide to us when you use our Services.
              </Text>
              <View style={styles.icon2Row}>
                <View style={styles.icon2}>
                  <Svg
                    viewBox="-2 -2 33.5964832305908 39.99560546875"
                    style={styles.shield2}
                  >
                    <Path
                      strokeWidth={4}
                      fill="transparent"
                      stroke="rgba(255,255,255,1)"
                      fillOpacity={0.349999994039536}
                      strokeOpacity={0.349999994039536}
                      d="M14.80 34.00 C14.80 34.00 27.60 27.60 27.60 18.00 L27.60 6.80 L14.80 2.00 L2.00 6.80 L2.00 18.00 C2.00 27.60 14.80 34.00 14.80 34.00 Z"
                    ></Path>
                  </Svg>
                </View>
                <Text style={styles.privacy2}>Privacy</Text>
              </View>
              <Text
                style={
                  styles.whenOneDoorOfHappinessClosesAnotherOpensButOftenWeLookSoLongAtTheClosedDoorThatWeDoNotSeeTheOneThatHasBeenOpenedForUs2
                }
              >
                When one door of happiness closes, another opens, but often we look
                so long at the closed door that we do not see the one that has been
                opened for us.
              </Text>
            </View>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      root: {
        flex: 1,
        backgroundColor: "rgba(36,19,50,1)"
      },
      bg163: {
        height: 156,
        backgroundColor: "rgba(255,255,255,1)",
        borderBottomLeftRadius: 80,
        flexDirection: "row",
        marginTop: 1
      },
      button2: {
        width: 24,
        height: 24,
        opacity: 1,
        marginTop: 4
      },
      bg162: {
        width: 24,
        height: 24,
        backgroundColor: "transparent"
      },
      arrowLeft2: {
        width: 14,
        height: 14,
        opacity: 1,
        marginTop: 5,
        marginLeft: 5
      },
      line362: {
        top: 7,
        left: 0,
        width: 17,
        height: 3,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      path122: {
        top: 0,
        left: 0,
        width: 10,
        height: 17,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      line362Stack: {
        width: 17,
        height: 17,
        marginTop: -1,
        marginLeft: -1
      },
      experimentalPopMusicSession2: {
        width: 320,
        height: 36,
        color: "rgba(0,0,0,1)",
        opacity: 1,
        fontSize: 36,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 36,
        letterSpacing: -0.42,
        marginLeft: 12
      },
      button2Row: {
        height: 32,
        flexDirection: "row",
        flex: 1,
        marginLeft: 19,
        marginTop: 64
      },
      rect: {
        width: 334,
        height: 1110,
        marginTop: 46,
        marginLeft: 21
      },
      group: {
        width: 334,
        height: 540
      },
      icon1: {
        width: 32,
        height: 30,
        opacity: 0.35
      },
      oval: {
        top: 1,
        left: 8,
        width: 19,
        height: 19,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      path123: {
        top: 0,
        left: 0,
        width: 40,
        height: 38,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      ovalStack: {
        width: 40,
        height: 38,
        marginTop: -2,
        marginLeft: -2
      },
      whoMayUseTheServices: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 20,
        letterSpacing: -0.18,
        marginLeft: 20,
        marginTop: 4
      },
      icon1Row: {
        height: 30,
        flexDirection: "row",
        marginRight: 26
      },
      whenOneDoorOfHappinessClosesAnotherOpensButOftenWeLookSoLongAtTheClosedDoorThatWeDoNotSeeTheOneThatHasBeenOpenedForUs1: {
        color: "rgba(153,143,162,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 28
      },
      step1YouMayUseTheServicesOnlyIfYouAgreeToFormABindingContractWithUsAndAreNotAPersonBarredFromReceivingServicesUnderTheLawsOfTheApplicableJurisdictionStep2OurPrivacyPolicyDescribesHowWeHandleTheInformatio: {
        width: 290,
        height: 179,
        color: "rgba(153,143,162,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 40,
        marginLeft: 32
      },
      icon: {
        width: 26,
        height: 32,
        opacity: 1
      },
      shield: {
        width: 34,
        height: 40,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: -2,
        marginLeft: -2
      },
      privacy: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 26,
        letterSpacing: -0.29,
        marginLeft: 24,
        marginTop: 6
      },
      iconRow: {
        height: 32,
        flexDirection: "row",
        marginTop: 48,
        marginLeft: 4,
        marginRight: 213
      },
      whenOneDoorOfHappinessClosesAnotherOpensButOftenWeLookSoLongAtTheClosedDoorThatWeDoNotSeeTheOneThatHasBeenOpenedForUs: {
        width: 327,
        height: 81,
        color: "rgba(153,143,162,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 24
      },
      group1: {
        width: 334,
        height: 540,
        marginTop: 30
      },
      icon12: {
        width: 32,
        height: 30,
        opacity: 0.35
      },
      oval2: {
        top: 1,
        left: 8,
        width: 19,
        height: 19,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      path1232: {
        top: 0,
        left: 0,
        width: 40,
        height: 38,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      oval2Stack: {
        width: 40,
        height: 38,
        marginTop: -2,
        marginLeft: -2
      },
      whoMayUseTheServices2: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 20,
        letterSpacing: -0.18,
        marginLeft: 20,
        marginTop: 4
      },
      icon12Row: {
        height: 30,
        flexDirection: "row",
        marginRight: 26
      },
      whenOneDoorOfHappinessClosesAnotherOpensButOftenWeLookSoLongAtTheClosedDoorThatWeDoNotSeeTheOneThatHasBeenOpenedForUs12: {
        color: "rgba(153,143,162,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 28
      },
      step1YouMayUseTheServicesOnlyIfYouAgreeToFormABindingContractWithUsAndAreNotAPersonBarredFromReceivingServicesUnderTheLawsOfTheApplicableJurisdictionStep2OurPrivacyPolicyDescribesHowWeHandleTheInformatio2: {
        width: 290,
        height: 179,
        color: "rgba(153,143,162,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 40,
        marginLeft: 32
      },
      icon2: {
        width: 26,
        height: 32,
        opacity: 1
      },
      shield2: {
        width: 34,
        height: 40,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: -2,
        marginLeft: -2
      },
      privacy2: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 26,
        letterSpacing: -0.29,
        marginLeft: 24,
        marginTop: 6
      },
      icon2Row: {
        height: 32,
        flexDirection: "row",
        marginTop: 48,
        marginLeft: 4,
        marginRight: 213
      },
      whenOneDoorOfHappinessClosesAnotherOpensButOftenWeLookSoLongAtTheClosedDoorThatWeDoNotSeeTheOneThatHasBeenOpenedForUs2: {
        width: 327,
        height: 81,
        color: "rgba(153,143,162,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 24
      }
    });

export default AboutUs;
