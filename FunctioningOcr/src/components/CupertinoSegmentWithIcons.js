import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";

function CupertinoSegmentWithIcons(props) {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.textWrapper}>
        <TouchableOpacity style={styles.segmentTextWrapper1}>
          <MaterialCommunityIconsIcon
            name="library-books"
            style={styles.text1}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper2}>
          <MaterialCommunityIconsIcon
            name="feather"
            style={styles.text2}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper3}>
          <MaterialCommunityIconsIcon
            name="message-outline"
            style={styles.text3}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.segmentTextWrapper4}>
          <IoniconsIcon name="ios-cog" style={styles.text4} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF"
  },
  textWrapper: {
    height: 29,
    flex: 1,
    paddingLeft: 8,
    paddingRight: 8,
    flexDirection: "row"
  },
  segmentTextWrapper1: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#007AFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5
  },
  text1: {
    fontSize: 18,
    color: "#FFFFFF"
  },
  segmentTextWrapper2: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderLeftWidth: 0
  },
  text2: {
    fontSize: 18,
    color: "#007AFF"
  },
  segmentTextWrapper3: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderRightWidth: 0,
    borderLeftWidth: 0
  },
  text3: {
    fontSize: 18,
    color: "#007AFF"
  },
  segmentTextWrapper4: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 6,
    borderWidth: 1,
    borderColor: "#007AFF",
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5
  },
  text4: {
    fontSize: 18,
    color: "#007AFF"
  }
});

export default CupertinoSegmentWithIcons;
