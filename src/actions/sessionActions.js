export const googleLogin = (response) => {
    const token = response.tokenId

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
    .then(response => console.log(response))
}

