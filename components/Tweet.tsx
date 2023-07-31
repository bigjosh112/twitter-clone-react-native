import { View, Text, Image, StyleSheet } from "react-native";
import { TweetType } from "@/types";
import { Entypo, EvilIcons } from '@expo/vector-icons';

type TweetProps = {
    tweet: TweetType;
}

const Tweet = ({tweet}: TweetProps) => {
    
    return(
        <View style={styles.container}>
            <Image src={tweet.user.image}
            style ={styles.userImage}/>
                
            <View style={styles.mainContainer}>
                
                <View style={{flexDirection: 'row'}}>
                <Text style= {styles.name}>{tweet.user.name}</Text>
                <Text style={styles.username}>{tweet.user.username}</Text>
                <Text style={styles.username}>. 1h</Text>
                <Entypo 
                name="dots-three-horizontal" 
                size={16} 
                color="grey"
                style={{marginLeft: 'auto'}} />
                </View>
                <Text style={styles.content}>{tweet.content}</Text>
                

                {/* optional impression */}
               {tweet.image && <Image src={tweet.image} style={styles.image}/>}

               <View style= {styles.footer}>
                    {/* comment */}
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        {/* ICONS */}
                            <EvilIcons name="comment" size={22} color= 'grey' />
                        {/* Number */}
                        <Text style={{color: 'grey', fontSize: 12}}>12</Text>
                    </View>

                     
               </View>
            </View>
      
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: 'grey',
  
    },
    userImage: {
      width: 50,
      height: 50,
      borderRadius: 50
    },
    mainContainer:{
      marginLeft: 10,
      flex: 1
    },
    name: {
      fontWeight: "700",
      color: "white"
    },
    content: {
      marginTop: 5,
      lineHeight: 20,
      color: "white"
    },
    image: {
        width: '100%',
        aspectRatio: 16/9,
        marginTop: 10,
        borderRadius: 15,
    },
    username: {
        color: 'grey',
        marginLeft: 5

    },
    //footer
    footer: {
        flexDirection: 'row',
        marginTop: 10
    }
    
  });

  export default Tweet;