import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  BackAndroid,
  StatusBar
} from 'react-native'
import { connect } from 'react-redux'
import { addNote } from '../actions'
import { Icon } from 'react-native-elements'

class NewNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      desc: ''
    }
  }


  render() {
    return (
      <View>
        <StatusBar
          barStyle="light-content"
          animated={true}
        />


        <View>
          <TextInput
            autoFocus={true}
            placeholder='Note Title...'
            placeholderTextColor='#aaa'
            returnKeyType='next'
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ title: text })}
            value={this.state.title}
          />

          <TextInput
            multiline={true}
            placeholder='Note Description...'
            placeholderTextColor='#aaa'
            returnKeyType='done'
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({desc: text})}
            value={this.state.desc}
          />
        </View>

        <View>
          <Icon name="check_circle_outline" onPress={this.addNote.bind(this)}/>
          <Icon name="highlight_off" onPress={()=>{this.props.navigation.navigate("HomeScreen")}}/>
        </View>

      </View>
    )
  }

  addNote() {
    this.props.addNote({
      title: this.state.title,
      description: this.state.desc
    })
    this.props.navigation.navigate("HomeScreen")
  }
}

/*  const mapDispatchToProps= dispatch => {
  return {
    addNote : (title,desc) => dispatch({
      type : 'ADD_NOTES',
      payload:{title:title,desc:desc}
    })
  }
 } */

export default connect(null, {addNote} )(NewNote)
