import { StyleSheet } from "react-native";
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  title: {
    fontSize: 24,
    marginHorizontal: 35,
    textAlign: "center",
  },
  button: {
    borderRadius: 10,
    color: white,
    marginVertical: 35,
    marginHorizontal: 35,
  },
  orangeButton: {
    borderRadius: 10,
    color: white,
    marginHorizontal: 35,
    backgroundColor: orange,
  },
  darkBlueButton: {
    borderRadius: 10,
    color: white,
    marginHorizontal: 35,
    backgroundColor: darkBlue,
  },
  separator: {
    borderTopWidth: 1,
    marginVertical: 15,
    borderColor: grey,
  },
  h3: {
    textAlign: "center",
    fontSize: 18,
    marginVertical: 15,
  },
});
export const estilos = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 60,
  },
  label: {
    color: "black",
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: "black",
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
  },
});
