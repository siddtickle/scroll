import React, {useState} from "react";
import {styles} from "../../Styles";
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
// import {data} from "./PastEntriesScreen";
const data = [
    {
        title: "my friend died!!!",
        date: "september 23, 2022",
        body: "i saw this sign on an electricity box or something and i thought it was funny. it also says a lot about society i guess. my friend didn't actually die."
    },    
    {
        title: "i drank milk",
        date: "september 25, 2022",
        body: "today i had some real dairy milk even though i am lactose intolerant. this is a huge milestone for me. yeah, ive had cheese and cream and butter before, but only in small amounts and none are as bad for you as milk, but today i really showed my lactose intolerance whos boss. i know that human bodies technically arent supposed to have cow milk but everyone else is doing it so why cant i. i hope someday i can train my body to just accept the lactose and i will no longer have to limit my dairy intake."
    },    
    {
        title: "woke up at 12",
        date: "september 26, 2022",
        body: "just woke up at noon again for like the 5th time this week. normally i wouldnt think anything of it but i got a lot on my plate and when i wake up early to do work, the day feels so much longer. i got papers on papers on papers on papers on papers on papers on papers on papers on papers due."
    },    
    {
        title: "expensive sushi",
        date: "september 26, 2022",
        body: "my friend and i looked for hours for a sushi place today. he showed up late as usual. i wonder if he just thinks its okay for everyone or if he just doesn't respect my time. anyways, i dont think i can unpack that right now, maybe in another entry. im still appreciative he took me off campus bc i dont get to do that often anymore. we went to a sushi place and it was so boujee. like everyone there was so old and well dressed and we pulled up in college attire."
    },    
    {
        title: "concert!",
        date: "september 29, 2022",
        body: "im going to a concert today!!! its a kpop concert which means ill only be able to half sing along but i still get to dress up which will be fun. i bought an outfit that ive been saving just for this so i can film an unboxing"
    },    {
        title: "bear maid",
        date: "october 13, 2022",
        body: "just took a nice 3 hour nap but i dont feel well rested because i dreamed so hard. i dreamed that i had a bear maid. not a big scary bear but one of the animated apathetic ones that just do whatever theyre told. man i really wish it were real"
    },    {
        title: "obligatory post",
        date: "october 14, 2022",
        body: "im trying to make a habit of typing out these entires, but i really dont have anything to say today. am sleepy. good night journal."
    },    {
        title: "feeling better!",
        date: "october 15, 2022",
        body: "i was feeling so depressed yesterday but i think im a lot better now. i made myself a really nice breakfast with chia seeds and fresh fruit and honey and it made me feel like a country club wife. here's to more self care. maybe today i will start yoga. updates tomorrow with how the rest of the day goes."
    },    {
        title: "yayayayayay",
        date: "october 17, 2022",
        body: "sad i didnt get to write anything in my journal yesterday but it was for a pretty good reason! i made a lot of plans with friends i really care about and we all had a good time. i wish i wrote about it though so that i could remember how it was. it just reminds me how important your friends are and how much my mood lifted after seeing them. i really should work harder to keep in touch with all of them. i hope i can see them all again soon. is it too soon to plan something now? yeah probably. ill give it a day first."
    },
]


export const MainScreen = () => {

    const [textEntry, setTextEntry] = useState('');
    const [titleEntry, setTitleEntry]= useState('');
    const [entries, setEntries] = useState(data);
    const nav = useNavigation();

    const handleSubmit = () => {
        setEntries([...entries,
            {
                title: titleEntry,
                date: "october 23, 2022",
                body: textEntry
            }
        ])
        setTextEntry("")
        setTitleEntry("")
        // nav.navigate('PastEntries', {entries})
    }

    return(

        <SafeAreaView style={styles.container}>
            <View style={styles.containerRow}>
                <View>
                    <TextInput
                        value={titleEntry}
                        onChangeText={(titleEntry) => setTitleEntry(titleEntry)}
                        placeholder="enter title"
                        style={{fontSize:24}}
                    />
                    <Text>october 23, 2022</Text>
                </View>
                <View style={styles.buttonView}>
                    <Button
                        title={'>'}
                        onPress={()=>nav.navigate('PastEntries', {entries})}
                        style={{color: "blue"}}
                    />
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <TextInput
                    value={textEntry}
                    onChangeText={(textEntry) => setTextEntry(textEntry)}
                    placeholder={'begin typing...'}
                    multiline={true}
                    // style={{marginTop:25}}
                />
            </ScrollView>

            <Button
                title={'done'}
                onPress={handleSubmit}
                style={{color: "blue"}}
            />
        </SafeAreaView>
    );
}