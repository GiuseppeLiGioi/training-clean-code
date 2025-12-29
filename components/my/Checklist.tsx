import { Ionicons } from "@expo/vector-icons";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { PasswordRequirementResult } from "../../types/passwordTypes";
type ChecklistProps = {
  checklist: PasswordRequirementResult[];
};
export default function Checklist({ checklist }: ChecklistProps) {
  return (
    <FlatList
      data={checklist}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Ionicons
            name={item.satisfied ? "checkmark-circle" : "close-circle"}
            size={moderateScale(20)}
            color={item.satisfied ? "green" : "red"}
          />
          <Text style={styles.text}>{item.id}</Text>
        </View>
      )}
    ></FlatList>
  );
}

const styles = StyleSheet.create({
  item: { flexDirection: "row", alignItems: "center", marginVertical: 2 },
  text: { marginLeft: moderateScale(8), fontSize: moderateScale(14) },
});
