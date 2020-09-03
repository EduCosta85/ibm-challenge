import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import {updateData, cleanTable, updateStatus} from '../../actions/actions'
import Button from '@material-ui/core/Button';
import {Wrapper, TypographyStyled} from './styled'

function Status(props) {

    const handleCleanTable = async () => {
        props.cleanTable()
        setTimeout(() => {
            props.updateData(10, 0)
        }, 2000);
    }

    const handleUpdateStatus = async () => {
        setTimeout(() => {
            props.updateStatus()
            handleUpdateStatus()
        }, 2000);
        if (props.status && props.status.status && props.status.status[0] && (props.status.status[0].pending == 1) ) {
            props.updateData(10, 0)
        }
    }
    
    useEffect(() => {
        handleUpdateStatus()
    }, [])

    return (<Wrapper>
        {props.status && props.status.status && props.status.status[0] &&
            <>
                <TypographyStyled>
                    We already done {props.status.status[0].complete} links. But still {props.status.status[0].pending} remaining.
                </TypographyStyled>        
                <Button variant='outlined' onClick={() => {props.updateData(10, 0)}} >Refresh database</Button>
                <Button variant='outlined' onClick={() => {handleCleanTable()}} >Clear database</Button>
            </>
        || <TypographyStyled>No links stored</TypographyStyled>
        }


    </Wrapper>);
}

const mapStateToProps = state => ({links: state.linksdata.linksdata, status: state.status});
const mapDispatchToProps = dispatch => ({
    cleanTable: () => dispatch(cleanTable()),
    updateData: (limit, offset) => dispatch(updateData(limit, offset)),
    updateStatus: () => dispatch(updateStatus())
});

export default connect(mapStateToProps, mapDispatchToProps)(Status);

