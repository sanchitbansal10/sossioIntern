import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation';
import { createStore } from 'redux'
import rootReducer from './app/reducers'
import Main from './app/components/Main'
import SingleNote from './app/components/SingleNote'
import NewNote from './app/components/NewNote'
import { Provider } from 'react-redux'


var preloadedState = 
  [
    {id:0,title:'no. 1',desc:'descriptions of number 1'},
    {id:1,title:'no. 1',desc:'descriptions of number 1'}
  ]
const store = createStore(rootReducer, preloadedState)



export default class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <AppNavigator />
      </Provider>
    );
  }
}


const AppNavigator = createStackNavigator({
  HomeScreen: {screen:Main},
  SingleNoteScreen: {screen:SingleNote},
  AddNoteScreen: {screen:NewNote}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
