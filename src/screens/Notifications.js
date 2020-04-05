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

function Notifications({navigation}) {
    return (
        <View style={styles.root}>
          <View style={styles.button10Stack}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={styles.button10}
            >
              <View style={styles.bg5}>
                <View style={styles.ava2Row}>
                  <View style={styles.ava2}>
                    <View style={styles.avatar2}>
                      <View style={styles.ab144Bacb36679Ac7C13Be83A9257082}>
                        <View style={styles.b939E31643C6858D4386B6E20Ff8}>
                          <Image
                            source={require("../assets/images/ab648365c5c29380d445a6479209fca8fd792a80.png")}
                            resizeMode="cover"
                            style={styles.f6E13BfAd1F4F8198450A5Fa711A16B}
                          ></Image>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.experimentalPopMusicSession8Column}>
                    <Text style={styles.experimentalPopMusicSession8}>
                      Sep 18, 2017
                    </Text>
                    <Text style={styles.experimentalPopMusicSession7}>Bonjour</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={styles.button9}
            >
              <View style={styles.bg7}>
                <View style={styles.ava3Row}>
                  <View style={styles.ava3}>
                    <View style={styles.avatar3}>
                      <View style={styles.ab144Bacb36679Ac7C13Be83A9257083}>
                        <View style={styles.fff631Ca2346Aa99De0F06F76C4608}>
                          <Image
                            source={require("../assets/images/a226afc100064b7742ece3b7a6039ba24dd00783.png")}
                            resizeMode="cover"
                            style={styles.c8A4D386D5244D8E9B0B7564Dc046Ee8}
                          ></Image>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.experimentalPopMusicSession9StackColumn}>
                    <View style={styles.experimentalPopMusicSession9Stack}>
                      <Text style={styles.experimentalPopMusicSession9}>
                        Anson Buck
                      </Text>
                      <Text style={styles.experimentalPopMusicSession11}>
                        Feb 13
                      </Text>
                    </View>
                    <Text style={styles.experimentalPopMusicSession10}>
                      Hi Stephane
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={styles.button8}
            >
              <View style={styles.bg9}>
                <View style={styles.ava4Row}>
                  <View style={styles.ava4}>
                    <View style={styles.avatar4}>
                      <View style={styles.ab144Bacb36679Ac7C13Be83A9257084}>
                        <View style={styles.cd03C7Be144228DddC83A570A7F87}>
                          <Image
                            source={require("../assets/images/71b5a151e9b4d609dec9abe79a5a966e7f2e89af.png")}
                            resizeMode="cover"
                            style={styles.f105416A04C4Dc3993F09D6B4E58495}
                          ></Image>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.experimentalPopMusicSession12StackColumn}>
                    <View style={styles.experimentalPopMusicSession12Stack}>
                      <Text style={styles.experimentalPopMusicSession12}>
                        Andi Lane
                      </Text>
                      <Text style={styles.experimentalPopMusicSession14}>
                        Jun 21
                      </Text>
                    </View>
                    <Text style={styles.experimentalPopMusicSession13}>
                      Hey, it is your GP!
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={styles.button7}
            >
              <View style={styles.bg11}>
                <View style={styles.ava5Row}>
                  <View style={styles.ava5}>
                    <View style={styles.avatar5}>
                      <View style={styles.ab144Bacb36679Ac7C13Be83A9257085}>
                        <View style={styles.cf5Ee3Fa7Ed46AfB8C37A0Be6C62Cba}>
                          <Image
                            source={require("../assets/images/716d1eea74381868e917b960627b4f0d5e14addc.png")}
                            resizeMode="cover"
                            style={styles.aa785F315E4639B402Aabd1C413651}
                          ></Image>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.experimentalPopMusicSession15StackColumn}>
                    <View style={styles.experimentalPopMusicSession15Stack}>
                      <Text style={styles.experimentalPopMusicSession15}>
                        Stephane Moreau
                      </Text>
                      <Text style={styles.experimentalPopMusicSession17}>
                        Aug 19
                      </Text>
                    </View>
                    <Text style={styles.experimentalPopMusicSession16}>
                      New Solution from the US
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={styles.button6}
            >
              <View style={styles.bg12Stack}>
                <View style={styles.bg12}>
                  <View style={styles.bg13}></View>
                </View>
                <Text style={styles.experimentalPopMusicSession18}>
                  General Major V. Mutafchiyski
                </Text>
                <Text style={styles.experimentalPopMusicSession19}>
                  Important Information UPDATE
                </Text>
                <Text style={styles.experimentalPopMusicSession20}>9 hrs</Text>
                <View style={styles.ava6}>
                  <View style={styles.avatar6}>
                    <View style={styles.ab144Bacb36679Ac7C13Be83A9257086}>
                      <View style={styles.f6905E6832848C0B236Cb9C0F1B3Fe3}>
                        <Image
                          source={require("../assets/images/4faff5ccdcf027fb46239fc38a279ebc4725a711.png")}
                          resizeMode="cover"
                          style={styles.f08B11F0094E5F8FebBf5Bdaafe4F0}
                        ></Image>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={styles.button5}
            >
              <View style={styles.rect3Stack}>
                <View style={styles.rect3}>
                  <View style={styles.bg14}>
                    <View style={styles.bg15}></View>
                  </View>
                </View>
                <Text style={styles.experimentalPopMusicSession21}>
                  Marcus Milestone PhD
                </Text>
                <Text style={styles.experimentalPopMusicSession22}>
                  Quarantine Information
                </Text>
                <Text style={styles.experimentalPopMusicSession23}>9 hrs</Text>
                <View style={styles.ava7}>
                  <View style={styles.avatar7}>
                    <View style={styles.e5299364677671B0D7A3F8Bf12Ab895}>
                      <View style={styles.c67C4774D6743C8Aaae12853226B1A7}>
                        <Image
                          source={require("../assets/images/001e5febdf3434b1272cb24f901148d5f27754c1.png")}
                          resizeMode="cover"
                          style={styles.bcc63E4126F4F15B7Ce0787Ec969800}
                        ></Image>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.group18483}>
                  <View style={styles.ellipse1092Stack}>
                    <Svg viewBox="-0 -0 22 22" style={styles.ellipse1092}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(212,127,166,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M11.00 22.00 C17.08 22.00 22.00 17.08 22.00 11.00 C22.00 4.92 17.08 0.00 11.00 0.00 C4.92 0.00 0.00 4.92 0.00 11.00 C0.00 17.08 4.92 22.00 11.00 22.00 Z"
                      ></Path>
                    </Svg>
                    <Text style={styles.style2}>7</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Chat")}
              style={styles.button4}
            >
              <View style={styles.rect2Stack}>
                <View style={styles.rect2}>
                  <View style={styles.bg163}>
                    <View style={styles.bg17}></View>
                  </View>
                </View>
                <Text style={styles.experimentalPopMusicSession24}>
                  Dina Meyer PhD
                </Text>
                <Text style={styles.experimentalPopMusicSession25}>
                  Last Monitoring UPDATES
                </Text>
                <Text style={styles.experimentalPopMusicSession26}>9 hrs</Text>
                <View style={styles.ava8}>
                  <View style={styles.avatar8}>
                    <View style={styles.bab11Ac4Bfcfed87F555B606Bfd73B55}>
                      <View style={styles.f2B0B731C1534B8Ab6C66Ccc7D3Ab314}>
                        <Image
                          source={require("../assets/images/db0e7db758c0866589d68264205d0b68c32a089d.png")}
                          resizeMode="cover"
                          style={styles.d6730997228487CBd12985B4289C956}
                        ></Image>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.group18482}>
                  <View style={styles.ellipse1091Stack}>
                    <Svg viewBox="-0 -0 22 22" style={styles.ellipse1091}>
                      <Path
                        strokeWidth={0}
                        fill="rgba(212,127,166,1)"
                        fillOpacity={1}
                        strokeOpacity={1}
                        d="M11.00 22.00 C17.08 22.00 22.00 17.08 22.00 11.00 C22.00 4.92 17.08 0.00 11.00 0.00 C4.92 0.00 0.00 4.92 0.00 11.00 C0.00 17.08 4.92 22.00 11.00 22.00 Z"
                      ></Path>
                    </Svg>
                    <Text style={styles.style1}>5</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.bg20}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Dashboard")}
                style={styles.button3}
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
              <View style={styles.button3Filler}>
                <Text style={styles.experimentalPopMusicSession27}>
                  Notifications
                </Text>
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
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      root: {
        flex: 1,
        backgroundColor: "rgba(255,255,255,1)"
      },
      button10: {
        top: 708,
        left: 0,
        width: 375,
        height: 173,
        position: "absolute"
      },
      bg5: {
        backgroundColor: "rgba(255,255,255,1)",
        borderColor: "rgba(231,228,233,1)",
        borderWidth: 1,
        borderBottomLeftRadius: 60,
        flex: 1
      },
      ava2: {
        width: 40,
        height: 40,
        opacity: 1
      },
      avatar2: {
        width: 40,
        height: 40,
        opacity: 1
      },
      ab144Bacb36679Ac7C13Be83A9257082: {
        width: 40,
        height: 40,
        opacity: 1
      },
      b939E31643C6858D4386B6E20Ff8: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        opacity: 1,
        borderColor: "rgba(53,38,65,1)",
        borderWidth: 2,
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
        borderBottomRightRadius: 33,
        borderBottomLeftRadius: 33,
        overflow: "hidden"
      },
      f6E13BfAd1F4F8198450A5Fa711A16B: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        opacity: 1,
        borderColor: "rgba(53,38,65,1)",
        borderWidth: 2,
        marginTop: -10,
      },
      experimentalPopMusicSession8: {
        color: "rgba(153,143,162,1)",
        opacity: 1,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 18,
        letterSpacing: -0.19,
        textAlign: "right",
        marginLeft: 178
      },
      experimentalPopMusicSession7: {
        width: 220,
        height: 18,
        color: "rgba(36,19,50,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14
      },
      experimentalPopMusicSession8Column: {
        width: 247,
        marginLeft: 24,
        marginTop: 2,
        marginBottom: 2
      },
      ava2Row: {
        height: 40,
        flexDirection: "row",
        marginTop: 101,
        marginLeft: 32,
        marginRight: 32
      },
      button9: {
        top: 607,
        left: 0,
        width: 375,
        height: 173,
        position: "absolute"
      },
      bg7: {
        backgroundColor: "rgba(255,255,255,1)",
        borderColor: "rgba(231,228,233,1)",
        borderWidth: 1,
        borderBottomLeftRadius: 60,
        flex: 1
      },
      ava3: {
        width: 40,
        height: 40,
        opacity: 1
      },
      avatar3: {
        width: 40,
        height: 40,
        opacity: 1
      },
      ab144Bacb36679Ac7C13Be83A9257083: {
        width: 40,
        height: 40,
        opacity: 1
      },
      fff631Ca2346Aa99De0F06F76C4608: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        opacity: 1,
        borderColor: "rgba(53,38,65,1)",
        borderWidth: 2,
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
        borderBottomRightRadius: 33,
        borderBottomLeftRadius: 33,
        overflow: "hidden"
      },
      c8A4D386D5244D8E9B0B7564Dc046Ee8: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        opacity: 1,
        borderColor: "rgba(53,38,65,1)",
        borderWidth: 2,
      },
      experimentalPopMusicSession9: {
        top: 0,
        left: 0,
        width: 230,
        height: 14,
        color: "rgba(153,143,162,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 18,
        letterSpacing: -0.19
      },
      experimentalPopMusicSession11: {
        top: 2,
        left: 210,
        color: "rgba(153,143,162,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 18,
        letterSpacing: -0.19,
        textAlign: "right"
      },
      experimentalPopMusicSession9Stack: {
        width: 246,
        height: 20
      },
      experimentalPopMusicSession10: {
        width: 220,
        height: 18,
        color: "rgba(36,19,50,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14
      },
      experimentalPopMusicSession9StackColumn: {
        width: 246,
        marginLeft: 24,
        marginBottom: 2
      },
      ava3Row: {
        height: 40,
        flexDirection: "row",
        marginTop: 101,
        marginLeft: 32,
        marginRight: 33
      },
      button8: {
        top: 506,
        left: 0,
        width: 375,
        height: 173,
        position: "absolute"
      },
      bg9: {
        backgroundColor: "rgba(255,255,255,1)",
        borderColor: "rgba(231,228,233,1)",
        borderWidth: 1,
        borderBottomLeftRadius: 60,
        flex: 1
      },
      ava4: {
        width: 40,
        height: 40,
        opacity: 1
      },
      avatar4: {
        width: 40,
        height: 40,
        opacity: 1
      },
      ab144Bacb36679Ac7C13Be83A9257084: {
        width: 40,
        height: 40,
        opacity: 1
      },
      cd03C7Be144228DddC83A570A7F87: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        opacity: 1,
        borderColor: "rgba(53,38,65,1)",
        borderWidth: 2,
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
        borderBottomRightRadius: 33,
        borderBottomLeftRadius: 33,
        overflow: "hidden"
      },
      f105416A04C4Dc3993F09D6B4E58495: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        opacity: 1,
        borderColor: "rgba(53,38,65,1)",
        borderWidth: 2,
      },
      experimentalPopMusicSession12: {
        top: 0,
        left: 0,
        width: 230,
        height: 14,
        color: "rgba(153,143,162,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 18,
        letterSpacing: -0.19
      },
      experimentalPopMusicSession14: {
        top: 2,
        left: 211,
        color: "rgba(153,143,162,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 18,
        letterSpacing: -0.19,
        textAlign: "right"
      },
      experimentalPopMusicSession12Stack: {
        width: 247,
        height: 20
      },
      experimentalPopMusicSession13: {
        width: 220,
        height: 18,
        color: "rgba(36,19,50,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14
      },
      experimentalPopMusicSession12StackColumn: {
        width: 247,
        marginLeft: 24,
        marginBottom: 2
      },
      ava4Row: {
        height: 40,
        flexDirection: "row",
        marginTop: 101,
        marginLeft: 32,
        marginRight: 32
      },
      button7: {
        top: 405,
        left: 0,
        width: 375,
        height: 173,
        position: "absolute"
      },
      bg11: {
        backgroundColor: "rgba(255,255,255,1)",
        borderColor: "rgba(231,228,233,1)",
        borderWidth: 1,
        borderBottomLeftRadius: 60,
        flex: 1
      },
      ava5: {
        width: 40,
        height: 40,
        opacity: 1
      },
      avatar5: {
        width: 40,
        height: 40,
        opacity: 1
      },
      ab144Bacb36679Ac7C13Be83A9257085: {
        width: 40,
        height: 40,
        opacity: 1
      },
      cf5Ee3Fa7Ed46AfB8C37A0Be6C62Cba: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        opacity: 1,
        borderColor: "rgba(53,38,65,1)",
        borderWidth: 2,
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
        borderBottomRightRadius: 33,
        borderBottomLeftRadius: 33,
        overflow: "hidden"
      },
      aa785F315E4639B402Aabd1C413651: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        opacity: 1,
        borderColor: "rgba(53,38,65,1)",
        borderWidth: 2,
      },
      experimentalPopMusicSession15: {
        top: 0,
        left: 0,
        width: 230,
        height: 14,
        color: "rgba(153,143,162,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 18,
        letterSpacing: -0.19
      },
      experimentalPopMusicSession17: {
        top: 2,
        left: 208,
        color: "rgba(153,143,162,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 18,
        letterSpacing: -0.19,
        textAlign: "right"
      },
      experimentalPopMusicSession15Stack: {
        width: 247,
        height: 20
      },
      experimentalPopMusicSession16: {
        width: 220,
        height: 18,
        color: "rgba(36,19,50,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14
      },
      experimentalPopMusicSession15StackColumn: {
        width: 247,
        marginLeft: 24,
        marginBottom: 2
      },
      ava5Row: {
        height: 40,
        flexDirection: "row",
        marginTop: 101,
        marginLeft: 32,
        marginRight: 32
      },
      button6: {
        top: 304,
        left: 0,
        width: 375,
        height: 173,
        position: "absolute"
      },
      bg12: {
        top: 0,
        left: 0,
        position: "absolute",
        opacity: 1,
        right: 0,
        bottom: 0
      },
      bg13: {
        width: 375,
        height: 173,
        backgroundColor: "rgba(255,255,255,1)",
        opacity: 1,
        borderColor: "rgba(231,228,233,1)",
        borderWidth: 1,
        borderBottomLeftRadius: 60
      },
      experimentalPopMusicSession18: {
        top: 101,
        left: 96,
        width: 230,
        height: 14,
        color: "rgba(153,143,162,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 18,
        letterSpacing: -0.19
      },
      experimentalPopMusicSession19: {
        top: 121,
        left: 96,
        width: 220,
        height: 18,
        color: "rgba(36,19,50,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 20,
        letterSpacing: -0.14
      },
      experimentalPopMusicSession20: {
        top: 103,
        left: 314,
        color: "rgba(153,143,162,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 18,
        letterSpacing: -0.19,
        textAlign: "right"
      },
      ava6: {
        top: 101,
        left: 32,
        width: 40,
        height: 40,
        position: "absolute",
        opacity: 1
      },
      avatar6: {
        width: 40,
        height: 40,
        opacity: 1
      },
      ab144Bacb36679Ac7C13Be83A9257086: {
        width: 40,
        height: 40,
        opacity: 1
      },
      f6905E6832848C0B236Cb9C0F1B3Fe3: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        opacity: 1,
        borderColor: "rgba(53,38,65,1)",
        borderWidth: 2,
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
        borderBottomRightRadius: 33,
        borderBottomLeftRadius: 33,
        overflow: "hidden"
      },
      f08B11F0094E5F8FebBf5Bdaafe4F0: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        opacity: 1,
        borderColor: "rgba(53,38,65,1)",
        borderWidth: 2,
      },
      bg12Stack: {
        flex: 1
      },
      button5: {
        top: 203,
        left: 0,
        width: 375,
        height: 173,
        position: "absolute"
      },
      rect3: {
        top: 0,
        left: 0,
        position: "absolute",
        opacity: 1,
        right: 0,
        bottom: 0
      },
      bg14: {
        width: 375,
        height: 173,
        opacity: 1
      },
      bg15: {
        width: 375,
        height: 173,
        backgroundColor: "rgba(95,69,145,1)",
        opacity: 1,
        borderColor: "rgba(231,228,233,1)",
        borderWidth: 1,
        borderBottomLeftRadius: 60
      },
      experimentalPopMusicSession21: {
        top: 101,
        left: 96,
        width: 230,
        height: 14,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.7,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 18,
        letterSpacing: -0.19
      },
      experimentalPopMusicSession22: {
        top: 121,
        left: 96,
        width: 220,
        height: 18,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 20,
        letterSpacing: -0.14
      },
      experimentalPopMusicSession23: {
        top: 101,
        left: 314,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.7,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 18,
        letterSpacing: -0.19,
        textAlign: "right"
      },
      ava7: {
        top: 101,
        left: 32,
        width: 40,
        height: 40,
        position: "absolute",
        opacity: 1
      },
      avatar7: {
        width: 40,
        height: 40,
        opacity: 1
      },
      e5299364677671B0D7A3F8Bf12Ab895: {
        width: 40,
        height: 40,
        opacity: 1
      },
      c67C4774D6743C8Aaae12853226B1A7: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        opacity: 1,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 2,
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
        borderBottomRightRadius: 33,
        borderBottomLeftRadius: 33,
        overflow: "hidden"
      },
      bcc63E4126F4F15B7Ce0787Ec969800: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        opacity: 1,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 2,
      },
      group18483: {
        top: 119,
        width: 22,
        height: 22,
        position: "absolute",
        right: 32
      },
      ellipse1092: {
        top: 0,
        left: 0,
        width: 22,
        height: 22,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      style2: {
        top: 4,
        left: 7,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 14,
        letterSpacing: -0.17,
        textAlign: "center"
      },
      ellipse1092Stack: {
        width: 22,
        height: 22
      },
      rect3Stack: {
        flex: 1
      },
      button4: {
        top: 90,
        left: 0,
        width: 375,
        height: 185,
        position: "absolute"
      },
      rect2: {
        top: 0,
        left: 0,
        position: "absolute",
        opacity: 1,
        right: 0,
        bottom: 0
      },
      bg163: {
        width: 375,
        height: 185,
        opacity: 1
      },
      bg17: {
        width: 375,
        height: 185,
        backgroundColor: "rgba(95,69,145,1)",
        opacity: 1,
        borderColor: "rgba(255,255,255,0.101960784313725)",
        borderWidth: 1,
        borderBottomLeftRadius: 60
      },
      experimentalPopMusicSession24: {
        top: 113,
        left: 96,
        width: 230,
        height: 14,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.7,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 18,
        letterSpacing: -0.19
      },
      experimentalPopMusicSession25: {
        top: 133,
        left: 96,
        width: 220,
        height: 18,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 20,
        letterSpacing: -0.14
      },
      experimentalPopMusicSession26: {
        top: 113,
        left: 314,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 0.7,
        fontSize: 12,
        fontFamily: "Roboto",
        lineHeight: 18,
        letterSpacing: -0.19,
        textAlign: "right"
      },
      ava8: {
        top: 113,
        left: 32,
        width: 40,
        height: 40,
        position: "absolute",
        opacity: 1
      },
      avatar8: {
        width: 40,
        height: 40,
        opacity: 1
      },
      bab11Ac4Bfcfed87F555B606Bfd73B55: {
        width: 40,
        height: 40,
        opacity: 1
      },
      f2B0B731C1534B8Ab6C66Ccc7D3Ab314: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        opacity: 1,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 2,
        borderTopLeftRadius: 33,
        borderTopRightRadius: 33,
        borderBottomRightRadius: 33,
        borderBottomLeftRadius: 33,
        overflow: "hidden"
      },
      d6730997228487CBd12985B4289C956: {
        width: 40,
        height: 40,
        backgroundColor: "transparent",
        opacity: 1,
        borderColor: "rgba(255,255,255,1)",
        borderWidth: 2,
      },
      group18482: {
        top: 132,
        width: 22,
        height: 22,
        position: "absolute",
        right: 32
      },
      ellipse1091: {
        top: 0,
        left: 0,
        width: 22,
        height: 22,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      style1: {
        top: 4,
        left: 7,
        color: "rgba(255,255,255,1)",
        position: "absolute",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 14,
        letterSpacing: -0.17,
        textAlign: "center"
      },
      ellipse1091Stack: {
        width: 22,
        height: 22
      },
      rect2Stack: {
        flex: 1
      },
      bg20: {
        top: 0,
        left: 0,
        height: 155,
        backgroundColor: "rgba(255,255,255,1)",
        position: "absolute",
        borderBottomLeftRadius: 80,
        right: 0,
        flexDirection: "row"
      },
      button3: {
        width: 24,
        height: 24,
        opacity: 1,
        marginLeft: 25,
        marginTop: 66
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
      experimentalPopMusicSession27: {
        color: "rgba(0,0,0,1)",
        opacity: 1,
        fontSize: 36,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 36,
        letterSpacing: -0.42,
        marginTop: 60
      },
      button3Filler: {
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
      button10Stack: {
        height: 881,
        marginTop: -18
      }
    });

export default Notifications;
