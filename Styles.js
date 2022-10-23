import { StyleSheet, Text, View } from 'react-native';


export const styles = StyleSheet.create({

    

    heading: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'left',
      justifyContent: 'center',
      padding: 25
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'left',
      justifyContent: 'center',
      padding: 25,
    },
    containerRow: {
      maxHeight: 50,
      flex: 1,
      flexDirection: "row",
      backgroundColor: '#fff',
      alignItems: 'left',
      justifyContent:"space-between",
      width: "100%"
      
    },
    buttonView: {
      backgroundColor: '#fff',
    },
    centeredView: {
        height: '100%',
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    modalView: {
        //margin: 100,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'left',
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      titleScreen: {
        flex: 1,
        backgroundColor: '#C1D3E5',
        alignItems: 'left',
        justifyContent: 'center',
        padding: 25,
        display: 'flex',
        flexDirection: 'row',
      }
  });