import React from "react";
import { StyleSheet } from 'react-native'
import { darkBlue, orange, grey, white } from "../../Global-Styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
  icon:{
    width: 100,
    height: 100,
    marginTop: 50,
    marginHorizontal: 'auto',
    borderRadius: 50,
    borderColor: darkBlue,
    borderWidth: 1,
    shadowColor: darkBlue,
  },
  text: {
    fontSize: 26,
    color: orange,
    textAlign: 'center'
  },
  inputs: {
    height: 40, 
    borderColor: grey, 
    borderWidth: 1,
    borderStyle: "solid",
    marginHorizontal: 35,
    marginVertical: 15,
    borderWidth: 1,
    paddingLeft: 15,
    fontWeight: "bold",
    fontStyle: "italic",
    borderRadius: 10,
  },
  centered: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    color: orange,
    borderRadius: 10,
    marginVertical: 35,
    marginHorizontal: 35,
  },
  date: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  },
  label: {
    marginHorizontal: 40,
    marginTop: 5,
    marginBottom: -10,
  },
  separator: {
    borderTopWidth: 1,
    marginVertical: 15,
    borderColor: grey, 
  },
  error: {
    color: 'red',
    marginHorizontal: 35
  }
})