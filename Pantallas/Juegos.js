import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView, Image, ScrollView, TouchableOpacity } from "react-native";
import info from '../Textos/info.json/'
import * as Speech from 'expo-speech';

export default class Creador2 extends Component{
    constructor(props){
        super(props);
        this.state={
            activado: false,
            letrero: 'Audio'
        }
    }

    render(){
        return(
            <View style={{flex: 1}}>
            <View style={{flex: 0.35}}>
                <ImageBackground source={require('../assets/fondoAmor.png')} style={styles.fondo1}>
                    <View style={{flex:1,alignItems:'center'}}>
                        <Image source={require('../assets/estrella.png')} style={[styles.imagen2,{top:30}]}/>
                        <Image source={require('../assets/estrella.png')} style={[styles.imagen2,{right:100,top:30}]}/>
                        <Image source={require('../assets/estrella.png')} style={[styles.imagen2,{left:100}]}/>
                        
                        
                        
                    </View>
                    <View style={{flex: 1.5,justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.titulo}>
                            Flechazo  
                        </Text>   
                        <Image source={require('../assets/corazonF.png')} style={styles.imagen1}/>                             
                    </View>
                    
                </ImageBackground>
            </View>
            <ScrollView style={{flex:0.75,padding: 15}}>
                <Text style={{fontSize: 20, fontWeight:'bold'}}>
                    Juegos:
                </Text>
                <Text></Text>
                <TouchableOpacity style={styles.sopaB} onPress={()=>{this.props.navigation.navigate('Sopa de letras')}}>
                    <Text style={styles.sopaT}>
                        Sopa de letras
                    </Text>
                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity style={[styles.sopaB,{backgroundColor: '#E45665'}]} onPress={()=>{this.props.navigation.navigate('Lineas')}}>
                    <Text style={styles.sopaT}>
                        Colores
                    </Text>
                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity style={[styles.sopaB,{backgroundColor: '#83E4EA'}]} onPress={()=>{this.props.navigation.navigate('Lectura')}}>
                    <Text style={styles.sopaT}>
                        Lectura
                    </Text>
                </TouchableOpacity>
            </ScrollView>
            </View>
            
        );
    }
}

const styles= StyleSheet.create({
    
    fondo1:{
        flex: 1,
        resizeMode: "cover",
        borderBottomWidth: 4,
        borderBottomColor: '#E043CF'
    },

    titulo:{
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },

    imagen2:{  
        width: 40,
        height: 40,
     
        
    },

    imagen1:{  
        width: 80,
        height: 50,
     
        
    },

    sopaB:{
        width: 330,
        backgroundColor: '#D9EC2D',
        borderWidth: 4,
        borderRadius: 15,
        alignItems: 'flex-start',
        alignSelf: 'center',
        justifyContent: 'center',
        
    },

    sopaT:{
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',

    },

    cruciB:{
        width: 330,
        backgroundColor: '#D9EC1D',
        borderWidth: 4,
        borderRadius: 15,
        alignItems: 'flex-start',
        alignSelf: 'center',
        justifyContent: 'center',
        
    },

    cruciT:{
        padding: 20,
        fontSize: 20,
        fontWeight: 'bold',

    },
    
})