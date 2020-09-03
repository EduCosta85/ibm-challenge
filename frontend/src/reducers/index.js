import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import linksdata from './linksdata'
import loading from './loading'
import needrefresh from './needrefresh'
import status from './status'


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    linksdata,
    loading,
    needrefresh,
    status,
  });
