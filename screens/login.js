import React,{useState,useContext} from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,CheckBox,Button } from 'react-native-elements';
import FacebookIcon from '../assets/svg/facebook.svg'
import GoogleIcon from '../assets/svg/google.svg'
import AppContext from '../components/appcontext'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native-gesture-handler';

const Login = ({navigation})=>{
    
    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('@storage_Key', value)
          myContext.setuserToken(value)
        } catch (e) {
          console.log(e)
        }
      }

    const [remember,setRemember] = useState(false);
    const myContext = useContext(AppContext)
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <View style={{width:'100%',paddingHorizontal:20}}>
            <View style={{alignItems: 'center',width: '100%'}}>
                <Text style={{color:'#E83131',fontSize:RFPercentage(4),fontWeight:'bold',marginTop:30}}>Log In</Text>
                <Text style={{color:'#666666',fontSize:RFPercentage(2),marginTop:10,textAlign: 'center',width:240,marginBottom:60}}>Donate Food to Poor people in just 3 easy steps</Text>
                <View style={{width:'100%'}}>
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
                </View>
                <View style={{marginTop:0,flexDirection:'row',alignItems: 'center',justifyContent: 'space-between',width:'100%'}}>
                    <CheckBox
                        title='Remember me'
                        checked={remember}
                        onPress={()=> setRemember(!remember)}
                        iconType='font-awesome'
                        checkedIcon='square'
                        checkedColor='#1E3865'
                        containerStyle={{
                            backgroundColor:'transparent',
                            borderColor:'transparent',
                            padding:0
                        }}
                    />
                    <TouchableOpacity onPress={()=> navigation.navigate('ForgotPassword')}>
                        <Text style={{color:'#0071BC'}}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{width:'100%',marginTop:30}}>
                    <Button
                        title="Log In"
                        type="solid"
                        onPress={()=> storeData('0256985sd225sdwe')}
                        buttonStyle={{
                            backgroundColor:'#1E3865',
                            padding:15,
                            borderRadius:15
                        }}
                    />
                    <Text style={{color:'#666666',textAlign:'center',fontSize:RFPercentage(2.5),marginTop:10,marginBottom:10}}>Or</Text>
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
                    <Text style={{color:'#707070',textAlign:'center'}}>Don`t have an account? </Text>
                        <TouchableOpacity onPress={()=> navigation.navigate('SignIn')}><Text style={{color:'#0071BC',textAlign:'center'}}>Sign Up</Text></TouchableOpacity>
                   </View>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff',
        // paddingLeft:30,
        // paddingRight:30
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