import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Svg, { Path, Stop, Defs, Mask, LinearGradient } from "react-native-svg";
import { NavigationContainer } from '../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../node_modules/@react-navigation/stack';
import { Center } from "../../node_modules/@builderx/utils";
import App from '../../App';

function YourResults({navigation}) {
    return (
        <View style={styles.root}>
          <View style={styles.bg23Stack}>
            <View style={styles.bg23}>
              <View style={styles.button1Row}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("PointStats")}
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
                <Text style={styles.experimentalPopMusicSession1}>
                  Your Results
                </Text>
              </View>
              <View style={styles.bg8}>
                <View style={styles.group1874Row}>
                  <View style={styles.group1874}>
                    <View style={styles.button}>
                      <Text style={styles.today}>TODAY</Text>
                    </View>
                  </View>
                  <Text style={styles.week}>WEEK</Text>
                  <Text style={styles.month}>MONTH</Text>
                </View>
              </View>
            </View>
            <View style={styles.bg22}>
              <View style={styles.group1876}>
                <Text style={styles.pointName22}>Point Name</Text>
                <View style={styles.changeIndex2Stack}>
                  <Text style={styles.changeIndex2}>Change Index</Text>
                  <View style={styles.iconsDarkArr2}>
                    <View style={styles.path79612Stack}>
                      <Svg viewBox="-0 -0 24 24" style={styles.path79612}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(255,255,255,1)"
                          d="M0.00 0.00 L24.00 0.00 L24.00 24.00 L0.00 24.00 Z"
                        ></Path>
                      </Svg>
                      <Svg viewBox="-0.75 -0.75 15 9" style={styles.chevronDown12}>
                        <Path
                          strokeWidth={1.5}
                          fill="transparent"
                          stroke="rgba(117,117,117,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M0.75 0.75 L6.75 6.75 L12.75 0.75 "
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.bg4}>
                <View style={styles.group1877}>
                  <Text style={styles.pointName}>Point Name</Text>
                  <Text style={styles.temperature}>Temperature</Text>
                </View>
              </View>
              <View style={styles.num2}>
                <View style={styles.group1878}>
                  <Text style={styles.pointName2}>Point Name</Text>
                  <Text style={styles.changeIndex}>Change Index</Text>
                </View>
              </View>
              <View style={styles.iconsDarkArr1}>
                <View style={styles.path7961Stack}>
                  <Svg viewBox="-0 -0 24 24" style={styles.path7961}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      d="M0.00 0.00 L24.00 0.00 L24.00 24.00 L0.00 24.00 Z"
                    ></Path>
                  </Svg>
                  <Svg viewBox="-0.75 -0.75 15 9" style={styles.chevronDown1}>
                    <Path
                      strokeWidth={1.5}
                      fill="transparent"
                      stroke="rgba(117,117,117,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M0.75 0.75 L6.75 6.75 L12.75 0.75 "
                    ></Path>
                  </Svg>
                </View>
              </View>
              <View style={styles.card}>
                <Text style={styles.review}>Review</Text>
                <View style={styles.graph}>
                  <View style={styles.leftRow}>
                    <View style={styles.left}>
                      <View style={styles.k2Stack}>
                        <Text style={styles.k2}>37.2</Text>
                        <Text style={styles.k1}>37.3</Text>
                        <Text style={styles.k22}>37.4</Text>
                        <Text style={styles.k3}>37.5</Text>
                      </View>
                    </View>
                    <View style={styles.bars}>
                      <View style={styles.bar9Row}>
                        <View style={styles.bar9}></View>
                        <View style={styles.bar8}></View>
                        <View style={styles.bar7}></View>
                        <View style={styles.bar6}></View>
                        <View style={styles.bar5}></View>
                        <View style={styles.bar4}></View>
                        <View style={styles.bar3}></View>
                        <View style={styles.bar22}></View>
                        <View style={styles.bar1}></View>
                        <View style={styles.bar2}></View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.btm}>
                    <View style={styles.styleStack}>
                      <Text style={styles.style}>10</Text>
                      <Text style={styles.style1}>9</Text>
                      <Text style={styles.style2}>8</Text>
                      <Text style={styles.style3}>7</Text>
                      <Text style={styles.style4}>6</Text>
                      <Text style={styles.style5}>5</Text>
                      <Text style={styles.style6}>4</Text>
                      <Text style={styles.style7}>3</Text>
                      <Text style={styles.style8}>2</Text>
                      <Text style={styles.style9}>1</Text>
                    </View>
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
      bg23: {
        top: 0,
        left: 0,
        height: 194,
        backgroundColor: "rgba(255,255,255,1)",
        position: "absolute",
        borderColor: "rgba(231,228,233,1)",
        borderWidth: 1,
        borderBottomLeftRadius: 80,
        right: 0
      },
      button1: {
        width: 24,
        height: 24,
        opacity: 1,
        marginTop: 6
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
        color: "rgba(0,0,0,1)",
        opacity: 1,
        fontSize: 36,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 36,
        letterSpacing: -0.42,
        marginLeft: 39
      },
      button1Row: {
        height: 36,
        flexDirection: "row",
        marginTop: 53,
        marginLeft: 25,
        marginRight: 87
      },
      bg8: {
        height: 48,
        backgroundColor: "rgba(255,255,255,1)",
        flexDirection: "row",
        marginTop: 18
      },
      group1874: {
        width: 81,
        height: 32,
        opacity: 1
      },
      button: {
        width: 81,
        height: 32,
        backgroundColor: "rgba(95,69,145,1)",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        marginTop: 6
      },
      today: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 26,
        letterSpacing: 0.05,
        textAlign: "center",
        marginTop: 3,
        marginLeft: 10
      },
      week: {
        color: "rgba(153,143,162,1)",
        opacity: 0.61,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 26,
        letterSpacing: 0.05,
        textAlign: "center",
        marginLeft: 49,
        marginTop: 10
      },
      month: {
        color: "rgba(153,143,162,1)",
        opacity: 0.61,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 26,
        letterSpacing: 0.05,
        textAlign: "center",
        marginLeft: 51,
        marginTop: 10
      },
      group1874Row: {
        height: 36,
        flexDirection: "row",
        flex: 1,
        marginRight: 57,
        marginLeft: 50,
        marginTop: 1
      },
      bg22: {
        top: 155,
        left: 0,
        height: 575,
        backgroundColor: "rgba(36,19,50,1)",
        position: "absolute",
        borderColor: "rgba(66,48,80,1)",
        borderWidth: 1,
        borderBottomLeftRadius: 80,
        right: 0
      },
      group1876: {
        width: 297,
        height: 40,
        marginTop: 27,
        marginLeft: 50
      },
      pointName22: {
        width: 200,
        height: 11,
        color: "rgba(255,255,255,1)",
        opacity: 0.7,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 11,
        letterSpacing: -0.22
      },
      changeIndex2: {
        top: 2,
        left: 0,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 26,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 30,
        letterSpacing: -0.42,
        right: 0
      },
      iconsDarkArr2: {
        top: 0,
        left: 256,
        width: 24,
        height: 24,
        position: "absolute",
        opacity: 1
      },
      path79612: {
        top: 0,
        left: 0,
        width: 24,
        height: 24,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      chevronDown12: {
        top: 8,
        left: 3,
        width: 15,
        height: 9,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      path79612Stack: {
        width: 24,
        height: 24
      },
      changeIndex2Stack: {
        height: 28,
        marginTop: 1
      },
      bg4: {
        width: 375,
        height: 80,
        backgroundColor: "rgba(95,69,145,1)",
        alignSelf: "flex-end",
        marginTop: 27
      },
      group1877: {
        width: 172,
        height: 44,
        marginTop: 18,
        marginLeft: 50
      },
      pointName: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 11,
        fontFamily: "Roboto",
        letterSpacing: -0.22
      },
      temperature: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 26,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 30,
        letterSpacing: -0.42,
        marginTop: 3
      },
      num2: {
        width: 1,
        height: 14,
        opacity: 1,
        marginTop: 29,
        marginLeft: 49
      },
      group1878: {
        width: 297,
        height: 40,
        marginLeft: 1
      },
      pointName2: {
        width: 200,
        height: 11,
        color: "rgba(255,255,255,1)",
        opacity: 0.7,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 11,
        letterSpacing: -0.22
      },
      changeIndex: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 26,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 30,
        letterSpacing: -0.42,
        marginTop: 3
      },
      iconsDarkArr1: {
        width: 24,
        height: 24,
        opacity: 1,
        marginLeft: 306
      },
      path7961: {
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent",
        right: 0,
        bottom: 0
      },
      chevronDown1: {
        top: 8,
        left: 3,
        width: 15,
        height: 9,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      path7961Stack: {
        flex: 1
      },
      card: {
        height: 228,
        opacity: 1,
        marginTop: 69,
        marginLeft: 48,
        marginRight: 48
      },
      review: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 26,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 30,
        letterSpacing: -0.42
      },
      graph: {
        width: 278,
        height: 177,
        opacity: 1,
        marginTop: 21,
        marginLeft: 1
      },
      left: {
        width: 0,
        height: 141,
        opacity: 1
      },
      k2: {
        top: 141,
        left: 0,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.6,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 18
      },
      k1: {
        top: 94,
        left: 0,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.6,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 18
      },
      k22: {
        top: 47,
        left: 0,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.6,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 18
      },
      k3: {
        top: 0,
        left: 0,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.6,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 18
      },
      k2Stack: {
        width: 1,
        height: 213
      },
      bars: {
        width: 218,
        height: 150,
        opacity: 1,
        flexDirection: "row",
        marginLeft: 40,
        marginTop: 2
      },
      bar9: {
        width: 8,
        height: 130,
        backgroundColor: "rgba(138,86,172,1)",
        opacity: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        marginTop: 20
      },
      bar8: {
        width: 8,
        height: 119,
        backgroundColor: "rgba(138,86,172,1)",
        opacity: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        marginLeft: 15,
        marginTop: 31
      },
      bar7: {
        width: 8,
        height: 110,
        backgroundColor: "rgba(138,86,172,1)",
        opacity: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        marginLeft: 16,
        marginTop: 40
      },
      bar6: {
        width: 8,
        height: 130,
        backgroundColor: "rgba(138,86,172,1)",
        opacity: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        marginLeft: 15,
        marginTop: 20
      },
      bar5: {
        width: 8,
        height: 90,
        backgroundColor: "rgba(138,86,172,1)",
        opacity: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        marginLeft: 16,
        marginTop: 60
      },
      bar4: {
        width: 8,
        height: 110,
        backgroundColor: "rgba(138,86,172,1)",
        opacity: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        marginLeft: 15,
        marginTop: 40
      },
      bar3: {
        width: 8,
        height: 110,
        backgroundColor: "rgba(138,86,172,1)",
        opacity: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        marginLeft: 16,
        marginTop: 40
      },
      bar22: {
        width: 8,
        height: 90,
        backgroundColor: "rgba(138,86,172,1)",
        opacity: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        marginLeft: 15,
        marginTop: 60
      },
      bar1: {
        width: 8,
        height: 150,
        backgroundColor: "rgba(138,86,172,1)",
        opacity: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        marginLeft: 16
      },
      bar2: {
        width: 8,
        height: 100,
        backgroundColor: "rgba(138,86,172,1)",
        opacity: 1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        marginLeft: 16,
        marginTop: 50
      },
      bar9Row: {
        height: 150,
        flexDirection: "row",
        flex: 1,
        marginRight: -2
      },
      leftRow: {
        height: 152,
        flexDirection: "row",
        marginRight: 20
      },
      btm: {
        width: 261,
        height: 15,
        opacity: 1,
        marginTop: 10,
        marginLeft: 18
      },
      style: {
        top: 0,
        left: 213,
        width: 48,
        height: 15,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.6,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 15,
        textAlign: "center"
      },
      style1: {
        top: 0,
        left: 189,
        width: 48,
        height: 15,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.6,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 15,
        textAlign: "center"
      },
      style2: {
        top: 0,
        left: 165,
        width: 48,
        height: 15,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.6,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 15,
        textAlign: "center"
      },
      style3: {
        top: 0,
        left: 142,
        width: 48,
        height: 15,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.6,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 15,
        textAlign: "center"
      },
      style4: {
        top: 0,
        left: 118,
        width: 48,
        height: 15,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.6,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 15,
        textAlign: "center"
      },
      style5: {
        top: 0,
        left: 95,
        width: 48,
        height: 15,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.6,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 15,
        textAlign: "center"
      },
      style6: {
        top: 0,
        left: 71,
        width: 48,
        height: 15,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.6,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 15,
        textAlign: "center"
      },
      style7: {
        top: 0,
        left: 47,
        width: 48,
        height: 15,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.6,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 15,
        textAlign: "center"
      },
      style8: {
        top: 0,
        left: 24,
        width: 48,
        height: 15,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.6,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 15,
        textAlign: "center"
      },
      style9: {
        top: 0,
        left: 0,
        width: 48,
        height: 15,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.6,
        fontSize: 11,
        fontFamily: "Roboto",
        lineHeight: 15,
        textAlign: "center"
      },
      styleStack: {
        width: 261,
        height: 15
      },
      bg23Stack: {
        height: 730,
        marginTop: -11
      }
    });

export default YourResults;
