import React, { Component } from "react";
import { 
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
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

function ProfilePage({navigation}) {
    return (
        <View style={styles.root}>
          <View style={styles.bg2Stack}>
            <View style={styles.bg2}>
              <View style={styles.group797}>
                <View style={styles.group794}>
                  <View style={styles.bg7Stack}>
                    <View style={styles.bg7}></View>
                    <View style={styles.group793}>
                      <View style={styles.b85E9B13D414B55Aabf90D41D21B099Row}>
                        <Svg
                          viewBox="-0 -0 10 12"
                          style={styles.b85E9B13D414B55Aabf90D41D21B099}
                        >
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,255,255,1)"
                            fillOpacity={0.5}
                            strokeOpacity={0.5}
                            d="M5.36 11.85 L4.64 11.85 L1.47 8.74 C1.47 8.74 0.00 6.48 0.00 5.12 C0.00 3.76 0.53 2.45 1.47 1.50 C3.42 -0.50 6.58 -0.50 8.53 1.50 C9.47 2.45 10.00 3.76 10.00 5.12 C10.00 6.48 8.53 8.74 8.53 8.74 L5.36 11.85 Z M2.21 2.27 C0.67 3.85 2.20 7.96 2.20 7.96 L5.00 10.70 L7.80 7.96 C7.80 7.96 8.95 6.19 8.95 5.12 C8.95 4.05 7.79 2.27 7.79 2.27 Z M5.00 7.36 C3.84 7.36 2.89 6.39 2.89 5.18 C2.89 3.98 3.84 3.00 5.00 3.00 C6.16 3.00 7.11 3.98 7.11 5.18 C7.11 6.39 6.16 7.36 5.00 7.36 Z M5.00 6.27 C5.58 6.27 6.05 5.78 6.05 5.18 C6.05 4.58 5.58 4.09 5.00 4.09 C4.42 4.09 3.95 4.58 3.95 5.18 C3.95 5.78 4.42 6.27 5.00 6.27 Z"
                          ></Path>
                        </Svg>
                        <Text style={styles.monthreal}>Montreal</Text>
                        <Svg viewBox="-0.5 -0.5 17 55" style={styles.line299}>
                          <Path
                            strokeWidth={2}
                            fill="transparent"
                            stroke="rgba(38,24,53,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M1.00 1.00 L16.00 28.00 M16.00 28.00 L1.00 54.00 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0 -0 10 12"
                          style={styles.da7855AbE93B4D3E8960Fd33C3Adf367}
                        >
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,255,255,1)"
                            fillOpacity={0.5}
                            strokeOpacity={0.5}
                            d="M5.36 11.85 L4.64 11.85 L1.47 8.74 C1.47 8.74 0.00 6.48 0.00 5.12 C0.00 3.76 0.53 2.45 1.47 1.50 C3.42 -0.50 6.58 -0.50 8.53 1.50 C9.47 2.45 10.00 3.76 10.00 5.12 C10.00 6.48 8.53 8.74 8.53 8.74 L5.36 11.85 Z M2.21 2.27 C0.67 3.85 2.20 7.96 2.20 7.96 L5.00 10.70 L7.80 7.96 C7.80 7.96 8.95 6.19 8.95 5.12 C8.95 4.05 7.79 2.27 7.79 2.27 Z M5.00 7.36 C3.84 7.36 2.89 6.39 2.89 5.18 C2.89 3.98 3.84 3.00 5.00 3.00 C6.16 3.00 7.11 3.98 7.11 5.18 C7.11 6.39 6.16 7.36 5.00 7.36 Z M5.00 6.27 C5.58 6.27 6.05 5.78 6.05 5.18 C6.05 4.58 5.58 4.09 5.00 4.09 C4.42 4.09 3.95 4.58 3.95 5.18 C3.95 5.78 4.42 6.27 5.00 6.27 Z"
                          ></Path>
                        </Svg>
                        <Text style={styles.monthreal1}>New York City</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.group796}>
                  <View style={styles.bg8Stack}>
                    <View style={styles.bg8}></View>
                    <View style={styles.group795}>
                      <View style={styles.c0Db7E73Cd234158A836E459Dc4C705FRow}>
                        <Svg
                          viewBox="-0 -0 13.041711807251 13.041690826416"
                          style={styles.c0Db7E73Cd234158A836E459Dc4C705F}
                        >
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,255,255,1)"
                            fillOpacity={0.5}
                            strokeOpacity={0.5}
                            d="M9.78 1.19 L11.56 1.19 L13.04 2.67 L13.04 11.56 L11.56 13.04 L1.48 13.04 L0.00 11.56 L0.00 2.67 L1.48 1.19 L3.26 1.19 L3.26 0.59 C3.26 0.59 3.53 0.00 3.85 0.00 C4.18 0.00 4.45 0.59 4.45 0.59 L4.45 1.19 L8.60 1.19 L8.60 0.59 C8.60 0.59 8.86 0.00 9.19 0.00 C9.52 0.00 9.78 0.59 9.78 0.59 Z M9.78 2.37 L9.78 2.96 C9.78 2.96 9.52 3.56 9.19 3.56 C8.86 3.56 8.60 2.96 8.60 2.96 L8.60 2.37 L4.45 2.37 L4.45 2.96 C4.45 2.96 4.18 3.56 3.85 3.56 C3.53 3.56 3.26 2.96 3.26 2.96 L3.26 2.37 L1.48 2.37 L1.19 2.67 L1.19 11.56 L1.48 11.86 L11.56 11.86 L11.86 11.56 L11.86 2.67 L11.56 2.37 Z M6.52 7.11 C6.03 7.11 5.63 6.72 5.63 6.22 C5.63 5.73 6.03 5.34 6.52 5.34 C7.01 5.34 7.41 5.73 7.41 6.22 C7.41 6.72 7.01 7.11 6.52 7.11 Z M9.78 7.11 C9.29 7.11 8.89 6.72 8.89 6.22 C8.89 5.73 9.29 5.34 9.78 5.34 C10.27 5.34 10.67 5.73 10.67 6.22 C10.67 6.72 10.27 7.11 9.78 7.11 Z M3.26 10.37 C2.77 10.37 2.37 9.98 2.37 9.48 C2.37 8.99 2.77 8.60 3.26 8.60 C3.75 8.60 4.15 8.99 4.15 9.48 C4.15 9.98 3.75 10.37 3.26 10.37 Z M6.52 10.37 C6.03 10.37 5.63 9.98 5.63 9.48 C5.63 8.99 6.03 8.60 6.52 8.60 C7.01 8.60 7.41 8.99 7.41 9.48 C7.41 9.98 7.01 10.37 6.52 10.37 Z"
                          ></Path>
                        </Svg>
                        <Text style={styles.monthreal2}>Sun, Jan 14</Text>
                        <Svg viewBox="-0.5 -0.5 17 55" style={styles.line2991}>
                          <Path
                            strokeWidth={2}
                            fill="transparent"
                            stroke="rgba(38,24,53,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M1.00 1.00 L16.00 28.00 M16.00 28.00 L1.00 54.00 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0 -0 13.0417175292969 13.041690826416"
                          style={styles.a54D48Bd81F14B6EAe71A76C47247345}
                        >
                          <Path
                            strokeWidth={0}
                            fill="rgba(255,255,255,1)"
                            fillOpacity={0.5}
                            strokeOpacity={0.5}
                            d="M9.78 1.19 L11.56 1.19 L13.04 2.67 L13.04 11.56 L11.56 13.04 L1.48 13.04 L0.00 11.56 L0.00 2.67 L1.48 1.19 L3.26 1.19 L3.26 0.59 C3.26 0.59 3.53 0.00 3.85 0.00 C4.18 0.00 4.45 0.59 4.45 0.59 L4.45 1.19 L8.60 1.19 L8.60 0.59 C8.60 0.59 8.86 0.00 9.19 0.00 C9.52 0.00 9.78 0.59 9.78 0.59 Z M9.78 2.37 L9.78 2.96 C9.78 2.96 9.52 3.56 9.19 3.56 C8.86 3.56 8.60 2.96 8.60 2.96 L8.60 2.37 L4.45 2.37 L4.45 2.96 C4.45 2.96 4.18 3.56 3.85 3.56 C3.53 3.56 3.26 2.96 3.26 2.96 L3.26 2.37 L1.48 2.37 L1.19 2.67 L1.19 11.56 L1.48 11.86 L11.56 11.86 L11.86 11.56 L11.86 2.67 L11.56 2.37 Z M6.52 7.11 C6.03 7.11 5.63 6.72 5.63 6.22 C5.63 5.73 6.03 5.34 6.52 5.34 C7.01 5.34 7.41 5.73 7.41 6.22 C7.41 6.72 7.01 7.11 6.52 7.11 Z M9.78 7.11 C9.29 7.11 8.89 6.72 8.89 6.22 C8.89 5.73 9.29 5.34 9.78 5.34 C10.27 5.34 10.67 5.73 10.67 6.22 C10.67 6.72 10.27 7.11 9.78 7.11 Z M3.26 10.37 C2.77 10.37 2.37 9.98 2.37 9.48 C2.37 8.99 2.77 8.60 3.26 8.60 C3.75 8.60 4.15 8.99 4.15 9.48 C4.15 9.98 3.75 10.37 3.26 10.37 Z M6.52 10.37 C6.03 10.37 5.63 9.98 5.63 9.48 C5.63 8.99 6.03 8.60 6.52 8.60 C7.01 8.60 7.41 8.99 7.41 9.48 C7.41 9.98 7.01 10.37 6.52 10.37 Z"
                          ></Path>
                        </Svg>
                        <Text style={styles.monthreal3}>Sun, Jan 14</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.group797Filler}></View>
              <View style={styles.info}>
                <View style={styles.text1Stack}>
                  <View style={styles.text1}>
                    <View style={styles.bg9}>
                      <View style={styles.minColumnRow}>
                        <View style={styles.minColumn}>
                          <Text style={styles.min}>9:00 (25 min)</Text>
                          <Text style={styles.meditation}>Meditation</Text>
                        </View>
                        <View style={styles.avatars}>
                          <View style={styles.maskStack}>
                            <View style={styles.mask}>
                              <View
                                style={styles.b46E61503Deb458B9F1CDf997529459FStack}
                              >
                                <Svg
                                  viewBox="-1 -1 36 36"
                                  style={styles.b46E61503Deb458B9F1CDf997529459F}
                                >
                                  <Path
                                    strokeWidth={2}
                                    fill="transparent"
                                    stroke="rgba(255,255,255,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M17.00 33.00 C25.84 33.00 33.00 25.84 33.00 17.00 C33.00 8.16 25.84 1.00 17.00 1.00 C8.16 1.00 1.00 8.16 1.00 17.00 C1.00 25.84 8.16 33.00 17.00 33.00 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 32 32"
                                  style={styles.f07Bed66482446D2Bb43C5650Db07Fd8}
                                >
                                  <Defs>
                                    <Mask id="CIHXZKu" x={0} y={0}>
                                      <Path
                                        fill="white"
                                        d={
                                          "M16.00 32.00 C24.84 32.00 32.00 24.84 32.00 16.00 C32.00 7.16 24.84 0.00 16.00 0.00 C7.16 0.00 0.00 7.16 0.00 16.00 C0.00 24.84 7.16 32.00 16.00 32.00 Z"
                                        }
                                      />
                                    </Mask>
                                  </Defs>
                                  <SvgImage
                                    href={require("../assets/images/f347c3523408539041bf819d1159478bc9535b52.png")}
                                    x={0}
                                    y={0}
                                    width={32}
                                    height={32}
                                    mask={"url(#CIHXZKu)"}
                                  ></SvgImage>
                                </Svg>
                              </View>
                            </View>
                            <View style={styles.mask1}>
                              <View
                                style={styles.cde55Aefd4379Abed5909191De88AStack}
                              >
                                <Svg
                                  viewBox="-1 -1 36 36"
                                  style={styles.cde55Aefd4379Abed5909191De88A}
                                >
                                  <Path
                                    strokeWidth={2}
                                    fill="transparent"
                                    stroke="rgba(255,255,255,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M17.00 33.00 C25.84 33.00 33.00 25.84 33.00 17.00 C33.00 8.16 25.84 1.00 17.00 1.00 C8.16 1.00 1.00 8.16 1.00 17.00 C1.00 25.84 8.16 33.00 17.00 33.00 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 32 32"
                                  style={styles.b68F5Eb01F3E484BBce0870Bc48Be960}
                                >
                                  <Defs>
                                    <Mask id="rtGVQZO" x={0} y={0}>
                                      <Path
                                        fill="white"
                                        d={
                                          "M16.00 32.00 C24.84 32.00 32.00 24.84 32.00 16.00 C32.00 7.16 24.84 0.00 16.00 0.00 C7.16 0.00 0.00 7.16 0.00 16.00 C0.00 24.84 7.16 32.00 16.00 32.00 Z"
                                        }
                                      />
                                    </Mask>
                                  </Defs>
                                  <SvgImage
                                    href={require("../assets/images/1a09403bd4c4c212a036243f9347107373fd4839.png")}
                                    x={0}
                                    y={0}
                                    width={32}
                                    height={32}
                                    mask={"url(#rtGVQZO)"}
                                  ></SvgImage>
                                </Svg>
                              </View>
                            </View>
                            <View style={styles.mask2}>
                              <View style={styles.e26692C4736A41448A072EfcecaStack}>
                                <Svg
                                  viewBox="-1 -1 36 36"
                                  style={styles.e26692C4736A41448A072Efceca}
                                >
                                  <Path
                                    strokeWidth={2}
                                    fill="transparent"
                                    stroke="rgba(255,255,255,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M17.00 33.00 C25.84 33.00 33.00 25.84 33.00 17.00 C33.00 8.16 25.84 1.00 17.00 1.00 C8.16 1.00 1.00 8.16 1.00 17.00 C1.00 25.84 8.16 33.00 17.00 33.00 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 32 32"
                                  style={styles.af1Fc30C3F942Cd8298E08D90Faa159}
                                >
                                  <Defs>
                                    <Mask id="KeXFHg9" x={0} y={0}>
                                      <Path
                                        fill="white"
                                        d={
                                          "M16.00 32.00 C24.84 32.00 32.00 24.84 32.00 16.00 C32.00 7.16 24.84 0.00 16.00 0.00 C7.16 0.00 0.00 7.16 0.00 16.00 C0.00 24.84 7.16 32.00 16.00 32.00 Z"
                                        }
                                      />
                                    </Mask>
                                  </Defs>
                                  <SvgImage
                                    href={require("../assets/images/dc9760a6e91d30ceb458a3e0bab34a984c39f504.png")}
                                    x={0}
                                    y={0}
                                    width={32}
                                    height={32}
                                    mask={"url(#KeXFHg9)"}
                                  ></SvgImage>
                                </Svg>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.pin}>
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
                  <View style={styles.sunrise}>
                    <View style={styles.path212StackStack}>
                      <View style={styles.path212Stack}>
                        <Svg
                          viewBox="-0.75 -0.75 9.90474081039429 6.45236921310425"
                          style={styles.path212}
                        >
                          <Path
                            strokeWidth={1.5}
                            fill="transparent"
                            stroke="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M7.65 4.20 C7.65 2.30 6.11 0.75 4.20 0.75 C2.30 0.75 0.75 2.30 0.75 4.20 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.75 -0.75 3.980473279953003 3.980473041534424"
                          style={styles.line243}
                        >
                          <Path
                            strokeWidth={1.5}
                            fill="transparent"
                            stroke="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.75 0.75 L1.73 1.73 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.75 -0.75 3.980473518371582 3.980473041534424"
                          style={styles.line246}
                        >
                          <Path
                            strokeWidth={1.5}
                            fill="transparent"
                            stroke="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.75 1.73 L1.73 0.75 "
                          ></Path>
                        </Svg>
                      </View>
                      <View style={styles.line242Stack}>
                        <Svg
                          viewBox="-0.75 -0.75 3.010000228881836 7.83331871032715"
                          style={styles.line242}
                        >
                          <Path
                            strokeWidth={1.5}
                            fill="transparent"
                            stroke="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.75 0.75 L0.75 5.58 "
                          ></Path>
                        </Svg>
                        <Svg
                          viewBox="-0.75 -0.75 8.52379322052002 5.76189661026001"
                          style={styles.path213}
                        >
                          <Path
                            strokeWidth={1.5}
                            fill="transparent"
                            stroke="rgba(255,255,255,1)"
                            fillOpacity={1}
                            strokeOpacity={1}
                            d="M0.75 3.51 L3.51 0.75 L6.27 3.51 "
                          ></Path>
                        </Svg>
                      </View>
                      <Svg
                        viewBox="-0.75 -0.75 4.38094818592072 3.010000228881836"
                        style={styles.line244}
                      >
                        <Path
                          strokeWidth={1.5}
                          fill="transparent"
                          stroke="rgba(255,255,255,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M0.75 0.75 L2.13 0.75 "
                        ></Path>
                      </Svg>
                      <Svg
                        viewBox="-0.75 -0.75 4.38094806671143 3.010000228881836"
                        style={styles.line245}
                      >
                        <Path
                          strokeWidth={1.5}
                          fill="transparent"
                          stroke="rgba(255,255,255,1)"
                          fillOpacity={1}
                          strokeOpacity={1}
                          d="M0.75 0.75 L2.13 0.75 "
                        ></Path>
                      </Svg>
                    </View>
                    <Svg
                      viewBox="-0.75 -0.75 18.1904296875 3.010000228881836"
                      style={styles.line247}
                    >
                      <Path
                        strokeWidth={1.5}
                        fill="transparent"
                        stroke="rgba(255,255,255,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M15.94 0.75 L0.75 0.75 "
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.description}>
              <View style={styles.bg1}>
                <View style={styles.fieldStack}>
                  <View style={styles.field}>
                    <View style={styles.description1Row}>
                      <Text style={styles.description1}>Description</Text>
                      <View style={styles.iconsChevron}>
                        <View style={styles.bg22Stack}>
                          <View style={styles.bg22}></View>
                          <View style={styles.line}></View>
                          <View style={styles.line1}></View>
                        </View>
                      </View>
                    </View>
                    <Text
                      style={
                        styles.thisAsanaIsSoEasyThatJustAboutAnybodyCanDoItItBasicallyStretchesYourInnerThighsAndGroinAreaButTheStraightBackAndTheStretchInTheLegsMakeYouFeelBetterYourAnxietyAndStressAutomaticallyReduceAsYourMindCalmsDown
                      }
                    >
                      This asana is so easy that just about anybody can do it. It
                      basically stretches your inner thighs and groin area, but the
                      straight back and the stretch in the legs make you feel
                      better. Your anxiety and stress automatically reduce as your
                      mind calms down. This asana also helps cure anxiety.
                    </Text>
                  </View>
                  <View style={styles.divider}>
                    <View style={styles.divider1}></View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bg4}></View>
            <View style={styles.bg23}>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditProfile")}
                style={styles.button1}
              >
                <View style={styles.bg72}>
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
                <Text style={styles.verificationCode}>email@email.com</Text>
              </TouchableOpacity>
              <View style={styles.button1Filler}>
                <Text style={styles.experimentalPopMusicSession1}>
                  Profile Page
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditProfile")}
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
            <View style={styles.scrollArea}>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                <View style={styles.button6Row}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("PointStats")}
                    style={styles.button6}
                  >
                    <View style={styles.group7903Stack}>
                      <View style={styles.group7903}>
                        <View style={styles.photo23}>
                          <View style={styles.e24B87254Ea94F209F42131838B8D5F63}>
                            <Image
                              source={require("../assets/images/579481a923a277dce47be5c03c90bbd172de462c.png")}
                              resizeMode="cover"
                              style={styles.ebed35A3Afe44F193AaDa40979791D63}
                            ></Image>
                          </View>
                        </View>
                      </View>
                      <View style={styles.group7914}>
                        <View style={styles.photo33Stack}>
                          <ImageBackground
                            style={styles.photo33}
                            imageStyle={styles.photo33_imageStyle}
                            source={require("../assets/images/Gradient_R2bIdfu.png")}
                          >
                            <Text style={styles.clickToOpenInfo3}>
                              Click to Open Info
                            </Text>
                          </ImageBackground>
                          <Text style={styles.a1902Covid013}>A1902-COVID.01</Text>
                        </View>
                      </View>
                      <View style={styles.buttonFabAdd3}>
                        <View style={styles.bg103}>
                          <View style={styles.iconAdd3}>
                            <View style={styles.bg113}>
                              <Svg viewBox="-0 -0 16 16" style={styles.path2143}>
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(36,19,50,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M15.00 7.25 C15.00 7.25 15.81 7.25 15.97 7.97 C15.91 8.27 15.69 8.75 15.00 8.75 C15.00 8.75 8.70 8.75 8.70 8.75 C8.62 9.43 8.42 10.49 7.94 11.60 C7.59 10.80 7.35 9.86 7.27 8.75 C7.27 8.75 1.00 8.75 1.00 8.75 C1.00 8.75 0.19 8.75 0.03 8.03 C0.09 7.73 0.31 7.25 1.00 7.25 C1.00 7.25 7.30 7.25 7.30 7.25 C7.38 6.57 7.58 5.51 8.06 4.40 C8.41 5.20 8.65 6.14 8.73 7.25 Z M15.97 7.97 C16.00 7.84 16.00 7.75 16.00 7.75 C16.00 7.75 16.00 8.25 16.00 8.25 C16.00 8.15 15.99 8.06 15.97 7.97 Z M0.03 8.03 C0.00 8.16 0.00 8.25 0.00 8.25 C0.00 8.25 0.00 7.75 0.00 7.75 C0.00 7.85 0.01 7.94 0.03 8.03 Z M15.25 0.00 C10.98 0.00 8.99 2.28 8.06 4.40 C6.12 0.00 0.75 0.00 0.75 0.00 Z M7.94 11.60 C9.88 16.00 15.25 16.00 15.25 16.00 C15.25 16.00 0.75 16.00 0.75 16.00 C5.02 16.00 7.01 13.72 7.94 11.60 Z"
                                ></Path>
                              </Svg>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("PointStats")}
                    style={styles.button4}
                  >
                    <View style={styles.group7904Stack}>
                      <View style={styles.group7904}>
                        <View style={styles.photo24}>
                          <View style={styles.e24B87254Ea94F209F42131838B8D5F64}>
                            <Image
                              source={require("../assets/images/579481a923a277dce47be5c03c90bbd172de462c.png")}
                              resizeMode="cover"
                              style={styles.ebed35A3Afe44F193AaDa40979791D64}
                            ></Image>
                          </View>
                        </View>
                      </View>
                      <View style={styles.group7915}>
                        <View style={styles.photo34Stack}>
                          <ImageBackground
                            style={styles.photo34}
                            imageStyle={styles.photo34_imageStyle}
                            source={require("../assets/images/Gradient_R2bIdfu.png")}
                          >
                            <Text style={styles.clickToOpenInfo4}>
                              Click to Open Info
                            </Text>
                          </ImageBackground>
                          <Text style={styles.a1902Covid014}>A1902-COVID.01</Text>
                        </View>
                      </View>
                      <View style={styles.buttonFabAdd4}>
                        <View style={styles.bg104}>
                          <View style={styles.iconAdd4}>
                            <View style={styles.bg114}>
                              <Svg viewBox="-0 -0 16 16" style={styles.path2144}>
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(36,19,50,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M15.00 7.25 C15.00 7.25 15.81 7.25 15.97 7.97 C15.91 8.27 15.69 8.75 15.00 8.75 C15.00 8.75 8.70 8.75 8.70 8.75 C8.62 9.43 8.42 10.49 7.94 11.60 C7.59 10.80 7.35 9.86 7.27 8.75 C7.27 8.75 1.00 8.75 1.00 8.75 C1.00 8.75 0.19 8.75 0.03 8.03 C0.09 7.73 0.31 7.25 1.00 7.25 C1.00 7.25 7.30 7.25 7.30 7.25 C7.38 6.57 7.58 5.51 8.06 4.40 C8.41 5.20 8.65 6.14 8.73 7.25 Z M15.97 7.97 C16.00 7.84 16.00 7.75 16.00 7.75 C16.00 7.75 16.00 8.25 16.00 8.25 C16.00 8.15 15.99 8.06 15.97 7.97 Z M0.03 8.03 C0.00 8.16 0.00 8.25 0.00 8.25 C0.00 8.25 0.00 7.75 0.00 7.75 C0.00 7.85 0.01 7.94 0.03 8.03 Z M15.25 0.00 C10.98 0.00 8.99 2.28 8.06 4.40 C6.12 0.00 0.75 0.00 0.75 0.00 Z M7.94 11.60 C9.88 16.00 15.25 16.00 15.25 16.00 C15.25 16.00 0.75 16.00 0.75 16.00 C5.02 16.00 7.01 13.72 7.94 11.60 Z"
                                ></Path>
                              </Svg>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("PointStats")}
                    style={styles.button5}
                  >
                    <View style={styles.group7902Stack}>
                      <View style={styles.group7902}>
                        <View style={styles.photo22}>
                          <View style={styles.e24B87254Ea94F209F42131838B8D5F62}>
                            <Image
                              source={require("../assets/images/579481a923a277dce47be5c03c90bbd172de462c.png")}
                              resizeMode="cover"
                              style={styles.ebed35A3Afe44F193AaDa40979791D62}
                            ></Image>
                          </View>
                        </View>
                      </View>
                      <View style={styles.group7912}>
                        <View style={styles.photo32Stack}>
                          <ImageBackground
                            style={styles.photo32}
                            imageStyle={styles.photo32_imageStyle}
                            source={require("../assets/images/Gradient_R2bIdfu.png")}
                          >
                            <Text style={styles.clickToOpenInfo2}>
                              Click to Open Info
                            </Text>
                          </ImageBackground>
                          <Text style={styles.a1902Covid012}>A1902-COVID.01</Text>
                        </View>
                      </View>
                      <View style={styles.buttonFabAdd2}>
                        <View style={styles.bg102}>
                          <View style={styles.iconAdd2}>
                            <View style={styles.bg112}>
                              <Svg viewBox="-0 -0 16 16" style={styles.path2142}>
                                <Path
                                  strokeWidth={0}
                                  fill="rgba(36,19,50,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M15.00 7.25 C15.00 7.25 15.81 7.25 15.97 7.97 C15.91 8.27 15.69 8.75 15.00 8.75 C15.00 8.75 8.70 8.75 8.70 8.75 C8.62 9.43 8.42 10.49 7.94 11.60 C7.59 10.80 7.35 9.86 7.27 8.75 C7.27 8.75 1.00 8.75 1.00 8.75 C1.00 8.75 0.19 8.75 0.03 8.03 C0.09 7.73 0.31 7.25 1.00 7.25 C1.00 7.25 7.30 7.25 7.30 7.25 C7.38 6.57 7.58 5.51 8.06 4.40 C8.41 5.20 8.65 6.14 8.73 7.25 Z M15.97 7.97 C16.00 7.84 16.00 7.75 16.00 7.75 C16.00 7.75 16.00 8.25 16.00 8.25 C16.00 8.15 15.99 8.06 15.97 7.97 Z M0.03 8.03 C0.00 8.16 0.00 8.25 0.00 8.25 C0.00 8.25 0.00 7.75 0.00 7.75 C0.00 7.85 0.01 7.94 0.03 8.03 Z M15.25 0.00 C10.98 0.00 8.99 2.28 8.06 4.40 C6.12 0.00 0.75 0.00 0.75 0.00 Z M7.94 11.60 C9.88 16.00 15.25 16.00 15.25 16.00 C15.25 16.00 0.75 16.00 0.75 16.00 C5.02 16.00 7.01 13.72 7.94 11.60 Z"
                                ></Path>
                              </Svg>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
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
      bg2: {
        top: 76,
        left: 0,
        backgroundColor: "rgba(36,19,50,1)",
        position: "absolute",
        right: 597,
        bottom: 154
      },
      group797: {
        width: 343,
        height: 120,
        marginTop: 504,
        marginLeft: 8
      },
      group794: {
        width: 343,
        height: 55
      },
      bg7: {
        top: 1,
        left: 0,
        height: 52,
        backgroundColor: "rgba(53,38,65,1)",
        position: "absolute",
        opacity: 1,
        borderTopLeftRadius: 52,
        borderTopRightRadius: 52,
        borderBottomRightRadius: 52,
        borderBottomLeftRadius: 52,
        right: 0
      },
      group793: {
        top: 0,
        left: 20,
        width: 292,
        height: 55,
        position: "absolute",
        flexDirection: "row"
      },
      b85E9B13D414B55Aabf90D41D21B099: {
        width: 10,
        height: 12,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: 22
      },
      monthreal: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 13,
        fontFamily: "Roboto",
        fontWeight: "700",
        letterSpacing: 0.26,
        marginLeft: 12,
        marginTop: 20
      },
      line299: {
        width: 17,
        height: 55,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 59
      },
      da7855AbE93B4D3E8960Fd33C3Adf367: {
        width: 10,
        height: 12,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 12,
        marginTop: 22
      },
      monthreal1: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 13,
        fontFamily: "Roboto",
        letterSpacing: 0.26,
        marginLeft: 12,
        marginTop: 20
      },
      b85E9B13D414B55Aabf90D41D21B099Row: {
        height: 55,
        flexDirection: "row",
        flex: 1
      },
      bg7Stack: {
        height: 55
      },
      group796: {
        width: 343,
        height: 55,
        marginTop: 10
      },
      bg8: {
        top: 1,
        left: 0,
        height: 52,
        backgroundColor: "rgba(53,38,65,1)",
        position: "absolute",
        opacity: 1,
        borderTopLeftRadius: 52,
        borderTopRightRadius: 52,
        borderBottomRightRadius: 52,
        borderBottomLeftRadius: 52,
        right: 0
      },
      group795: {
        top: 0,
        left: 20,
        width: 272,
        height: 55,
        position: "absolute",
        flexDirection: "row"
      },
      c0Db7E73Cd234158A836E459Dc4C705F: {
        width: 13,
        height: 13,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: 21
      },
      monthreal2: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 13,
        fontFamily: "Roboto",
        fontWeight: "700",
        letterSpacing: 0.26,
        marginLeft: 9,
        marginTop: 20
      },
      line2991: {
        width: 17,
        height: 55,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 44
      },
      a54D48Bd81F14B6EAe71A76C47247345: {
        width: 13,
        height: 13,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 12,
        marginTop: 21
      },
      monthreal3: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 13,
        fontFamily: "Roboto",
        letterSpacing: 0.26,
        marginLeft: 9,
        marginTop: 20
      },
      c0Db7E73Cd234158A836E459Dc4C705FRow: {
        height: 55,
        flexDirection: "row",
        flex: 1
      },
      bg8Stack: {
        height: 55
      },
      group797Filler: {
        flex: 1
      },
      info: {
        width: 351,
        height: 80,
        opacity: 1,
        marginBottom: 45,
        marginTop: 12,
        marginLeft: 6
      },
      text1: {
        top: 0,
        left: 0,
        width: 351,
        height: 80,
        position: "absolute",
        opacity: 1
      },
      bg9: {
        width: 351,
        height: 80,
        backgroundColor: "rgba(53,38,65,1)",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40
      },
      min: {
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
      minColumn: {
        width: 77
      },
      avatars: {
        width: 77,
        height: 32,
        opacity: 1,
        marginLeft: 93,
        marginTop: 2
      },
      mask: {
        top: 0,
        left: 45,
        width: 32,
        height: 32,
        position: "absolute",
        opacity: 1
      },
      b46E61503Deb458B9F1CDf997529459F: {
        top: 0,
        left: 0,
        width: 36,
        height: 36,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      f07Bed66482446D2Bb43C5650Db07Fd8: {
        top: 0,
        left: 0,
        width: 36,
        height: 36,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      b46E61503Deb458B9F1CDf997529459FStack: {
        width: 36,
        height: 36,
        marginTop: -1,
        marginLeft: -1
      },
      mask1: {
        top: 0,
        left: 22,
        width: 32,
        height: 32,
        position: "absolute",
        opacity: 1
      },
      cde55Aefd4379Abed5909191De88A: {
        top: 0,
        left: 0,
        width: 36,
        height: 36,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      b68F5Eb01F3E484BBce0870Bc48Be960: {
        top: 0,
        left: 0,
        width: 36,
        height: 36,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      cde55Aefd4379Abed5909191De88AStack: {
        width: 36,
        height: 36,
        marginTop: -1,
        marginLeft: -1
      },
      mask2: {
        top: 0,
        left: 0,
        width: 32,
        height: 32,
        position: "absolute",
        opacity: 1
      },
      e26692C4736A41448A072Efceca: {
        top: 0,
        left: 0,
        width: 36,
        height: 36,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      af1Fc30C3F942Cd8298E08D90Faa159: {
        top: 0,
        left: 0,
        width: 36,
        height: 36,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      e26692C4736A41448A072EfcecaStack: {
        width: 36,
        height: 36,
        marginTop: -1,
        marginLeft: -1
      },
      maskStack: {
        width: 77,
        height: 32
      },
      minColumnRow: {
        height: 39,
        flexDirection: "row",
        marginTop: 22,
        marginLeft: 80,
        marginRight: 24
      },
      pin: {
        top: 20,
        left: 20,
        width: 40,
        height: 40,
        position: "absolute",
        opacity: 1
      },
      back2: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      sunrise: {
        top: 33,
        left: 31,
        width: 15,
        height: 14,
        position: "absolute",
        opacity: 0.8
      },
      path212: {
        top: 2,
        left: 2,
        width: 10,
        height: 6,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      line243: {
        top: 0,
        left: 0,
        width: 4,
        height: 4,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      line246: {
        top: 0,
        left: 10,
        width: 4,
        height: 4,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      path212Stack: {
        top: 6,
        left: 2,
        width: 14,
        height: 8,
        position: "absolute"
      },
      line242: {
        top: 0,
        left: 3,
        width: 3,
        height: 8,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      path213: {
        top: 0,
        left: 0,
        width: 9,
        height: 6,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      line242Stack: {
        top: 0,
        left: 5,
        width: 9,
        height: 8,
        position: "absolute"
      },
      line244: {
        top: 11,
        left: 0,
        width: 4,
        height: 3,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      line245: {
        top: 11,
        left: 14,
        width: 4,
        height: 3,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      path212StackStack: {
        width: 18,
        height: 14,
        marginTop: -1,
        marginLeft: -1
      },
      line247: {
        width: 18,
        height: 3,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: -1
      },
      text1Stack: {
        width: 351,
        height: 80
      },
      description: {
        top: 817,
        left: 16,
        width: 343,
        height: 185,
        position: "absolute",
        opacity: 1
      },
      bg1: {
        width: 343,
        height: 185,
        backgroundColor: "rgba(53,38,65,1)",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.101960784313725)",
        shadowOpacity: 1,
        shadowRadius: 16
      },
      field: {
        top: 0,
        left: 0,
        width: 303,
        height: 143,
        position: "absolute",
        opacity: 1
      },
      description1: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 16,
        fontFamily: "Roboto",
        fontWeight: "700",
        marginTop: 2
      },
      iconsChevron: {
        width: 27,
        height: 26,
        opacity: 0.56,
        marginLeft: 179
      },
      bg22: {
        top: 0,
        left: 0,
        width: 24,
        height: 24,
        backgroundColor: "transparent",
        position: "absolute",
        opacity: 1
      },
      line: {
        top: 11,
        left: 6,
        width: 40,
        height: 2,
        backgroundColor: "rgba(120,132,158,1)",
        position: "absolute",
        opacity: 1,
        transform: [
          {
            rotate: "45deg"
          }
        ],
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
      },
      line1: {
        top: 11,
        left: 11,
        width: 40,
        height: 2,
        backgroundColor: "rgba(120,132,158,1)",
        position: "absolute",
        opacity: 1,
        transform: [
          {
            rotate: "-45deg"
          }
        ],
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
      },
      bg22Stack: {
        width: 51,
        height: 24,
        marginTop: 2,
        marginLeft: 3
      },
      description1Row: {
        height: 26,
        flexDirection: "row"
      },
      thisAsanaIsSoEasyThatJustAboutAnybodyCanDoItItBasicallyStretchesYourInnerThighsAndGroinAreaButTheStraightBackAndTheStretchInTheLegsMakeYouFeelBetterYourAnxietyAndStressAutomaticallyReduceAsYourMindCalmsDown: {
        width: 295,
        height: 86,
        color: "rgba(153,143,162,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "500",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 31
      },
      divider: {
        top: 40,
        left: 0,
        width: 295,
        height: 1,
        position: "absolute",
        opacity: 1
      },
      divider1: {
        width: 295,
        height: 1,
        backgroundColor: "rgba(244,244,246,1)",
        opacity: 0.1,
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        borderBottomRightRadius: 1,
        borderBottomLeftRadius: 1
      },
      fieldStack: {
        width: 303,
        height: 143,
        marginTop: 22,
        marginLeft: 24
      },
      bg4: {
        top: 18,
        left: 0,
        height: 137,
        backgroundColor: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        borderBottomLeftRadius: 80,
        right: 597
      },
      bg23: {
        top: 0,
        left: 0,
        height: 155,
        backgroundColor: "rgba(255,255,255,1)",
        position: "absolute",
        borderBottomLeftRadius: 80,
        right: 597,
        flexDirection: "row"
      },
      button1: {
        width: 24,
        height: 24,
        opacity: 1,
        marginLeft: 25,
        marginTop: 66
      },
      bg72: {
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
      verificationCode: {
        width: 258,
        height: 28,
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 28,
        fontFamily: "Roboto",
        fontWeight: "500",
        lineHeight: 28,
        letterSpacing: 0.11,
        marginTop: 429,
        marginLeft: 33
      },
      experimentalPopMusicSession1: {
        color: "rgba(0,0,0,1)",
        opacity: 1,
        fontSize: 36,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 36,
        letterSpacing: -0.42,
        marginTop: 60
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
        marginTop: 66
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
      scrollArea: {
        top: 180,
        left: 16,
        width: 956,
        height: 300,
        position: "absolute",
        flexDirection: "row"
      },
      scrollArea_contentContainerStyle: {
        width: 4782,
        height: 300
      },
      button6: {
        width: 311,
        height: 300
      },
      group7903: {
        top: 0,
        left: 0,
        position: "absolute",
        opacity: 1,
        right: 0,
        bottom: 0
      },
      photo23: {
        width: 311,
        height: 300,
        opacity: 1
      },
      e24B87254Ea94F209F42131838B8D5F63: {
        width: 311,
        height: 300,
        backgroundColor: "transparent",
        opacity: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.101960784313725)",
        shadowOpacity: 1,
        shadowRadius: 16,
        overflow: "hidden"
      },
      ebed35A3Afe44F193AaDa40979791D63: {
        width: 311,
        height: 331,
        backgroundColor: "transparent",
        opacity: 1,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.101960784313725)",
        shadowOpacity: 1,
        shadowRadius: 16,
        marginTop: -15,
      },
      group7914: {
        top: 208,
        left: 0,
        width: 311,
        height: 92,
        position: "absolute"
      },
      photo33: {
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        position: "absolute",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.101960784313725)",
        shadowOpacity: 1,
        shadowRadius: 16,
        right: 0,
        bottom: 0,
        overflow: "hidden"
      },
      photo33_imageStyle: {
        opacity: 0.49
      },
      clickToOpenInfo3: {
        color: "rgba(255,255,255,1)",
        opacity: 0.71,
        fontSize: 16,
        fontFamily: "Roboto",
        lineHeight: 17,
        marginTop: 54,
        marginLeft: 24
      },
      a1902Covid013: {
        top: 24,
        left: 24,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 24,
        fontFamily: "Roboto",
        lineHeight: 24
      },
      photo33Stack: {
        flex: 1
      },
      buttonFabAdd3: {
        top: 124,
        left: 133,
        width: 52,
        height: 52,
        position: "absolute",
        opacity: 0.61
      },
      bg103: {
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
      iconAdd3: {
        width: 24,
        height: 24,
        opacity: 1,
        marginTop: 14,
        marginLeft: 14
      },
      bg113: {
        width: 24,
        height: 24,
        backgroundColor: "transparent"
      },
      path2143: {
        width: 16,
        height: 16,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: 4,
        marginLeft: 4
      },
      group7903Stack: {
        flex: 1
      },
      button4: {
        width: 311,
        height: 300,
        marginLeft: 11
      },
      group7904: {
        top: 0,
        left: 0,
        position: "absolute",
        opacity: 1,
        right: 0,
        bottom: 0
      },
      photo24: {
        width: 311,
        height: 300,
        opacity: 1
      },
      e24B87254Ea94F209F42131838B8D5F64: {
        width: 311,
        height: 300,
        backgroundColor: "transparent",
        opacity: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.101960784313725)",
        shadowOpacity: 1,
        shadowRadius: 16,
        overflow: "hidden"
      },
      ebed35A3Afe44F193AaDa40979791D64: {
        width: 311,
        height: 331,
        backgroundColor: "transparent",
        opacity: 1,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.101960784313725)",
        shadowOpacity: 1,
        shadowRadius: 16,
        marginTop: -15,
      },
      group7915: {
        top: 208,
        left: 0,
        width: 311,
        height: 92,
        position: "absolute"
      },
      photo34: {
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        position: "absolute",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.101960784313725)",
        shadowOpacity: 1,
        shadowRadius: 16,
        right: 0,
        bottom: 0,
        overflow: "hidden"
      },
      photo34_imageStyle: {
        opacity: 0.49
      },
      clickToOpenInfo4: {
        color: "rgba(255,255,255,1)",
        opacity: 0.71,
        fontSize: 16,
        fontFamily: "Roboto",
        lineHeight: 17,
        marginTop: 54,
        marginLeft: 24
      },
      a1902Covid014: {
        top: 24,
        left: 24,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 24,
        fontFamily: "Roboto",
        lineHeight: 24
      },
      photo34Stack: {
        flex: 1
      },
      buttonFabAdd4: {
        top: 124,
        left: 133,
        width: 52,
        height: 52,
        position: "absolute",
        opacity: 0.61
      },
      bg104: {
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
      iconAdd4: {
        width: 24,
        height: 24,
        opacity: 1,
        marginTop: 14,
        marginLeft: 14
      },
      bg114: {
        width: 24,
        height: 24,
        backgroundColor: "transparent"
      },
      path2144: {
        width: 16,
        height: 16,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: 4,
        marginLeft: 4
      },
      group7904Stack: {
        flex: 1
      },
      button5: {
        width: 311,
        height: 300,
        marginLeft: 12
      },
      group7902: {
        top: 0,
        left: 0,
        position: "absolute",
        opacity: 1,
        right: 0,
        bottom: 0
      },
      photo22: {
        width: 311,
        height: 300,
        opacity: 1
      },
      e24B87254Ea94F209F42131838B8D5F62: {
        width: 311,
        height: 300,
        backgroundColor: "transparent",
        opacity: 1,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.101960784313725)",
        shadowOpacity: 1,
        shadowRadius: 16,
        overflow: "hidden"
      },
      ebed35A3Afe44F193AaDa40979791D62: {
        width: 311,
        height: 331,
        backgroundColor: "transparent",
        opacity: 1,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.101960784313725)",
        shadowOpacity: 1,
        shadowRadius: 16,
        marginTop: -15,
      },
      group7912: {
        top: 208,
        left: 0,
        width: 311,
        height: 92,
        position: "absolute"
      },
      photo32: {
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        position: "absolute",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        shadowOffset: {
          height: 4,
          width: 0
        },
        shadowColor: "rgba(69,91,99,0.101960784313725)",
        shadowOpacity: 1,
        shadowRadius: 16,
        right: 0,
        bottom: 0,
        overflow: "hidden"
      },
      photo32_imageStyle: {
        opacity: 0.49
      },
      clickToOpenInfo2: {
        color: "rgba(255,255,255,1)",
        opacity: 0.71,
        fontSize: 16,
        fontFamily: "Roboto",
        lineHeight: 17,
        marginTop: 54,
        marginLeft: 24
      },
      a1902Covid012: {
        top: 24,
        left: 24,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 24,
        fontFamily: "Roboto",
        lineHeight: 24
      },
      photo32Stack: {
        flex: 1
      },
      buttonFabAdd2: {
        top: 124,
        left: 133,
        width: 52,
        height: 52,
        position: "absolute",
        opacity: 0.61
      },
      bg102: {
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
      iconAdd2: {
        width: 24,
        height: 24,
        opacity: 1,
        marginTop: 14,
        marginLeft: 14
      },
      bg112: {
        width: 24,
        height: 24,
        backgroundColor: "transparent"
      },
      path2142: {
        width: 16,
        height: 16,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: 4,
        marginLeft: 4
      },
      group7902Stack: {
        flex: 1
      },
      button6Row: {
        height: 300,
        flexDirection: "row",
        flex: 1
      },
      bg2Stack: {
        flex: 1,
        marginBottom: -172,
        marginTop: -18,
        marginRight: -597
      }
    });

export default ProfilePage;
