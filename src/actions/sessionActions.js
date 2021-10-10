export const googleLogin = (response) => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_USER' });
    const token = response.tokenId
    debugger;
    const requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${response.accessToken}`,
            'Content-Type': 'application/json',
            'access-token': `${response.accessToken}`
        },
        body: JSON.stringify(token)
    }
    return fetch('http://localhost:3000/api/v1/auth/request', requestOptions)
    .then(response => response.json())
    .then((responseJSON) => {
        if (!responseJSON.status) {
        dispatch({ type: 'LOGIN', user: responseJSON });
        localStorage.setItem('user', JSON.stringify(responseJSON));
        } else {
            dispatch({ type: 'LOGIN_ERROR', status: 'error' })
        }
    })
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
}

