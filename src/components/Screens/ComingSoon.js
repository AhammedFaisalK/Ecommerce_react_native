import {StyleSheet, Text, View, Pressable} from 'react-native';

const ComingSoon = ({navigation}) => {
  return <View style={styles.root}>
    <Text style={styles.text}>Coming Soon ☺</Text>
    <Pressable style={{marginTop:10}} onPress={()=>navigation.navigate('SignUp')}>
      <Text>Go To Signup</Text>
    </Pressable>
  </View>
};

export default ComingSoon;
const styles = StyleSheet.create({
    root:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:25,
        color:"red"
    }
})