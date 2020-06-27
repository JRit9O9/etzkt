import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Paper,
  Typography,
  Switch,
  makeStyles
} from '@material-ui/core';
import wait from 'src/utils/wait';

const useStyles = makeStyles(() => ({
  root: {},
  paper: {
    border: '1px 1px 0px solid black',
    height:'100px',
    borderRadius:"1px",
    display:'flex'
  },
  labelName: {
    marginTop:'20px',
    marginLeft:'15px',
    fontWeight:'420',
    "@media (max-width:880px)":{
      marginTop:'10px'
    }
  },
  text: {
    fontSize:'14px',
    color:'grey',
    marginTop:'5px',
    marginLeft:'15px',
    "@media (max-width:880px)": {
      fontSize:'12px',
      marginTop:'2px'
    }
  },
  switch: {
    marginTop:'30px'
  },
  btngrid:{
    textAlign:'end'
  }
}));

function Notifications({ className, ...rest }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Make API request
    await wait(500);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card
        className={clsx(classes.root, className)}
        {...rest}
      >
        <CardHeader title="Notifications" />
        <Divider />
        <CardContent>
            
           <Grid
            container
            spacing={6}
            wrap="wrap"
          >
            <Grid
              item
              md={12}
              sm={12}
              xs={12}>
            <Paper component="form" className={classes.paper}>
                   <Grid
                  item
                  xs={10}
                  sm={10}
                  md={10}
                  lg={10}
                  
                  >
                   <Typography className={classes.labelName} >
                   Message notification
                   </Typography>
                   <Typography className={classes.text} >
                     Notifications when people message you on Eatiz
                   </Typography>
                   
                    </Grid>
                    <Grid
                      item
                        xs={2}
                        sm={2}
                        md={2}
                        lg={2}
                        className={classes.btngrid}
                        >
                     <Switch
                        checked={state.checkedA}
                        onChange={handleChange}
                        color="primary"
                        name="checkedA"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        className={classes.switch}
                     />
                    </Grid>
                    </Paper>
                    <Paper component="form" className={classes.paper}>
                   <Grid
                  item
                  xs={10}
                  sm={10}
                  md={10}
                  lg={10}
                  
                  >
                   <Typography className={classes.labelName} >
                   Policy and community notifications
                   </Typography>
                   <Typography className={classes.text} >
                     Recieve updates on food sharing regulations and stay informed about advocacy efforts
                     to create fair, responsible food sharing laws in your community.
                   </Typography>
                   
                    </Grid>
                    <Grid
                      item
                        xs={2}
                        sm={2}
                        md={2}
                        lg={2}
                        className={classes.btngrid}
                        >
                    <Switch
                        checked={state.checkedB}
                        onChange={handleChange}
                        color="primary"
                        name="checkedB"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        className={classes.switch}
                     />
                    </Grid>
                    </Paper>
                    <Paper component="form" className={classes.paper}>
                   <Grid
                  item
                  xs={10}
                  sm={10}
                  md={10}
                  lg={10}
                  
                  >
                   <Typography className={classes.labelName} >
                   Promotion and tips
                   </Typography>
                   <Typography className={classes.text} >
                     Recieve coupons, promotions, surveys, product updates, and inspiration
                     from Eatiz and its partners.
                   </Typography>
                   
                    </Grid>
                    <Grid
                      item
                        xs={2}
                        sm={2}
                        md={2}
                        lg={2}
                        className={classes.btngrid}
                        >
                    <Switch 
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    className={classes.switch}
                     />
                    </Grid>
                    </Paper>
                    </Grid>
            </Grid>
              {/*<Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
              >
                System
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
              >
                You will recieve emails in your business email address
              </Typography>
              <div>
                <FormControlLabel
                  control={(
                    <Checkbox defaultChecked />
                  )}
                  label="Email alerts"
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Push Notifications"
                />
              </div>
              <div>
                <FormControlLabel
                  control={(
                    <Checkbox defaultChecked />
                  )}
                  label="Text message"
                />
              </div>
              <div>
                <FormControlLabel
                  control={(
                    <Checkbox defaultChecked />
                  )}
                  label={(
                    <>
                      <Typography
                        variant="body1"
                        color="textPrimary"
                      >
                        Phone calls
                      </Typography>
                      <Typography variant="caption">
                        Short voice phone updating you
                      </Typography>
                    </>
                  )}
                />
              </div>
            </Grid>
            <Grid
              item
              md={4}
              sm={6}
              xs={12}
            >
              <Typography
                gutterBottom
                variant="h6"
                color="textPrimary"
              >
                Chat App
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                color="textSecondary"
              >
                You will recieve emails in your business email address
              </Typography>
              <div>
                <FormControlLabel
                  control={(
                    <Checkbox defaultChecked />
                  )}
                  label="Email"
                />
              </div>
              <div>
                <FormControlLabel
                  control={(
                    <Checkbox defaultChecked />
                  )}
                  label="Push notifications"
                />
              </div>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          p={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            color="secondary"
            type="submit"
            variant="contained"
          >
            Save Settings
          </Button>
        </Box> */}
        </CardContent>
      </Card>
    </form>
  );
}

Notifications.propTypes = {
  className: PropTypes.string
};

export default Notifications;
