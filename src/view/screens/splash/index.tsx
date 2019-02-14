import { connect } from 'react-redux';

import Component from './Component';
import { initAction } from '../../../../shared/redux/actions/initStateAction';
import { getLocationAction } from '../../../../shared/redux/actions/getLocationAction';

const mapStateToProps = (state) => ({
  locationError: state.weatherState.locationError,
});

const mapDispatchToProps = (dispatch) => ({
  initState: () => {
    dispatch(initAction());
  },
  getLocation: () => {
    dispatch(getLocationAction());
  },
});

const splashContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default splashContainer;
