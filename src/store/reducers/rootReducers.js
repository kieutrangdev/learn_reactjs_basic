const initState = {
    users: [
        {id:1, name: "Trang"}
    ],
    posts: []
}

const rootReducer = (state = initState, action) => {
    
    switch (action.type) {
        case 'DELETE_USER':
                   
            let users = state.users
            users = users.filter(item => item.id !== action.padload.id)
            return {...state,users};

        case 'CREATE_USER':
            let id =   Math.floor(Math.random() *10001)
            let user = {id: id, name: `random - ${id}` }
    
            return {...state,users:[...state.users, user] };
        default:
            return state;
    }
    
    
}

export default rootReducer;