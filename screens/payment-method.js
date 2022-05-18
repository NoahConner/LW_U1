import React, { useState, useRef,useContext } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity,Dimensions } from 'react-native';
import { Image, Button, Icon } from 'react-native-elements';
import StackHeader from '../components/stackheader'
import VisaIcon from '../assets/svg/visa.svg'
import MasterIcon from '../assets/svg/master.svg'
import Trash from '../assets/svg/bin.svg'
import RBSheet from "react-native-raw-bottom-sheet";
import AddCardSheet from '../components/add-card-sheet'
import PaymentIcon from '../assets/svg/paymentIconred.svg';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AppContext from '../components/appcontext'
import AmexIcon from '../assets/svg/amex.svg'
import DiscIcon from '../assets/svg/discover.svg'
import JcbIcon from '../assets/svg/jcb.svg'
import DinnerClub from '../assets/svg/diners-club.svg'
import Modals from '../components/modals';

// const defaultCad = [
//     {
//         'card_name': 'Visa',
//         'card_no': '**** 2563',
//         'id': '1'
//     },
//     {
//         'card_name': 'Master Card',
//         'card_no': '**** 8569',
//         'id': '2'
//     },
//     {
//         'card_name': 'American Express',
//         'card_no': '**** 8569',
//         'id': '4'
//     }
// ]
const PaymentMethod = ({ navigation }) => {

    const myContext = useContext(AppContext);
    const refRBSheet = useRef();
    var [cards, setCards] = useState(myContext.paymentmethods)
    const removeCard = (i) => {
        var fake = cards.filter(item => item.id != i)
        // setCards(fake)
        myContext.setpaymentmethods(fake)
    }

    const splitNo = (c) => {
        var splitt = c.split(' ')
        var lenghter = splitt.length
        var cNoo = '**** '+splitt[lenghter-1]
        return cNoo
    }

    const cardDiv = (d, i) => {

        return (
            <View style={{ ...styles.Ccard, marginTop: i == 0 ? 20 : 15 }} key={i}>
                <View style={styles.flexRow}>
                    {
                        d.type == 'visa' ? <VisaIcon style={{ height: 30, width: 40 }} /> :
                        d.type == 'master-card' ? <MasterIcon style={{ height: 30, width: 40 }} /> :
                        d.type == 'discover' ? <DiscIcon style={{ height: 30, width: 40 }} /> :
                        d.type == 'jcb' ? <JcbIcon style={{ height: 30, width: 40 }} /> :
                        d.type == 'american-express' ? <AmexIcon style={{ height: 30, width: 40 }} /> :
                        d.type == 'diners-club' ? <DinnerClub style={{ height: 30, width: 40 }} /> :
                        <PaymentIcon style={{ height: 30, width: 40 }}/>
                    }
                    <View style={{ marginLeft: 20 }}>
                        <Text style={{ fontSize: RFPercentage(2.3), fontFamily: 'Poppins-SemiBold',textTransform:'capitalize'}}>{d.name}</Text>
                        <View style={{...styles.flexRow}}>
                            <Text style={{ color: '#666666', fontSize: RFPercentage(2), marginTop: 5,fontFamily: 'Gilroy-Medium',textTransform:'capitalize',marginRight:20}}>{d.type} :</Text>
                            <Text style={{ color: '#666666', fontSize: RFPercentage(2), marginTop: 5,fontFamily: 'Gilroy-Medium'}}>{splitNo(d.number)}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <TouchableOpacity>
                        <Trash style={{ height: 24, width: 24 }} onPress={() => removeCard(d.id)} />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StackHeader navigation={navigation} name={'Payment Method'} />
            <View style={{ marginTop: 0, paddingHorizontal: 20, width: '100%', paddingBottom: 80 }}>
                <SafeAreaView >
                    <FlatList
                        data={cards}
                        renderItem={({ item, index }) => (
                            cardDiv(item, index)
                        )}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        ListFooterComponent={
                            <TouchableOpacity style={{ ...styles.flexRow, marginTop: 20, marginBottom: 20, width: '70%' }} onPress={() => refRBSheet.current.open()}>
                                <Icon
                                    name='plus'
                                    type='font-awesome'
                                    color='#FF3C40'
                                    iconStyle={{ fontSize: RFPercentage(2.5) }}
                                    style={{ marginRight: 24 }}
                                />
                                <Text style={{ fontWeight: 'bold', fontSize: RFPercentage(2.5) }}>Add Payment Method</Text>
                            </TouchableOpacity>
                        }
                    />

                </SafeAreaView>
            </View>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                customStyles={{
                    wrapper: {
                        backgroundColor: "#0000009e",
                    },
                    draggableIcon: {
                        backgroundColor: "#E6E6E6"
                    },
                    container:{
                        backgroundColor: "#fff",
                        borderTopEndRadius:20,
                        borderTopStartRadius:20
                    }
                }}
                height={Dimensions.get('window').height-130}
            >
                <AddCardSheet navigation={navigation} statement={'payment-method'} />
            </RBSheet>

            <Modals navigation={navigation} />
        </View>
    )
}

export default PaymentMethod

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: '#fff'
    },
    flexRow: {
        flexDirection: 'row', alignItems: 'center'
    },
    Ccard: {
        backgroundColor: '#F6F8FA',
        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
    }
})