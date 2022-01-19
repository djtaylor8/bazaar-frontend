import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@material-ui/core";
import moment from "moment";

interface Props {
  user: {
    orderHistory: orderHistory[];
  };
}

interface orderHistory {
  address: string;
  city: string;
  state: string;
  created_at: string;
  order_number: number;
  id: number;
  total: number;
  user_id: number;
}

const OrdersHistory: React.FC<Props> = ({ user }) => {
  const { orderHistory } = user;
  orderHistory.sort((a: any, b: any) => (b.created_at > a.created_at ? 1 : -1));

  // eslint-disable-next-line no-debugger
  debugger;

  return (
    <Grid
      container
      direction="column"
      style={{
        maxWidth: 800,
        margin: "0 auto",
        marginTop: "5rem",
        marginBottom: "5rem",
        alignItems: "center",
      }}
    >
      {orderHistory.length === 0 && (
        <Grid item>
          <div>
            <Typography variant="h5">No orders yet.</Typography>
          </div>
        </Grid>
      )}
      <div>
        {orderHistory.map((order, idx) => (
          <div key={idx} style={{ marginBottom: "1rem" }}>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  Order No. {order?.order_number} -{" "}
                  {moment(`${order?.created_at}`).format("M/DD/YYYY")}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <div>Total: ${(order?.total / 100).toFixed(2)}</div>
                  <hr></hr>
                  <div>
                    Shipping Address:
                    <div>{order?.address}</div>
                    <div>
                      {order?.city}, {order?.state}
                    </div>
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </Grid>
  );
};

export default OrdersHistory;
