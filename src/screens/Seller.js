import { StyleSheet, Text, View , SafeAreaView,ImageBackground} from 'react-native'
import React from 'react'
import {Table, Row,TableWrapper,Rows} from 'react-native-table-component'


 const headers = ['Bidding Date','Items', 'Sold Price', 'Quantity' ];

 const rows = [

 ['15 jan 2023', 'mango', '100 Rs', '10kg'],
 ['20 jan 2023', 'grapes', '50 Rs', '20kg'],
 ['25 jan 2023', 'brocolli', '400 Rs', '30kg']

];

const Seller = () => {
  return (
    <View>


      {<Text style={{fontSize: 45, padding: 30, fontWeight: 'bold', color: "green"}} >WELCOME HASAN!</Text> }




      <SafeAreaView style={{flex: 1}}>
            <View style={{flex:1, padding: 10}} >
           
            <Table  borderStyle = {{borderWidth: 1}} >

               <Row 
                  data={headers}  style={{backgroundColor : 'green'}}
                  height = {40}
                  flexArr={[1,1,1,1]}
                  textStyle={{
                  textAlign: 'center'
                  }}  
                  >

               </Row>


               <TableWrapper style={{flexDirection: 'row'}}>


               <Rows 
                  data={rows}       
                  heightArr={[28,28,28]}
                  flexArr = {[1,1,1,1]}
                  textStyle={{textAlign: 'left'}}
                 ></Rows>










               </TableWrapper>









            </Table>






            </View>







      </SafeAreaView>










    </View> 
  )
                }

export default Seller;