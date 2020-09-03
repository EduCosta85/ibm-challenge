const initialState = {
    status: []
}

const status = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_STATUS':
            return {
                status: action.payload
            }
        default:
            return state
    }
}

export default status