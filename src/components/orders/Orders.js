import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Grid } from '@material-ui/core'
import moment from 'moment'

export default function OrdersHistory(props) {

    const { orderHistory } = props.user

  return (
    <Grid container direction='column' style={{ maxWidth: 800, margin: '0 auto', marginTop: '5rem', marginBottom: '5rem' }} >
    <div>
    {orderHistory.reverse().map((order) => (
    <div key={order.id}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Order No. {order.id} - {moment(`${order.created_at}`).format('M/DD/YYYY')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>Order Total: ${(order.total/100).toFixed(2)}</div>
            <hr></hr>
            <div>
                Shipping Address:
                <div>{order.address}</div>
                <div>{order.city}, {order.state}</div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
      ))}
    </div>
    </Grid>
  );
}
