import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Image, Platform, Dimensions, TouchableOpacity, Text, View } from "react-native";

const { height, width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "column",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
    height: height,
    width: width,
    paddingHorizontal: 20,
  },
  buttonContainer: {
    backgroundColor: "#f194ff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default function ExploresScreen() {
  return (
    <ThemedView style={styles.titleContainer}>
      <ThemedText type="defaultSemiBold">
        Welcome to React Native Development wrap text? doe sit?
      </ThemedText>
      <ThemedText type="title">Shit Monkey</ThemedText>
      <CustomButton title="myButton" onPress={() => alert('Simple Button pressed')} />
    </ThemedView>
  );
}
