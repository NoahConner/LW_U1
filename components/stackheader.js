import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity ,SafeAreaView} from 'react-native';
import { Button,Icon } from 'react-native-elements';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LeftArr from '../assets/svg/left-arrow.svg'
import FilterIco from '../assets/svg/filter.svg'

const StackHeader = ({navigation,name})=>{
    return(
        <View style={styles.header}>
            <SafeAreaView>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <LeftArr style={{width:30,height:30}}   />
                </TouchableOpacity>
                
                <Text style={{fontSize:RFPercentage(2.5),fontFamily:'Poppins-SemiBold',marginLeft:20}}>{name}</Text>
            </View>
            {/* {
                name == 'Deposit History' ? (
                    <>
                        <TouchableOpacity>
                            <FilterIco style={{width:30,height:30}}   />
                        </TouchableOpacity>
                    </>
                ) : null
            } */}
            </SafeAreaView>
            
            
        </View>
    )
}

export default StackHeader;

const styles = StyleSheet.create({
    header:{
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 1.5,
        height:80,
        width:'100%',
        marginTop:-10,
        // marginLeft:'-5%',
        paddingTop:5,
        paddingHorizontal:20,
        borderBottomEndRadius:15,
        borderBottomStartRadius:15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    }
})