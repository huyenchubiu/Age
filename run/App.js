/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Textfield,
  View,
  Button,
  TouchableOpacity,
  ListView,
  Pulltorefresh,
  Alert,
  Image,
  Dimensions,
  SideMenu,
  MapView,
  Flex,
  ScrollView,
  FlatList,
  FlexBox,

} from 'react-native';
import { age } from './tuoinv';
import DateTimePicker from 'react-native-modal-datetime-picker';
import PropTypes from 'prop-types';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


var { height, width } = Dimensions.get('window');

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false
    }
  }
  componentWillMount() {
    console.disableYellowBox = true;
  }
  checkAge() {
    this.setState({
      isDateTimePickerVisible: true
    })
  }
  getAge(birthday) {
    const current = (new Date()).getFullYear();
    let number = current - birthday.getFullYear();
    alert("Tuoi : " + number);
  }
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  _handleDatePicked = (date) => {
    this.getAge(date);
    this._hideDateTimePicker();
  };

  render() {
    let number = new age();


    var inform = [
      { key: "Họ và tên: Nguyễn Thùy Chi" },
      { key: "Ngày sinh: 30/04/1993" },
      { key: "Số CMT: 17486832" },
      { key: "Giới tính: Nữ" },
      { key: "Chức vụ: Giám đốc" },
      { key: "Email: chi@gmail.com" },
      { key: "Điện thoại: 0169 272 365" },
      { key: "Địa chỉ: Hà Đông, Hà Nội" },
      { key: "Nơi làm việc: Hà Nội" },

    ];
    var ler = [
      { st: "Trường Đại học Kinh tế Quốc dân" },
      { st: "Chuyên ngành: Quản trị kinh doanh" },
      { st: "Tốt nghiệp loại Giỏi, điểm trung bình: 8.0" },
    ];


    return (

      <ScrollView>
        <View
          style={{
            backgroundColor: '#EA2027',
            width: width,
            height: 170,
            alignItems: 'center',

          }}>
          <Image
            style={{
              margin: 10,
              width: 100,
              height: 100,
              borderRadius: 50,
              alignItems: 'center',
            }}
            source={require('./avt.jpg')} />
          <Text
            style={{
              color: '#ecf0f1',
              fontSize: 20,
              fontWeight: 'bold',
              textAlign: 'center',

            }}> Nguyễn Thùy Chi </Text>
        </View>
        <Text style={{
          color: '#2d3436',
          fontSize: 18,
          fontWeight: 'bold',
          margin: 5,
          textAlign: 'center',


        }}>Thông tin cá nhân</Text>
        <FlatList
          data={inform}
          renderItem={
            ({ item }) =>
              <View style={{
                backgroundColor: 'F2F7FF',
                width: 250,
                height: 35,
                borderWidth: 1,
                borderRadius: 30,
                margin: 2,
                padding: 5,
                borderColor: '#d63031',
                alignItems: 'flex-start',
                display: "flex",
                borderTopWidth: 1,


              }}>

                <Text style={{
                  color: '#2d3436',
                  fontSize: 14,
                  margin: 10,
                  textAlign: "center",


                }}
                >{item.key}</Text>
              </View>

          }

        />

        <Text style={{
          color: '#2d3436',
          fontSize: 18,
          fontWeight: 'bold',
          margin: 5,
          textAlign: 'center',


        }}> Trình độ học vấn </Text>

        <FlatList
          data={ler}
          renderItem={
            ({ item }) =>
              <View style={{
                backgroundColor: 'F2F7FF',
                width: width,
                height: 35,
                borderWidth: 1,
                borderRadius: 30,
                margin: 2,
                padding: 5,
                borderColor: '#d63031'




              }}>
                <Text style={{
                  color: '#2d3436',
                  fontSize: 14,
                  textAlign: 'center',


                }}
                >{item.st}</Text>
              </View>
          }
        />


        <Button
          title="Tuổi của Chi hiện tại"
          color="#EA2027"
          onPress={() => this.checkAge()
          }>
        </Button>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
        />


      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
