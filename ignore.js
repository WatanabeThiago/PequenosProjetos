import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useFonts, Roboto_400Regular} from '@expo-google-fonts/roboto'
import { AppLoading } from 'expo';

import profilepicture from './assets/profilepicture.jpg'

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    
    <View style={styles.container}>
      <SafeAreaView>
      <ScrollView>
          <View style={styles.box}>
            <View style={{alignItems: 'center',justifyContent: 'center'}}><Image source={profilepicture} style={{width: 100, height: 100, borderRadius: 360, marginBottom: 10}}/></View>
            <Text style={styles.name}>Thiago Watanabe</Text>
            <Text style={styles.description}>18 anos</Text>
            <Text style={styles.description}>Campo Grande, MS</Text>
            <TouchableOpacity style={styles.buttonplay}>
              <Text style={{color: "#FFF"}}>Audio</Text>
            </TouchableOpacity>


          </View>

          
      </ScrollView>
      <StatusBar style="light" />
      </SafeAreaView>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    borderRadius: 14,
    padding: 24,
    backgroundColor: "#FFFF"
  },
  name: {
    fontSize: 36,
    fontFamily: 'Roboto_400Regular'
  },
  description:{
    fontSize: 20,
    fontFamily: 'Roboto_400Regular'
  },
  buttonplay: {
    backgroundColor: "#1919",
    padding: 24,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  }

});
