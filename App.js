import React from 'react';
import { TextInput,ActivityIndicator,StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <ActivityIndicator size="large" color="#0000ff" />
        <TextInput
        style={{height: 40, width:330, backgroundColor:'white', borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
