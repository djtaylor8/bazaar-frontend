import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function Error() {
  const [open, setOpen] = React.useState(true);


  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        open={open}
        autoHideDuration={3000}
        message="Login failed. Please try again."
      />
    </div>
  );
}