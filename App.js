import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
class instagram extends React.Component {
  state = {
    name: [
      { 'name': 'Amandeep', 'username': 'adeepsingh100', 'image': "https://corezonemedia.s3.ap-south-1.amazonaws.com/Pic_1149520856956.png", 'id': '1' },
      { 'name': 'Aman', 'username': 'adeep', 'image': "https://corezonemedia.s3.ap-south-1.amazonaws.com/Pic_1149520856956.png", 'id': '2' },
      { 'name': 'Deep', 'username': 'deepsingh', 'image': "https://reactnative.dev/img/tiny_logo.png", 'id': '3' },
      { 'name': 'Amandeep Singh', 'username': 'adeepsingh', 'image': "https://corezonemedia.s3.ap-south-1.amazonaws.com/Pic_1149520856956.png", 'id': '4' },
    ]
  }


  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.header}>
          <Text style={styles.headingText}>Instagram</Text>
        </View>

        <ScrollView>
          {
            this.state.name.map((item, index) => (
              <View key={index}>
                <View style={styles.Page}>
                  <View style={styles.pgimg} >
                    <Image
                      style={styles.pageImg}
                      source={{ uri: item.image }}
                    />
                  </View>
                  <View style={styles.pgtext}>
                    <Text style={styles.pageName}>{item.name}</Text>
                    <Text style={styles.pageName1}>{item.username}</Text>
                  </View>
                </View>
                <View style={styles.postimgView}>
                  <Image
                    style={styles.postImg}
                    source={{ uri: item.image }}
                  />
                </View>
                <View style={styles.likeSection}>
                  <TouchableOpacity 
                   onPress={() => {
                    this.state.name.push(item)
                    this.setState({
                      name: [...this.state.name]
                    })
                  }}
                  style={styles.Btn}>
                    <Text style={styles.savetext}>
                      Add
                    </Text>
                  </TouchableOpacity>

                  <View style={styles.save}>
                    <TouchableOpacity onPress={() => {
                      const filteredData = this.state.name.filter((data, innderIndex) => index != innderIndex)
                      this.setState({
                        name: filteredData
                      })
                      console.log(filteredData)

                    }} style={styles.Btn} >
                      <Text style={styles.savetext}>
                        Delete
                    </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          }
        </ScrollView>
      </View >
    );
  };
};
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black'
  },
  header: {

    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingText: {
    fontSize: 30,
    color: 'white',
  },
  Page: {

    alignItems: 'center',
    height: 70,
    flexDirection: 'row'

  },
  pageImg: {
    height: 50,
    width: 50,
    borderRadius: 100,
    marginLeft: 10,
    justifyContent: 'flex-start'
  },
  pgimg: {
    alignItems: 'flex-start'
  },
  pgtext: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 10,

  },
  pageName: {
    fontSize: 25,
    color: 'white'
  },

  postimgView: {
    backgroundColor: 'black',
    height: 500,
    justifyContent: 'center',
    alignItems: 'center'
  },
  postImg: {
    height: 500,
    width: 500,
  },
  likeSection: {
    justifyContent: 'center',
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10
  },
  save: {
    height: 70,
    width: 245,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  savetext: {
    fontSize: 20,
    color: 'black',
    marginBottom: 15,
    marginRight: 15,

    margin: 10
  },
  pageName1: {
    fontSize: 15,
    color: 'white',
    alignItems: 'flex-start',
    alignItems: 'flex-start'
  },
  Btn: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: 90
  }
})
export default instagram;