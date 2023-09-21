import React, {Component} from "react";
import { StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView, Image, Alert, ScrollView, TouchableOpacity, TextInput } from "react-native";
import info from '../Textos/info.json/'
import * as Speech from 'expo-speech';
    var numero = 0
    var random = 0
    const colores = ['#ED5E3E','#3EBBED']
export default class Creador2 extends Component{
    constructor(props){
        super(props);
        this.state={
            bottom1: 30,
            bottom2: 30,
            left1: 285,
            left2: 285,
            dado: 0,
            colorJ: colores[0],  
            inicio: true, 
            frase: '',
            fila1: false,
            fila2: false   
           


        }
    }

    componentDidMount(){
        numero = 0
    }
        
    jugador=(data)=>{
        if(numero === 0){
            numero = data
            return(
                <Text style={{fontSize: 100}}>
                    hola
                </Text>
            )
        }
        console.log(numero)
    }

    juego=(jugador)=>{
        random = Math.floor(Math.random()*5)
        this.setState({dado: random, inicio: false})
        if (jugador===1){
            
            if (this.state.left2 <= 9){
                this.setState({bottom1: this.state.bottom1 + 35, fila1: true})
            }else{
                this.fila1()
                this.fila2()
            }
            this.setState({left2: this.state.left2<=9?285:this.state.left2-(55*random),colorJ: colores[0]})
            this.evento1(this.state.left2, this.state.bottom1, jugador)
            this.evento2(this.state.left2, this.state.bottom1, jugador)
            this.evento3(this.state.left2, this.state.bottom1, jugador)
            this.evento4(this.state.left2, this.state.bottom1, jugador)
            this.evento5(this.state.left2, this.state.bottom1, jugador)
            this.evento6(this.state.left2, this.state.bottom1, jugador)
            this.evento7(this.state.left2, this.state.bottom1, jugador, 'rojo')
            
            console.log('jugador rojo= X: '+this.state.left2+', Y: '+this.state.bottom1)
        }
        if (jugador===2){
            if (this.state.left1<=9){
                this.setState({bottom2: this.state.bottom2 + 35, fila2: true})
            }else{
                this.fila2()
                this.fila1()
            }
            this.setState({left1: this.state.left1<=9?285:this.state.left1-(55*random),colorJ: colores[1]})
            this.evento1(this.state.left1, this.state.bottom2, jugador)
            this.evento2(this.state.left1, this.state.bottom2, jugador)
            this.evento3(this.state.left1, this.state.bottom2, jugador)
            this.evento4(this.state.left1, this.state.bottom2, jugador)
            this.evento5(this.state.left1, this.state.bottom2, jugador)
            this.evento6(this.state.left1, this.state.bottom2, jugador)
            this.evento7(this.state.left1, this.state.bottom2, jugador, 'azul')
            console.log('jugador azul= X: '+this.state.left1+', Y: '+this.state.bottom2)
        }
        
    }

    fila1=()=>this.setState({fila1: false})
    fila2=()=>this.setState({fila2: false})

    evento1=(x,y,jugador)=>{
        if (jugador === 1){
            if (x === 175&& y === 30){
                this.setState({left2: 120, bottom1: 65, dado: 'Sube', frase: 'escaleras'})
            }
        }
        if (jugador === 2){
            if (x === 175&& y === 30){
                this.setState({left1: 120, bottom2: 65, dado: 'Sube', frase: 'escaleras'})
            }
        }
    }

    evento2=(x,y,jugador)=>{
        if (jugador === 1){
            if (x === 65&& y === 65){
                this.setState({left2: 120, bottom1: 100, dado: 'Sube', frase: 'escaleras'})
            }
        }
        if (jugador === 2){
            if (x === 65&& y === 65){
                this.setState({left1: 120, bottom2: 100, dado: 'Sube', frase: 'escaleras'})
            }
        }
    }
    evento3=(x,y,jugador)=>{
        if (jugador === 1){
            if (x === 230&& y === 100){
                this.setState({left2: 175, bottom1: 65, dado: 'Baja', frase: 'serpientes'})
            }
        }
        if (jugador === 2){
            if (x === 230&& y === 100){
                this.setState({left1: 175, bottom2: 65, dado: 'Baja', frase: 'serpientes'})
            }
        }
    }
    evento4=(x,y,jugador)=>{
        if (jugador === 1){
            if (x === 10&& y === 135){
                this.setState({left2: 65, bottom1: 100, dado: 'Baja', frase: 'serpientes'})
            }
        }
        if (jugador === 2){
            if (x === 10&& y === 135){
                this.setState({left1: 65, bottom2: 100, dado: 'Baja', frase: 'serpientes'})
            }
        }
    }
    evento5=(x,y,jugador)=>{
        if (jugador === 1){
            if (x === 285&& y === 170){
                this.setState({left2: 230, bottom1: 205, dado: 'Sube', frase: 'escaleras'})
            }
        }
        if (jugador === 2){
            if (x === 285&& y === 170){
                this.setState({left1: 230, bottom2: 205, dado: 'Sube', frase: 'escaleras'})
            }
        }
    }
    evento6=(x,y,jugador)=>{
        if (jugador === 1){
            if (x === 120&& y === 205){
                this.setState({left2: 175, bottom1: 170, dado: 'Baja', frase: 'serpientes'})
            }
        }
        if (jugador === 2){
            if (x === 120&& y === 205){
                this.setState({left1: 175, bottom2: 170, dado: 'Baja', frase: 'serpientes'})
            }
        }
    }
    evento7=(x,y,jugador,color)=>{
        if (jugador === 1){
            if ((x <= 10&& y === 205)|| y > 205){
                this.setState({left2: 10, bottom1: 205})
                Alert.alert('Felicidades','Ha ganado el jugador '+ color,[
                    {
                        text: 'Salir',
                        onPress: ()=> this.props.navigation.navigate('BottomTab')
                    }
                ])
            }
        }
        if (jugador === 2){
            if ((x <= 10&& y === 205)|| y > 205){
                this.setState({left1: 10, bottom2: 205})
                Alert.alert('Felicidades','Ha ganado el jugador '+ color,[
                    {
                        text: 'Salir',
                        onPress: ()=> this.props.navigation.navigate('BottomTab')
                    }
                ])
            }
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
                    Serpientes y Escaleras:
                </Text>
                <Text></Text>
                <Text>
                    1. Oprime el boton de dado
                </Text>
                <Text>
                    2. Tu personaje avanzara las casillas indicadas en el boton
                </Text>
                <Text>
                    3. Si tu personaje avanza más de lo que su fila puede abarcar, desaparecera, y en tu siguiente turno se volvera a integrar
                </Text>
                <Text>
                    4. El primero que logre alcanzar la casilla marcada con el corazón ganara la partida
                </Text>
                <Text>
                    5. Este juego es de dos jugadores, por lo que ahora el otro jugador tendra la oportunidad de repetir los mismos pasos
                </Text>
                <Text></Text> 
                <Image source={require('../assets/juego.png')} style={[styles.imagen21,{alignSelf: 'center'}]}/> 
                <View style={{flexDirection:'row', alignItems: 'center'}}>
                    <View style={{padding: 5}}>
                        <View style={[styles.jugadoresB,{backgroundColor: colores[0], bottom: this.state.bottom1, left: this.state.left2}]}>
                            
                        </View>
                    </View>
                    <Text></Text>
                    <View style={{padding: 5}}> 
                        <View style={[styles.jugadoresB,{backgroundColor: colores[1], bottom: this.state.bottom2, left: this.state.left1}]}>
                            
                        </View>
                    </View>
                    
                    
                </View>

                <TouchableOpacity style={[styles.dadoB,{backgroundColor: this.state.colorJ,}]} onPress={()=>{this.juego(this.state.colorJ===colores[1]? 1: 2)}}>
                    <Text style={styles.backT}>
                        {this.state.dado}
                    </Text>
                </TouchableOpacity>
                <Text></Text> 
                {!this.state.inicio?
                <Text style={{alignSelf: 'center'}}>
                    {this.state.fila1?'El jugador rojo se ha integrado':(this.state.fila2?'El jugador azul se ha integrado':'El jugador '+(this.state.colorJ===colores[0]?(this.state.left2<10?'rojo pasara a la siguiente linea':'rojo avanza'+(this.state.dado===1||this.state.dado===2||this.state.dado===3||this.state.dado===4||this.state.dado===5||this.state.dado===0?' '+this.state.dado:
                    ' por las '+this.state.frase)):
                    (this.state.left1<10?'azul pasara a la siguiente linea':'azul avanza'+(this.state.dado===1||this.state.dado===2||this.state.dado===3||this.state.dado===4||this.state.dado===5||this.state.dado===0?' '+this.state.dado:
                    ' por las '+this.state.frase))))}  
                     
                </Text>
                :<Text></Text>}
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
                
        )
        
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
        fontWeight: 'bold',
        
    },

    imagen2:{  
        width: 40,
        height: 40,
     
        
    },
    imagen21:{  
        width: 320,
        height: 220,
     
        
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

    dadoB:{
        width: 80,
        height: 80,
        borderWidth: 2,
        borderRadius: 0,
        alignItems: 'center',
        alignSelf: 'center',
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
    jugadoresB:{
        borderWidth: 1,
        height: 10,
        width: 10,
        
    },

    
    
})