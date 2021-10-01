import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { Grid } from '@material-ui/core'


const Login = (props) => {

    const responseGoogle = (response) => {
        // let id_token = response.getAuthResponse().id_token;

        // console.log(response)
        props.login(response)
    }

    return (
        <div>
        <Grid container justify="center">
           <GoogleLogin 
            clientId='8013933409-b2i0rd6n1i5i67hen1k874pqdjr4oj4r.apps.googleusercontent.com'
            buttonText='Sign in with Google'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
           /> 
        </Grid>
        </div>

    );
};

export default Login;