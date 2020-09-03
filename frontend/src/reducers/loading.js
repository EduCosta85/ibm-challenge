const initialState = {
    status: false
}

const loading = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FALSE':
            return {
                status: false
            }
        case 'SET_TRUE':
            return {
                status: true
            }
        default:
            return state
    }
}

export default loading