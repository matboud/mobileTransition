import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

export default class Home extends React.Component {
   render() {
      return (
         <SafeAreaView style={styles.safeView}>
            <Text>Home</Text>
            <Button
               title="Go to Details"
               onPress={() => this.props.navigation.navigate('Details')}
            />
         </SafeAreaView>
      )
   }
}

const styles = StyleSheet.create({
   safeView: {
      flex: 1
   }
})