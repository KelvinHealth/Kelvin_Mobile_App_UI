import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Svg, { Path, Stop, Defs, Mask, LinearGradient } from "react-native-svg";
import { NavigationContainer } from '../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../node_modules/@react-navigation/stack';
import { Center } from "../../node_modules/@builderx/utils";
import App from '../../App';

function QuickTest({navigation}) {
    return (
        <View style={styles.root}>
          <View style={styles.bdb7A066D84B4959A402B7F3942173DbStack}>
            <ImageBackground
              source={require("../assets/images/3c92f928d0e19bf8877b78f170c9882e2743ed60.png")}
              resizeMode="cover"
              style={styles.bdb7A066D84B4959A402B7F3942173Db}
              imageStyle={styles.bdb7A066D84B4959A402B7F3942173Db_imageStyle}
            >
              <View style={styles.scan3Filler}></View>
              <View style={styles.scan3}></View>
            </ImageBackground>
            <TouchableOpacity
              onPress={() => navigation.navigate("NiceShot")}
              style={styles.button}
            >
              <View style={styles.shoot1Stack}>
                <Svg viewBox="-0 -0 60 60" style={styles.shoot1}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(77,45,140,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M30.00 60.00 C46.57 60.00 60.00 46.57 60.00 30.00 C60.00 13.43 46.57 0.00 30.00 0.00 C13.43 0.00 0.00 13.43 0.00 30.00 C0.00 46.57 13.43 60.00 30.00 60.00 Z"
                  ></Path>
                </Svg>
                <Svg viewBox="-0 -0 60 60" style={styles.shoot2}>
                  <Path
                    strokeWidth={0}
                    fill="rgba(255,255,255,1)"
                    fillOpacity={1}
                    strokeOpacity={1}
                    d="M30.00 60.00 C46.57 60.00 60.00 46.57 60.00 30.00 C60.00 13.43 46.57 0.00 30.00 0.00 C13.43 0.00 0.00 13.43 0.00 30.00 C0.00 46.57 13.43 60.00 30.00 60.00 Z"
                  ></Path>
                </Svg>
              </View>
            </TouchableOpacity>
            <View style={styles.top}>
              <View style={styles.statusBarDark}>
                <View style={styles.backgroundStack}>
                  <Svg viewBox="-0 -0 375 44" style={styles.background}>
                    <Path
                      strokeWidth={0}
                      fill="transparent"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M0.00 0.00 L375.00 0.00 L375.00 44.00 L0.00 44.00 Z"
                    ></Path>
                  </Svg>
                  <View style={styles.battery}>
                    <View style={styles.borderStackRow}>
                      <View style={styles.borderStack}>
                        <View style={styles.border}>
                          <View style={styles.shapeStack}>
                            <Svg
                              viewBox="-0 -0 22 11.3333396911621"
                              style={styles.shape}
                            >
                              <Path
                                strokeWidth={0}
                                fill="transparent"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M2.67 0.00 L19.33 0.00 L19.33 0.00 C20.81 0.00 22.00 1.19 22.00 2.67 L22.00 8.67 L22.00 8.67 C22.00 10.14 20.81 11.33 19.33 11.33 L2.67 11.33 L2.67 11.33 C1.19 11.33 0.00 10.14 0.00 8.67 L0.00 2.67 L0.00 2.67 C0.00 1.19 1.19 0.00 2.67 0.00 Z"
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-1 -1 26 15.3333396911621"
                              style={styles.fill}
                            >
                              <Defs>
                                <Mask
                                  id="s4p5Bx"
                                  x={0}
                                  y={0}
                                  width={26}
                                  height={15}
                                >
                                  <Path
                                    d="M2.67 0.00 L19.33 0.00 L19.33 0.00 C20.81 0.00 22.00 1.19 22.00 2.67 L22.00 8.67 L22.00 8.67 C22.00 10.14 20.81 11.33 19.33 11.33 L2.67 11.33 L2.67 11.33 C1.19 11.33 0.00 10.14 0.00 8.67 L0.00 2.67 L0.00 2.67 C0.00 1.19 1.19 0.00 2.67 0.00 Z"
                                    fill="white"
                                  />
                                </Mask>
                              </Defs>
                              <Path
                                strokeWidth={2}
                                fill="transparent"
                                stroke="rgba(255,255,255,0.349019607843137)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M3.67 1.00 L20.33 1.00 L20.33 1.00 C21.81 1.00 23.00 2.19 23.00 3.67 L23.00 9.67 L23.00 9.67 C23.00 11.14 21.81 12.33 20.33 12.33 L3.67 12.33 L3.67 12.33 C2.19 12.33 1.00 11.14 1.00 9.67 L1.00 3.67 L1.00 3.67 C1.00 2.19 2.19 1.00 3.67 1.00 Z"
                                mask="url(#s4p5Bx)"
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                        <View style={styles.capacity}>
                          <View style={styles.shape2Stack}>
                            <Svg
                              viewBox="-0 -0 18 7.33333969116211"
                              style={styles.shape2}
                            >
                              <Path
                                strokeWidth={0}
                                fill="transparent"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M1.33 0.00 L16.67 0.00 L16.67 0.00 C17.40 0.00 18.00 0.60 18.00 1.33 L18.00 6.00 L18.00 6.00 C18.00 6.74 17.40 7.33 16.67 7.33 L1.33 7.33 L1.33 7.33 C0.60 7.33 0.00 6.74 0.00 6.00 L0.00 1.33 L0.00 1.33 C0.00 0.60 0.60 0.00 1.33 0.00 Z"
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0 -0 18 7.33333969116211"
                              style={styles.fill2}
                            >
                              <Defs>
                                <Mask id="PZ7lxi" x={0} y={0} width={18} height={7}>
                                  <Path
                                    d="M1.33 0.00 L16.67 0.00 L16.67 0.00 C17.40 0.00 18.00 0.60 18.00 1.33 L18.00 6.00 L18.00 6.00 C18.00 6.74 17.40 7.33 16.67 7.33 L1.33 7.33 L1.33 7.33 C0.60 7.33 0.00 6.74 0.00 6.00 L0.00 1.33 L0.00 1.33 C0.00 0.60 0.60 0.00 1.33 0.00 Z"
                                    fill="white"
                                  />
                                </Mask>
                              </Defs>
                              <Path
                                strokeWidth={0}
                                fill="rgba(255,255,255,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M-5.00 -5.00 L23.00 -5.00 L23.00 12.33 L-5.00 12.33 Z"
                                mask="url(#PZ7lxi)"
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                      </View>
                      <View style={styles.cap}>
                        <View style={styles.shape1Stack}>
                          <Svg
                            viewBox="-0 -0 1.3280029296875 4"
                            style={styles.shape1}
                          >
                            <Path
                              strokeWidth={0}
                              fill="transparent"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M0.00 0.00 L0.00 4.00 C0.80 3.66 1.33 2.87 1.33 2.00 C1.33 1.13 0.80 0.34 0.00 0.00 "
                            ></Path>
                          </Svg>
                          <Svg
                            viewBox="-0 -0 1.3280029296875 4"
                            style={styles.fill1}
                          >
                            <Defs>
                              <Mask id="VOkPb1" x={0} y={0} width={1} height={4}>
                                <Path
                                  d="M0.00 0.00 L0.00 4.00 C0.80 3.66 1.33 2.87 1.33 2.00 C1.33 1.13 0.80 0.34 0.00 0.00 Z"
                                  fill="white"
                                />
                              </Mask>
                            </Defs>
                            <Path
                              strokeWidth={0}
                              fill="rgba(255,255,255,0.4)"
                              fillOpacity={1}
                              strokeOpacity={1}
                              d="M-5.00 -5.00 L6.33 -5.00 L6.33 9.00 L-5.00 9.00 Z"
                              mask="url(#VOkPb1)"
                            ></Path>
                          </Svg>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.wifi}>
                    <View style={styles.wifi1}>
                      <View style={styles.aa8956870824Ab68CdcCebb49E3F857Stack}>
                        <Svg
                          viewBox="-0 -0 15.2724113464355 10.9655647277832"
                          style={styles.aa8956870824Ab68CdcCebb49E3F857}
                        >
                          <Path
                            strokeWidth={0}
                            fill="transparent"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M1.68 4.66 C1.56 4.77 1.25 4.65 1.25 4.65 L0.09 3.49 C0.09 3.49 -0.00 3.34 0.00 3.26 C0.00 3.17 0.04 3.09 0.10 3.03 C4.31 -1.01 10.96 -1.01 15.18 3.03 C15.24 3.09 15.27 3.17 15.27 3.26 C15.27 3.34 15.18 3.49 15.18 3.49 L14.02 4.65 C14.02 4.65 13.71 4.77 13.59 4.66 C11.98 3.13 9.85 2.28 7.64 2.28 C5.42 2.28 3.29 3.13 1.68 4.66 Z M4.34 7.34 C4.22 7.46 3.91 7.34 3.91 7.34 L2.76 6.17 C2.76 6.17 2.66 6.03 2.66 5.94 C2.66 5.85 2.70 5.77 2.76 5.71 C5.51 3.15 9.77 3.15 12.51 5.71 C12.58 5.77 12.61 5.85 12.61 5.94 C12.61 6.03 12.52 6.17 12.52 6.17 L11.36 7.34 C11.36 7.34 11.05 7.46 10.93 7.34 C10.03 6.53 8.85 6.07 7.64 6.07 C6.42 6.07 5.25 6.53 4.34 7.34 Z M7.86 10.87 C7.86 10.87 7.72 10.97 7.64 10.97 C7.55 10.97 7.42 10.87 7.42 10.87 L5.42 8.86 C5.42 8.86 5.32 8.71 5.32 8.63 C5.33 8.54 5.36 8.46 5.43 8.40 C6.70 7.32 8.57 7.32 9.85 8.40 C9.91 8.46 9.95 8.54 9.95 8.63 C9.95 8.71 9.86 8.86 9.86 8.86 L7.86 10.87 Z"
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0 -0 15.2724113464355 10.9655647277832"
                          style={styles.fill3}
                        >
                          <Defs>
                            <Mask id="LJZdSb" x={0} y={0} width={15} height={10}>
                              <Path
                                d="M1.68 4.66 C1.56 4.77 1.25 4.65 1.25 4.65 L0.09 3.49 C0.09 3.49 -0.00 3.34 0.00 3.26 C0.00 3.17 0.04 3.09 0.10 3.03 C4.31 -1.01 10.96 -1.01 15.18 3.03 C15.24 3.09 15.27 3.17 15.27 3.26 C15.27 3.34 15.18 3.49 15.18 3.49 L14.02 4.65 C14.02 4.65 13.71 4.77 13.59 4.66 C11.98 3.13 9.85 2.28 7.64 2.28 C5.42 2.28 3.29 3.13 1.68 4.66 Z M4.34 7.34 C4.22 7.46 3.91 7.34 3.91 7.34 L2.76 6.17 C2.76 6.17 2.66 6.03 2.66 5.94 C2.66 5.85 2.70 5.77 2.76 5.71 C5.51 3.15 9.77 3.15 12.51 5.71 C12.58 5.77 12.61 5.85 12.61 5.94 C12.61 6.03 12.52 6.17 12.52 6.17 L11.36 7.34 C11.36 7.34 11.05 7.46 10.93 7.34 C10.03 6.53 8.85 6.07 7.64 6.07 C6.42 6.07 5.25 6.53 4.34 7.34 Z M7.86 10.87 C7.86 10.87 7.72 10.97 7.64 10.97 C7.55 10.97 7.42 10.87 7.42 10.87 L5.42 8.86 C5.42 8.86 5.32 8.71 5.32 8.63 C5.33 8.54 5.36 8.46 5.43 8.40 C6.70 7.32 8.57 7.32 9.85 8.40 C9.91 8.46 9.95 8.54 9.95 8.63 C9.95 8.71 9.86 8.86 9.86 8.86 L7.86 10.87 Z"
                                fill="white"
                              />
                            </Mask>
                          </Defs>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M-5.00 -5.00 L20.27 -5.00 L20.27 15.97 L-5.00 15.97 Z"
                            mask="url(#LJZdSb)"
                          ></Path>
                        </Svg>
                      </View>
                    </View>
                  </View>
                  <View style={styles.cellularConnection}>
                    <View style={styles.cellularConnection1}>
                      <View style={styles.c370Ee1F42Ae445381490Fde86D6A259Stack}>
                        <Svg
                          viewBox="-0 -0 17 10.6666603088379"
                          style={styles.c370Ee1F42Ae445381490Fde86D6A259}
                        >
                          <Path
                            strokeWidth={0}
                            fill="transparent"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.00 7.67 L0.00 9.67 L1.00 10.67 L2.00 10.67 L3.00 9.67 L3.00 7.67 L2.00 6.67 L1.00 6.67 L0.00 7.67 Z M4.67 5.67 L4.67 9.67 L5.67 10.67 L6.67 10.67 L7.67 9.67 L7.67 5.67 L6.67 4.67 L5.67 4.67 L4.67 5.67 Z M9.33 3.33 L9.33 9.67 L10.33 10.67 L11.33 10.67 L12.33 9.67 L12.33 3.33 L11.33 2.33 L10.33 2.33 L9.33 3.33 Z M14.00 1.00 L14.00 9.67 L15.00 10.67 L16.00 10.67 L17.00 9.67 L17.00 1.00 L16.00 0.00 L15.00 0.00 L14.00 1.00 Z"
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0 -0 17 10.6666603088379"
                          style={styles.fill4}
                        >
                          <Defs>
                            <Mask id="okiaP9" x={0} y={0} width={17} height={10}>
                              <Path
                                d="M0.00 7.67 L0.00 9.67 L1.00 10.67 L2.00 10.67 L3.00 9.67 L3.00 7.67 L2.00 6.67 L1.00 6.67 L0.00 7.67 Z M4.67 5.67 L4.67 9.67 L5.67 10.67 L6.67 10.67 L7.67 9.67 L7.67 5.67 L6.67 4.67 L5.67 4.67 L4.67 5.67 Z M9.33 3.33 L9.33 9.67 L10.33 10.67 L11.33 10.67 L12.33 9.67 L12.33 3.33 L11.33 2.33 L10.33 2.33 L9.33 3.33 Z M14.00 1.00 L14.00 9.67 L15.00 10.67 L16.00 10.67 L17.00 9.67 L17.00 1.00 L16.00 0.00 L15.00 0.00 L14.00 1.00 Z"
                                fill="white"
                              />
                            </Mask>
                          </Defs>
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M-5.00 -5.00 L22.00 -5.00 L22.00 15.67 L-5.00 15.67 Z"
                            mask="url(#okiaP9)"
                          ></Path>
                        </Svg>
                      </View>
                    </View>
                  </View>
                  <View style={styles.barsTimeBlack}>
                    <View style={styles.background1Stack}>
                      <Svg viewBox="-0 -0 54 16" style={styles.background1}>
                        <Path
                          strokeWidth={0}
                          fill="transparent"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M0.00 16.00 L54.00 16.00 L54.00 0.00 L0.00 0.00 Z"
                        ></Path>
                      </Svg>
                      <Svg
                        viewBox="-0 -0 27.4512157440186 10.349609375"
                        style={styles.bd2339BfE89C4Ca094BbDb09857E8F42}
                      >
                        <Path
                          strokeWidth={0}
                          fill="rgba(255,255,255,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M0.14 7.66 L1.89 7.66 C1.89 7.66 2.78 8.87 3.62 8.87 C5.07 8.87 5.92 5.27 5.92 5.27 C5.92 5.27 5.87 5.27 5.86 5.27 C5.85 5.27 5.80 5.27 5.80 5.27 C5.80 5.27 4.40 6.75 3.25 6.75 C1.37 6.75 0.00 5.37 0.00 3.47 C0.00 1.44 1.52 0.00 3.66 0.00 C5.11 0.00 6.25 0.68 6.91 1.95 C7.37 2.76 7.61 3.81 7.61 5.07 C7.61 8.39 6.12 10.35 3.61 10.35 C1.80 10.35 0.14 7.66 0.14 7.66 Z M5.63 3.44 C5.63 2.32 4.78 1.47 3.68 1.47 C2.58 1.47 1.73 2.31 1.73 3.41 C1.73 4.54 2.54 5.35 3.67 5.35 C4.80 5.35 5.63 4.54 5.63 3.44 Z M9.62 7.98 C9.62 7.36 10.07 6.90 10.71 6.90 C11.36 6.90 11.80 7.36 11.80 7.98 C11.80 8.60 11.36 9.06 10.71 9.06 C10.07 9.06 9.62 8.60 9.62 7.98 Z M9.62 2.86 C9.62 2.24 10.07 1.78 10.71 1.78 C11.36 1.78 11.80 2.24 11.80 2.86 C11.80 3.48 11.36 3.94 10.71 3.94 C10.07 3.94 9.62 3.48 9.62 2.86 Z M18.62 8.27 L13.80 8.27 L13.80 6.70 L17.82 0.25 L20.31 0.25 L20.31 6.78 L21.64 6.78 L21.64 8.27 L20.31 8.27 L20.31 10.11 L18.62 10.11 Z M15.44 6.82 L18.65 6.82 L18.65 1.68 L18.55 1.68 L15.44 6.72 Z M25.69 2.02 L25.57 2.02 L23.12 3.75 L23.12 2.05 L25.69 0.25 L27.45 0.25 L27.45 10.11 L25.69 10.11 Z"
                        ></Path>
                      </Svg>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.scan}></View>
            <View style={styles.scan1}></View>
            <View style={styles.scan2}></View>
            <View style={styles.bg4}>
              <Text style={styles.moveBackWith10Cm}>Move Back with ~10cm</Text>
              <Text style={styles.weWillNotifyYouWhenItIsOkay}>
                We will Notify you, when it is okay!
              </Text>
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
      bdb7A066D84B4959A402B7F3942173Db: {
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        position: "absolute",
        bottom: 0,
        right: 78,
        flexDirection: "row"
      },
      bdb7A066D84B4959A402B7F3942173Db_imageStyle: {
        opacity: 1
      },
      scan3Filler: {
        flex: 1,
        flexDirection: "row"
      },
      scan3: {
        width: 62,
        height: 55,
        backgroundColor: "rgba(255,255,255,0.2)",
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 2,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12,
        alignSelf: "flex-end",
        marginRight: 252,
        marginBottom: 378
      },
      button: {
        top: 642,
        left: 144,
        width: 72,
        height: 73,
        position: "absolute"
      },
      shoot1: {
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent",
        right: 0,
        bottom: 0
      },
      shoot2: {
        top: 6,
        left: 6,
        width: 60,
        height: 60,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      shoot1Stack: {
        flex: 1
      },
      top: {
        top: 0,
        left: 0,
        width: 360,
        height: 40,
        position: "absolute",
        opacity: 1
      },
      statusBarDark: {
        width: 360,
        height: 40,
        opacity: 1
      },
      background: {
        top: 0,
        left: 0,
        width: 360,
        height: 40,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      battery: {
        top: 16,
        left: 323,
        width: 23,
        height: 10,
        position: "absolute",
        opacity: 1,
        flexDirection: "row"
      },
      border: {
        top: 0,
        left: 0,
        width: 21,
        height: 10,
        position: "absolute",
        opacity: 1
      },
      shape: {
        top: 0,
        left: 0,
        width: 21,
        height: 10,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      fill: {
        top: 0,
        left: 0,
        width: 21,
        height: 10,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      shapeStack: {
        width: 21,
        height: 10
      },
      capacity: {
        top: 2,
        left: 2,
        width: 17,
        height: 7,
        position: "absolute",
        opacity: 1
      },
      shape2: {
        top: 0,
        left: 0,
        width: 17,
        height: 7,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      fill2: {
        top: 0,
        left: 0,
        width: 17,
        height: 7,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      shape2Stack: {
        width: 17,
        height: 7
      },
      borderStack: {
        width: 21,
        height: 10
      },
      cap: {
        width: 1,
        height: 4,
        opacity: 1,
        marginLeft: 1,
        marginTop: 3
      },
      shape1: {
        top: 0,
        left: 0,
        width: 1,
        height: 4,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      fill1: {
        top: 0,
        left: 0,
        width: 1,
        height: 4,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      shape1Stack: {
        width: 1,
        height: 4
      },
      borderStackRow: {
        height: 10,
        flexDirection: "row",
        flex: 1
      },
      wifi: {
        top: 16,
        left: 303,
        width: 15,
        height: 10,
        position: "absolute",
        opacity: 1
      },
      wifi1: {
        width: 15,
        height: 10,
        opacity: 1
      },
      aa8956870824Ab68CdcCebb49E3F857: {
        top: 0,
        left: 0,
        width: 15,
        height: 10,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      fill3: {
        top: 0,
        left: 0,
        width: 15,
        height: 10,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      aa8956870824Ab68CdcCebb49E3F857Stack: {
        width: 15,
        height: 10
      },
      cellularConnection: {
        top: 16,
        left: 282,
        width: 16,
        height: 10,
        position: "absolute",
        opacity: 1
      },
      cellularConnection1: {
        width: 16,
        height: 10,
        opacity: 1
      },
      c370Ee1F42Ae445381490Fde86D6A259: {
        top: 0,
        left: 0,
        width: 16,
        height: 10,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      fill4: {
        top: 0,
        left: 0,
        width: 16,
        height: 10,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      c370Ee1F42Ae445381490Fde86D6A259Stack: {
        width: 16,
        height: 10
      },
      barsTimeBlack: {
        top: 14,
        left: 19,
        width: 52,
        height: 15,
        position: "absolute",
        opacity: 1
      },
      background1: {
        top: 0,
        left: 0,
        width: 52,
        height: 15,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      bd2339BfE89C4Ca094BbDb09857E8F42: {
        top: 4,
        left: 12,
        width: 26,
        height: 9,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      background1Stack: {
        width: 52,
        height: 15
      },
      backgroundStack: {
        width: 360,
        height: 40
      },
      scan: {
        left: 15,
        width: 62,
        height: 55,
        backgroundColor: "rgba(255,255,255,0.2)",
        position: "absolute",
        bottom: 175,
        opacity: 1,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 2,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12
      },
      scan1: {
        width: 62,
        height: 55,
        backgroundColor: "rgba(255,255,255,0.2)",
        position: "absolute",
        right: 176,
        bottom: 148,
        opacity: 1,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 2,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12
      },
      scan2: {
        top: 228,
        left: 108,
        width: 62,
        height: 55,
        backgroundColor: "rgba(255,255,255,0.2)",
        position: "absolute",
        opacity: 1,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 2,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        borderBottomLeftRadius: 12
      },
      bg4: {
        top: 0,
        left: 0,
        height: 101,
        backgroundColor: "rgba(255,255,255,1)",
        position: "absolute",
        right: 0,
        borderTopRightRadius: 80,
        borderBottomLeftRadius: 80
      },
      moveBackWith10Cm: {
        color: "rgba(53,38,65,1)",
        opacity: 1,
        fontSize: 20,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 20,
        letterSpacing: -0.32,
        textAlign: "center",
        marginTop: 31,
        marginRight: 78
      },
      weWillNotifyYouWhenItIsOkay: {
        color: "rgba(153,143,162,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        textAlign: "center",
        marginRight: 78
      },
      bdb7A066D84B4959A402B7F3942173DbStack: {
        flex: 1,
        marginRight: -78
      }
    });

export default QuickTest;
