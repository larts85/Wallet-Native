import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  Dimensions,
  Text,
  ActivityIndicator,
  FlatList,
  LogBox,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { ListItem, Button } from "react-native-elements";
import { ButtonGroup } from "react-native-elements";
import { historial } from "./utils";
import {
  getDayMovements,
  getWeekMovement,
  getMonthMovements,
} from "../../Redux/movements";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/native";
import viewStyle from "../../Global-Styles/ViewContainer";
import { darkBlue, orange, white } from "../../Global-Styles/colors";

const Movimientos = ({ navigation }) => {
  LogBox.ignoreAllLogs();
  const windowHeight = Dimensions.get("window").height;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [list, setList] = useState([]);
  const buttons = ["Hoy", "Semana", "Mes"];
  const movements = useSelector((store) => store.movementsReducer);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { primary, bg, secondary, text, dark } = useSelector(
    (store) => store.color
  );
  const iconList = {
    panaderia: "cookie",
    almacen: "shopping-basket",
    videojuegos: "gamepad",
    entretenimiento: "play-circle",
    transporte: "bus-alt",
    gasolinera: "gas-pump",
    jet: "fighter-jet",
    farmacia: "first-aid",
    servicios: "file-invoice-dollar",
    Tsaliente: "arrow-circle-up",
    Tentrante: "arrow-circle-down",
    recarga: "wallet",
  };
  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  useEffect(() => {
    dispatch(getDayMovements(movements.allMovements));
    dispatch(getWeekMovement(movements.allMovements));
    dispatch(getMonthMovements(movements.allMovements));
  }, [isFocused, selectedIndex]);

  useEffect(() => {
    if (selectedIndex == 0) {
      movements.length === 0
        ? setList([null])
        : setList(movements.dayMovements);
    }
    if (selectedIndex == 1) {
      setList(movements.weekMovements);
    }
    if (selectedIndex == 2) {
      setList(movements.monthMovements);
    }
  }, [selectedIndex, isFocused, movements]);

  return (
    <ScrollView style={{ backgroundColor: bg }}>
      <View
        style={[
          { backgroundColor: primary, marginTop: 25 },
          viewStyle.container,
        ]}
      >
        <View>
          <ButtonGroup
            onPress={setSelectedIndex}
            selectedIndex={selectedIndex}
            buttonContainerStyle={{
              backgroundColor: dark ? bg : secondary,
              marginRight: 1,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,

              elevation: 10,
            }}
            buttons={buttons}
            selectedButtonStyle={{ backgroundColor: dark ? secondary : bg }}
            textStyle={{ color: text, fontSize: 15 }}
            selectedTextStyle={{ color: primary }}
            containerStyle={{ height: 50, borderRadius: 5, marginTop: 30 }}
          />
        </View>
        {list.length === 0 ? (
          <View style={{ marginTop: 100 }}>
            <ActivityIndicator size="large" color={darkBlue} />
          </View>
        ) : list[0] == null ? (
          <View
            style={{
              backgroundColor: primary,
              marginHorizontal: "10%",
              paddingHorizontal: 20,
              borderRadius: 10,
              alignContent: "center",
              marginTop: 100,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                textAlignVertical: "auto",
                fontSize: 24,
              }}
            >
              {
                "Ups!\nAun no tenes movimientos!\n¿Que esperas!?\nAnda a comprar!\nTenemos promociones para vos!!"
              }
            </Text>
          </View>
        ) : (
              <ScrollView style={{ maxHeight: windowHeight }}>
                <FlatList
                  data={list}
                  keyExtractor={(mov) => mov.id}
                  style={{ marginVertical: 15 }}
                  renderItem={({ item }) => {
                    return (
                      <ListItem
                        key={item.id}
                        containerStyle={{ backgroundColor: primary }}
                        onPress={() =>
                          navigation.navigate("Detalle", {
                            fecha: item.fecha,
                            monto: item.monto,
                            hacia: item.hacia,
                            desde: item.desde,
                            estado: item.estado,
                            categoria: item.categoria,
                            tipo: item.tipo,
                            motivo: item.motivo,
                            operacion: item.operacion,
                            estado: item.estado,
                            empresa: item.empresa,
                            sender: item.sender,
                            receiver: item.receiver,
                          })
                        }
                      >
                        {item.tipo == "Tsaliente" ? (
                          <Icon name={iconList[item.tipo]} size={30} color="red" />
                        ) : (
                            <Icon
                              name={iconList[item.tipo]}
                              size={30}
                              color="green"
                            />
                          )}
                        <ListItem.Content>
                          <ListItem.Title>{item.operacion}</ListItem.Title>
                          <ListItem.Subtitle>
                            {new Date(item.fecha).toLocaleDateString()}
                          </ListItem.Subtitle>
                        </ListItem.Content>
                        <Text style={{ marginRight: 3 }}>
                          {item.tipo == "Tsaliente"
                            ? `- $ ${formatNumber(item.monto)}`
                            : `$ ${formatNumber(item.monto)}`}
                        </Text>
                        <ListItem.Chevron
                          name="chevron-right"
                          type="font-awesome"
                          color="black"
                        />
                      </ListItem>
                    );
                  }}
                ></FlatList>
              </ScrollView>
            )}
      </View>
    </ScrollView>
  );
};

export default Movimientos;
