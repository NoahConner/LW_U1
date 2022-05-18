import React, { Component,useState,useContext } from "react";
import { StyleSheet, View, Switch,Modal,Alert,Pressable } from "react-native";
import { CheckBox ,Button,Text,Icon,Image  } from 'react-native-elements'
import ReviewImg from '../assets/svg/review.svg'
import VisaIcon from '../assets/svg/visa.svg'
import MasterIcon from '../assets/svg/master.svg'
import Tick from '../assets/svg/tick.svg'
import AppContext from '../components/appcontext'
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const ReviewPayment = ({navigation,amount})=>{
    const myContext = useContext(AppContext);
    const depositeAmount = ()=>{
        myContext.setWalletAmount(amount)
        myContext.setCongratesModal(true)
    }

    return(
        <View style={{padding:20}}>
            <View style={styles.flexRow}>
                <ReviewImg style={{height:RFPercentage(7),width:RFPercentage(7)}} />
                <Text style={{fontSize:RFPercentage(2.8),fontFamily:'Poppins-SemiBold',marginTop:0,color:'#000',marginLeft:20}}>Review and Confirm</Text>
            </View>
            <Text style={{marginTop:40,fontSize:RFPercentage(2.3),color:'#666666',fontFamily:'Gilroy-Medium'}}>Deposit Amount</Text>
            <Text style={{marginTop:5,fontSize:RFPercentage(3.5),color:'#000',fontFamily:'Poppins-SemiBold'}}>${amount}</Text>

            <Text style={{marginTop:25,fontSize:RFPercentage(2.3),color:'#666666',fontFamily:'Gilroy-Medium'}}>Processing Fee</Text>
            <Text style={{marginTop:5,fontSize:RFPercentage(3.5),color:'#000',fontFamily:'Poppins-SemiBold'}}>$1.25</Text>

            <View style={{alignItems: 'flex-end',justifyContent: 'space-between',flexDirection: 'row',marginBottom:40,marginTop:0}}>
                <View style={{...styles.flexRow}}>
                    <Text style={{fontSize:RFPercentage(2.3),fontFamily:'Gilroy-Medium'}}>Pay with</Text>
                    <VisaIcon style={{ height: 20, width: 30,marginLeft:10 }} />
                    <Text style={{fontSize:RFPercentage(2),color:'#666666',marginLeft:5,fontFamily:'Gilroy-Medium'}}>**** 1234</Text>
                </View>
                <View style={{alignItems: 'flex-end',}}>
                    <Text style={{fontSize:RFPercentage(2.3),color:'#666666',fontFamily:'Gilroy-Medium'}}>Total</Text>
                    <Text style={{marginTop:5,fontSize:RFPercentage(3.5),color:'#000',fontFamily:'Poppins-SemiBold'}}>${parseInt(amount)+1.25}</Text>
                </View>
            </View>

            <View>
                <Button
                    title="Confirm"
                    buttonStyle={styles.NextBtns}
                    titleStyle={{fontSize:RFPercentage(2.5),fontFamily:'Poppins-SemiBold'}}
                    onPress={()=> depositeAmount()}
                />
                <Button
                    title="Modify"
                    buttonStyle={{...styles.NextBtns,backgroundColor:'#F6F8FA',marginTop:10}}
                    titleStyle={{fontSize:RFPercentage(2.5),color:'#1E3865',fontFamily:'Poppins-SemiBold'}}
                    onPress={()=> navigation.goBack()}
                />
            </View>
        </View>
    )
}
export default ReviewPayment;

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row', 
        alignItems: 'center'
    },
    NextBtns:{
        backgroundColor:'#1E3865',
        paddingHorizontal:26,
        paddingVertical:15
        ,borderRadius:15
    },
})