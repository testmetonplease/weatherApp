import { connect } from 'react-redux';

import Component from './Component';
import { loadAction } from '../../../../shared/redux/actions/loadingActions';

const mapStateToProps = (state) => ({
  weather: state.weatherState.weather,
});

const mapDispatchToProps = (dispatch) => ({
  load: () => {
    console.log('mapDispatch place');
    dispatch(loadAction());
  },
});

const homeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default homeContainer;
