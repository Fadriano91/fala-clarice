import React from 'react'
import { SafeAreaView, Text, StyleSheet, Image} from 'react-native'
import clarice from './assets/clarice.png'
import { FontAwesome } from '@expo/vector-icons'

export default function App(){
  
  return(
    <SafeAreaView style={styles.Principal}>
      <Text style={styles.Titulo}>
        <FontAwesome name="comment-o" size={50} />&nbsp; 
        Fala Clarice!
        </Text>
      <Image source={clarice} style={styles.Imagem} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Principal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around', //distribui uniformemente os elementos na vertical
    alignItems: 'center'
  },
  Titulo: {
    color: '#1a237e',
    fontSize: 30
  },
  Imagem: {
    height: 400,
    width: '100%',
    resizeMode: 'center'
  }
})