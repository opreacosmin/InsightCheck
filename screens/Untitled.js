import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import MaterialHeader21 from "../components/MaterialHeader21";
import Svg, { Ellipse } from "react-native-svg";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import OcticonsIcon from "react-native-vector-icons/Octicons";
import CardExample from "../components/CardExample";
import CardEntity from "../components/CardEntity";

function Untitled() {
  return (
    <View style={styles.container}>
      <MaterialHeader21 style={styles.materialHeader21}></MaterialHeader21>
      <View style={styles.pieStackStack}>
        <View style={styles.pieStack}>
          <View style={styles.pie}>
            <View style={styles.pieBackgroundStack}>
              <View style={styles.pieBackground}></View>
              <ImageBackground
                source={require("../assets/images/piechartmain1.png")}
                resizeMode="contain"
                style={styles.pieChartMock}
                imageStyle={styles.pieChartMock_imageStyle}
              >
                <Text style={styles.loremFoodEIpsum3}>
                  2nd most used.
                </Text>
                <Text style={styles.loremFoodEIpsum3}>
                  Current planning
                </Text>
                <Text style={styles.loremFoodEIpsum3}>
                  may need review.
                </Text>
              </ImageBackground>
              <ImageBackground
                source={require("../assets/images/grreenline.png")}
                resizeMode="contain"
                style={styles.arrowPieChartMock}
                imageStyle={styles.arrowPieChartMock_imageStyle}
              >
                <Text style={styles.loremFoodEIpsum}>Food Expenses</Text>
                <Text style={styles.loremFoodEIpsum1}>
                  23% increase in{"\n"}grocery shopping {"\n"}to last week
                </Text>
                <Text style={styles.loremFoodEIpsum2}>
                  Goal for this month's
                </Text>
                <Text style={styles.loremFoodEIpsum2}>
                  spending is achieved.
                </Text>
                <Text style={styles.loremFoodEIpsum2}>
                  Wohoo!
                </Text>
              </ImageBackground>
            </View>
          </View>
        </View>
        <View style={styles.cardEntity3}>
          <View style={styles.cardExample2Stack}>
            <CardExample style={styles.cardExample2}></CardExample>
            <View style={styles.group11}>
              <View style={styles.rect4}>
                <View style={styles.group12}>
                  <View style={styles.group13}>
                    <View style={styles.rect5Stack}>
                      <View style={styles.rect5}></View>
                      <View style={styles.group14}>
                        <Text style={styles.cardC}>Card C</Text>
                        <Text style={styles.abcdEfgHijkLmno4}>
                          ABCD-EFG-HIJK-LMNO
                        </Text>
                        <Text style={styles.cardA3}>400 lei</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.rect6}></View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.cardEntity2}>
          <View style={styles.cardExample1Stack}>
            <CardExample style={styles.cardExample1}></CardExample>
            <View style={styles.group7}>
              <View style={styles.rect1}>
                <View style={styles.group8}>
                  <View style={styles.group9}>
                    <View style={styles.rect2Stack}>
                      <View style={styles.rect2}></View>
                      <View style={styles.group10}>
                        <Text style={styles.cardA2}>Card B</Text>
                        <Text style={styles.abcdEfgHijkLmno3}>
                          ABCD-EFG-HIJK-LMNO
                        </Text>
                        <Text style={styles.cardA1}>1000 euro</Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.rect3}></View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <CardEntity style={styles.cardEntity}></CardEntity>
      </View>
      <ImageBackground
        source={require("../assets/images/Black-Gradient-PNG-File.png")}
        resizeMode="contain"
        style={styles.blackGradient}
        imageStyle={styles.blackGradient_imageStyle}
      >
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(20,20,24,1)"
  },
  materialHeader21: {
    height: 57,
    width: 375,
    marginTop: 44
  },
  pie: {
    top: 0,
    left: 262,
    width: 338,
    height: 309,
    position: "absolute"
  },
  pieBackground: {
    top: 51,
    left: 0,
    width: 338,
    height: 309,
    position: "absolute",
    backgroundColor: "rgba(46,49,53,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 60,
    shadowOpacity: 1,
    shadowRadius: 20,
    borderRadius: 13
  },
  pieChartMock: {
    top: 72,
    left: 6,
    width: 438,
    height: 322,
    position: "absolute"
  },
  pieChartMock_imageStyle: {},
  loremFoodEIpsum3: {
    fontFamily: "quicksand-300",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginTop: 161,
    marginLeft: 6
  },
  arrowPieChartMock: {
    top: 0,
    left: 6,
    width: 309,
    height: 244,
    position: "absolute"
  },
  arrowPieChartMock_imageStyle: {},
  loremFoodEIpsum: {
    fontFamily: "quicksand-300",
    color: "rgba(255,255,255,1)",
    marginTop: 72,
    marginLeft: 6
  },
  loremFoodEIpsum1: {
    fontFamily: "quicksand-300",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginTop: 35,
    marginLeft: 6
  },
  loremFoodEIpsum2: {
    fontFamily: "quicksand-300",
    color: "rgba(255,255,255,1)",
    fontSize: 11,
    marginTop: 13,
    marginLeft: 6
  },
  pieBackgroundStack: {
    width: 444,
    height: 394,
    marginTop: -51
  },
  blackGradient: {
    top: 68,
    left: 0,
    width: 1287,
    height: 620,
    position: "absolute",
    transform: [
      {
        rotate: "180.00deg"
      }
    ]
  },
  blackGradient_imageStyle: {},
  actions: {
    width: 63,
    height: 65,
    marginTop: 503,
    marginLeft: 526
  },
  allActions1: {
    top: 39,
    left: 37,
    width: 63,
    height: 65,
    position: "absolute"
  },
  group15: {
    width: 63,
    height: 65
  },
  ellipse7: {
    top: 0,
    left: 0,
    width: 63,
    height: 65,
    position: "absolute"
  },
  group16: {
    top: 10,
    left: 12,
    width: 40,
    height: 43,
    position: "absolute"
  },
  group17: {
    width: 40,
    height: 43
  },
  icon7: {
    color: "rgba(255,255,255,1)",
    fontSize: 40
  },
  ellipse7Stack: {
    width: 63,
    height: 65
  },
  edit: {
    top: 0,
    left: 0,
    width: 43,
    height: 44,
    position: "absolute"
  },
  ellipse4: {
    top: 0,
    left: 0,
    width: 43,
    height: 44,
    position: "absolute"
  },
  icon5: {
    top: 12,
    left: 12,
    position: "absolute",
    color: "rgba(248,231,28,1)",
    fontSize: 20
  },
  ellipse4Stack: {
    width: 43,
    height: 44
  },
  allActions1Stack: {
    top: 19,
    left: 22,
    width: 100,
    height: 104,
    position: "absolute"
  },
  aI: {
    top: 0,
    left: 79,
    width: 43,
    height: 44,
    position: "absolute"
  },
  ellipse6: {
    top: 0,
    left: 0,
    width: 43,
    height: 44,
    position: "absolute"
  },
  icon6: {
    top: 9,
    left: 10,
    position: "absolute",
    color: "rgba(71,255,252,1)",
    fontSize: 24
  },
  ellipse6Stack: {
    width: 43,
    height: 44
  },
  add: {
    top: 79,
    left: 0,
    width: 43,
    height: 44,
    position: "absolute"
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 43,
    height: 44,
    position: "absolute"
  },
  icon4: {
    top: 8,
    left: 12,
    position: "absolute",
    color: "rgba(66,211,33,1)",
    fontSize: 26
  },
  ellipse2Stack: {
    width: 43,
    height: 44
  },
  allActions1StackStack: {
    width: 122,
    height: 123,
    marginTop: -58,
    marginLeft: -59
  },
  pieStack: {
    top: 0,
    left: 0,
    width: 1287,
    height: 688,
    position: "absolute"
  },
  cardEntity3: {
    top: 604,
    left: 274,
    width: 315,
    height: 122,
    position: "absolute"
  },
  cardExample2: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 122,
    width: 315
  },
  group11: {
    top: 19,
    left: 0,
    width: 315,
    height: 13,
    position: "absolute"
  },
  rect4: {
    width: 315,
    height: 13,
    backgroundColor: "rgba(80,227,194,1)"
  },
  group12: {
    width: 315,
    height: 13
  },
  group13: {
    width: 315,
    height: 13
  },
  rect5: {
    top: 47,
    left: 0,
    width: 85,
    height: 14,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  group14: {
    top: 0,
    left: 0,
    width: 278,
    height: 72,
    position: "absolute"
  },
  cardC: {
    fontFamily: "quicksand-500",
    color: "rgba(80,227,194,1)"
  },
  abcdEfgHijkLmno4: {
    fontFamily: "quicksand-500",
    color: "rgba(80,227,194,1)",
    marginTop: 3
  },
  cardA3: {
    fontFamily: "quicksand-500",
    color: "rgba(80,227,194,1)",
    marginTop: 15,
    marginLeft: 225
  },
  rect5Stack: {
    width: 278,
    height: 72,
    marginTop: 21,
    marginLeft: 24
  },
  rect6: {
    width: 41,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
    marginTop: 14,
    marginLeft: 252
  },
  cardExample2Stack: {
    width: 315,
    height: 122
  },
  cardEntity2: {
    top: 464,
    left: 274,
    width: 315,
    height: 122,
    position: "absolute"
  },
  cardExample1: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 122,
    width: 315
  },
  group7: {
    top: 19,
    left: 0,
    width: 315,
    height: 13,
    position: "absolute"
  },
  rect1: {
    width: 315,
    height: 13,
    backgroundColor: "rgba(159,104,247,1)"
  },
  group8: {
    width: 315,
    height: 13
  },
  group9: {
    width: 315,
    height: 13
  },
  rect2: {
    top: 47,
    left: 0,
    width: 85,
    height: 14,
    position: "absolute",
    backgroundColor: "#E6E6E6"
  },
  group10: {
    top: 0,
    left: 0,
    width: 278,
    height: 72,
    position: "absolute"
  },
  cardA2: {
    fontFamily: "quicksand-500",
    color: "rgba(159,104,247,1)"
  },
  abcdEfgHijkLmno3: {
    fontFamily: "quicksand-500",
    color: "rgba(159,104,247,1)",
    marginTop: 3
  },
  cardA1: {
    fontFamily: "quicksand-500",
    color: "rgba(159,104,247,1)",
    marginTop: 15,
    marginLeft: 208
  },
  rect2Stack: {
    width: 278,
    height: 72,
    marginTop: 21,
    marginLeft: 24
  },
  rect3: {
    width: 41,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
    marginTop: 14,
    marginLeft: 252
  },
  cardExample1Stack: {
    width: 315,
    height: 122
  },
  cardEntity: {
    position: "absolute",
    top: 323,
    left: 274,
    height: 122,
    width: 315
  },
  pieStackStack: {
    width: 1287,
    height: 726,
    marginTop: 23,
    marginLeft: -244
  }
});
export default Untitled;
