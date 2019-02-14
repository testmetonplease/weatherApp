import * as React from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';

import styles from './styles';
import { CText } from '../../elements/custom';
import { BUTTON_DEFAULT } from '../../elements/buttons';
import { Weather } from '../../../../shared/redux/reducers/asyncActionStatusReducer';
import store from '../../../../shared/redux/store';
import moment from 'moment';
import 'moment-timezone';

export interface Props {
  name: string;
  weather: Weather;
  load: Function;
}

interface State {
  name: string;
  weather: Weather;
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: props.name || 'Weather at your location',
      weather: props.weather || { temperature:1, humidity:2, timestamp:1550069981 },
    };
  }

  componentDidMount() {}

  render() {
    const { name, weather } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../assets/images/weather.png')}
          />
            <View style = {styles.lineStyle} />
            <CText children={name}></CText>
            <CText children="I like this climate!"></CText>
            <View style = {styles.lineStyle} />
            <CText children={`temperature: ${Math.round(weather.temperature - 273.15)} C`}></CText>
            <CText children={`humidity: ${weather.humidity} %`}></CText>
            <CText children={moment(weather.timestamp).format('DD.MM.YYYY HH:mm') }></CText>
            <View style = {styles.lineStyle} />
          <BUTTON_DEFAULT
            title="Update the weather data"
            onClick={ this.updateWeather }
          />
        </View>
      </SafeAreaView>
    );
  }
  updateWeather = () => {
    this.props.load();
    console.log(store.getState());
  }
}

export default Home;
