import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from 'prop-types';

const Weathers = {
    Sunny: {
        title: "Sunny",
        subtitle: "Have a good Day",
        colors: ["#FEF253", "#FF7300"],
        icon: "weather-sunny"
    },
    Rainy: {
        title: "Rainy",
        subtitle: "Please don't forget your laundry",
        colors: ["#00C6FB", "#005BEA"],
        icon: "weather-rainy"
    },
    Thunderstorm: {
        title: "Thunderstorm",
        subtitle: "Are you ready to enjoy the wolrd biggest Dj sound?",
        colors: ["#00ECBC", "#007ADF"],
        icon: "weather-lightning"
    },
    Clouds: {
        title: "Clouds",
        subtitle: "Ramen Day",
        colors: ["#D7D2CC", "#304352"],
        icon: "weather-cloudy"
    },
    Snow: {
        title: "Snow",
        subtitle: "Let me go",
        colors: ["#7DE2FC", "#B9B6E5"],
        icon: "weather-snow"
    },
    Drizzle: {
        title: "Drizzle",
        subtitle: "Romantic Drizzle",
        colors: ["#89F7FE", "#66A6FF"],
        icon: "weather-hail"
    },
    Haze: {
        title: "Haze",
        subtitle: "We were afraid of something in the mist",
        colors: ["#89F7FE", "#66A6FF"],
        icon: "weather-hail"
    },
    Mist: {
        colors: ["#D7D2CC", "#304352"],
        title: "Mist!",
        subtitle: "It's like you have no glasses on.",
        icon: "weather-fog"
  }
}

function Weather({temp, name}) {

    return(
        <LinearGradient 
            colors={Weathers[name].colors} 
            style={styles.container}
            >
                <View style={styles.upperContainer}>
                    <MaterialCommunityIcons color="#fff" size={144} name={Weathers[name].icon} />
                    <Text style={styles.temp}>{temp}º</Text>
                </View>
                <View style={styles.lowerContainer}>
                    <Text style={styles.title}>{Weathers[name].title}</Text>
                    <Text style={styles.subtitle}>{Weathers[name].subtitle}</Text>
                </View>
            </LinearGradient>
    )
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    upperContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    lowerContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        color: "#fff",
        fontSize: 35
    },
    title: {
        color: "#fff",
        fontSize: 35
    },
    subtitle: {
        color: "#fff",
        fontSize: 24
    }
  });

  export default Weather