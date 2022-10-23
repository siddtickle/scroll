import React, {useState} from "react";
import {styles} from "../../Styles";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { useFonts, Nunito_400Regular } from '@expo-google-fonts/nunito';

// import {data} from "./PastEntriesScreen";


export const StartScreen = () => {

    let [fontsLoaded] = useFonts({
        Nunito_400Regular,
      });

    if (!fontsLoaded) {
        return null;
    }

                    // {/* <Text style={{ fontFamily: 'Nunito_400Regular', fontSize: 40, color: 'white' }}>scröll</Text> */}
                                        // {/* <Text style={{fontSize: 40, color: 'white' }}>scröll</Text> */}


    const nav = useNavigation();

    return(

        <SafeAreaView style={styles.titleScreen}>

        
            <View styles={styles.containerRow}>
                <View>
                    <Text style={{ fontFamily: 'Nunito_400Regular', fontSize: 40, color: 'white' }}>scröll</Text>
                </View>
                <View style={styles.buttonView}>
                    <Pressable style={{borderRadius: 10}} onPress={() => nav.navigate('MainScreen')} >
                        <Text style={{textAlign: 'right', marginRight: 2}}> > </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}