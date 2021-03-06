import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  encabezado: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 25,
    padding: 14,
    alignItems: "center",
  },
  subencabezado: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cerrar: {
    fontSize: 24,
    position: "relative",
    bottom: 3,
    color: "grey",
  },
  textoencabezado: {
    marginLeft: 26,
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },

  interrogacion: {
    width: 25,
    height: 25,
    borderRadius: 100,
    borderColor: "#02072f",
    borderWidth: 2,
    paddingTop: 2,
  },
  contenedortitulos: {
    flexDirection: "row",
  },
  itemtitulos: {
    width: "33.3%",
    textAlign: "center",
    padding: 5,
    borderColor: "transparent",
    color: "black",
    fontWeight: "bold",
  },
  itemseleccionado: {
    width: "33%",
    textAlign: "center",
    padding: 5,
    borderColor: "#02072f",
    borderBottomWidth: 2,
    color: "#02072f",
    fontWeight: "bold",
  },
  mainrecarga: {
    padding: 14,
  },
  link: {
    color: "#000",
    textAlign: "center",
  },
  btnvolver: {
    backgroundColor: "#02072f",
    width: 80,
    textAlign: "center",
    padding: 2,
    marginTop: 5,
    borderRadius: 2,
    marginRight: 10,
  },
});
export default styles;
