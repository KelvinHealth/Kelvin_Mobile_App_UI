import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Svg, { Path, Stop, Defs, Mask, LinearGradient } from "react-native-svg";
import { NavigationContainer } from '../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../node_modules/@react-navigation/stack';
import { Center } from "../../node_modules/@builderx/utils";
import App from '../../App';

function PointStats({navigation}) {
    return (

        <View style={styles.root}>
          <Text
            style={
              styles.whenIWas5YearsOldMyMotherAlwaysToldMeThatHappinessWasTheKeyToLifeWhenIWentToSchoolTheyAskedMeWhatIWantedToBeWhenIGrewUp1
            }
          >
            When I was 5 years old, my mother always told me that happiness was the
            key to life. When I went to school, they asked me what I wanted to be
            when I grew up.
          </Text>
          <View style={styles.b772Dad947Ce4797B522Fc954214B824Row}>
            <Image
              source={require("../assets/images/6bd5b483bbc6782d68876907b38c39f73e914114.png")}
              resizeMode="cover"
              style={styles.b772Dad947Ce4797B522Fc954214B824}
            ></Image>
            <View style={styles.dRAbdullahHadleyColumn}>
              <Text style={styles.dRAbdullahHadley}>D-r Abdullah Hadley</Text>
              <Text style={styles.nov1}>8 Nov</Text>
            </View>
          </View>
          <View style={styles.divider1}></View>
          <View style={styles.bg8Stack}>
            <View style={styles.bg8}>
              <Text style={styles.experimentalPopMusicSession1}>
                Your Temperature
              </Text>
            </View>
            <View style={styles.bg9}>
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
                <Text style={styles.experimentalPopMusicSession2}>Overview</Text>
              </View>
              <View style={styles.style6Row}>
                <Text style={styles.style6}>84</Text>
                <Text style={styles.style7}>%</Text>
              </View>
              <View style={styles.divider2}></View>
              <Text style={styles.thisIsTheProbabilityThatYouHaveCovid19}>
                This is the probability that you have COVID-19.
              </Text>
              <View style={styles.iconsLike}>
                <View style={styles.bg10}></View>
              </View>
            </View>
            <View style={styles.scrollArea}>
              <ScrollView
                horizontal={true}
                contentContainerStyle={styles.scrollArea_contentContainerStyle}
              >
                <View style={styles.button2Row}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("YourResults")}
                    style={styles.button2}
                  >
                    <View style={styles.group188043}>
                      <View style={styles.group78633Row}>
                        <View style={styles.group78633}>
                          <View style={styles.ellipse9733Row}>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9733}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9633}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9533}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9433}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9033}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={0.500595986843109}
                                strokeOpacity={0.500595986843109}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                        <View style={styles.group187933}>
                          <View style={styles.pin633Stack}>
                            <View style={styles.pin633}>
                              <View style={styles.back433Stack}>
                                <Svg viewBox="-0 -0 40 40" style={styles.back433}>
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(82,145,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                                  ></Path>
                                </Svg>
                                <View style={styles.iconsPrinter33}>
                                  <View style={styles.bg1933}></View>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.style333}>36.5</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Image
                      source={require("../assets/images/90753961_2340018682962128_4648968782688026624_n.jpg")}
                      resizeMode="cover"
                      style={styles.image33}
                    ></Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("YourResults")}
                    style={styles.button3}
                  >
                    <View style={styles.group188024}>
                      <View style={styles.group78623Row}>
                        <View style={styles.group78623}>
                          <View style={styles.ellipse9723Row}>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9723}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9623}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9523}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9423}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9023}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={0.500595986843109}
                                strokeOpacity={0.500595986843109}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                        <View style={styles.group187923}>
                          <View style={styles.pin623Stack}>
                            <View style={styles.pin623}>
                              <View style={styles.back423Stack}>
                                <Svg viewBox="-0 -0 40 40" style={styles.back423}>
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(82,145,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                                  ></Path>
                                </Svg>
                                <View style={styles.iconsPrinter23}>
                                  <View style={styles.bg1923}></View>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.style323}>36.5</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Image
                      source={require("../assets/images/90753961_2340018682962128_4648968782688026624_n.jpg")}
                      resizeMode="cover"
                      style={styles.image23}
                    ></Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("YourResults")}
                    style={styles.button4}
                  >
                    <View style={styles.group188044}>
                      <View style={styles.group78634Row}>
                        <View style={styles.group78634}>
                          <View style={styles.ellipse9734Row}>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9734}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9634}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9534}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9434}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9034}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={0.500595986843109}
                                strokeOpacity={0.500595986843109}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                        <View style={styles.group187934}>
                          <View style={styles.pin634Stack}>
                            <View style={styles.pin634}>
                              <View style={styles.back434Stack}>
                                <Svg viewBox="-0 -0 40 40" style={styles.back434}>
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(82,145,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                                  ></Path>
                                </Svg>
                                <View style={styles.iconsPrinter34}>
                                  <View style={styles.bg1934}></View>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.style334}>36.5</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Image
                      source={require("../assets/images/90753961_2340018682962128_4648968782688026624_n.jpg")}
                      resizeMode="cover"
                      style={styles.image34}
                    ></Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("YourResults")}
                    style={styles.button5}
                  >
                    <View style={styles.group18806}>
                      <View style={styles.group7864Row}>
                        <View style={styles.group7864}>
                          <View style={styles.ellipse974Row}>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse974}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse964}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse954}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse944}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse904}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={0.500595986843109}
                                strokeOpacity={0.500595986843109}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                        <View style={styles.group18794}>
                          <View style={styles.pin64Stack}>
                            <View style={styles.pin64}>
                              <View style={styles.back44Stack}>
                                <Svg viewBox="-0 -0 40 40" style={styles.back44}>
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(82,145,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                                  ></Path>
                                </Svg>
                                <View style={styles.iconsPrinter4}>
                                  <View style={styles.bg194}></View>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.style34}>36.5</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Image
                      source={require("../assets/images/90753961_2340018682962128_4648968782688026624_n.jpg")}
                      resizeMode="cover"
                      style={styles.image4}
                    ></Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("YourResults")}
                    style={styles.button6}
                  >
                    <View style={styles.group188022}>
                      <View style={styles.group78622Row}>
                        <View style={styles.group78622}>
                          <View style={styles.ellipse9722Row}>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9722}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9622}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9522}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9422}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9022}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={0.500595986843109}
                                strokeOpacity={0.500595986843109}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                        <View style={styles.group187922}>
                          <View style={styles.pin622Stack}>
                            <View style={styles.pin622}>
                              <View style={styles.back422Stack}>
                                <Svg viewBox="-0 -0 40 40" style={styles.back422}>
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(82,145,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                                  ></Path>
                                </Svg>
                                <View style={styles.iconsPrinter22}>
                                  <View style={styles.bg1922}></View>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.style322}>36.5</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Image
                      source={require("../assets/images/90753961_2340018682962128_4648968782688026624_n.jpg")}
                      resizeMode="cover"
                      style={styles.image22}
                    ></Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("YourResults")}
                    style={styles.button7}
                  >
                    <View style={styles.group188042}>
                      <View style={styles.group78632Row}>
                        <View style={styles.group78632}>
                          <View style={styles.ellipse9732Row}>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9732}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9632}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9532}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9432}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={1}
                                strokeOpacity={1}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                            <Svg viewBox="-0 -0 14 14" style={styles.ellipse9032}>
                              <Path
                                strokeWidth={0}
                                fill="rgba(82,145,46,1)"
                                fillOpacity={0.500595986843109}
                                strokeOpacity={0.500595986843109}
                                d="M7.00 14.00 C10.87 14.00 14.00 10.87 14.00 7.00 C14.00 3.13 10.87 0.00 7.00 0.00 C3.13 0.00 0.00 3.13 0.00 7.00 C0.00 10.87 3.13 14.00 7.00 14.00 Z"
                              ></Path>
                            </Svg>
                          </View>
                        </View>
                        <View style={styles.group187932}>
                          <View style={styles.pin632Stack}>
                            <View style={styles.pin632}>
                              <View style={styles.back432Stack}>
                                <Svg viewBox="-0 -0 40 40" style={styles.back432}>
                                  <Path
                                    strokeWidth={0}
                                    fill="rgba(82,145,46,1)"
                                    fillOpacity={1}
                                    strokeOpacity={1}
                                    d="M20.00 0.00 C31.05 0.00 40.00 8.95 40.00 20.00 C40.00 31.05 31.05 40.00 20.00 40.00 C8.95 40.00 0.00 31.05 0.00 20.00 C0.00 8.95 8.95 0.00 20.00 0.00 Z"
                                  ></Path>
                                </Svg>
                                <View style={styles.iconsPrinter32}>
                                  <View style={styles.bg1932}></View>
                                </View>
                              </View>
                            </View>
                            <Text style={styles.style332}>36.5</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                    <Image
                      source={require("../assets/images/90753961_2340018682962128_4648968782688026624_n.jpg")}
                      resizeMode="cover"
                      style={styles.image32}
                    ></Image>
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
        backgroundColor: "rgba(95,69,145,1)"
      },
      whenIWas5YearsOldMyMotherAlwaysToldMeThatHappinessWasTheKeyToLifeWhenIWentToSchoolTheyAskedMeWhatIWantedToBeWhenIGrewUp1: {
        width: 295,
        height: 86,
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 13,
        fontFamily: "Roboto",
        lineHeight: 22,
        marginTop: 697,
        marginLeft: 40
      },
      b772Dad947Ce4797B522Fc954214B824: {
        width: 33,
        height: 32,
        backgroundColor: "transparent",
        opacity: 1,
        borderRadius: 10
      },
      dRAbdullahHadley: {
        width: 259,
        height: 18,
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 16,
        fontFamily: "Roboto",
        fontWeight: "700"
      },
      nov1: {
        width: 61,
        height: 14,
        color: "rgba(255,255,255,1)",
        opacity: 0.56,
        fontSize: 12,
        fontFamily: "Roboto",
        marginTop: 1
      },
      dRAbdullahHadleyColumn: {
        width: 259,
        marginLeft: 23,
        marginTop: 1,
        marginBottom: 2
      },
      b772Dad947Ce4797B522Fc954214B824Row: {
        height: 32,
        flexDirection: "row",
        marginTop: -135,
        marginLeft: 40,
        marginRight: 20
      },
      divider1: {
        backgroundColor: "rgba(255,255,255,1)",
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        borderBottomRightRadius: 1,
        borderBottomLeftRadius: 1,
        marginTop: 103,
        marginLeft: 40,
        height: 0,
        width: 0,
        opacity: 0
      },
      bg8: {
        top: 242,
        left: 0,
        height: 392,
        backgroundColor: "rgba(36,19,50,1)",
        position: "absolute",
        borderColor: "rgba(112,112,112,0.325490196078431)",
        borderWidth: 1,
        borderBottomLeftRadius: 80,
        right: 115
      },
      experimentalPopMusicSession1: {
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 26,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 26,
        letterSpacing: -0.42,
        marginTop: 101,
        marginLeft: 37
      },
      bg9: {
        top: 0,
        left: 0,
        height: 318,
        backgroundColor: "rgba(255,255,255,1)",
        position: "absolute",
        borderColor: "rgba(231,228,233,1)",
        borderWidth: 1,
        borderBottomLeftRadius: 80,
        right: 115
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
      experimentalPopMusicSession2: {
        color: "rgba(0,0,0,1)",
        opacity: 1,
        fontSize: 36,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 36,
        letterSpacing: -0.42,
        marginLeft: 53
      },
      button1Row: {
        height: 36,
        flexDirection: "row",
        marginTop: 53,
        marginLeft: 25,
        marginRight: 102
      },
      style6: {
        color: "rgba(95,69,145,1)",
        opacity: 1,
        fontSize: 90,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 90,
        letterSpacing: -6.3
      },
      style7: {
        color: "rgba(95,69,145,1)",
        opacity: 0.4,
        fontSize: 48,
        fontFamily: "Roboto",
        lineHeight: 48,
        marginLeft: 14,
        marginTop: 41
      },
      style6Row: {
        height: 90,
        flexDirection: "row",
        marginTop: 53,
        marginLeft: 130,
        marginRight: 83
      },
      divider2: {
        width: 295,
        height: 1,
        backgroundColor: "rgba(229,229,229,1)",
        borderTopLeftRadius: 1,
        borderTopRightRadius: 1,
        borderBottomRightRadius: 1,
        borderBottomLeftRadius: 1,
        marginTop: 9,
        marginLeft: 40
      },
      thisIsTheProbabilityThatYouHaveCovid19: {
        width: 324,
        height: 12,
        color: "rgba(129,120,137,1)",
        opacity: 1,
        fontSize: 13,
        fontFamily: "Roboto",
        lineHeight: 13,
        textAlign: "center",
        marginTop: 8,
        marginLeft: 26
      },
      iconsLike: {
        width: 24,
        height: 24,
        opacity: 1,
        marginTop: 12,
        marginLeft: 311
      },
      bg10: {
        width: 24,
        height: 24,
        backgroundColor: "transparent",
        opacity: 1
      },
      scrollArea: {
        top: 387,
        left: 40,
        width: 450,
        height: 213,
        position: "absolute",
        flexDirection: "row"
      },
      scrollArea_contentContainerStyle: {
        width: 2252,
        height: 213
      },
      button2: {
        width: 141,
        height: 213
      },
      group188043: {
        width: 141,
        height: 40,
        opacity: 1,
        flexDirection: "row"
      },
      group78633: {
        width: 86,
        height: 14,
        opacity: 1,
        flexDirection: "row",
        marginTop: 13
      },
      ellipse9733: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      ellipse9633: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9533: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9433: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9033: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9733Row: {
        height: 14,
        flexDirection: "row",
        flex: 1
      },
      group187933: {
        width: 40,
        height: 40,
        opacity: 1,
        marginLeft: 15
      },
      pin633: {
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        position: "absolute",
        opacity: 1
      },
      back433: {
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      iconsPrinter33: {
        top: 3,
        left: 4,
        width: 24,
        height: 24,
        position: "absolute",
        opacity: 1
      },
      bg1933: {
        width: 24,
        height: 24,
        backgroundColor: "transparent",
        opacity: 1
      },
      back433Stack: {
        width: 40,
        height: 40
      },
      style333: {
        top: 14,
        left: 6,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 14,
        letterSpacing: -0.23
      },
      pin633Stack: {
        width: 40,
        height: 40
      },
      group78633Row: {
        height: 40,
        flexDirection: "row",
        flex: 1
      },
      image33: {
        width: 129,
        height: 162,
        borderRadius: 20,
        marginTop: 11,
        marginLeft: 6
      },
      button3: {
        width: 141,
        height: 213,
        marginLeft: 13,
        marginTop: 1
      },
      group188024: {
        width: 141,
        height: 40,
        opacity: 1,
        flexDirection: "row"
      },
      group78623: {
        width: 86,
        height: 14,
        opacity: 1,
        flexDirection: "row",
        marginTop: 13
      },
      ellipse9723: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      ellipse9623: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9523: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9423: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9023: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9723Row: {
        height: 14,
        flexDirection: "row",
        flex: 1
      },
      group187923: {
        width: 40,
        height: 40,
        opacity: 1,
        marginLeft: 15
      },
      pin623: {
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        position: "absolute",
        opacity: 1
      },
      back423: {
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      iconsPrinter23: {
        top: 3,
        left: 4,
        width: 24,
        height: 24,
        position: "absolute",
        opacity: 1
      },
      bg1923: {
        width: 24,
        height: 24,
        backgroundColor: "transparent",
        opacity: 1
      },
      back423Stack: {
        width: 40,
        height: 40
      },
      style323: {
        top: 14,
        left: 6,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 14,
        letterSpacing: -0.23
      },
      pin623Stack: {
        width: 40,
        height: 40
      },
      group78623Row: {
        height: 40,
        flexDirection: "row",
        flex: 1
      },
      image23: {
        width: 129,
        height: 162,
        borderRadius: 20,
        marginTop: 11,
        marginLeft: 6
      },
      button4: {
        width: 141,
        height: 213,
        marginLeft: 14,
        marginTop: 1
      },
      group188044: {
        width: 141,
        height: 40,
        opacity: 1,
        flexDirection: "row"
      },
      group78634: {
        width: 86,
        height: 14,
        opacity: 1,
        flexDirection: "row",
        marginTop: 13
      },
      ellipse9734: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      ellipse9634: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9534: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9434: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9034: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9734Row: {
        height: 14,
        flexDirection: "row",
        flex: 1
      },
      group187934: {
        width: 40,
        height: 40,
        opacity: 1,
        marginLeft: 15
      },
      pin634: {
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        position: "absolute",
        opacity: 1
      },
      back434: {
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      iconsPrinter34: {
        top: 3,
        left: 4,
        width: 24,
        height: 24,
        position: "absolute",
        opacity: 1
      },
      bg1934: {
        width: 24,
        height: 24,
        backgroundColor: "transparent",
        opacity: 1
      },
      back434Stack: {
        width: 40,
        height: 40
      },
      style334: {
        top: 14,
        left: 6,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 14,
        letterSpacing: -0.23
      },
      pin634Stack: {
        width: 40,
        height: 40
      },
      group78634Row: {
        height: 40,
        flexDirection: "row",
        flex: 1
      },
      image34: {
        width: 129,
        height: 162,
        borderRadius: 20,
        marginTop: 11,
        marginLeft: 6
      },
      button5: {
        width: 141,
        height: 213,
        marginLeft: 14
      },
      group18806: {
        width: 141,
        height: 40,
        opacity: 1,
        flexDirection: "row"
      },
      group7864: {
        width: 86,
        height: 14,
        opacity: 1,
        flexDirection: "row",
        marginTop: 13
      },
      ellipse974: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      ellipse964: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse954: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse944: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse904: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse974Row: {
        height: 14,
        flexDirection: "row",
        flex: 1
      },
      group18794: {
        width: 40,
        height: 40,
        opacity: 1,
        marginLeft: 15
      },
      pin64: {
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        position: "absolute",
        opacity: 1
      },
      back44: {
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      iconsPrinter4: {
        top: 3,
        left: 4,
        width: 24,
        height: 24,
        position: "absolute",
        opacity: 1
      },
      bg194: {
        width: 24,
        height: 24,
        backgroundColor: "transparent",
        opacity: 1
      },
      back44Stack: {
        width: 40,
        height: 40
      },
      style34: {
        top: 14,
        left: 6,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 14,
        letterSpacing: -0.23
      },
      pin64Stack: {
        width: 40,
        height: 40
      },
      group7864Row: {
        height: 40,
        flexDirection: "row",
        flex: 1
      },
      image4: {
        width: 129,
        height: 162,
        borderRadius: 20,
        marginTop: 11,
        marginLeft: 6
      },
      button6: {
        width: 141,
        height: 213,
        marginLeft: 13,
        marginTop: 1
      },
      group188022: {
        width: 141,
        height: 40,
        opacity: 1,
        flexDirection: "row"
      },
      group78622: {
        width: 86,
        height: 14,
        opacity: 1,
        flexDirection: "row",
        marginTop: 13
      },
      ellipse9722: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      ellipse9622: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9522: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9422: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9022: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9722Row: {
        height: 14,
        flexDirection: "row",
        flex: 1
      },
      group187922: {
        width: 40,
        height: 40,
        opacity: 1,
        marginLeft: 15
      },
      pin622: {
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        position: "absolute",
        opacity: 1
      },
      back422: {
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      iconsPrinter22: {
        top: 3,
        left: 4,
        width: 24,
        height: 24,
        position: "absolute",
        opacity: 1
      },
      bg1922: {
        width: 24,
        height: 24,
        backgroundColor: "transparent",
        opacity: 1
      },
      back422Stack: {
        width: 40,
        height: 40
      },
      style322: {
        top: 14,
        left: 6,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 14,
        letterSpacing: -0.23
      },
      pin622Stack: {
        width: 40,
        height: 40
      },
      group78622Row: {
        height: 40,
        flexDirection: "row",
        flex: 1
      },
      image22: {
        width: 129,
        height: 162,
        borderRadius: 20,
        marginTop: 11,
        marginLeft: 6
      },
      button7: {
        width: 141,
        height: 213,
        marginLeft: 15,
        marginTop: 1
      },
      group188042: {
        width: 141,
        height: 40,
        opacity: 1,
        flexDirection: "row"
      },
      group78632: {
        width: 86,
        height: 14,
        opacity: 1,
        flexDirection: "row",
        marginTop: 13
      },
      ellipse9732: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent"
      },
      ellipse9632: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9532: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9432: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9032: {
        width: 14,
        height: 14,
        backgroundColor: "transparent",
        borderColor: "transparent",
        marginLeft: 4
      },
      ellipse9732Row: {
        height: 14,
        flexDirection: "row",
        flex: 1
      },
      group187932: {
        width: 40,
        height: 40,
        opacity: 1,
        marginLeft: 15
      },
      pin632: {
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        position: "absolute",
        opacity: 1
      },
      back432: {
        top: 0,
        left: 0,
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      iconsPrinter32: {
        top: 3,
        left: 4,
        width: 24,
        height: 24,
        position: "absolute",
        opacity: 1
      },
      bg1932: {
        width: 24,
        height: 24,
        backgroundColor: "transparent",
        opacity: 1
      },
      back432Stack: {
        width: 40,
        height: 40
      },
      style332: {
        top: 14,
        left: 6,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 14,
        letterSpacing: -0.23
      },
      pin632Stack: {
        width: 40,
        height: 40
      },
      group78632Row: {
        height: 40,
        flexDirection: "row",
        flex: 1
      },
      image32: {
        width: 129,
        height: 162,
        borderRadius: 20,
        marginTop: 11,
        marginLeft: 6
      },
      button2Row: {
        height: 214,
        flexDirection: "row",
        flex: 1,
        marginRight: -465
      },
      bg8Stack: {
        height: 634,
        marginTop: -795,
        marginRight: -115
      }
    });

export default PointStats;
