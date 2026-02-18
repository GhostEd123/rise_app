import { Image } from "expo-image";
import { StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import React, { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [goals, setGoals] = useState("");

  const handleDisplay = () => {
    Alert.alert(
      "Form Submission",
      `Fullname: ${fullname}\n\nEmail: ${email}\n\nGoals: ${goals}`,
      [{ text: "OK" }],
    );
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <View style={styles.container}>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="label">Enter Fullname</ThemedText>

          <TextInput
            style={styles.input}
            placeholder="Fullname"
            value={fullname}
            onChangeText={setFullname}
          />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="label">Enter Email</ThemedText>

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="label">
            What do you want to achieve at the end of this course?
          </ThemedText>

          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="What do you want to achieve?"
            value={goals}
            onChangeText={setGoals}
            multiline
          />
        </ThemedView>
        <ThemedView style={styles.stepContainer}></ThemedView>

        <TouchableOpacity style={styles.button} onPress={handleDisplay}>
          <ThemedText type="defaultSemiBold" style={styles.buttonText}>
            Display Results
          </ThemedText>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 15,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  container: {
    // padding: 10,
    // alignItems: 'center',Mi
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: "#000",
    backgroundColor: "#fff",
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
    paddingTop: 10,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
  },
});
