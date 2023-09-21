import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView, Alert, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
import info from '../Textos/info.json/'
import * as Speech from 'expo-speech';
    const Respuestas= ['ROMANTICO','AMOR','CORTISOL','OXITOCINA','NORADRENALINA','DOPAMINA',]
    var numero = 0
export default class Sopa extends Component{
    constructor(props){
        super(props);
        this.state={
            palabra1: '',
            palabra2: '',
            palabra3: '',
            palabra4: '',
            palabra5: '',
            palabra6: '',
            correctas: 0,
            resuelto: 'No'

        }
    }

    revisar(){
        const {palabra1,palabra2,palabra3,palabra4,palabra5,palabra6,correctas}=this.state;
        this.setState({resuelto: 'Si'})
        numero = 0
        
            if(palabra1===Respuestas[0]||palabra1===Respuestas[1]||palabra1===Respuestas[2]||
            palabra1===Respuestas[3]||palabra1===Respuestas[4]||palabra1===Respuestas[5]){
                numero+=1
                
            }
            if(palabra2!==palabra1){
                if(palabra2===Respuestas[0]||palabra2===Respuestas[1]||palabra2===Respuestas[2]||
                palabra2===Respuestas[3]||palabra2===Respuestas[4]||palabra2===Respuestas[5]){
                    numero+=1
                }
            }   
        
            if(palabra3!==palabra1&&palabra3!==palabra2){
                if(palabra3===Respuestas[0]||palabra3===Respuestas[1]||palabra3===Respuestas[2]||
                palabra3===Respuestas[3]||palabra3===Respuestas[4]||palabra3===Respuestas[5]){
                    numero+=1
                }
            }
        
            if(palabra4!==palabra1&&palabra4!==palabra2&&palabra4!==palabra3){
                if(palabra4===Respuestas[0]||palabra4===Respuestas[1]||palabra4===Respuestas[2]||
                palabra4===Respuestas[3]||palabra4===Respuestas[4]||palabra4===Respuestas[5]){
                    numero+=1
                }
            }
        
            if(palabra5!==palabra1&&palabra5!==palabra2&&palabra5!==palabra3&&palabra5!==palabra4){
                if(palabra5===Respuestas[0]||palabra5===Respuestas[1]||palabra5===Respuestas[2]||
                palabra5===Respuestas[3]||palabra5===Respuestas[4]||palabra5===Respuestas[5]){
                    numero+=1
                }
            }
        
            if(palabra6!==palabra1&&palabra6!==palabra2&&palabra6!==palabra3&&palabra6!==palabra4&&palabra6!==palabra5){
                if(palabra6===Respuestas[0]||palabra6===Respuestas[1]||palabra6===Respuestas[2]||
                palabra6===Respuestas[3]||palabra6===Respuestas[4]||palabra6===Respuestas[5]){
                    numero+=1
                }
            }

            this.setState({correctas: numero})
            if (numero === 6){
                Alert.alert('Felicidades','Has encontrado todas las palabras',[
                    {
                        text: 'Salir',
                        onPress: ()=> this.props.navigation.navigate('BottomTab')
                    }
                ])
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
                    Sopa de letras:
                </Text>
                <Text></Text>
                <Text style={{fontWeight: 'bold'}}>
                    Resuelve una sopa de letras:
                </Text>
                <Text></Text>
                <Text>
                    1. Observa la sopa de letras a continuación
                </Text>    
                <Text>
                    2. En los espacios de texto, poner las palabras (en mayusculas) que hayas encontrado
                </Text>
                <Text>
                    3. Oprime "Listo" cuando hayas terminado
                </Text>   
                <Text>
                    4. Asegurate que las palabras esten bien escritas
                </Text>  
                <Text></Text>

                
                    <Image source={require('../assets/sopa.png')} style={styles.imagen21}/>
                

                <Text></Text>

                <Text style={{fontWeight: 'bold'}}>
                    Escribe tus palabras:
                </Text>

                <Text></Text>

                <TextInput
                    style={{borderWidth: 2, borderColor: 'black', padding: 10}}
                    onChangeText={text => this.setState({palabra1: text})}
                    placeholder={'  Palabra 1°'}
                />
                <TextInput
                    style={{borderWidth: 2, borderColor: 'black', padding: 10}}
                    onChangeText={text => this.setState({palabra2: text})}
                    placeholder={'  Palabra 2°'}
                />
                <TextInput
                    style={{borderWidth: 2, borderColor: 'black', padding: 10}}
                    onChangeText={text => this.setState({palabra3: text})}
                    placeholder={'  Palabra 3°'}
                />
                <TextInput
                    style={{borderWidth: 2, borderColor: 'black', padding: 10}}
                    onChangeText={text => this.setState({palabra4: text})}
                    placeholder={'  Palabra 4°'}
                />
                <TextInput
                    style={{borderWidth: 2, borderColor: 'black', padding: 10}}
                    onChangeText={text => this.setState({palabra5: text})}
                    placeholder={'  Palabra 5°'}
                />
                <TextInput
                    style={{borderWidth: 2, borderColor: 'black', padding: 10}}
                    onChangeText={text => this.setState({palabra6: text})}
                    placeholder={'  Palabra 6°'}
                />
                <Text></Text>
                <Text style={{fontWeight: 'bold'}}>
                    Puntaje: {this.state.correctas}/6
                </Text>
                <Text style={{fontWeight: 'bold'}}>
                    Respondido: {this.state.resuelto}
                </Text>
                <Text></Text>              

                <TouchableOpacity style={styles.listoB} onPress={()=>{this.revisar()}}>
                    <Text style={styles.backT}>
                        Listo
                    </Text>
                </TouchableOpacity>

                <Text></Text>

                <TouchableOpacity style={styles.backB} onPress={()=>{this.props.navigation.navigate('BottomTab')}}>
                    <Text style={styles.backT}>
                        Volver
                    </Text>
                </TouchableOpacity>
                <Text></Text> 
                <Text></Text> 
            </ScrollView>
            </View>
            
        );
    }
}
var spageti=150;
var jarra=150;
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
     
        
    },imagen21:{  
        width: '95%',
        height: 200,
        alignSelf: 'center'
     
        
    },

    imagen1:{  
        width: 80,
        height: 50,
     
        
    },

    backB:{
        width: 100,
        backgroundColor: '#AE87E5',
        borderWidth: 4,
        borderRadius: 15,
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        
    },

    backT:{
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',

    },

    listoB:{
        width: 100,
        backgroundColor: '#56F46C',
        borderWidth: 4,
        borderRadius: 15,
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },

    
    
})