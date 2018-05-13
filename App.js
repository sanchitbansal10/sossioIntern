import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'




export default class App extends React.Component {
  render() {
    const myIcon = (<Icon style={styles.button} name="plus-circle" size={100} color="#900" />)
    return (
   
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <Text>Shake your phone to open the developer menu.</Text>
          {myIcon}
          <Text>Shake your phone to open the developer menu.</Text>
        </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    position:'absolute',
    bottom:10,
    right:10
  }
});
