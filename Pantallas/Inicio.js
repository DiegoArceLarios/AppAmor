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

    sonido=()=>{
        if (!this.state.activado){
            Speech.speak(`Introducción al enamoramiento`)
            Speech.speak(`El enamoramiento es un estado emocional por el que todo humano pasa, en el cual las personas se sienten atraídas hacia otra persona por alguna característica o características que considere extraordinarias (a esto se le conoce como idealización); ya sea su aspecto, personalidad, gustos, entre otras cosas. Esta emoción se presenta con mayor intensidad los primeros días en los que has interactuado con esa persona, sin la necesidad de que esa persona haya interactuado contigo.`)
            Speech.speak(`Estar enamorado de alguien más genera diferentes reacciones en tu cuerpo proporcionales a la intensidad de esta emoción. Entre estas se encuentra “piel de gallina”, nerviosismo, sudoración, sensación de valentía, etc., todas relacionadas a algún neurotransmisor u hormona que se libera durante este proceso.`)
            Speech.speak(`Todos estas evento fueron catalogados en tres etapas diferentes llamadas “etapas del enamoramiento”:`)
            Speech.speak(`Falling love`)
            Speech.speak(`Amor romántico`)
            Speech.speak(`Apego/cariño`)
            Speech.speak(`Falling love`)
            Speech.speak(`En esta etapa, los integrantes sienten una gran atracción hacía su pareja, y presentan cambios psicológicos como, por ejemplo: desconcentración, elevación del cortisol, disminución de la serotonina, producción masiva de dopamina, generación de noradrenalina e inhibición de la corteza del lóbulo frontal.`)
            Speech.speak(`Amor romántico`)
            Speech.speak(`En esta etapa, su cuerpo se normaliza, sin embargo, se producen nuevos neurotransmisores como la oxitocina y la vasopresina. Lo que caracteriza principalmente a esta etapa es que se demuestra si la pareja se podrá seguir desarrollándose o terminara rompiendo, ya que es donde surgen los primeros conflictos.`)
            Speech.speak(`Apego/cariño`)
            Speech.speak(`En esta etapa, la pareja alcanza su punto máximo, donde el sentimiento por el otro será el que los mantenga unidos.`)
            
            this.setState({activado: true})
        }else{
            Speech.stop()
            this.setState({activado: false})
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
                    Introducción al enamoramiento:
                </Text>
                    
                <Text>
                    {
                    //espacio
                    }       
                </Text>
                <Text></Text>
                <View>
                    <Text>
                        El enamoramiento es un estado emocional por el que todo humano pasa, en el cual las personas se sienten atraídas hacia otra persona por alguna característica o características que considere extraordinarias (a esto se le conoce como idealización); ya sea su aspecto, personalidad, gustos, entre otras cosas. Esta emoción se presenta con mayor intensidad los primeros días en los que has interactuado con esa persona, sin la necesidad de que esa persona haya interactuado contigo.
                    </Text>
                    <Text>
                        Estar enamorado de alguien más genera diferentes reacciones en tu cuerpo proporcionales a la intensidad de esta emoción. Entre estas se encuentra “piel de gallina”, nerviosismo, sudoración, sensación de valentía, etc., todas relacionadas a algún neurotransmisor u hormona que se libera durante este proceso.
                    </Text>
                    <Text>
                        Todos estas evento fueron catalogados en tres etapas diferentes llamadas “etapas del enamoramiento”:
                    </Text>
                    <Text></Text>
                    <Text>
                        -Falling love
                    </Text>
                    <Text></Text>
                    <Text>
                        -Amor romántico
                    </Text>
                    <Text></Text>
                    <Text>
                        -Apego/cariño
                    </Text>
                </View>
                <View style={{padding: 20}}>
                    <Image source={require('../assets/amor.png')} style={styles.imagen3}/>
                </View>
                <Text style={{fontWeight:'bold'}}>
                    Falling love:
                </Text>
                <Text></Text>
                <Text>
                    En esta etapa, los integrantes sienten una gran atracción hacía su pareja, y presentan cambios psicológicos como, por ejemplo: desconcentración, elevación del cortisol, disminución de la serotonina, producción masiva de dopamina, generación de noradrenalina e inhibición de la corteza del lóbulo frontal.
                </Text>
                <Text></Text>
                <Text style={{fontWeight:'bold'}}>
                    Amor romántico:
                </Text>
                <Text></Text>
                <Text>
                    En esta etapa, su cuerpo se normaliza, sin embargo, se producen nuevos neurotransmisores como la oxitocina y la vasopresina. Lo que caracteriza principalmente a esta etapa es que se demuestra si la pareja se podrá seguir desarrollándose o terminara rompiendo, ya que es donde surgen los primeros conflictos.
                </Text>
                <Text></Text>
                <Text style={{fontWeight:'bold'}}>
                    Apego/cariño:
                </Text>
                <Text></Text>
                <Text>
                    En esta etapa, la pareja alcanza su punto máximo, donde el sentimiento por el otro será el que los mantenga unidos.
                </Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text style={{fontWeight:'bold', alignSelf: 'center'}}>
                    Integrantes del equipo: 
                </Text>
                <Text></Text>
                <Text style={{alignSelf: 'center'}}>
                    Fatima Isabela Aceves villalvazo
                </Text>
                <Text style={{alignSelf: 'center'}}>
                    Azul Shonestat Avilán Rodríguez
                </Text>
                <Text style={{alignSelf: 'center'}}>
                    Diego Arce Larios
                </Text>
                <Text style={{alignSelf: 'center'}}>
                    Elsy Viviana Jiménez Quintero 
                </Text>

                <TouchableOpacity style={styles.boton} onPress={()=>{this.sonido()}}>
                    <Text style={{fontWeight: 'bold', color: 'white', fontSize: 20}}>
                        {this.state.letrero}
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
    caja:{
        flex: 0.2,
    },

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

    imagen1:{  
        width: 80,
        height: 50,
     
        
    },
    imagen2:{  
        width: 40,
        height: 40,
     
        
    },
    imagen3:{  
        width: 200,
        height: 200,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
        borderColor: '#E043CF',
        borderWidth: 4,

    },

    boton:{
        width: 100,
        height: 50,
        marginTop: 30,
        backgroundColor: '#AC7DEC',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 4,
        borderColor: '#4D40A7',
        
    }
    
})