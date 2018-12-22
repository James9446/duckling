/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import analytics from '@segment/analytics-react-native';
import {Platform, StyleSheet, Text, View} from 'react-native';

analytics
    .setup('ilrQLGpSKvTLr1iuBuKjSH3wwBD7RDOh', {
        // using: [Mixpanel, GoogleAnalytics],
        recordScreenViews: true,
        trackAppLifecycleEvents: true,
        trackAttributionData: true,

        android: {
            flushInterval: 60,
            collectDeviceId: true
        },
        ios: {
            trackAdvertising: true,
            trackDeepLinks: true
        }
    })
    .then(() =>
        console.log('Analytics is ready')
    )
    .catch(err =>
        console.error('Something went wrong', err)
    )

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
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
