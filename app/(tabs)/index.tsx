import { StyleSheet, FlatList } from 'react-native';

import tweets from '../../assets/data/tweets';
import Tweet from '@/components/Tweet';




export default function TabOneScreen() {
  return (
    <>
    <FlatList 
      data={tweets} 
      renderItem={({item}) => <Tweet tweet={item} /> } />
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
  }
  
});
