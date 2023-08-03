import { StyleSheet, FlatList, Pressable } from 'react-native';

import tweets from '../../../../assets/data/tweets';
import Tweet from '@/components/Tweet';
import { Entypo } from '@expo/vector-icons';
import { Link } from 'expo-router';




export default function TabOneScreen() {
  return (
    <>
    <FlatList 
      data={tweets} 
      renderItem={({item}) => <Tweet tweet={item} /> } />

     
        <Link href="/NewTweet" asChild style={styles.floatingButton} >
        <Entypo name="plus" size={24} color="white" />
        </Link>
        
      
    </>

    
    
  );
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
    fontWeight: "700"
  },
  content: {
    marginTop: 5,
    lineHeight: 20
  },
  floatingButton:{
    backgroundColor: '#1C9BF0',
    width: 50,
    height: 50,
    borderRadius: 25,
    textAlign: 'center',
    lineHeight: 50,
    position: 'absolute',
    right: 15,
    bottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    
    elevation: 21,
    overflow: 'hidden'
  }
  
});
