import React from "react";
import { View, Text, TextInput, TouchableOpacity, Linking } from "react-native";
import styles from "./estilosTransferencia";
import * as SMS from "expo-sms";
import React from "react";
import { useSelector } from "react-redux";
import botonStyle from "../../../Global-Styles/BotonGrande";
import { heightPercentageToDP } from "react-native-responsive-screen";

const Transferencia = ({ color }) => {
  const { text, primary, secondary, dark, bg } = useSelector(
    (store) => store.color
  );
  const user = useSelector((state) => state.user.user);
  const shareCVUbySMS = async () => {
    try {
      const isAvailable = await SMS.isAvailableAsync();
      if (isAvailable) {
        const { result } = await SMS.sendSMSAsync(
          [],
          `Hola, te comparto mi CVU de MoonBank para la transferencia,\nSaludos y gracias.\n\n${user.cvu}`
        );
      } else {
        Alert.alert("Su dispositivo no es compatible con esta función");
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  const shareCVUbyWApp = async () => {
    try {
      await Linking.openURL(
        `https://wa.me/?text=Hola, te comparto mi CVU de *MoonBank* para la transferencia,\n_Saludos y gracias._\n\n*${user.cvu}*`
      );
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <View style={{ backgroundColor: primary }}>
      <Text style={{ ...styles.titulotransferencia, color: dark ? bg : text }}>
        Desde cualquier cuenta
      </Text>
      <View style={{ marginTop: 20 }}>
        <Text style={styles.parrafo}>
          Transferí a tu cuenta MoonBank desde una cuenta bancaria o billetera
          virtual de 07 a 00 hs, y se acredita en el momento.
        </Text>
      </View>
      <View style={styles.alerta}>
        <Text style={{ ...styles.textobanco, color: dark ? bg : text }}>
          Los cajeros automáticos todavía no permiten transferir a tu cuenta.
        </Text>
      </View>
      <View style={styles.continputs}>
        <View style={styles.grupoformulario}>
          <Text style={{ ...styles.label, color: dark ? secondary : "grey" }}>
            CVU
          </Text>
          <Text
            style={{
              ...styles.inputtransferencia,
              color: dark ? bg : "grey",
              borderBottomColor: dark ? "grey" : secondary,
            }}
          >
            {user.cvu}
          </Text>
        </View>
      </View>
      <View
        style={[{ top: heightPercentageToDP("55%") }, botonStyle.container]}
      >
        <TouchableOpacity
          onPress={shareCVUbySMS}
          style={{
            ...styles.btncompartir,
            borderColor: color.dark ? color.s : color.p,
          }}
        >
          <Text
            style={{
              ...styles.textocompartir,
              color: color.dark ? color.s : color.p,
            }}
          >
            Compartir CVU vía SMS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={shareCVUbyWApp}
          style={{
            ...styles.btncompartir,
            borderColor: color.dark ? color.s : color.p,
          }}
        >
          <Text
            style={{
              ...styles.textocompartir,
              color: color.dark ? color.s : color.p,
            }}
          >
            Compartir CVU vía WApp
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Transferencia;
