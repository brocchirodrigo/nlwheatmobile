import React from 'react';

import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import { UserPhoto } from '../../components/UserPhoto';

import LogoSvg from '../../assets/logo.svg';

import { styles } from './styles';

export function Header(){
  return (
    <View style={styles.container}>
      <LogoSvg />

      <View style={styles.logoutButton}>
        <TouchableOpacity>
          <Text style={styles.logouText}>Sair</Text>
        </TouchableOpacity>
      
        <UserPhoto 
          imageUri='' 
          sizes='NORMAL'
        />      
      </View>

    </View>
  );
}