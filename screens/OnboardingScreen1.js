import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen1 = () => {
  const navigation = useNavigation();
  const dashboard = () => {
    navigation.navigate("Dashboard");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/Group 9.png")}
            style={styles.image}
          />
          <Image
            source={require("../assets/stack.png")}
            style={styles.image1}
          />
        </View>
        <View>
          <Text style={styles.title}>
            The Future of <Text style={styles.title1}>banking</Text>
          </Text>
        </View>

        <View style={styles.journey}>
          <Text style={styles.title2}>
            {" "}
            Your journey to seamless transactions and easy banking starts with
            us. Welcome to our banking app!
          </Text>
        </View>

        <View style={{ padding: 70 }}>
          <TouchableOpacity style={styles.started} onPress={dashboard}>
            <Text style={{ color: "white", fontSize: 16, fontWeight: 700 }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center", // Centers children horizontally
    backgroundColor: "white",
  },
  imageContainer: {
    width: "100%",
    padding: 20,
    flexDirection: "column", //
    gap: 70,
  },
  title: {
    fontSize: 24,
    color: "black",
    textAlign: "center",
    fontFamily: "Josefin Sans",
    fontWeight: 600,
  },
  title1: {
    color: "#3F51B5",
  },
  title2: {
    color: "#212121",
    fontSize: 14,
    fontWeight: 400,
  },
  journey: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    padding: 25,
  },
  started: {
    width: 327,
    height: 44,
    backgroundColor: "#303F9F",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
  },
});

export default OnboardingScreen1;
