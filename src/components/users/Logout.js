import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { GoogleLogout } from 'react-google-login';
import { Grid } from '@material-ui/core'



const Logout = (props) => {
    let history = useHistory()

    const logoutUser = () => {
        props.logout()
        history.push('/')
    }

    return (
        <div>
        <Grid container justifyContent="center">
           <GoogleLogout
            clientId='8013933409-b2i0rd6n1i5i67hen1k874pqdjr4oj4r.apps.googleusercontent.com'
            buttonText='Logout'
            onLogoutSuccess={logoutUser}
            cookiePolicy={'single_host_origin'}
           /> 
        </Grid>
        </div>

    );
};
  
export default Logout;