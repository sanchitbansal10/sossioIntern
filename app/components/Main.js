import React, { Component } from 'react'
import {
  Text,
  View,
  StatusBar,
  TextInput,
  Alert,
  BackAndroid,
  ListView
} from 'react-native'
import { connect } from 'react-redux'
import { Icon,List,ListItem } from 'react-native-elements'
import { deleteNote } from '../actions'
import { FlatList } from 'react-native'


class Main extends Component {
  constructor(props) {
    super(props)
    this.goToNote = this.goToNote.bind(this);
    this.longPressNote = this.longPressNote.bind(this)
  }


  render() {
    return (
      <View>
        <StatusBar
          barStyle="light-content"
          animated={true}
        />
        { this.renderList() }
        <Icon name="rowing" onPress={()=>{this.props.navigation.navigate("AddNoteScreen")}}/>
      </View>
    )
  }


  goToNote(noteId, title, description) {
    this.props.navigation.navigate( 'SingleNoteScreen', { 'noteId':noteId, 'title':title, 'description':description } )
  }

  longPressNote(noteId) {
    Alert.alert(
      'Delete Note',
      'Do you want to delete this note?',
      [
        { text: 'YES', onPress: () => this.deleteNote(noteId) },
        { text: 'No' }
      ]
    )
  }

  deleteNote(noteId) {
    this.props.deleteNote(noteId)
  }


  renderList() {
    if (this.props.notes.length <= 0) {
      return (
        <View >
          <Text>Add some notes...</Text>
        </View>
      )
    } else {

      return (
        <List>
            <FlatList
                data={this.props.notes}
                renderItem={({item})=>(
                    <ListItem
                        title={item.title}
                        subtitle = {item.desc}
                        onPress={()=>{this.goToNote(item.id,item.title,item.desc)}}
                        onLongPress={()=>{this.longPressNote(item.id)}}
                    />
                )}
                keyExtractor = {(item)=>item.title}
            />
        </List>
      )
    }
  }
}

function mapStateToProps(state) {
  return { notes: state }
}



export default connect(mapStateToProps, { deleteNote })(Main)
