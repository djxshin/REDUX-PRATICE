import React, { Component } from 'react'
import { Text, View } from 'react-native'



const Header = (props) => {
    return (
    
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>{props.headerText}</Text>
      </View>
    )
  }


const styles = {
    textStyle: {
        fontSize: 20
    },

    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 25,
        shadowColor: 'black',
        shadowOffset: {width:0, height:2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    }
  };

  export default Header;