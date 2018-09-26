import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native'

export default class App extends React.Component {
  constructor () {
    super()
    this.state = {
      hello: false
    }
  }

  onClick () {
    this.setState({ hello: true })
  }

  render () {
    let message = ''
    if (this.state.hello) {
      message = 'Hello world!'
    }

    return (
      <View style={styles.container}>
        <Text>{message}</Text>
        <TouchableHighlight onPress={() => this.onClick()}>
          <Image
            style={{ width: 200, height: 100 }}
            source={require('./assets/button.png')}
            resizeMode="cover"
            onPress={() => this.onClick()}
          />
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
