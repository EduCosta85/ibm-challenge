import React from 'react';
import {connect} from "react-redux";
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

function Loading(props) {
    return (
        <>
            <Backdrop style={ {zIndex: 10} } open={props.LoadState}>
                <CircularProgress color="primary"/>
            </Backdrop>
        </>
    );
}

const mapStateToProps = state => ({LoadState: state.loading.status});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Loading);
