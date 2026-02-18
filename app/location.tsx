import { IconSymbol } from "@/components/ui/icon-symbol";
import { useRouter } from "expo-router";
import React from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function LocationScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <IconSymbol name="chevron.left" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/location.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>Set your location</Text>
        <Text style={styles.subtitle}>
          This let us know your location for best shipping experience
        </Text>

        <View style={styles.flexSpacer} />

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/notifications")}
        >
          <Text style={styles.primaryButtonText}>Allow Google Maps</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/notifications")}
        >
          <Text style={styles.secondaryButtonText}>Set Manually</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  content: {
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center",
  },
  backButton: {
    alignSelf: "flex-start",
    width: 40,
    height: 40,
    justifyContent: "center",
    marginBottom: 20,
  },
  imageContainer: {
    height: width * 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  image: {
    width: width * 0.6,
    height: width * 0.6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 30,
    lineHeight: 22,
  },
  flexSpacer: {
    flex: 1,
  },
  primaryButton: {
    width: "100%",
    height: 56,
    backgroundColor: "#000",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    width: "100%",
    height: 56,
    backgroundColor: "#F5F5F5",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  secondaryButtonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
});
