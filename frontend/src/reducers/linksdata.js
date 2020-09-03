const initialState = {
    linksdata: []
}

const linksdata = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return {
                linksdata: action.payload
            }
        default:
            return state
    }
}

export default linksdata