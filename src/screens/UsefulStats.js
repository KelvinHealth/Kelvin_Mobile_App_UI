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

function UsefulStats({navigation}) {
    return (
        <View style={styles.root}>
          <View style={styles.elementsMapStack}>
            <View style={styles.elementsMap}>
              <View style={styles.bgMap1}>
                <View style={styles.bg2}>
                  <View style={styles.screenShot20171219At124953}>
                    <View style={styles.styleStack}>
                      <Svg viewBox="-0 -0 606 852" style={styles.style}>
                        <Path
                          strokeWidth={0}
                          fill="transparent"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M0.00 0.00 L606.00 0.00 L606.00 852.00 L0.00 852.00 Z"
                        ></Path>
                      </Svg>
                      <Svg
                        viewBox="0 0 606 852"
                        style={styles.f99Afbb9C2046F2A7Ac1Bc0Eb5E1Eb4}
                      >
                        <Defs>
                          <Mask id="QzROXZ5" x={0} y={0}>
                            <Path
                              fill="white"
                              d={
                                "M0.00 0.00 L606.00 0.00 L606.00 852.00 L0.00 852.00 Z"
                              }
                            />
                          </Mask>
                        </Defs>
                        <SvgImage
                          href={require("../assets/images/a8995509bbfe20ac150e0f3a56eba0deb7ab8a96.png")}
                          x={0}
                          y={-0.197802200913429}
                          width={606}
                          height={852.395629882813}
                          mask={"url(#QzROXZ5)"}
                        ></SvgImage>
                      </Svg>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.group7}>
              <View style={styles.group6}>
                <View style={styles.pin522322Stack}>
                  <View style={styles.pin522322}>
                    <Svg viewBox="-0 -0 40 40" style={styles.back222332}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(74,144,226,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                      ></Path>
                    </Svg>
                  </View>
                  <View style={styles.pin522422}>
                    <Svg viewBox="-0 -0 40 40" style={styles.back2223222}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(136,173,220,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
              <View style={styles.group4Row}>
                <View style={styles.group4}>
                  <View style={styles.pin5223Stack}>
                    <View style={styles.pin5223}>
                      <Svg viewBox="-0 -0 40 40" style={styles.back2223}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(74,144,226,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                        ></Path>
                      </Svg>
                    </View>
                    <View style={styles.pin5224}>
                      <Svg viewBox="-0 -0 40 40" style={styles.back22232}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(136,173,220,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                </View>
                <View style={styles.group5}>
                  <View style={styles.pin52232Stack}>
                    <View style={styles.pin52232}>
                      <Svg viewBox="-0 -0 40 40" style={styles.back22233}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(74,144,226,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                        ></Path>
                      </Svg>
                    </View>
                    <View style={styles.pin52242}>
                      <Svg viewBox="-0 -0 40 40" style={styles.back222322}>
                        <Path
                          strokeWidth={0}
                          fill="rgba(136,173,220,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bg163}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Dashboard")}
                style={styles.button1}
              >
                <View style={styles.bg162}>
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
              <View style={styles.button1Filler}>
                <Text style={styles.experimentalPopMusicSession1}>Around You</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("MainMenu")}
                style={styles.button2}
              >
                <View style={styles.bg82}>
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
            <View style={styles.bg1}></View>
            <View style={styles.button}>
              <View style={styles.bg7}>
                <View style={styles.iconsGps}>
                  <View style={styles.bg8}>
                    <Svg
                      viewBox="-0 -0 18 18"
                      style={styles.a0D58F721F542978535E65456B2E0Bd}
                    >
                      <Path
                        strokeWidth={0}
                        fill="rgba(36,19,50,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M9.82 16.28 L9.82 17.18 C9.82 17.18 9.49 18.00 9.00 18.00 C8.51 18.00 8.18 17.18 8.18 17.18 L8.18 16.28 C8.18 16.28 5.24 13.34 5.24 13.34 C6.24 14.21 7.55 14.73 9.00 14.73 C10.45 14.73 11.76 14.21 12.76 13.34 C12.76 13.34 9.82 16.28 9.82 16.28 Z M1.72 9.82 L0.82 9.82 C0.82 9.82 0.00 9.49 0.00 9.00 C0.00 8.51 0.82 8.18 0.82 8.18 L1.72 8.18 C1.72 8.18 4.66 5.24 4.66 5.24 C3.79 6.24 3.27 7.55 3.27 9.00 C3.27 10.45 3.79 11.76 4.66 12.76 C4.66 12.76 1.72 9.82 1.72 9.82 Z M8.18 1.72 L8.18 0.82 C8.18 0.82 8.51 0.00 9.00 0.00 C9.49 0.00 9.82 0.82 9.82 0.82 L9.82 1.72 C9.82 1.72 12.76 4.66 12.76 4.66 C11.76 3.79 10.45 3.27 9.00 3.27 C7.55 3.27 6.24 3.79 5.24 4.66 C5.24 4.66 8.18 1.72 8.18 1.72 Z M16.28 8.18 L17.18 8.18 C17.18 8.18 18.00 8.51 18.00 9.00 C18.00 9.49 17.18 9.82 17.18 9.82 L16.28 9.82 C16.28 9.82 13.34 12.76 13.34 12.76 C14.21 11.76 14.73 10.45 14.73 9.00 C14.73 7.55 14.21 6.24 13.34 5.24 C13.34 5.24 16.28 8.18 16.28 8.18 Z M4.66 12.76 C4.66 12.76 5.24 13.34 5.24 13.34 C5.03 13.16 4.84 12.97 4.66 12.76 Z M5.24 4.66 C5.24 4.66 4.66 5.24 4.66 5.24 C4.84 5.03 5.03 4.84 5.24 4.66 Z M13.34 5.24 C13.34 5.24 12.76 4.66 12.76 4.66 C12.97 4.84 13.16 5.03 13.34 5.24 Z M12.76 13.34 C12.76 13.34 13.34 12.76 13.34 12.76 C13.16 12.97 12.97 13.16 12.76 13.34 Z M9.00 12.27 C7.20 12.27 5.73 10.80 5.73 9.00 C5.73 7.20 7.20 5.73 9.00 5.73 C10.80 5.73 12.27 7.20 12.27 9.00 C12.27 10.80 10.80 12.27 9.00 12.27 Z M9.00 10.64 C9.90 10.64 10.64 9.90 10.64 9.00 C10.64 8.10 9.90 7.36 9.00 7.36 C8.10 7.36 7.36 8.10 7.36 9.00 C7.36 9.90 8.10 10.64 9.00 10.64 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.scrollArea}>
              <ScrollView
                horizontal={false}
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                <View style={styles.group}>
                  <View style={styles.bg6}>
                    <View style={styles.pin5RowRow}>
                      <View style={styles.pin5Row}>
                        <View style={styles.pin5}>
                          <Svg viewBox="-0 -0 40 40" style={styles.back2}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(138,86,172,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                            ></Path>
                          </Svg>
                        </View>
                        <View style={styles.min1Column}>
                          <Text style={styles.min1}>9:00 (25 min)</Text>
                          <Text style={styles.meditation}>M55-SFCA-0782-COV19</Text>
                        </View>
                      </View>
                      <View style={styles.pin5RowFiller}></View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("ProfilePage")}
                        style={styles.button3}
                      >
                        <View style={styles.rect2Stack}>
                          <View style={styles.rect2}>
                            <Svg viewBox="-0 -0 52 52" style={styles.ellipse8113}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(255,255,255,1)"
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
                </View>
                <View style={styles.group1}>
                  <View style={styles.bg62}>
                    <View style={styles.pin52RowRow}>
                      <View style={styles.pin52Row}>
                        <View style={styles.pin52}>
                          <Svg viewBox="-0 -0 40 40" style={styles.back22}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(74,144,226,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                            ></Path>
                          </Svg>
                        </View>
                        <View style={styles.min12Column}>
                          <Text style={styles.min12}>9:00 (25 min)</Text>
                          <Text style={styles.meditation2}>
                            M55-SFCA-0782-COV19
                          </Text>
                        </View>
                      </View>
                      <View style={styles.pin52RowFiller}></View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("ProfilePage")}
                        style={styles.button32}
                      >
                        <View style={styles.rect22Stack}>
                          <View style={styles.rect22}>
                            <Svg viewBox="-0 -0 52 52" style={styles.ellipse81132}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(255,255,255,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M26.00 52.00 C40.36 52.00 52.00 40.36 52.00 26.00 C52.00 11.64 40.36 0.00 26.00 0.00 C11.64 0.00 0.00 11.64 0.00 26.00 C0.00 40.36 11.64 52.00 26.00 52.00 Z"
                              ></Path>
                            </Svg>
                          </View>
                          <Text style={styles.loremIpsum32}>+</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.group2}>
                  <View style={styles.bg622}>
                    <View style={styles.pin522RowRow}>
                      <View style={styles.pin522Row}>
                        <View style={styles.pin522}>
                          <Svg viewBox="-0 -0 40 40" style={styles.back222}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(74,144,226,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                            ></Path>
                          </Svg>
                        </View>
                        <View style={styles.min122Column}>
                          <Text style={styles.min122}>9:00 (25 min)</Text>
                          <Text style={styles.meditation22}>
                            M55-SFCA-0782-COV19
                          </Text>
                        </View>
                      </View>
                      <View style={styles.pin522RowFiller}></View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("ProfilePage")}
                        style={styles.button322}
                      >
                        <View style={styles.rect222Stack}>
                          <View style={styles.rect222}>
                            <Svg viewBox="-0 -0 52 52" style={styles.ellipse811322}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(255,255,255,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M26.00 52.00 C40.36 52.00 52.00 40.36 52.00 26.00 C52.00 11.64 40.36 0.00 26.00 0.00 C11.64 0.00 0.00 11.64 0.00 26.00 C0.00 40.36 11.64 52.00 26.00 52.00 Z"
                              ></Path>
                            </Svg>
                          </View>
                          <Text style={styles.loremIpsum322}>+</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.group3}>
                  <View style={styles.bg6222}>
                    <View style={styles.pin5222RowRow}>
                      <View style={styles.pin5222Row}>
                        <View style={styles.pin5222}>
                          <Svg viewBox="-0 -0 40 40" style={styles.back2222}>
                            <Path
                              strokeWidth={0}
                              fill="rgba(138,86,172,1)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                            ></Path>
                          </Svg>
                        </View>
                        <View style={styles.min1222Column}>
                          <Text style={styles.min1222}>9:00 (25 min)</Text>
                          <Text style={styles.meditation222}>
                            M55-SFCA-0782-COV19
                          </Text>
                        </View>
                      </View>
                      <View style={styles.pin5222RowFiller}></View>
                      <TouchableOpacity
                        onPress={() => navigation.navigate("ProfilePage")}
                        style={styles.button3222}
                      >
                        <View style={styles.rect2222Stack}>
                          <View style={styles.rect2222}>
                            <Svg
                              viewBox="-0 -0 52 52"
                              style={styles.ellipse8113222}
                            >
                              <Path
                                strokeWidth={0}
                                fill="rgba(255,255,255,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M26.00 52.00 C40.36 52.00 52.00 40.36 52.00 26.00 C52.00 11.64 40.36 0.00 26.00 0.00 C11.64 0.00 0.00 11.64 0.00 26.00 C0.00 40.36 11.64 52.00 26.00 52.00 Z"
                              ></Path>
                            </Svg>
                          </View>
                          <Text style={styles.loremIpsum3222}>+</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </ScrollView>
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
      elementsMap: {
        top: 17,
        left: 0,
        position: "absolute",
        right: 0,
        bottom: 47,
        opacity: 1
      },
      bgMap1: {
        width: 375,
        height: 784,
        opacity: 1
      },
      bg2: {
        width: 375,
        height: 784,
        backgroundColor: "transparent",
        opacity: 1,
        overflow: "hidden"
      },
      screenShot20171219At124953: {
        width: 606,
        height: 823,
        opacity: 1,
        marginLeft: -5
      },
      style: {
        top: 0,
        left: 0,
        width: 606,
        height: 823,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      f99Afbb9C2046F2A7Ac1Bc0Eb5E1Eb4: {
        top: 0,
        left: 0,
        width: 606,
        height: 823,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      styleStack: {
        width: 606,
        height: 823
      },
      group7: {
        top: 193,
        left: 54,
        width: 267,
        height: 216,
        position: "absolute",
        flexDirection: "row"
      },
      group6: {
        width: 43,
        height: 43,
        marginLeft: 102,
        marginTop: 172
      },
      pin522322: {
        top: 0,
        left: 0,
        width: 43,
        position: "absolute",
        opacity: 1,
        bottom: 0
      },
      back222332: {
        width: 43,
        height: 43,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      pin522422: {
        top: 4,
        left: 4,
        width: 35,
        height: 36,
        position: "absolute",
        opacity: 1
      },
      back2223222: {
        width: 35,
        height: 36,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      pin522322Stack: {
        width: 43,
        flex: 1
      },
      group4: {
        width: 43,
        height: 43,
        marginTop: 22
      },
      pin5223: {
        top: 0,
        left: 0,
        width: 43,
        position: "absolute",
        opacity: 1,
        bottom: 0
      },
      back2223: {
        width: 43,
        height: 43,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      pin5224: {
        top: 4,
        left: 4,
        width: 35,
        height: 36,
        position: "absolute",
        opacity: 1
      },
      back22232: {
        width: 35,
        height: 36,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      pin5223Stack: {
        width: 43,
        flex: 1
      },
      group5: {
        width: 43,
        height: 43,
        marginLeft: 181
      },
      pin52232: {
        top: 0,
        left: 0,
        width: 43,
        position: "absolute",
        opacity: 1,
        bottom: 0
      },
      back22233: {
        width: 43,
        height: 43,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      pin52242: {
        top: 4,
        left: 4,
        width: 35,
        height: 36,
        position: "absolute",
        opacity: 1
      },
      back222322: {
        width: 35,
        height: 36,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      pin52232Stack: {
        width: 43,
        flex: 1
      },
      group4Row: {
        height: 65,
        flexDirection: "row",
        flex: 1,
        marginLeft: -145
      },
      bg163: {
        top: 0,
        left: 0,
        height: 155,
        backgroundColor: "rgba(255,255,255,1)",
        position: "absolute",
        borderBottomLeftRadius: 80,
        right: 0,
        flexDirection: "row"
      },
      button1: {
        width: 24,
        height: 24,
        opacity: 1,
        marginLeft: 25,
        marginTop: 65
      },
      bg162: {
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
        marginTop: 59
      },
      button1Filler: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center"
      },
      button2: {
        width: 24,
        height: 24,
        opacity: 1,
        marginRight: 20,
        marginTop: 65
      },
      bg82: {
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
      bg1: {
        top: 442,
        left: 0,
        height: 387,
        backgroundColor: "rgba(36,19,50,1)",
        position: "absolute",
        right: 0,
        opacity: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
      },
      button: {
        top: 385,
        width: 52,
        height: 52,
        position: "absolute",
        right: 20,
        opacity: 1
      },
      bg7: {
        width: 60,
        height: 52,
        backgroundColor: "rgba(255,255,255,1)",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
        shadowOffset: {
          height: 12,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.101960784313725)",
        shadowOpacity: 1,
        shadowRadius: 16
      },
      iconsGps: {
        width: 24,
        height: 24,
        opacity: 1,
        marginTop: 14,
        marginLeft: 14
      },
      bg8: {
        width: 24,
        height: 24,
        backgroundColor: "transparent"
      },
      a0D58F721F542978535E65456B2E0Bd: {
        width: 18,
        height: 18,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: 3,
        marginLeft: 3
      },
      scrollArea: {
        top: 469,
        left: 12,
        width: 351,
        height: 379,
        position: "absolute"
      },
      scrollArea_contentContainerStyle: {
        width: 351,
        height: 1897
      },
      group: {
        width: 351,
        height: 80
      },
      bg6: {
        backgroundColor: "rgba(53,38,65,1)",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        flex: 1
      },
      pin5: {
        width: 40,
        height: 40,
        opacity: 1
      },
      back2: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      min1: {
        color: "rgba(129,120,137,1)",
        opacity: 1,
        fontSize: 11,
        fontFamily: "Roboto",
        letterSpacing: -0.22
      },
      meditation: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 8
      },
      min1Column: {
        width: 162,
        marginLeft: 20,
        marginTop: 2
      },
      pin5Row: {
        flexDirection: "row",
        marginTop: 6,
        marginBottom: 5
      },
      pin5RowFiller: {
        flex: 1,
        flexDirection: "row"
      },
      button3: {
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
        color: "rgba(95,69,145,1)",
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
      pin5RowRow: {
        height: 52,
        flexDirection: "row",
        marginTop: 14,
        marginLeft: 20,
        marginRight: 21
      },
      group1: {
        width: 351,
        height: 80,
        marginTop: 19
      },
      bg62: {
        backgroundColor: "rgba(53,38,65,1)",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        flex: 1
      },
      pin52: {
        width: 40,
        height: 40,
        opacity: 1
      },
      back22: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      min12: {
        color: "rgba(129,120,137,1)",
        opacity: 1,
        fontSize: 11,
        fontFamily: "Roboto",
        letterSpacing: -0.22
      },
      meditation2: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 8
      },
      min12Column: {
        width: 162,
        marginLeft: 20,
        marginTop: 2
      },
      pin52Row: {
        flexDirection: "row",
        marginTop: 6,
        marginBottom: 5
      },
      pin52RowFiller: {
        flex: 1,
        flexDirection: "row"
      },
      button32: {
        width: 54,
        height: 52,
        alignSelf: "flex-end"
      },
      rect22: {
        top: 0,
        left: 0,
        height: 52,
        position: "absolute",
        opacity: 1,
        right: 0
      },
      ellipse81132: {
        width: 52,
        height: 52,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 2
      },
      loremIpsum32: {
        top: 4,
        left: 18,
        color: "rgba(95,69,145,1)",
        position: "absolute",
        fontSize: 36,
        fontFamily: "Roboto",
        lineHeight: 43,
        letterSpacing: 0,
        textAlign: "center"
      },
      rect22Stack: {
        height: 52
      },
      pin52RowRow: {
        height: 52,
        flexDirection: "row",
        marginTop: 14,
        marginLeft: 20,
        marginRight: 21
      },
      group2: {
        width: 351,
        height: 80,
        marginTop: 20
      },
      bg622: {
        backgroundColor: "rgba(53,38,65,1)",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        flex: 1
      },
      pin522: {
        width: 40,
        height: 40,
        opacity: 1
      },
      back222: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      min122: {
        color: "rgba(129,120,137,1)",
        opacity: 1,
        fontSize: 11,
        fontFamily: "Roboto",
        letterSpacing: -0.22
      },
      meditation22: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 8
      },
      min122Column: {
        width: 162,
        marginLeft: 20,
        marginTop: 2
      },
      pin522Row: {
        flexDirection: "row",
        marginTop: 6,
        marginBottom: 5
      },
      pin522RowFiller: {
        flex: 1,
        flexDirection: "row"
      },
      button322: {
        width: 54,
        height: 52,
        alignSelf: "flex-end"
      },
      rect222: {
        top: 0,
        left: 0,
        height: 52,
        position: "absolute",
        opacity: 1,
        right: 0
      },
      ellipse811322: {
        width: 52,
        height: 52,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 2
      },
      loremIpsum322: {
        top: 4,
        left: 18,
        color: "rgba(95,69,145,1)",
        position: "absolute",
        fontSize: 36,
        fontFamily: "Roboto",
        lineHeight: 43,
        letterSpacing: 0,
        textAlign: "center"
      },
      rect222Stack: {
        height: 52
      },
      pin522RowRow: {
        height: 52,
        flexDirection: "row",
        marginTop: 14,
        marginLeft: 20,
        marginRight: 21
      },
      group3: {
        width: 351,
        height: 80,
        marginTop: 20
      },
      bg6222: {
        backgroundColor: "rgba(53,38,65,1)",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        flex: 1
      },
      pin5222: {
        width: 40,
        height: 40,
        opacity: 1
      },
      back2222: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      min1222: {
        color: "rgba(129,120,137,1)",
        opacity: 1,
        fontSize: 11,
        fontFamily: "Roboto",
        letterSpacing: -0.22
      },
      meditation222: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 8
      },
      min1222Column: {
        width: 162,
        marginLeft: 20,
        marginTop: 2
      },
      pin5222Row: {
        flexDirection: "row",
        marginTop: 6,
        marginBottom: 5
      },
      pin5222RowFiller: {
        flex: 1,
        flexDirection: "row"
      },
      button3222: {
        width: 54,
        height: 52,
        alignSelf: "flex-end"
      },
      rect2222: {
        top: 0,
        left: 0,
        height: 52,
        position: "absolute",
        opacity: 1,
        right: 0
      },
      ellipse8113222: {
        width: 52,
        height: 52,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 2
      },
      loremIpsum3222: {
        top: 4,
        left: 18,
        color: "rgba(95,69,145,1)",
        position: "absolute",
        fontSize: 36,
        fontFamily: "Roboto",
        lineHeight: 43,
        letterSpacing: 0,
        textAlign: "center"
      },
      rect2222Stack: {
        height: 52
      },
      pin5222RowRow: {
        height: 52,
        flexDirection: "row",
        marginTop: 14,
        marginLeft: 20,
        marginRight: 21
      },
      elementsMapStack: {
        flex: 1,
        marginBottom: -19,
        marginTop: -17
      }
    });

export default UsefulStats;
