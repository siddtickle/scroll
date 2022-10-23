import React, {useState} from "react";
import { Text, View, Modal, Pressable } from 'react-native';
import {styles} from "../../Styles";


export const Entry = ({data}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={{marginBottom: 10}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onBackdropPress={() => setModalVisible(false)}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text
                        style={{fontSize:24}}>
                            {data.title}
                        </Text>
                        <Text style={{color: "gray"}}>{data.date}</Text>
                        <View style={{marginTop: 10}}>
                            <Text>{data.body}</Text>
                        </View>
                        
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                            style={{marginTop: 10, fontSize:24, justifyContent:'center'}}>
                            <Text style={{color: "blue"}}>X</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        
            <Pressable style={{display:"flex", borderWidth: 3, borderRadius: 15, padding: 10, borderColor: "#c1d3e5"}}
                onPress={() => setModalVisible(!modalVisible)}>
                <View>
                    <Text style={{fontSize:20}}>{data.title}</Text>
                    <Text style={{color: "gray"}}>{data.date}</Text>
                </View>
                <View style={{marginTop: 10}}>
                    <Text style={{height:50, textOverflow: "ellipsis"}}>{data.body}</Text>
                </View>
            </Pressable>
        </View>
    )
}