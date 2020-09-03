import Api from "../api/api";

export const setLoadingOn = () => ({type: "SET_TRUE", payload: true});
export const setLoadingOff = () => ({type: "SET_FALSE", payload: false});

export const setRefreshOn = () => ({type: "SET_REFRESH_TRUE", payload: true});
export const setRefreshOff = () => ({type: "SET_REFRESH_FALSE", payload: false});

export const setData = (data) => ({type: "SET_DATA", payload: data});
export const updateData = (limit, offset) => async (dispatch) => {
    try {
        dispatch(setLoadingOn());
        let retorno = await new Api().getData(limit, offset)
        if (retorno != undefined) {
            dispatch(setData(retorno));
        }
        dispatch(setLoadingOff());
    } catch (error) {
        dispatch(setLoadingOff());
        return {status: "erro", mensagem: error.response}
    }
};

export const setStatus = (data) => ({type: "SET_STATUS", payload: data});
export const updateStatus = () => async (dispatch) => {
    try {
        let retorno = await new Api().updateStatus()
        dispatch(setStatus(retorno));
    } catch (error) {
        return {status: "erro", mensagem: error.response}
    }
};

export const cleanTable = () => async (dispatch) => {
    try {
        dispatch(setLoadingOn());
        await new Api().cleanTable()
        dispatch(setLoadingOff());
        dispatch(setRefreshOn());
    } catch (error) {
        dispatch(setLoadingOff());
        return {status: "erro", mensagem: error.response.data.message}
    }
}

export const addNewLink = (url) => async (dispatch) => {
    try {
        dispatch(setLoadingOn());
        await new Api().addNewLink(0, "Main Job", 0, url)
        dispatch(setLoadingOff());
        dispatch(setRefreshOn());
    } catch (error) {
        dispatch(setLoadingOff());
        return {status: "erro", mensagem: error.response.data.message}
    }
}
