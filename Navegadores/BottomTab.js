import React, {Component} from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Inicio from '../Pantallas/Inicio';
import Juegos from '../Pantallas/Juegos';
import { StyleSheet } from 'react-native';

const Tab= createMaterialBottomTabNavigator();

export default class BottomTab extends Component {
    render(){
        return(
        <Tab.Navigator barStyle={styles.estilo} activeColor={"#7A0995"}
        inactiveColor={"white"} screenOptions={{
            headerShown: true,
        }}>
            <Tab.Screen name= 'Información' component={Inicio}/>
            <Tab.Screen name= 'Juegos' component={Juegos}/>
            
        </Tab.Navigator>
        )
    }
} 

const styles= StyleSheet.create({ 
    estilo:{
        backgroundColor: '#EA91D3',
        borderColor: '#E043CF',
        borderTopWidth: 4,
        height: '10%',
        padding: 0,
        fontSize: 10,
        bottom: 0
    },
});

