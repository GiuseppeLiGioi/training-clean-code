import usePasswordValidator from "@/hooks/usePasswordValidator";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { moderateScale } from "react-native-size-matters";

export default function PasswordValidator() {
  const { password, feedback, handleChangeText } = usePasswordValidator();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Inserisci la password</Text>
      <TextInput
        style={[styles.input, feedback && { borderColor: feedback.color }]}
        value={password}
        onChangeText={handleChangeText}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      {feedback && (
        <Text style={[styles.feedback, { color: feedback.color }]}>
          {feedback.message}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    marginTop: moderateScale(40),
  },
  label: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    marginBottom: moderateScale(8),
    color: "black",
  },
  input: {
    height: moderateScale(50),
    borderWidth: moderateScale(2),
    borderColor: "#d8d8d8ff",
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(16),
    fontSize: moderateScale(16),
    backgroundColor: "white",
  },
  feedback: {
    marginTop: moderateScale(8),
    fontSize: moderateScale(14),
    fontWeight: "500",
  },
});
