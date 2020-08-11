import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Landing from "./src/pages/Landing";
import { AppLoading } from "expo";

export default function App() {
  return (
    <>
      <Landing />
      <StatusBar style="auto" />
    </>
  );
}
