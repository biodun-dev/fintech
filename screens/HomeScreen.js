import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";

const tabIcons = {
  Recharge: "battery-charging-outline",
  Loans: "cash-outline",
  Statement: "document-text-outline",
  Withdraw: "wallet-outline",
};
const transactions = [
  {
    id: "1",
    image: require("../assets/Frame 7.png"),
    name: "Anwuri Alabii",
    time: "Today at 19:32pm",
    amount: "+$100",
  },
  {
    id: "2",
    image: require("../assets/netflix.png"),
    name: "Netflix",
    time: "Today at 15:21pm",
    amount: "-$30",
  },
  {
    id: "3",
    image: require("../assets/paypal.png"),
    name: "Paypal",
    time: "Today at 14:00pm",
    amount: "+$60",
  },
];
const loansData = [
  { id: "4", details: "Loan approved", date: "Apr 12", amount: "$500" },
];
const statementData = [
  { id: "5", description: "Monthly Statement", date: "Mar", amount: "-$200" },
];
const withdrawData = [
  { id: "6", method: "Bank Transfer", date: "Today", amount: "-$100" },
];

const allTransactions = [
  ...transactions,
  ...loansData,
  ...statementData,
  ...withdrawData,
]; // Combine all data into one array

const HomeScreen = () => {
  const [activeTab, setActiveTab] = useState("All");

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  const [isBalanceMasked, setIsBalanceMasked] = useState(true); // Initialize as true if you want it masked by default

  const toggleBalanceMask = () => {
    setIsBalanceMasked(!isBalanceMasked);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "All":
        return allTransactions;
      case "Recharge":
        return transactions;
      case "Loans":
        return loansData;
      case "Statement":
        return statementData;
      case "Withdraw":
        return withdrawData;
      default:
        return allTransactions;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../assets/Group 9.png")}
            style={styles.image}
          />
          <TouchableOpacity>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Image
            source={require("../assets/Frame 16.png")}
            style={styles.image1}
          />

          <View>
            <Text style={styles.greeting}>Hello, Atlanta</Text>
            <Text
              style={{ color: "#757575", fontSize: "14px", fontWeight: "400" }}
            >
              What are we doing today?
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.balanceContainer}
        onPress={toggleBalanceMask}
        activeOpacity={0.7}
      >
        <Text style={styles.balanceText}>Total Balance</Text>
        <Text style={styles.balanceAmount}>
          {isBalanceMasked ? "******" : "$5,504.50"}
        </Text>
      </TouchableOpacity>

      <View style={styles.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {["All", "Recharge", "Loans", "Statement", "Withdraw"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={styles.tab}
              onPress={() => handleTabPress(tab)}
            >
              <Ionicons
                name={"document-text-outline"}
                size={24}
                color="#27346A"
              />
              <Text style={styles.tabLabel}>{tab}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <FlatList
        data={renderContent()}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            {item.image && (
              <Image
                source={item.image}
                style={styles.transactionImage} // Define this style
              />
            )}
            <View style={styles.transactionTextContainer}>
              <View>
                <Text style={styles.transactionName}>
                  {item.name || item.details || item.description || item.method}
                </Text>
                <Text style={styles.transactionTime}>
                  {item.time || item.date}
                </Text>
              </View>
              <Text style={styles.transactionAmount}>{item.amount}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 50,
    paddingHorizontal: 20,
    gap: 10,
  },
  image: {
    width: 37,
    height: 30,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "bold",
  },
  balanceContainer: {
    backgroundColor: "#3F51B5",
    borderRadius: 10,
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
  },
  balanceText: {
    color: "white",
    fontSize: 16,
  },
  balanceAmount: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  transactionName: {
    fontSize: 16,
  },
  transactionTime: {
    fontSize: 12,
    color: "gray",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  tabButton: {
    alignItems: "center",
  },
  tabText: {
    color: "gray",
  },
  tabsContainer: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 45,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#448AFF26",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 1 },
    // shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  tabLabel: {
    marginTop: 12,
    color: "#212121",
    fontSize: 10,
    fontWeight: "400",
  },
  transactionItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  transactionImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  transactionTextContainer: {
    flex: 1,
    flexDirection: "row", // Take up remaining space
    justifyContent: "space-between",
  },
  transactionName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  transactionTime: {
    fontSize: 12,
    color: "gray",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default HomeScreen;
