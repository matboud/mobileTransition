import React from 'react';
import {SafeAreaView, Text, Button, StyleSheet} from 'react-native';

export default class Details extends React.Component{
   render() {
      return(
         <SafeAreaView style={styles.safeView}>
            <Text>Details</Text>
            <Button
               title="Go to Home"
               onPress={() => this.props.navigation.navigate('Home')}
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