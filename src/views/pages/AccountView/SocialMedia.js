import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useSnackbar } from 'notistack';
import Modal from 'react-modal';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormHelperText,
  Grid,
  TextField,
  Paper,
  InputBase,
  makeStyles,
  Typography
} from '@material-ui/core';
import wait from 'src/utils/wait';

const useStyles = makeStyles(() => ({
  root: {},
  paper: {
    border: '1px 1px 0px solid black',
    height:'105px',
    borderRadius:"1px",
    display:'flex'
  },
  labelName: {
     marginLeft:"15px",
     marginTop:"15px",
     fontWeight:'450'
  },
  input:{
    marginLeft:'15px',
    maxWidth:'700px',
    minWidth:"400px"
  },
  btngrid: {
    textAlign:'end'
  },
  margin: {
    marginTop:'34px',
    marginRight:'20px'
  },
  margin1 :{
    marginTop:'34px',
    marginRight:'20px',
    "@media (max-width:500px)": {
      marginTop:'60px'
    }
  },
  text: {
     marginLeft:'15px',
     color:'gray',
     fontSize:'13px',
     marginTop:'5px'
  }
  // modal: {
  //   width: '50%',
  //   height: '50%',
  //   display: 'flex',
  //   justifyContent:'center',
  // }
}));

function SocialMedia({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Formik
      initialValues={{
        password: '',
        passwordConfirm: ''
      }}
      validationSchema={Yup.object().shape({
        password: Yup.string()
          .min(7, 'Must be at least 7 characters')
          .max(255)
          .required('Required'),
        passwordConfirm: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Required')
      })}
      onSubmit={async (values, {
        resetForm,
        setErrors,
        setStatus,
        setSubmitting
      }) => {
        try {
          // Make API request
          await wait(500);
          resetForm();
          setStatus({ success: true });
          setSubmitting(false);
          enqueueSnackbar('Password updated', {
            variant: 'success'
          });
        } catch (error) {
          setStatus({ success: false });
          setErrors({ submit: error.message });
          setSubmitting(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <Card
            className={clsx(classes.root, className)}
            {...rest}
          >
            <CardHeader title="Social Media" />
            <Divider />
            <CardContent>
            
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                >
                
              <Paper component="form" className={classes.paper}>
                   <Grid
                  item
                  xs={8}
                  sm={8}
                  md={9}
                  lg={10}
                  
                  >
                   <Typography className={classes.labelName} >
                   Google
                   </Typography>
                   <Typography
                   className={classes.text}
                   >
                   Click the "Connect" button to begin connecting your account to Google
                   </Typography>
                    </Grid>
                    <Grid
                      item
                        xs={3}
                        sm={3}
                        md={3}
                        lg={2}
                        className={classes.btngrid}
                        >
                    <Button size="small"
                     className={classes.margin1}
                     >
                       Connect
                    </Button>
                    </Grid>
                </Paper> 
                <Paper component="form" className={classes.paper}>
                   <Grid
                  item
                  xs={8}
                  sm={8}
                  md={9}
                  lg={10}
                  
                  >
                   <Typography className={classes.labelName} >
                   Facebook
                   </Typography>
                   <Typography
                   className={classes.text}
                   >
                   Click the "Connect" button to begin connecting your account to Facebook
                   </Typography>
                    </Grid>
                    <Grid
                      item
                        xs={3}
                        sm={3}
                        md={3}
                        lg={2}
                        className={classes.btngrid}
                        >
                    <Button size="small" className={classes.margin1}>
                       Connect
                    </Button>
                    </Grid>
                </Paper> 
                <Paper component="form" className={classes.paper}>
                   <Grid
                  item
                  xs={8}
                  sm={8}
                  md={9}
                  lg={10}
                  
                  >
                   <Typography className={classes.labelName} >
                   Instagram
                   </Typography>
                   <Typography
                   className={classes.text}
                   >
                   Click the "Connect" button to begin connecting your account to Instagram
                   </Typography>
                    </Grid>
                    <Grid
                      item
                        xs={3}
                        sm={3}
                        md={3}
                        lg={2}
                        className={classes.btngrid}
                        >
                    <Button size="small" className={classes.margin1}>
                       Connect
                    </Button>
                    </Grid>
                </Paper> 
                <Paper component="form" className={classes.paper}>
                   <Grid
                  item
                  xs={8}
                  sm={8}
                  md={9}
                  lg={10}
                  
                  >
                   <Typography className={classes.labelName} >
                   Twitter
                   </Typography>
                   <Typography
                   className={classes.text}
                   >
                   Click the "Connect" button to begin connecting your account to Twitter
                   </Typography>
                    </Grid>
                    <Grid
                      item
                        xs={3}
                        sm={3}
                        md={3}
                        lg={2}
                        className={classes.btngrid}
                        >
                    <Button size="small" className={classes.margin1}>
                       Connect
                    </Button>
                    </Grid>
                </Paper>
                <Paper component="form" className={classes.paper}>
                   <Grid
                  item
                  xs={8}
                  sm={8}
                  md={9}
                  lg={10}
                  
                  >
                  <Typography className={classes.labelName} >
                   Pinterest
                   </Typography>
                   <Typography
                   className={classes.text}
                   >
                   Click the "Connect" button to begin connecting your account to Pinterest
                   </Typography>
                    </Grid>
                    <Grid
                      item
                        xs={3}
                        sm={3}
                        md={3}
                        lg={2}
                        className={classes.btngrid}
                        >
                    <Button size="small" className={classes.margin1}>
                       Connect
                    </Button>
                    </Grid>
                </Paper> 
                </Grid>
               
              </Grid>
              {errors.submit && (
                <Box mt={3}>
                  <FormHelperText error>
                    {errors.submit}
                  </FormHelperText>
                </Box>
              )}
            </CardContent>
            <Divider />
          </Card>
        </form>
      )}
    </Formik>
  );
}

SocialMedia.propTypes = {
  className: PropTypes.string
};

export default SocialMedia;
