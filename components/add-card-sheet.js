import { NavigationContainer } from "@react-navigation/native";
import React, { Component,useContext,useState } from "react";
import { StyleSheet, View, Switch, ScrollView } from "react-native";
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";
import { CheckBox ,Button,Text } from 'react-native-elements'
import Safe from '../assets/svg/safe.svg'
import AppContext from '../components/appcontext'

// export default class AddCardSheet extends Component {
//     constructor() {
//         super();
//         this.state = {
//           checked: false
//         }
//      }
  
//     _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
//     _onFocus = (field) => console.log("focusing", field);
  
//     render() {
//       return (
//         <View style={s.container}>
//             <ScrollView showsVerticalScrollIndicator={false}>
//             <CreditCardInput
//                 autoFocus
  
//                 requiresName
//                 requiresCVC
//                 allowScroll
  
//                 labelStyle={s.label}
//                 inputStyle={s.input}
//                 validColor={"black"}
//                 invalidColor={"red"}
//                 placeholderColor={"darkgray"}
//                 inputContainerStyle={s.Cinput}

//                 onFocus={this._onFocus}
//                 onChange={this._onChange} />

//                 <View>
//                   {
//                     this.props.statement != 'payment-method' ?
//                     (
//                       <>
//                       <CheckBox
//                         center
//                         title='Save my card'
//                         checked={this.state.checked}
//                         checkedColor='#1E3865'
//                         textStyle={{fontSize:17,fontFamily:'Gilroy-Medium'}}
//                         containerStyle={{width:180,backgroundColor:'transparent',borderColor:'transparent',}}
//                         onPress={()=>this.setState({ checked: !this.state.checked })}
//                       />
//                       </>
//                     ) 
//                     : 
//                     (
//                       null
//                     )
//                   }
                    
//                     <View style={{paddingHorizontal:20
//                     }}>
//                         <Button
//                             title="Save"
//                             buttonStyle={{backgroundColor:'#1E3865',padding:20,borderRadius:15,marginTop:10}}
//                         />

//                         <View style={{flexDirection:'row',alignItems: 'center',justifyContent:'center',marginTop:15,marginBottom:10}}>
//                             <Safe  />
//                             <Text style={{fontSize:16,color:'#666666',marginLeft:10}}>We`ll keep your payment details safe</Text>
//                             {/* <Text style={{fontSize:16,color:'#666666',marginLeft:10}}>{this.props.statement}</Text> */}
//                         </View>
//                     </View>
//                 </View>
//             </ScrollView>
//         </View>
//       );
//     }
//   }
var newCard = null;
const AddCardSheet = ({navigation,statement}) => {

    const myContext = useContext(AppContext);
    var allCards = myContext.paymentmethods
    const _onChange = (formData) => {
      newCard = formData
      console.log(JSON.stringify(newCard, null, " "))
    };
    const _onFocus = (field) => console.log("focusing", field);
    const [checked,setChecked] = useState(true);
    const saveCard = () =>{
      if(newCard == null){
        alert('Please fill the card fields.')
      }
      else if(!newCard.valid){
        alert('Invalid Card!')
      }
      else if(newCard.valid){
        var iddf = Math.floor(Math.random() * 100);
        newCard.values["id"] = iddf
        console.log(newCard.values);
        allCards.push(newCard.values);
        myContext.setpaymentmethods(allCards);
        myContext.setcloseAllSheets(true)
      }
    }

  return(
        <View style={s.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <CreditCardInput
                autoFocus
                requiresName
                requiresCVC
                allowScroll
                labelStyle={s.label}
                inputStyle={s.input}
                validColor={"black"}
                invalidColor={"red"}
                placeholderColor={"darkgray"}
                inputContainerStyle={s.Cinput}

                onFocus={e => _onFocus(e)}
                onChange={e => _onChange(e)} />

                <View>
                  {
                    statement != 'payment-method' ?
                    (
                      <>
                      <CheckBox
                        center
                        title='Save my card'
                        checked={checked}
                        checkedColor='#1E3865'
                        textStyle={{fontSize:17,fontFamily:'Gilroy-Medium'}}
                        containerStyle={{width:180,backgroundColor:'transparent',borderColor:'transparent',}}
                        onPress={()=> setChecked(!checked)}
                      />
                      </>
                    ) 
                    : 
                    (
                      null
                    )
                  }
                    
                    <View style={{paddingHorizontal:20
                    }}>
                        <Button
                            title="Save"
                            onPress={()=>saveCard()}
                            buttonStyle={{backgroundColor:'#1E3865',padding:20,borderRadius:15,marginTop:10}}
                        />

                        <View style={{flexDirection:'row',alignItems: 'center',justifyContent:'center',marginTop:15,marginBottom:10}}>
                            <Safe  />
                            <Text style={{fontSize:16,color:'#666666',marginLeft:10}}>We`ll keep your payment details safe</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
  )
}

export default AddCardSheet

const s = StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      marginTop: 10,
      paddingBottom:30
    },
    label: {
      color: "black",
      fontSize: 15,
      marginBottom:10
    },
    input: {
      fontSize: 18,
      color: "black",
      backgroundColor: "#F6F8FA",
      height:65,
      paddingLeft:20,
      borderRadius:15
    },
    Cinput:{
        backgroundColor: "transparent",
    }
  });