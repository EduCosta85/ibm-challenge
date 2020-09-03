import React, { useState } from "react";
import {connect} from "react-redux";
import {updateData, addNewLink} from '../../actions/actions'
import {TopWrapper, TopLogo, TopActions, ButtonStyled, TextFieldStyled} from './styled'
import Typography from '@material-ui/core/Typography';

function TopBar(props) {

    const [values, setValues] = useState({});
    const [error, setError] = useState(false);

    const handleInputChange = event => {
        setValues({ ...values, [event.target.name]: event.target.value });
        setError(false)
    };

    const handleSubmit = event => {
        if (values['urlfield'] != undefined) {
            if ((values['urlfield']).startsWith('http://www')) {
                setValues({urlfield: ""})
                props.addNewLink(values['urlfield'])
                setTimeout(() => {
                    props.updateData(10, 0)
                }, 2000);
            } else {
                setError(true)
            }
        }
    };

    return (<>
    <TopWrapper>
        <TopLogo>
            <Typography variant='h3' >Links Crawler</Typography>
        </TopLogo>
        <TopActions>
            <TextFieldStyled error={error} name={'urlfield'} value={values['urlfield']} onChange={handleInputChange} label="type url" variant="filled" />
            <ButtonStyled onClick={handleSubmit} variant='contained' color='primary'>Add</ButtonStyled>
        </TopActions>
    </TopWrapper>
    </>)
}
const mapStateToProps = state => ({links: state.linksdata.linksdata});
const mapDispatchToProps = dispatch => ({
    addNewLink: (url) => dispatch(addNewLink(url)),
    updateData: (limit, offset) => dispatch(updateData(limit, offset))
});

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);