import React, { Component ,useState} from 'react';
import { View,Text, ScrollView, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Ionicons from '@expo/vector-icons/Ionicons';

class DateDay extends Component {

  constructor(props) {
    super(props);
    const today = new Date();
    const nextMonth = new Date(today);
    nextMonth.setDate(nextMonth.getDate() + 30);

    this.state = {
      startDate: today.toISOString().split('T')[0],
      endDate: nextMonth.toISOString().split('T')[0],
      selectedDate: null,
      isSelected : true

    };
  }

  handleDayPress = (day) => {
    this.setState({ selectedDate: day.dateString });
    console.log("Selected day " + day.dateString);
  };

  render() {
    const first = 10;
    const { startDate, endDate, selectedDate,isSelected } = this.state;
    const renderedItems = [];
    for (let i = 0; i < 10; i++) {
        renderedItems.push(
                <Text key={i} style={{ backgroundColor:`${isSelected? 'red':'#329998' }`,padding:10,borderRadius:20,color:'#FFFFFF',textAlign:'center',marginLeft:20,marginTop:20,}}> 10 : 30 AM</Text>

        );
    }
    return (
        <>
    <ScrollView style={{width:'100%',}}>
        <View style={{width:"100%", flex:5/10 ,flexDirection: 'row',}}>
          <Calendar
            current={startDate}
            minDate={startDate}
            maxDate={endDate}
            onDayPress={this.handleDayPress}
            markedDates={{
              [selectedDate]: { selected: true, selectedColor: 'blue' },
            }}
          />
        </View>
    

                <View style={{flex:5/10,backgroundColor:'#FFFFFF',width:"100%",flexWrap:'wrap'}}> 
                    <Text style={{alignSelf:'flex-start',margin:22,color:'gray'}}>Free Slot</Text>
                    {/* 1 - start */}
                        <View  style={{flexWrap:'wrap',justifyContent:'center',alignContent:'center',width:"100%",flexDirection:'row'}}>

                        {renderedItems}
                    </View>

                    {/* 1 - end */}
                </View>

            </ScrollView>

    </>

    );
  }
}

const style = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    }
    ,
    line: {
        height: 1,
        width:'90%',
        backgroundColor: '#B9B0B0', // Set your desired line color
        margin:20,
  },
})

export default DateDay;
