import React from 'react';
import { useHistory } from 'react-router-dom'
import { GoogleLogout } from 'react-google-login';
import { Grid, IconButton } from '@material-ui/core';
import LogoutIcon from '@mui/icons-material/Logout';


interface Props {
  logout: () => void;
}

const Logout: React.FC<Props> = ({ logout }) => {
  let history = useHistory()

  const logoutUser = () => {
    logout()
    history.push('/')
  }

  return (
    <div>
      <Grid container justifyContent="center">
        <GoogleLogout
          clientId='8013933409-b2i0rd6n1i5i67hen1k874pqdjr4oj4r.apps.googleusercontent.com'
          render={renderProps => (
            <IconButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
              <LogoutIcon style={{ fontSize: 'small' }}/>
            </IconButton>
          )}
          onLogoutSuccess={logoutUser}
        /> 
      </Grid>
    </div>
  );
};
  
export default Logout;