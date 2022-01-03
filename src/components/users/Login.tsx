import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Grid } from '@material-ui/core'
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';

interface Props {
  login: (response: {}) => void;
}

const Login: React.FC<Props> = ({ login }) => {

  const responseGoogle = (response: {}) => {
    login(response)
  }

  return (
    <div>
      <Grid container justifyContent="center">
        <GoogleLogin 
          clientId='8013933409-b2i0rd6n1i5i67hen1k874pqdjr4oj4r.apps.googleusercontent.com'
          render={renderProps => (
            <IconButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
              <GoogleIcon style={{ color: '#fff' }}/>
            </IconButton>
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
