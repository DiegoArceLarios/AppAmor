import React, {Component} from "react";
import { StyleSheet, View, Alert, Text, ImageBackground, TextInput, KeyboardAvoidingView, Image, ScrollView, TouchableOpacity } from "react-native";
import info from '../Textos/info.json/'
import * as Speech from 'expo-speech';


const Respuestas = ['Neurotransmisor','Gustos','Enamoramiento','Nerviosismo', 'Reacciones','Idealización'];
var correctas = 0;


export default class historia extends Component{
    constructor(props){
        super(props);
        this.state={
            activado: false,
            letrero: 'Audio',

            correctas: 0,
            resuelto: 'No',
            res1: '1',
            res2: '2',
            res3: '3',
            res4: '4',
            res5: '5',
            res6: '6',

            
        }
    }

    

//Respuestas correctas a continuación =>
    revisar=()=>{
        const {res1,res2,res3,res4,res5,res6}=this.state;
        correctas = 0;
        this.setState({resuelto:'Si'})
        if(res1==='6'){
            correctas+=1
        }
        if(res2==='3'){
            correctas+=1
        }
        if(res3==='1'){
            correctas+=1
        }
        if(res4==='5'){
            correctas+=1
        }
        if(res5==='4'){
            correctas+=1
        }
        if(res6==='2'){
            correctas+=1
        }
        this.setState({correctas:correctas})
        if (correctas===6){
            Alert.alert('Felicidades','Has respondido correctamente',[
                {
                    text: 'Salir',
                    onPress: ()=> this.props.navigation.navigate('BottomTab')
                }
            ])
        }
        
    }
// nerviosismo, reacciones, 
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
                    Lectrua:
                </Text>
                <Text></Text>
                <Text>
                    Coloca el numero correto segun corresponda para que el texto tenga sentido
                </Text>
                <Text></Text>
                <Text style={{fontWeight:'bold'}}>
                    Texto: 
                </Text>
                <Text></Text>
                <Text>
                    El ____________[1] es un estado emocional por el que todo humano pasa, en el cual las personas se sienten atraídas hacia otra persona por alguna característica o características que considere extraordinarias (a esto se le conoce como ____________[2]); ya sea su aspecto, personalidad, ____________[3], entre otras cosas. Esta emoción se presenta con mayor intensidad los primeros días en los que has interactuado con esa persona, sin la necesidad de que esa persona haya interactuado contigo.
                </Text>
                <Text></Text> 
                <Text>
                    Estar enamorado de alguien más genera diferentes ____________[4] en tu cuerpo proporcionales a la intensidad de esta emoción. Entre estas se encuentra “piel de gallina”, ____________ [5], sudoración, sensación de valentía, etc., todas relacionadas a algún ____________[6] u hormona que se libera durante este proceso.
                </Text>
                
                <Text></Text>
                <View style={styles.lecturaW}>
                    <View style={[styles.lecturaV]}>
                        <Text style={styles.lecturaT}>
                            {Respuestas[0]}
                        </Text>
                    </View>
                    <TextInput
                    style={[styles.lecturaV,{width: '40%', padding: 6}]}
                    onChangeText={text => this.setState({res1: text})}
                    placeholder={'   Escribe aquí...'}
                    />
                </View>
                <Text></Text>
                <View style={styles.lecturaW}>
                    <View style={[styles.lecturaV]} >
                        <Text style={styles.lecturaT}>
                            {Respuestas[1]}
                        </Text>
                    </View>
                    <TextInput
                    style={[styles.lecturaV,{width: '40%', padding: 6}]}
                    onChangeText={text => this.setState({res2: text})}
                    placeholder={'   Escribe aquí...'}
                    />
                </View>
                <Text></Text>
                <View style={styles.lecturaW}>
                    <View style={[styles.lecturaV]} >
                        <Text style={styles.lecturaT}>
                            {Respuestas[2]}
                        </Text>
                    </View>
                    <TextInput
                    style={[styles.lecturaV,{width: '40%', padding: 6}]}
                    onChangeText={text => this.setState({res3: text})}
                    placeholder={'   Escribe aquí...'}
                    />
                </View>
                <Text></Text>
                <View style={styles.lecturaW}>
                    <View style={[styles.lecturaV]} >
                        <Text style={styles.lecturaT}>
                            {Respuestas[3]}
                        </Text>
                    </View>
                    <TextInput
                    style={[styles.lecturaV,{width: '40%', padding: 6}]}
                    onChangeText={text => this.setState({res4: text})}
                    placeholder={'   Escribe aquí...'}
                    />
                </View>
                <Text></Text>
                <View style={styles.lecturaW}>
                    <View style={[styles.lecturaV]} >
                        <Text style={styles.lecturaT}>
                            {Respuestas[4]}
                        </Text>
                    </View>
                    <TextInput
                    style={[styles.lecturaV,{width: '40%', padding: 6}]}
                    onChangeText={text => this.setState({res5: text})}
                    placeholder={'   Escribe aquí...'}
                    />
                </View>
                <Text></Text> 
                <View style={styles.lecturaW}>
                    <View style={[styles.lecturaV]} >
                        <Text style={styles.lecturaT}>
                            {Respuestas[5]}
                        </Text>
                    </View>
                    <TextInput
                    style={[styles.lecturaV,{width: '40%', padding: 6}]}
                    onChangeText={text => this.setState({res6: text})}
                    placeholder={'   Escribe aquí...'}
                    />
                </View>
                <Text></Text>
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
     
        
    },

    imagen1:{  
        width: 80,
        height: 50,
     
        
    },
    lecturaW:{
        flexDirection: 'row'
    },

    lecturaV:{
        width: '60%',
        borderWidth: 4,
        borderRadius: 5,
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        justifyContent: 'center',
        
    },

    lecturaT:{
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