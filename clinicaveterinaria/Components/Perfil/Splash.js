import React from 'react';
import LottieView from 'lottie-react-native';
import NavigationLoginTabs from '../NaviLoginTabs';

import{useNavigation} from '@react-navigation/native';
import {Text,View} from 'react-native';

export function Splash(){
  const navigation=useNavigation()
  return(
    <View style={{flex:1,justifyContent:'center'}}>
    <LottieView
    source={require('../LottieDogs/dog.json')}
    autoPlay
    loop={false}
    onAnimationFinish={() => navigation.navigate('Login')}/>

    </View>



  )
}