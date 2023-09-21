import React from 'react';
import { Text,View,StyleSheet,ScrollView } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';


const PdfPrintOut = () => {
  return (
    <>
            <View style={style.container}>
            <ScrollView width="100%">
                <View style={{flex:1/10,backgroundColor:'#3C7DA3',width:'100%'}}> 
                    <Text style={{color:'white',marginTop:30,fontSize:20,padding:20,textAlign:'center',fontWeight:'700'}}>
                        Certification Information
                    </Text>
                </View>

                <View style={{backgroundColor:"#329998",width:"90%",alignSelf:'center',borderRadius:10,}}>
                    <Text style={{fontSize:13,fontWeight:'700',color:'#FFFFFF',padding:10,textAlign:'center'}}>Download</Text>
                </View>

                
                <View style={{backgroundColor:"#FFFFFF",width:"90%",alignSelf:'center',height:100,borderRadius:10,justifyContent:'space-evenly',alignItems:'center',marginTop:20,marginBottom:5,}}>
                    <Text style={{fontSize:12,fontWeight:'700',color:'#3C7DA3',margin:-10,}}>Type : Vaccination</Text>
                    <Text style={{fontSize:12,fontWeight:'700',color:'#3C7DA3',margin:-10,}}>Status : Valid </Text>
                    <Text style={{fontSize:12,fontWeight:'700',color:'#3C7DA3',margin:-10,}}>Dose : 1 of 2</Text>
                </View>
                



                <View style={{flex:9/10,backgroundColor:'#FFFFFF',width:"90%",alignItems:'center',alignSelf:'center',borderRadius:10,}}> 

                    <View style={{backgroundColor:"#FFFFFF",width:"90%",height:150,borderRadius:10,justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',justifyContent:'space-between',padding:10,}}>
                        <View style={{width:"auto",justifyContent:'space-evenly',}}>
                            <Text style={{fontSize:11,fontWeight:'700',color:'gray',}}>Name</Text>
                            <Text style={{fontSize:14,fontWeight:'700',color:'black',fontWeight:'900'}}>Vaccination</Text>

                            <Text style={{fontSize:11,fontWeight:'700',color:'gray',}}>CNIC</Text>
                            <Text style={{fontSize:14,fontWeight:'700',color:'black',fontWeight:'900'}}>35201-1418812-5</Text>

                            <Text style={{fontSize:11,fontWeight:'700',color:'gray',}}>Date of birth</Text>
                            <Text style={{fontSize:14,fontWeight:'700',color:'black',fontWeight:'900'}}>10-09-2000</Text>

                        </View>
                        <View style={{width:"auto",justifyContent:'space-evenly',}}>

                            <Text style={{fontSize:11,fontWeight:'700',color:'gray',}}>Date of birth</Text>
                            <Text style={{fontSize:14,fontWeight:'700',color:'black',fontWeight:'900'}}>10-09-2000</Text>

                        </View>

                    </View>
                    
                    <View style={style.line}></View>
                    {/* 1 */}
                    <View style={{backgroundColor:"#E6EDED",width:"90%",height:'auto',borderRadius:10,justifyContent:'flex-start',marginTop:10,marginBottom:10,}}>
                        <View style={{alignSelf:'center'}}><Text style={{fontSize:18,fontWeight:900,padding:20,}}>Vaccination Certificate</Text></View>
                        <View style={style.line}></View>
                        <View style={{width:"auto",justifyContent:'flex-start',paddingLeft:20,paddingTop:20}}>
                            <Text style={{fontSize:11,fontWeight:'700',color:'gray',}}>Diease</Text>
                            <Text style={{fontSize:14,fontWeight:'700',color:'black',fontWeight:'900'}}>COIVID-19</Text>
                        </View>
                        <View style={{width:"auto",justifyContent:'flex-start',paddingLeft:20,paddingTop:20}}>
                            <Text style={{fontSize:11,fontWeight:'700',color:'gray',}}>Vaccine</Text>
                            <Text style={{fontSize:14,fontWeight:'700',color:'black',fontWeight:'900'}}>SARS-CoV-2</Text>
                        </View>
                        <View style={{width:"auto",justifyContent:'flex-start',paddingLeft:20,paddingTop:20}}>
                            <Text style={{fontSize:11,fontWeight:'700',color:'gray',}}>Manufacture</Text>
                            <Text style={{fontSize:14,fontWeight:'700',color:'black',fontWeight:'900'}}>Biotech Manufacture</Text>
                        </View>
                        <View style={{width:"auto",justifyContent:'flex-start',paddingLeft:20,paddingTop:20}}>
                            <Text style={{fontSize:11,fontWeight:'700',color:'gray',}}>Common Name</Text>
                            <Text style={{fontSize:14,fontWeight:'700',color:'black',fontWeight:'900'}}>Pfizer</Text>
                        </View>
                        <View style={{width:"auto",justifyContent:'flex-start',paddingLeft:20,paddingTop:20}}>
                            <Text style={{fontSize:11,fontWeight:'700',color:'gray',}}>Batch Number</Text>
                            <Text style={{fontSize:14,fontWeight:'700',color:'black',fontWeight:'900'}}>1544562455</Text>
                        </View>
                        <View style={{width:"auto",justifyContent:'flex-start',paddingLeft:20,paddingTop:20}}>
                            <Text style={{fontSize:11,fontWeight:'700',color:'gray',}}>Dose Number</Text>
                            <Text style={{fontSize:14,fontWeight:'700',color:'black',fontWeight:'900'}}>1 of 2</Text>
                        </View>
                        <View style={{width:"auto",justifyContent:'flex-start',paddingLeft:20,paddingTop:20}}>
                            <Text style={{fontSize:11,fontWeight:'700',color:'gray',}}>Date of Vaccination2021-03-02</Text>
                            <Text style={{fontSize:14,fontWeight:'700',color:'black',fontWeight:'900'}}>1544562455</Text>
                        </View>
                        <View style={{width:"auto",justifyContent:'flex-start',paddingLeft:20,paddingTop:20}}>
                            <Text style={{fontSize:11,fontWeight:'700',color:'gray',}}>Country of Vaccination</Text>
                            <Text style={{fontSize:14,fontWeight:'700',color:'black',fontWeight:'900'}}>Indonesia</Text>
                        </View>



                    </View>
                    {/* 1- end */}



                </View>
                </ScrollView>
            </View>
    </>
  )
}

const style = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#3C7DA3'
    }
    ,
    line: {
        height: 1,
        width:'90%',
        backgroundColor: '#B9B0B0', // Set your desired line color
        marginTop:10,
        alignSelf:'center'
  },
})

export default PdfPrintOut;