
const Reducer = (state, action) =>{
    switch (action.type){
        case 'ADD_POST':
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            };
        default:
            return state
    }
};

export default Reducer;