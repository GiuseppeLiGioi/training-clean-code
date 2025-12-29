import usePasswordValidator from "@/hooks/usePasswordValidator";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import Checklist from "./Checklist";
import PasswordBar from "./PasswordBar";

export default function PasswordValidator() {
  const { password, handleChangeText, checklist, getBarData } =
    usePasswordValidator();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Inserisci la password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={handleChangeText}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
      />
      {checklist && checklist.length > 0 && (
        <View style={styles.checklistBox}>
          <PasswordBar data={getBarData(password)} />
          <View style={styles.divider} />
          <Checklist checklist={checklist} />
        </View>
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
  checklistBox: {
    marginTop: moderateScale(16),
    backgroundColor: "#f7f7fa",
    borderRadius: moderateScale(14),
    borderWidth: 1,
    borderColor: "#e0e0e0",
    padding: moderateScale(16),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#e0e0e0",
    marginVertical: moderateScale(12),
    borderRadius: 1,
  },
});
