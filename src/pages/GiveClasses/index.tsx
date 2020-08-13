import React from "react";
import { View, ImageBackground, Text } from "react-native";

import giveClassesBgImage from "../../assets/images/give-classes-background.png";

import styles from "./styles";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

function GiveClasses() {
  const { goBack } = useNavigation();

  function handleNavigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={giveClassesBgImage}
        style={styles.content}
        resizeMode={"contain"}
      >
        <Text style={styles.title}>Want to be a Proffy?</Text>
        <Text style={styles.description}>
          To start, you need to sign up on our website
        </Text>
      </ImageBackground>

      <RectButton onPress={handleNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Okay!</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
