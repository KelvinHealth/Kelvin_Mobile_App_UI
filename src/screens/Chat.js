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

function Chat({navigation}) {
    return (
        <View style={styles.root}>
            <ScrollView>
          <View style={styles.scrollAreaStackStack}>
            <View style={styles.scrollAreaStack}>
              <View style={styles.scrollArea}>
                <ScrollView
                  horizontal={false}
                  contentContainerStyle={styles.scrollArea_contentContainerStyle}
                >
                  <View style={styles.group15}>
                    <View style={styles.group9}>
                      <View style={styles.avatar3}>
                        <View style={styles.beatrice1Row}>
                          <Text style={styles.beatrice1}>Beatrice</Text>
                          <View style={styles.mask3}>
                            <View
                              style={styles.b1130574044755Bdce8Bf64F7Ac8A3Stack}
                            >
                              <Svg
                                viewBox="-1 -1 26 26"
                                style={styles.b1130574044755Bdce8Bf64F7Ac8A3}
                              >
                                <Path
                                  strokeWidth={2}
                                  fill="transparent"
                                  stroke="rgba(255,255,255,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M12.00 23.00 C18.08 23.00 23.00 18.08 23.00 12.00 C23.00 5.92 18.08 1.00 12.00 1.00 C5.92 1.00 1.00 5.92 1.00 12.00 C1.00 18.08 5.92 23.00 12.00 23.00 Z"
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 22 22"
                                style={styles.f993B65C4Ecf4710A95B6Fddc387741D}
                              >
                                <Defs>
                                  <Mask id="rhiE0sS" x={0} y={0}>
                                    <Path
                                      fill="white"
                                      d={
                                        "M11.00 22.00 C17.08 22.00 22.00 17.08 22.00 11.00 C22.00 4.92 17.08 0.00 11.00 0.00 C4.92 0.00 0.00 4.92 0.00 11.00 C0.00 17.08 4.92 22.00 11.00 22.00 Z"
                                      }
                                    />
                                  </Mask>
                                </Defs>
                                <SvgImage
                                  href={require("../assets/images/f347c3523408539041bf819d1159478bc9535b52.png")}
                                  x={0}
                                  y={0}
                                  width={22}
                                  height={22}
                                  mask={"url(#rhiE0sS)"}
                                ></SvgImage>
                              </Svg>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.group8}>
                        <View style={styles.bg11}>
                          <Text
                            style={styles.whatIsTheBestTimeToVisitRioDeJaneiro1}
                          >
                            And what about Carnival time?
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.group10Row}>
                      <View style={styles.group10}>
                        <View style={styles.group3}>
                          <View style={styles.mask2Row}>
                            <View style={styles.mask2}>
                              <View
                                style={styles.d5143A1Acda45479Fb9B55Bc0Dca59AStack}
                              >
                                <Svg
                                  viewBox="-1 -1 26 26"
                                  style={styles.d5143A1Acda45479Fb9B55Bc0Dca59A}
                                >
                                  <Path
                                    strokeWidth={2}
                                    fill="transparent"
                                    stroke="rgba(255,255,255,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M12.00 23.00 C18.08 23.00 23.00 18.08 23.00 12.00 C23.00 5.92 18.08 1.00 12.00 1.00 C5.92 1.00 1.00 5.92 1.00 12.00 C1.00 18.08 5.92 23.00 12.00 23.00 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 22 22"
                                  style={styles.fb28B1F71E54E68A4Cc1861B760066E}
                                >
                                  <Defs>
                                    <Mask id="o0scAYT" x={0} y={0}>
                                      <Path
                                        fill="white"
                                        d={
                                          "M11.00 22.00 C17.08 22.00 22.00 17.08 22.00 11.00 C22.00 4.92 17.08 0.00 11.00 0.00 C4.92 0.00 0.00 4.92 0.00 11.00 C0.00 17.08 4.92 22.00 11.00 22.00 Z"
                                        }
                                      />
                                    </Mask>
                                  </Defs>
                                  <SvgImage
                                    href={require("../assets/images/9481e6ba592dc7c0e4b3871128cbb57d7a2532d8.png")}
                                    x={0}
                                    y={0}
                                    width={22}
                                    height={22}
                                    mask={"url(#o0scAYT)"}
                                  ></SvgImage>
                                </Svg>
                              </View>
                            </View>
                            <Text style={styles.ryan1}>Ryan</Text>
                          </View>
                        </View>
                        <View style={styles.group7}>
                          <View style={styles.bg9}>
                            <View style={styles.text1Stack}>
                              <View style={styles.text1}>
                                <Text
                                  style={
                                    styles.ohSureLateFebruaryOrFirstDaysOfMarchAReasonWhyAccommodationFetchesItsHighestPrices
                                  }
                                >
                                  Oh sure, late February or first days of March, a
                                  reason why accommodation fetches its highest
                                  prices.
                                </Text>
                              </View>
                              <Text style={styles.style1}>🙌🙌🙌</Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.moreHorizontal2}>
                        <View style={styles.bg10}>
                          <View style={styles.oval8Row}>
                            <Svg
                              viewBox="-0.64999997615814 -0.64999997615814 4.5999999046325595 4.5999999046325595"
                              style={styles.oval8}
                            >
                              <Path
                                strokeWidth={1.29999995231628}
                                fill="rgba(202,202,202,1)"
                                stroke="rgba(202,202,202,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M1.65 2.65 C2.20 2.65 2.65 2.20 2.65 1.65 C2.65 1.10 2.20 0.65 1.65 0.65 C1.10 0.65 0.65 1.10 0.65 1.65 C0.65 2.20 1.10 2.65 1.65 2.65 Z"
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.64999997615814 -0.64999997615814 4.5999999046325595 4.5999999046325595"
                              style={styles.oval6}
                            >
                              <Path
                                strokeWidth={1.29999995231628}
                                fill="rgba(202,202,202,1)"
                                stroke="rgba(202,202,202,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M1.65 2.65 C2.20 2.65 2.65 2.20 2.65 1.65 C2.65 1.10 2.20 0.65 1.65 0.65 C1.10 0.65 0.65 1.10 0.65 1.65 C0.65 2.20 1.10 2.65 1.65 2.65 Z"
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.64999997615814 -0.64999997615814 4.5999999046325595 4.5999999046325595"
                              style={styles.oval7}
                            >
                              <Path
                                strokeWidth={1.29999995231628}
                                fill="rgba(202,202,202,1)"
                                stroke="rgba(202,202,202,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M1.65 2.65 C2.20 2.65 2.65 2.20 2.65 1.65 C2.65 1.10 2.20 0.65 1.65 0.65 C1.10 0.65 0.65 1.10 0.65 1.65 C0.65 2.20 1.10 2.65 1.65 2.65 Z"
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.group11Stack}>
                      <View style={styles.group11}>
                        <View style={styles.avatar5}>
                          <View style={styles.beatrice2Row}>
                            <Text style={styles.beatrice2}>Beatrice</Text>
                            <View style={styles.mask5}>
                              <View style={styles.fEc5B46F28C94A8021B8Ed89EStack}>
                                <Svg
                                  viewBox="-1 -1 26 26"
                                  style={styles.fEc5B46F28C94A8021B8Ed89E}
                                >
                                  <Path
                                    strokeWidth={2}
                                    fill="transparent"
                                    stroke="rgba(255,255,255,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M12.00 23.00 C18.08 23.00 23.00 18.08 23.00 12.00 C23.00 5.92 18.08 1.00 12.00 1.00 C5.92 1.00 1.00 5.92 1.00 12.00 C1.00 18.08 5.92 23.00 12.00 23.00 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 22 22"
                                  style={styles.fdeeff1Abf44C59927A5043E4E9Ace2}
                                >
                                  <Defs>
                                    <Mask id="IzFrTE9" x={0} y={0}>
                                      <Path
                                        fill="white"
                                        d={
                                          "M11.00 22.00 C17.08 22.00 22.00 17.08 22.00 11.00 C22.00 4.92 17.08 0.00 11.00 0.00 C4.92 0.00 0.00 4.92 0.00 11.00 C0.00 17.08 4.92 22.00 11.00 22.00 Z"
                                        }
                                      />
                                    </Mask>
                                  </Defs>
                                  <SvgImage
                                    href={require("../assets/images/f347c3523408539041bf819d1159478bc9535b52.png")}
                                    x={0}
                                    y={0}
                                    width={22}
                                    height={22}
                                    mask={"url(#IzFrTE9)"}
                                  ></SvgImage>
                                </Svg>
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.group6}>
                          <View style={styles.bg15}>
                            <Text
                              style={styles.whatIsTheBestTimeToVisitRioDeJaneiro2}
                            >
                              but is it safe?
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.moreHorizontal5}>
                        <View style={styles.bg16}>
                          <View style={styles.oval17Row}>
                            <Svg
                              viewBox="-0.64999997615814 -0.64999997615814 4.5999999046325595 4.5999999046325595"
                              style={styles.oval17}
                            >
                              <Path
                                strokeWidth={1.29999995231628}
                                fill="rgba(202,202,202,1)"
                                stroke="rgba(202,202,202,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M1.65 2.65 C2.20 2.65 2.65 2.20 2.65 1.65 C2.65 1.10 2.20 0.65 1.65 0.65 C1.10 0.65 0.65 1.10 0.65 1.65 C0.65 2.20 1.10 2.65 1.65 2.65 Z"
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.64999997615814 -0.64999997615814 4.5999999046325595 4.5999999046325595"
                              style={styles.oval15}
                            >
                              <Path
                                strokeWidth={1.29999995231628}
                                fill="rgba(202,202,202,1)"
                                stroke="rgba(202,202,202,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M1.65 2.65 C2.20 2.65 2.65 2.20 2.65 1.65 C2.65 1.10 2.20 0.65 1.65 0.65 C1.10 0.65 0.65 1.10 0.65 1.65 C0.65 2.20 1.10 2.65 1.65 2.65 Z"
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.64999997615814 -0.64999997615814 4.5999999046325595 4.5999999046325595"
                              style={styles.oval16}
                            >
                              <Path
                                strokeWidth={1.29999995231628}
                                fill="rgba(202,202,202,1)"
                                stroke="rgba(202,202,202,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M1.65 2.65 C2.20 2.65 2.65 2.20 2.65 1.65 C2.65 1.10 2.20 0.65 1.65 0.65 C1.10 0.65 0.65 1.10 0.65 1.65 C0.65 2.20 1.10 2.65 1.65 2.65 Z"
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.group12Stack}>
                      <View style={styles.group12}>
                        <View style={styles.group4}>
                          <View style={styles.mask4Row}>
                            <View style={styles.mask4}>
                              <View
                                style={styles.fae70Fc7B4024640Bb4198F1658E67EeStack}
                              >
                                <Svg
                                  viewBox="-1 -1 26 26"
                                  style={styles.fae70Fc7B4024640Bb4198F1658E67Ee}
                                >
                                  <Path
                                    strokeWidth={2}
                                    fill="transparent"
                                    stroke="rgba(255,255,255,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M12.00 23.00 C18.08 23.00 23.00 18.08 23.00 12.00 C23.00 5.92 18.08 1.00 12.00 1.00 C5.92 1.00 1.00 5.92 1.00 12.00 C1.00 18.08 5.92 23.00 12.00 23.00 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 22 22"
                                  style={styles.aa8Eb979D348Af98C8557Cfd65E2A7}
                                >
                                  <Defs>
                                    <Mask id="c7IATlT" x={0} y={0}>
                                      <Path
                                        fill="white"
                                        d={
                                          "M11.00 22.00 C17.08 22.00 22.00 17.08 22.00 11.00 C22.00 4.92 17.08 0.00 11.00 0.00 C4.92 0.00 0.00 4.92 0.00 11.00 C0.00 17.08 4.92 22.00 11.00 22.00 Z"
                                        }
                                      />
                                    </Mask>
                                  </Defs>
                                  <SvgImage
                                    href={require("../assets/images/9481e6ba592dc7c0e4b3871128cbb57d7a2532d8.png")}
                                    x={0}
                                    y={0}
                                    width={22}
                                    height={22}
                                    mask={"url(#c7IATlT)"}
                                  ></SvgImage>
                                </Svg>
                              </View>
                            </View>
                            <Text style={styles.ryan2}>Ryan</Text>
                          </View>
                        </View>
                        <View style={styles.group5}>
                          <View style={styles.bg13}>
                            <View style={styles.text2}>
                              <Text
                                style={
                                  styles.ofCourseItsSafeToVisitButVisitorsJustHaveToHaveStreetSmartsAndTheirWitsAboutThemMoreSoThanInAlmostAnyOtherMajorCityInTheWorld
                                }
                              >
                                Of course it’s safe to visit, but visitors just{" "}
                                {"\n"}have to have street smarts and their wits
                                about them more so than in almost any other major
                                city in the world.
                              </Text>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.moreHorizontal4}>
                        <View style={styles.bg14}>
                          <View style={styles.oval14Row}>
                            <Svg
                              viewBox="-0.64999997615814 -0.64999997615814 4.5999999046325595 4.5999999046325595"
                              style={styles.oval14}
                            >
                              <Path
                                strokeWidth={1.29999995231628}
                                fill="rgba(202,202,202,1)"
                                stroke="rgba(202,202,202,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M1.65 2.65 C2.20 2.65 2.65 2.20 2.65 1.65 C2.65 1.10 2.20 0.65 1.65 0.65 C1.10 0.65 0.65 1.10 0.65 1.65 C0.65 2.20 1.10 2.65 1.65 2.65 Z"
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.64999997615814 -0.64999997615814 4.5999999046325595 4.5999999046325595"
                              style={styles.oval12}
                            >
                              <Path
                                strokeWidth={1.29999995231628}
                                fill="rgba(202,202,202,1)"
                                stroke="rgba(202,202,202,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M1.65 2.65 C2.20 2.65 2.65 2.20 2.65 1.65 C2.65 1.10 2.20 0.65 1.65 0.65 C1.10 0.65 0.65 1.10 0.65 1.65 C0.65 2.20 1.10 2.65 1.65 2.65 Z"
                              ></Path>
                            </Svg>
                            <Svg
                              viewBox="-0.64999997615814 -0.64999997615814 4.5999999046325595 4.5999999046325595"
                              style={styles.oval13}
                            >
                              <Path
                                strokeWidth={1.29999995231628}
                                fill="rgba(202,202,202,1)"
                                stroke="rgba(202,202,202,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M1.65 2.65 C2.20 2.65 2.65 2.20 2.65 1.65 C2.65 1.10 2.20 0.65 1.65 0.65 C1.10 0.65 0.65 1.10 0.65 1.65 C0.65 2.20 1.10 2.65 1.65 2.65 Z"
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.group16}>
                    <View style={styles.group92Stack}>
                      <View style={styles.group92}>
                        <View style={styles.avatar32}>
                          <View style={styles.beatrice12Row}>
                            <Text style={styles.beatrice12}>Beatrice</Text>
                            <View style={styles.mask32}>
                              <View
                                style={styles.b1130574044755Bdce8Bf64F7Ac8A32Stack}
                              >
                                <Svg
                                  viewBox="-1 -1 26 26"
                                  style={styles.b1130574044755Bdce8Bf64F7Ac8A32}
                                >
                                  <Path
                                    strokeWidth={2}
                                    fill="transparent"
                                    stroke="rgba(255,255,255,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M12.00 23.00 C18.08 23.00 23.00 18.08 23.00 12.00 C23.00 5.92 18.08 1.00 12.00 1.00 C5.92 1.00 1.00 5.92 1.00 12.00 C1.00 18.08 5.92 23.00 12.00 23.00 Z"
                                  ></Path>
                                </Svg>
                                <Svg
                                  viewBox="0 0 22 22"
                                  style={styles.f993B65C4Ecf4710A95B6Fddc387741D2}
                                >
                                  <Defs>
                                    <Mask id="GJc3f9P" x={0} y={0}>
                                      <Path
                                        fill="white"
                                        d={
                                          "M11.00 22.00 C17.08 22.00 22.00 17.08 22.00 11.00 C22.00 4.92 17.08 0.00 11.00 0.00 C4.92 0.00 0.00 4.92 0.00 11.00 C0.00 17.08 4.92 22.00 11.00 22.00 Z"
                                        }
                                      />
                                    </Mask>
                                  </Defs>
                                  <SvgImage
                                    href={require("../assets/images/f347c3523408539041bf819d1159478bc9535b52.png")}
                                    x={0}
                                    y={0}
                                    width={22}
                                    height={22}
                                    mask={"url(#GJc3f9P)"}
                                  ></SvgImage>
                                </Svg>
                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={styles.group82}>
                          <View style={styles.bg112}>
                            <Text
                              style={styles.whatIsTheBestTimeToVisitRioDeJaneiro12}
                            >
                              And what about Carnival time?
                            </Text>
                          </View>
                        </View>
                      </View>
                      <View style={styles.group14}>
                        <View style={styles.bg823}>
                          <View style={styles.group13}>
                            <View style={styles.textInputRow}>
                              <TextInput
                                placeholder="Say Something…"
                autoFocus={true}
                returnKeyType="next"
                disableFullscreenUI={true}
                keyboardAppearance="dark"
                                style={styles.textInput}
                              ></TextInput>
                              <View style={styles.textInputFiller}></View>
                              <TouchableOpacity
                                onPress={() => navigation.navigate("MainMenu")}
                                style={styles.button3}
                              >
                                <View style={styles.bg822}>
                                  <Svg
                                    viewBox="-0 -0 18 18"
                                    style={styles.ed4DdeA62383980Deabc092}
                                  >
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
                            <View style={styles.field}></View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.group102}>
                      <View style={styles.group32}>
                        <View style={styles.mask22Row}>
                          <View style={styles.mask22}>
                            <View
                              style={styles.d5143A1Acda45479Fb9B55Bc0Dca59A2Stack}
                            >
                              <Svg
                                viewBox="-1 -1 26 26"
                                style={styles.d5143A1Acda45479Fb9B55Bc0Dca59A2}
                              >
                                <Path
                                  strokeWidth={2}
                                  fill="transparent"
                                  stroke="rgba(255,255,255,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M12.00 23.00 C18.08 23.00 23.00 18.08 23.00 12.00 C23.00 5.92 18.08 1.00 12.00 1.00 C5.92 1.00 1.00 5.92 1.00 12.00 C1.00 18.08 5.92 23.00 12.00 23.00 Z"
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 22 22"
                                style={styles.fb28B1F71E54E68A4Cc1861B760066E2}
                              >
                                <Defs>
                                  <Mask id="jEh09gD" x={0} y={0}>
                                    <Path
                                      fill="white"
                                      d={
                                        "M11.00 22.00 C17.08 22.00 22.00 17.08 22.00 11.00 C22.00 4.92 17.08 0.00 11.00 0.00 C4.92 0.00 0.00 4.92 0.00 11.00 C0.00 17.08 4.92 22.00 11.00 22.00 Z"
                                      }
                                    />
                                  </Mask>
                                </Defs>
                                <SvgImage
                                  href={require("../assets/images/9481e6ba592dc7c0e4b3871128cbb57d7a2532d8.png")}
                                  x={0}
                                  y={0}
                                  width={22}
                                  height={22}
                                  mask={"url(#jEh09gD)"}
                                ></SvgImage>
                              </Svg>
                            </View>
                          </View>
                          <Text style={styles.ryan12}>Ryan</Text>
                        </View>
                      </View>
                      <View style={styles.group72}>
                        <View style={styles.bg92}>
                          <View style={styles.text12}>
                            <Text
                              style={
                                styles.ohSureLateFebruaryOrFirstDaysOfMarchAReasonWhyAccommodationFetchesItsHighestPrices2
                              }
                            >
                              Oh sure, late February or first days of March, a
                              reason why accommodation fetches its highest prices.
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.group112}>
                      <View style={styles.avatar52}>
                        <View style={styles.beatrice22Row}>
                          <Text style={styles.beatrice22}>Beatrice</Text>
                          <View style={styles.mask52}>
                            <View style={styles.fEc5B46F28C94A8021B8Ed89E2Stack}>
                              <Svg
                                viewBox="-1 -1 26 26"
                                style={styles.fEc5B46F28C94A8021B8Ed89E2}
                              >
                              </Svg>
                              <Svg
                                viewBox="0 0 22 22"
                                style={styles.fdeeff1Abf44C59927A5043E4E9Ace22}
                              >
                                <Defs>
                                  <Mask id="E8mU9zQ" x={0} y={0}>
                                    <Path
                                      fill="white"
                                      d={
                                        "M11.00 22.00 C17.08 22.00 22.00 17.08 22.00 11.00 C22.00 4.92 17.08 0.00 11.00 0.00 C4.92 0.00 0.00 4.92 0.00 11.00 C0.00 17.08 4.92 22.00 11.00 22.00 Z"
                                      }
                                    />
                                  </Mask>
                                </Defs>
                                <SvgImage
                                  href={require("../assets/images/f347c3523408539041bf819d1159478bc9535b52.png")}
                                  x={0}
                                  y={0}
                                  width={22}
                                  height={22}
                                  mask={"url(#E8mU9zQ)"}
                                ></SvgImage>
                              </Svg>
                            </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.group62}>
                        <View style={styles.bg152}>
                          <Text
                            style={styles.whatIsTheBestTimeToVisitRioDeJaneiro22}
                          >
                            but is it safe?
                          </Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.group122}>
                      <View style={styles.group42}>
                        <View style={styles.mask42Row}>
                          <View style={styles.mask42}>
                            <View
                              style={styles.fae70Fc7B4024640Bb4198F1658E67Ee2Stack}
                            >
                              <Svg
                                viewBox="-1 -1 26 26"
                                style={styles.fae70Fc7B4024640Bb4198F1658E67Ee2}
                              >
                                <Path
                                  strokeWidth={2}
                                  fill="transparent"
                                  stroke="rgba(255,255,255,1)"
                                  fillOpacity={1}
                                  strokeOpacity={1}
                                  d="M12.00 23.00 C18.08 23.00 23.00 18.08 23.00 12.00 C23.00 5.92 18.08 1.00 12.00 1.00 C5.92 1.00 1.00 5.92 1.00 12.00 C1.00 18.08 5.92 23.00 12.00 23.00 Z"
                                ></Path>
                              </Svg>
                              <Svg
                                viewBox="0 0 22 22"
                                style={styles.aa8Eb979D348Af98C8557Cfd65E2A72}
                              >
                                <Defs>
                                  <Mask id="BZjTDO3" x={0} y={0}>
                                    <Path
                                      fill="white"
                                      d={
                                        "M11.00 22.00 C17.08 22.00 22.00 17.08 22.00 11.00 C22.00 4.92 17.08 0.00 11.00 0.00 C4.92 0.00 0.00 4.92 0.00 11.00 C0.00 17.08 4.92 22.00 11.00 22.00 Z"
                                      }
                                    />
                                  </Mask>
                                </Defs>
                                <SvgImage
                                  href={require("../assets/images/9481e6ba592dc7c0e4b3871128cbb57d7a2532d8.png")}
                                  x={0}
                                  y={0}
                                  width={22}
                                  height={22}
                                  mask={"url(#BZjTDO3)"}
                                ></SvgImage>
                              </Svg>
                            </View>
                          </View>
                          <Text style={styles.ryan22}>Ryan</Text>
                        </View>
                      </View>
                      <View style={styles.group52}>
                        <View style={styles.bg132}>
                          <View style={styles.text22}>
                            <Text
                              style={
                                styles.ofCourseItsSafeToVisitButVisitorsJustHaveToHaveStreetSmartsAndTheirWitsAboutThemMoreSoThanInAlmostAnyOtherMajorCityInTheWorld2
                              }
                            >
                              Of course it’s safe to visit, but visitors just {"\n"}
                              have to have street smarts and their wits about them
                              more so than in almost any other major city in the
                              world.
                            </Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
              <View style={styles.moreHorizontal3}>
                <View style={styles.bg12}>
                  <View style={styles.oval11Row}>
                    <Svg
                      viewBox="-0.64999997615814 -0.64999997615814 4.5999999046325595 4.5999999046325595"
                      style={styles.oval11}
                    >
                      <Path
                        strokeWidth={1.29999995231628}
                        fill="rgba(202,202,202,1)"
                        stroke="rgba(202,202,202,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.65 2.65 C2.20 2.65 2.65 2.20 2.65 1.65 C2.65 1.10 2.20 0.65 1.65 0.65 C1.10 0.65 0.65 1.10 0.65 1.65 C0.65 2.20 1.10 2.65 1.65 2.65 Z"
                      ></Path>
                    </Svg>
                    <Svg
                      viewBox="-0.64999997615814 -0.64999997615814 4.5999999046325595 4.5999999046325595"
                      style={styles.oval9}
                    >
                      <Path
                        strokeWidth={1.29999995231628}
                        fill="rgba(202,202,202,1)"
                        stroke="rgba(202,202,202,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.65 2.65 C2.20 2.65 2.65 2.20 2.65 1.65 C2.65 1.10 2.20 0.65 1.65 0.65 C1.10 0.65 0.65 1.10 0.65 1.65 C0.65 2.20 1.10 2.65 1.65 2.65 Z"
                      ></Path>
                    </Svg>
                    <Svg
                      viewBox="-0.64999997615814 -0.64999997615814 4.5999999046325595 4.5999999046325595"
                      style={styles.oval10}
                    >
                      <Path
                        strokeWidth={1.29999995231628}
                        fill="rgba(202,202,202,1)"
                        stroke="rgba(202,202,202,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M1.65 2.65 C2.20 2.65 2.65 2.20 2.65 1.65 C2.65 1.10 2.20 0.65 1.65 0.65 C1.10 0.65 0.65 1.10 0.65 1.65 C0.65 2.20 1.10 2.65 1.65 2.65 Z"
                      ></Path>
                    </Svg>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.bg23}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Notifications")}
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
                <Text style={styles.experimentalPopMusicSession1}>Chat Window</Text>
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
          </View>
          </ScrollView>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      root: {
        flex: 1,
        backgroundColor: "rgba(36,19,50,1)"
      },
      scrollArea: {
        top: 12,
        left: 0,
        height: 1102,
        position: "absolute",
        right: 0
      },
      scrollArea_contentContainerStyle: {
        width: 375,
        height: 1102
      },
      group15: {
        width: 375,
        height: 536
      },
      group9: {
        width: 338,
        height: 82,
        alignSelf: "flex-end"
      },
      avatar3: {
        width: 90,
        height: 22,
        opacity: 1,
        flexDirection: "row",
        marginLeft: 225
      },
      beatrice1: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 13,
        fontFamily: "Roboto",
        fontWeight: "700",
        marginTop: 2
      },
      mask3: {
        width: 22,
        height: 22,
        opacity: 1,
        marginLeft: 11
      },
      b1130574044755Bdce8Bf64F7Ac8A3: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      f993B65C4Ecf4710A95B6Fddc387741D: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      b1130574044755Bdce8Bf64F7Ac8A3Stack: {
        width: 26,
        height: 26,
        marginTop: -1,
        marginLeft: -1
      },
      beatrice1Row: {
        height: 22,
        flexDirection: "row",
        flex: 1
      },
      group8: {
        width: 338,
        height: 52,
        marginTop: 8
      },
      bg11: {
        height: 52,
        backgroundColor: "rgba(95,78,106,1)",
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80
      },
      whatIsTheBestTimeToVisitRioDeJaneiro1: {
        color: "rgba(255,255,255,1)",
        opacity: 0.94,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 16,
        marginLeft: 20
      },
      group10: {
        width: 309,
        height: 126,
        marginTop: 11
      },
      group3: {
        width: 66,
        height: 22,
        flexDirection: "row",
        marginLeft: 25
      },
      mask2: {
        width: 22,
        height: 22,
        opacity: 1
      },
      d5143A1Acda45479Fb9B55Bc0Dca59A: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      fb28B1F71E54E68A4Cc1861B760066E: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      d5143A1Acda45479Fb9B55Bc0Dca59AStack: {
        width: 26,
        height: 26,
        marginTop: -1,
        marginLeft: -1
      },
      ryan1: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 13,
        fontFamily: "Roboto",
        fontWeight: "700",
        marginLeft: 10,
        marginTop: 3
      },
      mask2Row: {
        height: 22,
        flexDirection: "row",
        flex: 1
      },
      group7: {
        width: 309,
        height: 96,
        marginTop: 8
      },
      bg9: {
        backgroundColor: "rgba(138,86,172,1)",
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
        flex: 1
      },
      text1: {
        top: 0,
        left: 0,
        width: 264,
        height: 62,
        position: "absolute",
        opacity: 1
      },
      ohSureLateFebruaryOrFirstDaysOfMarchAReasonWhyAccommodationFetchesItsHighestPrices: {
        width: 264,
        height: 62,
        color: "rgba(255,255,255,1)",
        opacity: 0.94,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14
      },
      style1: {
        top: 35,
        left: 188,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.94,
        fontSize: 14,
        letterSpacing: 0.19
      },
      text1Stack: {
        width: 264,
        height: 62,
        marginTop: 17,
        marginLeft: 26
      },
      moreHorizontal2: {
        width: 24,
        height: 24,
        opacity: 1,
        marginLeft: 11
      },
      bg10: {
        width: 24,
        height: 24,
        backgroundColor: "rgba(216,216,216,1)",
        flexDirection: "row"
      },
      oval8: {
        width: 5,
        height: 5,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      oval6: {
        width: 5,
        height: 5,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
      },
      oval7: {
        width: 5,
        height: 5,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
      },
      oval8Row: {
        height: 5,
        flexDirection: "row",
        flex: 1,
        marginRight: 3,
        marginLeft: 4,
        marginTop: 10
      },
      group10Row: {
        height: 137,
        flexDirection: "row",
        marginTop: 23,
        marginRight: 31
      },
      group11: {
        top: 10,
        width: 338,
        height: 84,
        position: "absolute",
        right: 0
      },
      avatar5: {
        width: 90,
        height: 22,
        opacity: 1,
        flexDirection: "row",
        marginLeft: 225
      },
      beatrice2: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 13,
        fontFamily: "Roboto",
        fontWeight: "700",
        marginTop: 2
      },
      mask5: {
        width: 22,
        height: 22,
        opacity: 1,
        marginLeft: 11
      },
      fEc5B46F28C94A8021B8Ed89E: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      fdeeff1Abf44C59927A5043E4E9Ace2: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      fEc5B46F28C94A8021B8Ed89EStack: {
        width: 26,
        height: 26,
        marginTop: -1,
        marginLeft: -1
      },
      beatrice2Row: {
        height: 22,
        flexDirection: "row",
        flex: 1
      },
      group6: {
        width: 338,
        height: 52,
        marginTop: 10
      },
      bg15: {
        height: 52,
        backgroundColor: "rgba(95,78,106,1)",
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80
      },
      whatIsTheBestTimeToVisitRioDeJaneiro2: {
        color: "rgba(255,255,255,1)",
        opacity: 0.94,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 16,
        marginLeft: 21
      },
      moreHorizontal5: {
        top: 0,
        left: 283,
        width: 24,
        height: 24,
        position: "absolute",
        opacity: 1
      },
      bg16: {
        width: 24,
        height: 24,
        backgroundColor: "rgba(216,216,216,1)",
        flexDirection: "row"
      },
      oval17: {
        width: 5,
        height: 5,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      oval15: {
        width: 5,
        height: 5,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
      },
      oval16: {
        width: 5,
        height: 5,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
      },
      oval17Row: {
        height: 5,
        flexDirection: "row",
        flex: 1,
        marginRight: 3,
        marginLeft: 4,
        marginTop: 10
      },
      group11Stack: {
        width: 338,
        height: 94,
        marginTop: 23,
        marginLeft: 37
      },
      group12: {
        top: 10,
        left: 0,
        width: 339,
        height: 145,
        position: "absolute"
      },
      group4: {
        width: 66,
        height: 22,
        flexDirection: "row",
        marginLeft: 25
      },
      mask4: {
        width: 22,
        height: 22,
        opacity: 1
      },
      fae70Fc7B4024640Bb4198F1658E67Ee: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      aa8Eb979D348Af98C8557Cfd65E2A7: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      fae70Fc7B4024640Bb4198F1658E67EeStack: {
        width: 26,
        height: 26,
        marginTop: -1,
        marginLeft: -1
      },
      ryan2: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 13,
        fontFamily: "Roboto",
        fontWeight: "700",
        marginLeft: 10,
        marginTop: 3
      },
      mask4Row: {
        height: 22,
        flexDirection: "row",
        flex: 1
      },
      group5: {
        width: 339,
        height: 112,
        marginTop: 11
      },
      bg13: {
        backgroundColor: "rgba(138,86,172,1)",
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
        flex: 1
      },
      text2: {
        width: 294,
        height: 81,
        opacity: 1,
        marginTop: 16,
        marginLeft: 26
      },
      ofCourseItsSafeToVisitButVisitorsJustHaveToHaveStreetSmartsAndTheirWitsAboutThemMoreSoThanInAlmostAnyOtherMajorCityInTheWorld: {
        width: 294,
        height: 81,
        color: "rgba(255,255,255,1)",
        opacity: 0.94,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14
      },
      moreHorizontal4: {
        top: 0,
        left: 320,
        width: 24,
        height: 24,
        position: "absolute",
        opacity: 1
      },
      bg14: {
        width: 24,
        height: 24,
        backgroundColor: "rgba(216,216,216,1)",
        flexDirection: "row"
      },
      oval14: {
        width: 5,
        height: 5,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      oval12: {
        width: 5,
        height: 5,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
      },
      oval13: {
        width: 5,
        height: 5,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
      },
      oval14Row: {
        height: 5,
        flexDirection: "row",
        flex: 1,
        marginRight: 3,
        marginLeft: 4,
        marginTop: 10
      },
      group12Stack: {
        width: 344,
        height: 155,
        marginTop: 22
      },
      group16: {
        width: 375,
        height: 536,
        marginTop: 29
      },
      group92: {
        top: 0,
        width: 338,
        height: 82,
        position: "absolute",
        right: 0
      },
      avatar32: {
        width: 90,
        height: 22,
        opacity: 1,
        flexDirection: "row",
        marginLeft: 225
      },
      beatrice12: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 13,
        fontFamily: "Roboto",
        fontWeight: "700",
        marginTop: 2
      },
      mask32: {
        width: 22,
        height: 22,
        opacity: 1,
        marginLeft: 11
      },
      b1130574044755Bdce8Bf64F7Ac8A32: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      f993B65C4Ecf4710A95B6Fddc387741D2: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      b1130574044755Bdce8Bf64F7Ac8A32Stack: {
        width: 26,
        height: 26,
        marginTop: -1,
        marginLeft: -1
      },
      beatrice12Row: {
        height: 22,
        flexDirection: "row",
        flex: 1
      },
      group82: {
        width: 338,
        height: 52,
        marginTop: 8
      },
      bg112: {
        height: 52,
        backgroundColor: "rgba(95,78,106,1)",
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80
      },
      whatIsTheBestTimeToVisitRioDeJaneiro12: {
        color: "rgba(255,255,255,1)",
        opacity: 0.94,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 16,
        marginLeft: 20
      },
      group14: {
        left: 0,
        width: 375,
        height: 77,
        position: "absolute",
        bottom: 77
      },
      bg823: {
        backgroundColor: "rgba(255,255,255,1)",
        borderBottomLeftRadius: 0,
        flex: 1
      },
      group13: {
        width: 300,
        height: 30,
        marginTop: 24,
        marginLeft: 38
      },
      textInput: {
        width: 117,
        height: 16,
        color: "rgba(0,0,0,1)",
        opacity: 0.64,
        fontSize: 16,
        marginTop: 4
      },
      textInputFiller: {
        flex: 1,
        flexDirection: "row"
      },
      button3: {
        width: 24,
        height: 24,
        opacity: 1
      },
      bg822: {
        width: 24,
        height: 24,
        backgroundColor: "transparent"
      },
      ed4DdeA62383980Deabc092: {
        width: 18,
        height: 18,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginTop: 3,
        marginLeft: 3
      },
      textInputRow: {
        height: 24,
        flexDirection: "row",
        marginRight: 1
      },
      field: {
        height: 1,
        backgroundColor: "rgba(0,0,0,1)",
        opacity: 0.2,
        borderTopLeftRadius: 0.5,
        borderTopRightRadius: 0.5,
        borderBottomRightRadius: 0.5,
        borderBottomLeftRadius: 0.5,
        marginTop: 5
      },
      group92Stack: {
        width: 375,
        height: 98
      },
      group102: {
        width: 309,
        height: 126,
        marginTop: 18
      },
      group32: {
        width: 66,
        height: 22,
        flexDirection: "row",
        marginLeft: 25
      },
      mask22: {
        width: 22,
        height: 22,
        opacity: 1
      },
      d5143A1Acda45479Fb9B55Bc0Dca59A2: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      fb28B1F71E54E68A4Cc1861B760066E2: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      d5143A1Acda45479Fb9B55Bc0Dca59A2Stack: {
        width: 26,
        height: 26,
        marginTop: -1,
        marginLeft: -1
      },
      ryan12: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 13,
        fontFamily: "Roboto",
        fontWeight: "700",
        marginLeft: 10,
        marginTop: 3
      },
      mask22Row: {
        height: 22,
        flexDirection: "row",
        flex: 1
      },
      group72: {
        width: 309,
        height: 96,
        marginTop: 8
      },
      bg92: {
        backgroundColor: "rgba(138,86,172,1)",
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
        flex: 1
      },
      text12: {
        width: 264,
        height: 62,
        opacity: 1,
        marginTop: 17,
        marginLeft: 26
      },
      ohSureLateFebruaryOrFirstDaysOfMarchAReasonWhyAccommodationFetchesItsHighestPrices2: {
        width: 264,
        height: 62,
        color: "rgba(255,255,255,1)",
        opacity: 0.94,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14
      },
      group112: {
        width: 338,
        height: 84,
        alignSelf: "flex-end",
        marginTop: 33
      },
      avatar52: {
        width: 90,
        height: 22,
        opacity: 1,
        flexDirection: "row",
        marginLeft: 225
      },
      beatrice22: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 13,
        fontFamily: "Roboto",
        fontWeight: "700",
        marginTop: 2
      },
      mask52: {
        width: 22,
        height: 22,
        opacity: 1,
        marginLeft: 11
      },
      fEc5B46F28C94A8021B8Ed89E2: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      fdeeff1Abf44C59927A5043E4E9Ace22: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      fEc5B46F28C94A8021B8Ed89E2Stack: {
        width: 26,
        height: 26,
        marginTop: -1,
        marginLeft: -1
      },
      beatrice22Row: {
        height: 22,
        flexDirection: "row",
        flex: 1
      },
      group62: {
        width: 338,
        height: 52,
        marginTop: 10
      },
      bg152: {
        height: 52,
        backgroundColor: "rgba(95,78,106,1)",
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80
      },
      whatIsTheBestTimeToVisitRioDeJaneiro22: {
        color: "rgba(255,255,255,1)",
        opacity: 0.94,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14,
        marginTop: 16,
        marginLeft: 21
      },
      group122: {
        width: 339,
        height: 145,
        marginTop: 32
      },
      group42: {
        width: 66,
        height: 22,
        flexDirection: "row",
        marginLeft: 25
      },
      mask42: {
        width: 22,
        height: 22,
        opacity: 1
      },
      fae70Fc7B4024640Bb4198F1658E67Ee2: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      aa8Eb979D348Af98C8557Cfd65E2A72: {
        top: 0,
        left: 0,
        width: 26,
        height: 26,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      fae70Fc7B4024640Bb4198F1658E67Ee2Stack: {
        width: 26,
        height: 26,
        marginTop: -1,
        marginLeft: -1
      },
      ryan22: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 13,
        fontFamily: "Roboto",
        fontWeight: "700",
        marginLeft: 10,
        marginTop: 3
      },
      mask42Row: {
        height: 22,
        flexDirection: "row",
        flex: 1
      },
      group52: {
        width: 339,
        height: 112,
        marginTop: 11
      },
      bg132: {
        backgroundColor: "rgba(138,86,172,1)",
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        borderBottomRightRadius: 80,
        borderBottomLeftRadius: 80,
        flex: 1
      },
      text22: {
        width: 294,
        height: 81,
        opacity: 1,
        marginTop: 16,
        marginLeft: 26
      },
      ofCourseItsSafeToVisitButVisitorsJustHaveToHaveStreetSmartsAndTheirWitsAboutThemMoreSoThanInAlmostAnyOtherMajorCityInTheWorld2: {
        width: 294,
        height: 81,
        color: "rgba(255,255,255,1)",
        opacity: 0.94,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14
      },
      moreHorizontal3: {
        top: 0,
        left: 320,
        width: 24,
        height: 24,
        position: "absolute",
        opacity: 1
      },
      bg12: {
        width: 24,
        height: 24,
        backgroundColor: "rgba(216,216,216,1)",
        flexDirection: "row"
      },
      oval11: {
        width: 5,
        height: 5,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      oval9: {
        width: 5,
        height: 5,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
      },
      oval10: {
        width: 5,
        height: 5,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 1
      },
      oval11Row: {
        height: 5,
        flexDirection: "row",
        flex: 1,
        marginRight: 3,
        marginLeft: 4,
        marginTop: 10
      },
      scrollAreaStack: {
        top: 154,
        left: 0,
        height: 1114,
        position: "absolute",
        right: 0
      },
      bg23: {
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
      scrollAreaStackStack: {
        height: 1268,
        marginTop: -17
      }
    });

export default Chat;
