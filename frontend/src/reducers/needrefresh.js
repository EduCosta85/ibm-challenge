const initialState = {
    status: false
}

const needrefresh = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_REFRESH_FALSE':
            return {
                status: false
            }
        case 'SET_REFRESH_TRUE':
            return {
                status: true
            }
        default:
            return state
    }
}

export default needrefresh