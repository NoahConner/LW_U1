import React,{useState} from 'react';
import { View, Text, StyleSheet,TouchableOpacity,ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,CheckBox,Button } from 'react-native-elements';
import FacebookIcon from '../assets/svg/facebook.svg'
import GoogleIcon from '../assets/svg/google.svg'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const SignIn = ({navigation})=>{
    const [remember,setRemember] = useState(false)
    return(
        <ScrollView contentContainerStyle={styles.container}>
        <View style={{width:'100%',paddingHorizontal:20}}>
            
            <View style={{alignItems: 'center',width: '100%'}}>
                <Text style={{color:'#E83131',fontSize:RFPercentage(4),fontWeight:'bold',marginTop:30}}>Sign Up</Text>
                <Text style={{color:'#666666',fontSize:RFPercentage(2),marginTop:10,textAlign: 'center',width:240,marginBottom:60}}>Donate Food to Poor people in just 3 easy steps</Text>
                <View style={{width:'100%'}}>
                    <Input
                     placeholder='Full Name'
                     containerStyle={{
                        ...styles.textContainerStyle,
                        marginBottom:10
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle
                    }}
                    />
                    <Input
                     placeholder='Email Adress'
                     containerStyle={{
                        ...styles.textContainerStyle,
                        marginBottom:10
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle
                    }}
                    />
                    <Input
                     placeholder='Password'
                     containerStyle={{
                        ...styles.textContainerStyle,
                        marginBottom:10
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle
                    }}
                    />
                    <Input
                     placeholder='Confirm Password'
                     containerStyle={{
                        ...styles.textContainerStyle,
                        marginBottom:10
                    }}
                    inputContainerStyle={{
                        ...styles.inputContainerStyle
                    }}
                    />
                </View>
                
                <View style={{width:'100%',marginTop:20}}>
                    <Button
                        title="Log In"
                        type="solid"
                        buttonStyle={{
                            backgroundColor:'#1E3865',
                            padding:15,
                            borderRadius:15
                        }}
                    />
                    <Text style={{color:'#666666',textAlign:'center',fontSize:RFPercentage(2),marginTop:10,marginBottom:10}}>Or</Text>
                    <Button
                        title="Continue with Facebook"
                        type="solid"
                        buttonStyle={{
                            backgroundColor:'#F6F8FA',
                            padding:15,
                            borderRadius:15
                        }}
                        titleStyle={{
                            color:'#1E3865',
                            fontWeight:'bold',
                        }}
                        icon={
                            <FacebookIcon
                            style={{
                                height:30,
                                width:30,
                                position:'absolute',
                                left:15
                            }}
                            />
                          }
                    />
                    <Button
                        title="Continue with Facebook"
                        type="solid"
                        buttonStyle={{
                            backgroundColor:'#F6F8FA',
                            padding:15,
                            borderRadius:15,
                            marginTop:10
                        }}
                        titleStyle={{
                            color:'#1E3865',
                            fontWeight:'bold',
                        }}
                        icon={
                            <GoogleIcon
                            style={{
                                height:30,
                                width:30,
                                position:'absolute',
                                left:15
                            }}
                            />
                          }
                    />
                   <View style={{flexDirection:'row',alignItems: 'center',justifyContent: 'center',marginTop:20}}>
                    <Text style={{color:'#707070',textAlign:'center'}}>Already have an account? </Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('Login')}><Text style={{color:'#0071BC',textAlign:'center'}}>Sign In</Text></TouchableOpacity>
                   </View>
                </View>
            </View>
            
        </View>
        </ScrollView>
    )
}

export default SignIn;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff',
        // paddingLeft:30,
        // paddingRight:30,
        // paddingBottom:20
    },
    textContainerStyle:{
        width:'100%',
        backgroundColor:'#F6F8FA',
        color:'#000',
        borderRadius:15,
        paddingBottom:0,
        height:60
    },
    inputContainerStyle:{
        paddingBottom:0,
        borderColor:'transparent',
        marginTop:6
    }
})