import React, {Component} from "react";
import { StyleSheet, View, Alert, Text, ImageBackground, KeyboardAvoidingView, Image, ScrollView, TouchableOpacity } from "react-native";
import info from '../Textos/info.json/'
import * as Speech from 'expo-speech';

const Preguntas = ['- ¿Cuál es el nombre de la primera etapa del enamoramiento?','- Menciona el nombre de un neurotransmisor','- ¿Qué caracteristicas influyen en el enamoramiento?','- Menciona una hormona','- Menciona tres reacciones del enamoramiento'];
const Respuestas = ['Testosterona','Falling love','Nerviosismo, sudoración y perdida de concentración','Dopamina','Aspecto físico, personalidad y gustos'];
var correctas = 0;
var pint1 = '';
var pint2 = '';
var pint3 = '';
var pint4 = '';
var pint5 = '';

export default class Creador2 extends Component{
    constructor(props){
        super(props);
        this.state={
            activado: false,
            letrero: 'Audio',

            correctas: 0,
            resuelto: 'No',

            color1: 'red',
            color2: 'blue',
            color3: 'green',
            color4: 'orange',
            color5: 'purple',
        }
    }

    colores1=()=>{
        if(this.state.color1==='red'){
            pint1='blue' 
        }else if(this.state.color1==='blue'){
            pint1='green'
        }else if(this.state.color1==='green'){
            pint1='orange'
        }else if(this.state.color1==='orange'){
            pint1='purple'
        }else if(this.state.color1==='purple'){
            pint1='red'
        }

        this.setState({color1:pint1})
        
    }
    colores2=()=>{
        if(this.state.color2==='red'){
            pint2='blue'
        }else if(this.state.color2==='blue'){
            pint2='green'
        }else if(this.state.color2==='green'){
            pint2='orange'
        }else if(this.state.color2==='orange'){
            pint2='purple'
        }else if(this.state.color2==='purple'){
            pint2='red'
        }

        this.setState({color2:pint2})
        
    }
    colores3=()=>{
        if(this.state.color3==='red'){
            pint3='blue'
        }else if(this.state.color3==='blue'){
            pint3='green'
        }else if(this.state.color3==='green'){
            pint3='orange'
        }else if(this.state.color3==='orange'){
            pint3='purple'
        }else if(this.state.color3==='purple'){
            pint3='red'
        }

        this.setState({color3:pint3})
        
    }
    colores4=()=>{
        if(this.state.color4==='red'){
            pint4='blue'
        }else if(this.state.color4==='blue'){
            pint4='green'
        }else if(this.state.color4==='green'){
            pint4='orange'
        }else if(this.state.color4==='orange'){
            pint4='purple'
        }else if(this.state.color4==='purple'){
            pint4='red'
        }

        this.setState({color4:pint4})
        
    }
    colores5=()=>{
        if(this.state.color5==='red'){
            pint5='blue'
        }else if(this.state.color5==='blue'){
            pint5='green'
        }else if(this.state.color5==='green'){
            pint5='orange'
        }else if(this.state.color5==='orange'){
            pint5='purple'
        }else if(this.state.color5==='purple'){
            pint5='red'
        }

        this.setState({color5:pint5})
        
    }

//Respuestas correctas a continuación =>
    revisar=()=>{
        const {color1,color2,color3,color4,color5}=this.state;
        correctas = 0;
        this.setState({resuelto:'Si'})
        if(color1==='orange'){
            correctas+=1
        }
        if(color2==='red'){
            correctas+=1
        }
        if(color3==='purple'){
            correctas+=1
        }
        if(color4==='blue'){
            correctas+=1
        }
        if(color5==='green'){
            correctas+=1
        }
        this.setState({correctas:correctas})
        if (correctas===5){
            Alert.alert('Felicidades','Has respondido correctamente',[
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
                    Colores:
                </Text>
                <Text></Text>
                <Text>
                    Selecciona los colores correctos para responder cada pregunta
                </Text>
                <Text></Text>
                <Text style={{fontWeight:'bold'}}>
                    Ideas:
                </Text>
                <Text></Text>
                <Text style={{color:'red'}}>
                    {Preguntas[0]}
                </Text>
                <Text></Text>
                <Text style={{color:'blue'}}>
                    {Preguntas[1]}
                </Text>
                <Text></Text>
                <Text style={{color:'green'}}>
                    {Preguntas[2]}
                </Text>
                <Text></Text>
                <Text style={{color:'orange'}}>
                    {Preguntas[3]}
                </Text>
                <Text></Text>
                <Text style={{color:'purple'}}>
                    {Preguntas[4]}
                </Text>
                <Text></Text>
                <TouchableOpacity style={[styles.sopaB,{backgroundColor:this.state.color1}]} onPress={()=>{this.colores1()}}>
                    <Text style={styles.sopaT}>
                        {Respuestas[0]}
                    </Text>
                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity style={[styles.sopaB,{backgroundColor:this.state.color2}]} onPress={()=>{this.colores2()}}>
                    <Text style={styles.sopaT}>
                        {Respuestas[1]}
                    </Text>
                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity style={[styles.sopaB,{backgroundColor:this.state.color3}]} onPress={()=>{this.colores3()}}>
                    <Text style={styles.sopaT}>
                        {Respuestas[2]}
                    </Text>
                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity style={[styles.sopaB,{backgroundColor:this.state.color4}]} onPress={()=>{this.colores4()}}>
                    <Text style={styles.sopaT}>
                        {Respuestas[3]}
                    </Text>
                </TouchableOpacity>
                <Text></Text>
                <TouchableOpacity style={[styles.sopaB,{backgroundColor:this.state.color5}]} onPress={()=>{this.colores5()}}>
                    <Text style={styles.sopaT}>
                        {Respuestas[4]}
                    </Text>
                </TouchableOpacity>
                <Text></Text>
                <Text></Text>
                
                <Text style={{fontWeight: 'bold'}}>
                    Puntaje: {this.state.correctas}/5
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
     
        
    },

    imagen1:{  
        width: 80,
        height: 50,
     
        
    },

    sopaB:{
        width: 330,
        backgroundColor: '#D9EC1D',
        borderWidth: 4,
        borderRadius: 15,
        alignItems: 'flex-start',
        alignSelf: 'center',
        justifyContent: 'center',
        
    },

    sopaT:{
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',

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