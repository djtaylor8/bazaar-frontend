import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import moment from 'moment'

export default function Orders(props) {

    const { orderHistory } = props.user
    debugger;

  return (
    <div>
    {orderHistory.map((order) => (
    <div key={order.id}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Order No. {order.id} - {moment(`${order.created_at}`).format('M/DD/YYYY')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div>Order Total: ${(order.total/100).toFixed(2)}</div>
            <div>
                Shipping Address
                <hr></hr>
                <div>{order.address}</div>
                <div>{order.city}</div>
                <div>{order.state}</div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
      ))}
    </div>
  );
}
