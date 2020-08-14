import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://github.com/diego3g" }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Diego Fernandes</Text>
          <Text style={styles.subject}>Math</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
        {"\n"} {"\n"}
        Aperiam nostrum aut iure nulla sed quisquam impedit illum molestiae
        alias inventore at cupiditate placeat ipsam corrupti harum quae sequi
        nisi?
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Price/Hour{"   "}
          <Text style={styles.priceValye}>$ 20,00</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={heartOutlineIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Get in touch</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
