import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const CardScreen = () => {
  const [visibility, setVisibility] = useState({
    card1: { isBalanceVisible: true, isAccountNumberVisible: true },
    card2: { isBalanceVisible: true, isAccountNumberVisible: true },
  });

  // Toggle function for each card
  const toggleVisibility = (cardKey) => {
    setVisibility((prevState) => ({
      ...prevState,
      [cardKey]: {
        isBalanceVisible: !prevState[cardKey].isBalanceVisible,
        isAccountNumberVisible: !prevState[cardKey].isAccountNumberVisible,
      },
    }));
  };

  // Assuming you have a function to format the balance as a string
  const formatBalance = (balance) => {
    return balance.toFixed(2);
  };

  const maskAccountNumber = (accountNumber, isVisible) => {
    return isVisible ? accountNumber : "•••• •••• •••• " + accountNumber.slice(-4);
  };

  const Card = ({
    balance,
    accountNumber,
    accountName,
    accountType,
    visibilityState,
    onPress,
  }) => {
    const { isBalanceVisible, isAccountNumberVisible } = visibilityState;

    // Determine the card style based on accountType
    const cardStyle =
      accountType === "Savings account"
        ? styles.savingsCard
        : styles.currentCard;

    return (
      <TouchableOpacity style={[styles.card, cardStyle]} onPress={onPress}>
        <Text style={styles.balanceLabel}>Available Balance</Text>
        <Text style={styles.balanceValue}>
          {isBalanceVisible ? `$${formatBalance(balance)}` : "••••••"}
        </Text>
        <Text style={styles.accountNumber}>
          {maskAccountNumber(accountNumber, isAccountNumberVisible)}
        </Text>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.accountName}>{accountName}</Text>
          <Text style={styles.accountType}>{accountType}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  // ... Rest of your component

  return (
    <View>
      <View
        style={{
          display: "flex",
          paddingTop: 60,
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "white",
          padding: 20,
        }}
      >
        <Image source={require("../assets/Group 9.png")} style={styles.image} />
        <TouchableOpacity
          style={styles.roundButton}
          onPress={() => {
            // handle the press event
          }}
        >
          <Ionicons name="add-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Card
          balance={5214.0}
          accountNumber="5432143210987"
          accountName="Atlanta Bambi"
          accountType="Savings account"
          visibilityState={visibility.card1}
          onPress={() => toggleVisibility("card1")}
        />
        <Card
          balance={290.5}
          accountNumber="1234567890000"
          accountName="Atlanta Bambi"
          accountType="Current account"
          visibilityState={visibility.card2}
          onPress={() => toggleVisibility("card2")}
        />
        {/* More cards can be added similarly */}
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: "white", // Or use your preferred background color
    alignItems: "center",
    paddingTop: 0,
  },
  image: {
    width: 40,
    height: 30,
  },
  card: {
    backgroundColor: "black",
    borderRadius: 20,
    padding: 20,
    gap: 10,
    width: "90%", // Adjust width as needed
    marginVertical: 10, // Space between cards
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  balanceLabel: {
    fontSize: 16,
    color: "white",
    marginBottom: 5,
  },
  balanceValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
  },
  accountNumber: {
    fontSize: 18,
    color: "white",
    marginBottom: 5,
  },
  accountName: {
    fontSize: 18,
    color: "white",
  },
  accountType: {
    fontSize: 10,
    color: "white",
    alignItems: "center",
    padding: 5,
    marginLeft: 1,
  },

  savingsCard: {
    backgroundColor: "black", // Black background for Savings account
  },
  currentCard: {
    backgroundColor: "#3F51B5", 
  },
   roundButton: {
    width: 50, 
    height: 50, 
    borderRadius: 25, 
    backgroundColor: 'black', 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, 
    shadowOffset: { width: 0, height: 2 }, 
    shadowRadius: 4, 
    shadowOpacity: 0.3, 
  },
});

export default CardScreen;
