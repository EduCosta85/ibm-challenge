import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {updateData} from '../../actions/actions'
import Pagination from '@material-ui/lab/Pagination';
import Line from './Line'
import {Wrapper} from './style'

function Main(props) {
    let limit = 10
    const handlePageChange = async (offset) => {
        props.updateData(limit, offset)
    }
    useEffect(() => {
        handlePageChange(0)
    }, [])

    const handlePagination = async (e) => {
        handlePageChange((Number(e.target.innerText)-1)*limit)
    }

    return (<>
        <Wrapper>
            {props.links && props.links.data && props.links.data.map((item, index) => {
                return <Line 
                    index={index}
                    qtd={item.qtd_links}
                    status={item.status}
                    url={item.url}
                />
            })}
                    {props.status && props.status.status && props.status.status[0] &&
            <Pagination count={Math.ceil(props.status.status[0].total / limit || 0)} color='secondary' onChange={handlePagination} />
        }
        </Wrapper>
    </>);
}

const mapStateToProps = state => ({links: state.linksdata.linksdata, status: state.status});
const mapDispatchToProps = dispatch => ({
    updateData: (limit, offset) => dispatch(updateData(limit, offset))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
