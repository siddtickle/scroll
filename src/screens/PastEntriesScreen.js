import React from "react";
import {styles} from "../../Styles";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Entry } from "../components/Entry";
import { SafeAreaView } from "react-native-safe-area-context";

// const data = [
//     {
//         title: "my friend died!!!",
//         date: "september 23, 2022",
//         body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sem tellus, sed fringilla sem luctus non. Aenean porttitor, libero nec ultrices sollicitudin, neque lacus pulvinar odio, in consequat lorem ipsum eu nisl. Nulla quis aliquam augue. Duis ac leo metus. Nullam dui neque, pellentesque vitae malesuada vel, sollicitudin non diam. Nulla ut ullamcorper arcu, at consequat quam. Sed volutpat odio ut porttitor maximus. Nulla maximus tortor eu ex placerat, vitae pretium ipsum tristique."
//     },    
//     {
//         title: "my friend died!!!",
//         date: "september 23, 2022",
//         body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sem tellus, sed fringilla sem luctus non. Aenean porttitor, libero nec ultrices sollicitudin, neque lacus pulvinar odio, in consequat lorem ipsum eu nisl. Nulla quis aliquam augue. Duis ac leo metus. Nullam dui neque, pellentesque vitae malesuada vel, sollicitudin non diam. Nulla ut ullamcorper arcu, at consequat quam. Sed volutpat odio ut porttitor maximus. Nulla maximus tortor eu ex placerat, vitae pretium ipsum tristique."
//     },    
//     {
//         title: "my friend died!!!",
//         date: "september 23, 2022",
//         body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sem tellus, sed fringilla sem luctus non. Aenean porttitor, libero nec ultrices sollicitudin, neque lacus pulvinar odio, in consequat lorem ipsum eu nisl. Nulla quis aliquam augue. Duis ac leo metus. Nullam dui neque, pellentesque vitae malesuada vel, sollicitudin non diam. Nulla ut ullamcorper arcu, at consequat quam. Sed volutpat odio ut porttitor maximus. Nulla maximus tortor eu ex placerat, vitae pretium ipsum tristique."
//     },    
//     {
//         title: "my friend died!!!",
//         date: "september 23, 2022",
//         body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sem tellus, sed fringilla sem luctus non. Aenean porttitor, libero nec ultrices sollicitudin, neque lacus pulvinar odio, in consequat lorem ipsum eu nisl. Nulla quis aliquam augue. Duis ac leo metus. Nullam dui neque, pellentesque vitae malesuada vel, sollicitudin non diam. Nulla ut ullamcorper arcu, at consequat quam. Sed volutpat odio ut porttitor maximus. Nulla maximus tortor eu ex placerat, vitae pretium ipsum tristique."
//     },    
//     {
//         title: "my friend died!!!",
//         date: "september 23, 2022",
//         body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sem tellus, sed fringilla sem luctus non. Aenean porttitor, libero nec ultrices sollicitudin, neque lacus pulvinar odio, in consequat lorem ipsum eu nisl. Nulla quis aliquam augue. Duis ac leo metus. Nullam dui neque, pellentesque vitae malesuada vel, sollicitudin non diam. Nulla ut ullamcorper arcu, at consequat quam. Sed volutpat odio ut porttitor maximus. Nulla maximus tortor eu ex placerat, vitae pretium ipsum tristique."
//     },    {
//         title: "my friend died!!!",
//         date: "september 23, 2022",
//         body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sem tellus, sed fringilla sem luctus non. Aenean porttitor, libero nec ultrices sollicitudin, neque lacus pulvinar odio, in consequat lorem ipsum eu nisl. Nulla quis aliquam augue. Duis ac leo metus. Nullam dui neque, pellentesque vitae malesuada vel, sollicitudin non diam. Nulla ut ullamcorper arcu, at consequat quam. Sed volutpat odio ut porttitor maximus. Nulla maximus tortor eu ex placerat, vitae pretium ipsum tristique."
//     },    {
//         title: "my friend died!!!",
//         date: "september 23, 2022",
//         body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sem tellus, sed fringilla sem luctus non. Aenean porttitor, libero nec ultrices sollicitudin, neque lacus pulvinar odio, in consequat lorem ipsum eu nisl. Nulla quis aliquam augue. Duis ac leo metus. Nullam dui neque, pellentesque vitae malesuada vel, sollicitudin non diam. Nulla ut ullamcorper arcu, at consequat quam. Sed volutpat odio ut porttitor maximus. Nulla maximus tortor eu ex placerat, vitae pretium ipsum tristique."
//     },    {
//         title: "my friend died!!!",
//         date: "september 23, 2022",
//         body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sem tellus, sed fringilla sem luctus non. Aenean porttitor, libero nec ultrices sollicitudin, neque lacus pulvinar odio, in consequat lorem ipsum eu nisl. Nulla quis aliquam augue. Duis ac leo metus. Nullam dui neque, pellentesque vitae malesuada vel, sollicitudin non diam. Nulla ut ullamcorper arcu, at consequat quam. Sed volutpat odio ut porttitor maximus. Nulla maximus tortor eu ex placerat, vitae pretium ipsum tristique."
//     },    {
//         title: "my friend died!!!",
//         date: "september 23, 2022",
//         body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet sem tellus, sed fringilla sem luctus non. Aenean porttitor, libero nec ultrices sollicitudin, neque lacus pulvinar odio, in consequat lorem ipsum eu nisl. Nulla quis aliquam augue. Duis ac leo metus. Nullam dui neque, pellentesque vitae malesuada vel, sollicitudin non diam. Nulla ut ullamcorper arcu, at consequat quam. Sed volutpat odio ut porttitor maximus. Nulla maximus tortor eu ex placerat, vitae pretium ipsum tristique."
//     },
// ]

export const PastEntriesScreen = (props) => {
    const data = props.route.params.entries;
    
    return(
        <SafeAreaView style={styles.container} >
            <Text style={{fontSize: 30, marginBottom: 10}}>my past</Text>
            {/* <Text>{data}</Text> */}
            <ScrollView showsVerticalScrollIndicator={false} >
                {data.slice(0).reverse().map((e) => {
                    return (<Entry data={e} />)
                })}
            </ScrollView>
        </SafeAreaView>
    );
}