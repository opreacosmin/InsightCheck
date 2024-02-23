import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

function CardExample(props) {
  return <View style={[styles.container, props.style]}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(46,49,53,1)",
    borderRadius: 10
  }
});

export default CardExample;
