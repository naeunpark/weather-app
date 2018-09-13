import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = "9bb8e09afb703a31d55f32428e0a547e"

export default class App extends Component {
  state = {
    isLoaded : false,
    error : null,
    temp : null,
    weather : null
  };
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
          this._getPositon(position.coords.latitude, position.coords.longitude)
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getPositon = (lat, lon) => {
      fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
      .then(response => response.json())
      .then(json =>{
        this.setState({
          temp: json.main.temp,
          weather: json.weather[0].main,
          isLoaded: true
        })
      });
  }

  render() {
    const { isLoaded, error, temp, weather } = this.state
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
        {isLoaded ? <Weather temp={Math.floor(temp - 273.15)} name={weather}/> : <LoadingPage /> }
        {error ? <Text>Error!</Text> : null }
      </View>
     
    );
  }
}

class LoadingPage extends Component {
  render() {
    return (
    <View style={styles.loading}>
      <Text style={styles.text}>Getting the Weather Information...</Text>
    </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    backgroundColor: '#dfd3c3',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingBottom: 55
  },
  text: {
    fontSize: 35,
    marginLeft: 15,
    marginBottom: 15,
    fontWeight: '300'
  },
});
