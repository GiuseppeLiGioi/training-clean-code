import { StyleSheet, Text, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { BarData } from "../../types/passwordTypes";

type PasswordBarProps = {
  data: BarData;
};
export default function PasswordBar({ data }: PasswordBarProps) {
  return (
    <>
      <View style={styles.outerContainer}>
        <View
          style={[
            styles.innerContainer,
            {
              backgroundColor:
                data.color === "yellow" ? "#ffc14fff" : data.color,
              width: `${data.percent}%`,
            },
          ]}
        ></View>
      </View>
      <Text
        style={[
          styles.textBar,
          { color: data.color === "yellow" ? "#ffc14fff" : data.color },
        ]}
      >
        Your password is {data.strength}
      </Text>
    </>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    position: "relative",
    width: "100%",
    alignSelf: "center",
    backgroundColor: "#e6e6e6ff",
    borderWidth: 1,
    borderRadius: moderateScale(12),
    overflow: "hidden",
  },
  innerContainer: {
    height: moderateScale(20),
    borderRadius: moderateScale(12),
  },
  textBar: {
    fontSize: moderateScale(14),
    textAlign: "center",
    marginTop: moderateScale(8),
  },
});
