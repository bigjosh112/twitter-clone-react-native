import { useState } from "react";
import { Text, View } from "@/components/Themed";
import { Link, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const user = {
    id: '123456789',
      name: 'Jeff B',
      username: 'bezos',
      image:
        'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg',
}

export default function Tweet () {

    const [text, setText] = useState("");
    const router = useRouter();

    const onTweetPress = () => {
        console.warn("Posting the tweet", text);

        setText('');
        router.back();
        
        
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Link href='../' style={{fontSize: 18, color: 'grey'}}>
                    Cancel
                </Link>

                <Pressable onPress={onTweetPress} style={styles.button}>
                   <Text style={styles.buttonText}> Tweet </Text> 
                </Pressable>
            </View>
        <View style={styles.inputContainer}>
            <Image src={user.image} style={styles.image}/>
            <TextInput 
            value={text}
            onChangeText={setText}
            placeholder="What's hapening?"
            placeholderTextColor='grey'
            multiline
            numberOfLines={5}
            style={{flex: 1, color: 'grey'}}/>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        aspectRatio: 1,
        borderRadius: 50,
        marginRight: 10
    },
    container: {
        padding: 10,
        flex: 1
    },
    buttonContainer:{
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#1C9BF0',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },

    inputContainer: {
        flexDirection: 'row',


    }
})