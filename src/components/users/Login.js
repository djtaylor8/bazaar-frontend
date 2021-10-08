import React, { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Grid } from '@material-ui/core'
import GoogleIcon from '@mui/icons-material/Google';


const Login = (props) => {

    const responseGoogle = (response) => {
        props.login(response)
    }

    return (
        <div>
        <Grid container justifyContent="center">
           <GoogleLogin 
            clientId='8013933409-b2i0rd6n1i5i67hen1k874pqdjr4oj4r.apps.googleusercontent.com'
            render={renderProps => (
                <GoogleIcon onClick={renderProps.onClick} disabled={renderProps.disabled}/>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
           /> 
        </Grid>
        </div>

    );
};
  
export default Login;
