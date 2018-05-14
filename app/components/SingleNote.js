import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  BackAndroid,
  StatusBar
} from 'react-native'
import { connect } from 'react-redux'
import { updateNote } from '../actions'
import { Icon } from 'react-native-elements'

class SingleNote extends Component {
  constructor(props) {
    super(props)

    this.state = {
      changed: false,
      id: this.props.navigation.getParam('noteId',0),
      title: this.props.navigation.getParam('title','hello'),
      desc: this.props.navigation.getParam('description','hello world')
    }
  }


  render() {
    return(
      <View>
        <StatusBar
          barStyle="light-content"
          animated={true}
        />
        <View>
          <TextInput
            placeholder='Note Title...'
            placeholderTextColor='#aaa'
            returnKeyType='next'
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({ title: text, changed: true })}
            value={this.state.title}
          />

          <TextInput
            multiline={true}
            placeholder='Note Description...'
            placeholderTextColor='#aaa'
            returnKeyType='done'
            underlineColorAndroid="transparent"
            onChangeText={(text) => this.setState({desc: text, changed: true})}
            value={this.state.desc}
          />
        </View>
        <View>
          <Icon name="check_circle_outline" onPress={()=>{this.updateNote.bind(this)}}/>
          <Icon name="highlight_off" onPress={()=>{this.props.navigation.navigate("HomeScreen")}}/>
        </View>

      </View>
    )
  }


  updateNote() {
    if (this.state.changed) {
      this.props.updateNote({
        id: this.state.id,
        title: this.state.title,
        description: this.state.desc
      })
    }
    this.props.navigation.navigate("HomeScreen")
  }
}

export default connect(null, { updateNote })(SingleNote)
