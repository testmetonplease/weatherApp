import * as React from 'react';
import { View, Text, Image, SafeAreaView } from 'react-native';

import { tabbedNavigation } from '../../../navigators/navigation';
import styles from './styles';
import { BUTTON_DEFAULT } from '../../elements/buttons';
import { CText } from '../../elements/custom';

export interface Props {
  initState: Function;
  getLocation: Function;
  locationError: string;
}

interface State {
  locationResult: string;
  locationError: boolean;
}

class Splash extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      locationResult: '',
      locationError: false,
    };
  }

  componentWillMount() {
    this.props.initState();
  }

  componentDidMount() {
    this.props.getLocation();
    this.navigateToHome();
  }

  navigateToHome = () => {
    tabbedNavigation();
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={require('../../assets/images/googlemapsengine-icon.png')}
          />
          <CText children="Hi,pappy"></CText>
          <View style = {styles.lineStyle} />
          <CText children={!this.props.locationError ? 'We got some problem with your location' :
                                                     'Trying to find out your location'}></CText>
         { this.props.locationError && <BUTTON_DEFAULT
            title="Continue To App"
            onClick={this.navigateToHome}
          /> }
        </View>
      </SafeAreaView>
    );
  }
}

export default Splash;
