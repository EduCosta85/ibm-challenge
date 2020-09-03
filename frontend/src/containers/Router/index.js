import React from "react";
import {ConnectedRouter} from "connected-react-router";
import {Switch, Route} from "react-router-dom";
import {MainWrapper, CentralWrapper, LeftWrapper, RightWrapper} from './styled'
import Main from "../../containers/Main/Main";
import Status from '../../components/Status/Status'
import TopBar from '../TopBar/TopBar'
import Loading from '../../components/Loading/Loading'

export const routes = {
    root: "/",
};

const UnloggedView = (props) => {
    return   (<>
        <MainWrapper>
        <TopBar />
        <Status/>
        <CentralWrapper>
            {props.children}
        </CentralWrapper>
        <Loading />

    </MainWrapper>
    </>)      

    }

    function Router(props) {
        return (
            <ConnectedRouter history={props.history}>
                <Switch>
                    <UnloggedView>
                        <Route exact path={routes.root} component={Main}/>
                    </UnloggedView>
                </Switch>
            </ConnectedRouter>
        );
    }


export default Router;

