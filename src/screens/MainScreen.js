import React, {useState} from "react";
import {styles} from "../../Styles";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';


export const MainScreen = () => {

    const [textEntry, setTextEntry] = useState('');
    const nav = useNavigation();

    return(

        <View style={styles.container}>
        <View style={styles.containerRow}>
            <View>
                <Text>Title</Text>
                <Text>Today's date</Text>
            </View>
            <Button
                title={'>'}
                onPress={()=>nav.navigate('PastEntries')}
            />
        
        </View>

        <ScrollView>
            <TextInput
                value={textEntry}
                onChangeText={(textEntry) => setTextEntry(textEntry)}
                placeholder={'Begin typing...'}
                multiline={true}
                style={{marginTop:25}}
            />
      </ScrollView>
      </View>
    );
}