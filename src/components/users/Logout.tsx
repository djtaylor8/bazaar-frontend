import React from 'react';
import { useHistory } from 'react-router-dom'
import { GoogleLogout } from 'react-google-login';
import { Grid } from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';



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
      <Grid container>
        <GoogleLogout
          clientId='8013933409-b2i0rd6n1i5i67hen1k874pqdjr4oj4r.apps.googleusercontent.com'
          render={renderProps => (
            <MenuItem style={{ background: 'none' }} onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign out</MenuItem>
          )}
          onLogoutSuccess={logoutUser}
        /> 
      </Grid>
    </div>
  );
};
  
export default Logout;