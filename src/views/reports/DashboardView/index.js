import React from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  makeStyles
} from '@material-ui/core';
import { useSelector } from 'react-redux';
import Page from 'src/components/Page';
import Header from './Header';
import LatestProjects from './LatestProjects';
import NewProjects from './NewProjects';
import PerformanceOverTime from './PerformanceOverTime';
import RealTime from './RealTime';
import RoiPerCustomer from './RoiPerCustomer';
import SystemHealth from './SystemHealth';
import TeamTasks from './TeamTasks';
import TodaysMoney from './TodaysMoney';
import typography from 'src/theme/typography';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  container: {
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 64,
      paddingRight: 64
    }
  },
  grid1: {
    flexGrow: 1,
    backgroundColor: '#fff',
    width: '100%',
    marginTop: '60px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: theme.palette.background.dark
  },
  paper1:{
    padding: theme.spacing(2),
    textAlign: 'center',
    border: '0px solid #fff'
  },
  margin: {
    margin: theme.spacing(1),
    height: '3rem',
    alignItems: 'center',
    maxWidth:'300px',
    minWidth:"210px"
  },
}));

function DashboardView() {
  const classes = useStyles();
  const { user } = useSelector((state) => state.account);
  var d = new Date();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container
        maxWidth={false}
        className={classes.container}
      >
    <div>
      <br></br>
      <Typography color="textPrimary" style={{fontSize:"40px"}} >
         Hello there, {`${user.firstName}`}
      </Typography><br></br>
      <Typography color="textSecondary">
        Welcome to your Eatiz dashboard, From this page you can can view connections and setup and
        manage your food share listings in one place. we will be rolling out more features to this in the coming months.
      </Typography><br></br>
      <Typography color="textSecondary">
        if you have any Questions please contact the team at hello@eatiz.org
      </Typography>
    </div>
    {/* <div className={classes.grid1}>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
         <Typography color="textPrimary" style={{
           fontWeight:"430",
            fontSize:"18px",
            textAlign:"center"}} >
           South Fraser Charities Org.
         </Typography> 
         <Typography color="textSecondary"
         style={{
          textAlign:"center",
          fontSize:"14px",
          marginTop:"10px"
         }}>
           Update profile now
         </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
          <i class="far fa-comments fa-6x"></i>
          <Typography color="textSecondary"
         style={{
          textAlign:"center",
          fontSize:"14px",
          marginTop:"20px"
         }}>
           3 new messages
         </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper className={classes.paper}>
          <i class="fab fa-angellist fa-6x" ></i>
          <Typography color="textSecondary"
         style={{
          textAlign:"center",
          fontSize:"14px",
          marginTop:"20px"
         }}>
           0 Customer reviews
         </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} style={{textAlign:"center"}} >
        <Typography color="textSecondary"
         style={{
          textAlign:"center",
          fontSize:"14px",
          marginTop:"10px"
         }}>
           What would you like to do?
         </Typography>
         <Button variant="contained"
          size="large" 
          color="primary" 
          className={classes.margin}
          style={{
            position:"relative",
            marginTop:"20px"
          }}>
         <Typography
         style={{
          textAlign:"center",
          fontSize:"14px",
         }}>
           Create new listing
         </Typography> 
        </Button>
        <Button variant="outlined" size="large" color="primary" className={classes.margin}>
          View Shared Listings
        </Button>
        
        </Grid>
      </Grid>
      </div> */}
      <div style={{textAlign:"center", color:"#C0C0C0", width:"100%", marginTop:"500px", fontSize:"14px"}} >
      Copyright &copy; {d.getFullYear()}  Eatiz Inc.
    </div>
    </Container> 
    </Page>
    //   className={classes.root}
    //   title="Dashboard"
    // >
    //   <Container
    //     maxWidth={false}
    //     className={classes.container}
    //   >
    //     <Header />
    //     <Grid
    //       container
    //       spacing={3}
    //     >
    //       <Grid
    //         item
    //         lg={3}
    //         sm={6}
    //         xs={12}
    //       >
    //         {/* <TodaysMoney /> */}
    //       </Grid>
    //       <Grid
    //         item
    //         lg={3}
    //         sm={6}
    //         xs={12}
    //       >
    //         <NewProjects />
    //       </Grid>
    //       <Grid
    //         item
    //         lg={3}
    //         sm={6}
    //         xs={12}
    //       >
    //         <SystemHealth />
    //       </Grid>
    //       <Grid
    //         item
    //         lg={3}
    //         sm={6}
    //         xs={12}
    //       >
    //         <RoiPerCustomer />
    //       </Grid>
    //       <Grid
    //         item
    //         lg={3}
    //         xs={12}
    //       >
    //         <RealTime />
    //       </Grid>
    //       <Grid
    //         item
    //         lg={9}
    //         xs={12}
    //       >
    //         <PerformanceOverTime />
    //       </Grid>
    //       <Grid
    //         item
    //         lg={5}
    //         xl={4}
    //         xs={12}
    //       >
    //         <TeamTasks />
    //       </Grid>
    //       <Grid
    //         item
    //         lg={7}
    //         xl={8}
    //         xs={12}
    //       >
    //         <LatestProjects />
    //       </Grid>
    //     </Grid>
    //   </Container>
    // </Page>
  );
}

export default DashboardView;
