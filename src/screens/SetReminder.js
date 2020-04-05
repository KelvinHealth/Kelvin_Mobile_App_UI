import React, { Component } from "react";
import { StyleSheet, View, ImageBackground, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Svg, { Path, Stop, Defs, Mask, LinearGradient } from "react-native-svg";
import { NavigationContainer } from '../../node_modules/@react-navigation/native';
import { createStackNavigator } from '../../node_modules/@react-navigation/stack';
import { Center } from "../../node_modules/@builderx/utils";
import App from '../../App';

function SetReminder({navigation}) {
    return (
        <View style={styles.root}>
          <View style={styles.img}>
            <View style={styles.bc092569E2C43B7815Ec368171Df82A}>
              <Image
                source={require("../assets/images/3c92f928d0e19bf8877b78f170c9882e2743ed60.png")}
                resizeMode="cover"
                style={styles.d449E647Cb5C46DaB8C10A1D57Fd8975}
              ></Image>
            </View>
          </View>
          <View style={styles.bg32}>
            
            <View style={styles.text2Column}>
              <Text style={styles.text2}>Set a Reminder:</Text>
              <Text
              style={
                styles.theReminderWillSendYouANotificationToYourDeviceIn2HoursPleaseMakeSureThatYouWillSeeItImmediatelyAfterThat
              }
            >
              The Reminder will send you a Notification to Your Device in 2 hours.
              Please, make sure that you will see it immediately after that!
            </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("PointStats")}
                style={styles.button}
              >
                <View style={styles.bg42Stack}>
                  <Svg viewBox="-0 -0 327 52" style={styles.bg42}>
                    <Path
                      strokeWidth={0}
                      fill="rgba(255,255,255,1)"
                      fillOpacity={1}
                      strokeOpacity={1}
                      d="M26.00 0.00 L301.00 0.00 C315.36 0.00 327.00 11.64 327.00 26.00 C327.00 40.36 315.36 52.00 301.00 52.00 L26.00 52.00 C11.64 52.00 0.00 40.36 0.00 26.00 C0.00 11.64 11.64 0.00 26.00 0.00 Z"
                    ></Path>
                  </Svg>
                  <Text style={styles.confirm}>CONFIRM</Text>
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
      img: {
        height: 453,
        opacity: 1
      },
      bc092569E2C43B7815Ec368171Df82A: {
        width: 375,
        height: 453,
        backgroundColor: "transparent",
        opacity: 1,
        borderBottomLeftRadius: 80,
        overflow: "hidden"
      },
      d449E647Cb5C46DaB8C10A1D57Fd8975: {
        width: 653,
        height: 453,
        backgroundColor: "transparent",
        opacity: 1,
        marginLeft: -64
      },
      bg32: {
        height: 347,
        backgroundColor: "rgba(36,19,50,1)",
        borderTopLeftRadius: 60,
        marginTop: 12
      },
      theReminderWillSendYouANotificationToYourDeviceIn2HoursPleaseMakeSureThatYouWillSeeItImmediatelyAfterThat: {
        color: "rgba(153,143,162,1)",
        opacity: 1,
        fontSize: 14,
        fontFamily: "Roboto",
        lineHeight: 18,
        letterSpacing: -0.14,
        textAlign: "center",
        marginLeft: 24,
        marginBottom: 40,
        marginRight: 24
      },
      theReminderWillSendYouANotificationToYourDeviceIn2HoursPleaseMakeSureThatYouWillSeeItImmediatelyAfterThatFiller: {
        flex: 1
      },
      text2: {
        width: 375,
        height: 26,
        color: "rgba(255,255,255,1)",
        opacity: 1,
        fontSize: 26,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 26,
        letterSpacing: -0.42,
        textAlign: "center",
        alignSelf: "flex-end",
        marginTop: 50,
      },
      button: {
        width: 327,
        height: 52,
        opacity: 1,
        marginLeft: 24,
        marginRight: 48
      },
      bg42: {
        top: 0,
        left: 0,
        marginRight: 24,
        width: 327,
        height: 52,
        backgroundColor: "transparent",
        position: "absolute",
        borderColor: "transparent"
      },
      confirm: {
        top: 17,
        left: 0,
        color: "rgba(53,38,65,1)",
        position: "absolute",
        right: 0,
        opacity: 1,
        fontSize: 18,
        fontFamily: "Roboto",
        fontWeight: "700",
        lineHeight: 18,
        letterSpacing: 0.07,
        textAlign: "center"
      },
      bg42Stack: {
        height: 52,
        right: 8
      },
      text2Column: {
        marginBottom: 140
      }
    });

export default SetReminder;
