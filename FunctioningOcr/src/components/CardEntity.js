import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import CardExample from "./CardExample";

function CardEntity(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.cardExampleStack}>
        <CardExample style={styles.cardExample}></CardExample>
        <View style={styles.group8}>
          <View style={styles.rect6}>
            <View style={styles.group9}>
              <View style={styles.group11}>
                <View style={styles.rect7Stack}>
                  <View style={styles.rect7}></View>
                  <View style={styles.group10}>
                    <Text style={styles.cardA2}>Card A</Text>
                    <Text style={styles.abcdEfgHijkLmno1}>
                      ABCD-EFG-HIJK-LMNO
                    </Text>
                    <Text style={styles.cardA1}>10 000 lei</Text>
                  </View>
                </View>
              </View>
              <View style={styles.rect8}></View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  cardExample: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 122,
    width: 315
  },
  group8: {
    top: 19,
    left: 0,
    width: 315,
    height: 13,
    position: "absolute"
  },
  rect6: {
    width: 315,
    height: 13,
    backgroundColor: "rgba(247,104,194,1)"
  },
  group9: {
    width: 315,
    height: 13
  },
  group11: {
    width: 315,
    height: 13
  },
  rect7: {
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
    color: "rgba(247,104,194,1)"
  },
  abcdEfgHijkLmno1: {
    fontFamily: "quicksand-500",
    color: "rgba(247,104,194,1)",
    marginTop: 4
  },
  cardA1: {
    fontFamily: "quicksand-500",
    color: "rgba(247,104,194,1)",
    marginTop: 16,
    marginLeft: 208
  },
  rect7Stack: {
    width: 278,
    height: 72,
    marginTop: 21,
    marginLeft: 24
  },
  rect8: {
    width: 41,
    height: 41,
    backgroundColor: "#E6E6E6",
    borderRadius: 8,
    marginTop: 14,
    marginLeft: 252
  },
  cardExampleStack: {
    width: 315,
    height: 122
  }
});

export default CardEntity;
