export const loginReducer=(state,action)=>{
    debugger;
    switch (action.type) {
        case 'update-login': {
            if (state && state.login) {
                state.login.tempLoginField = action.newLogin;
            }
            break; 
        }
        case 'update-password': {
            if (state && state.login) {
                state.login.tempPasswordField = action.newPassword;
            }
            break; 
        }
        default:
    }
    return state;
}

export default loginReducer;