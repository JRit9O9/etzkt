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


const cityOptions = ['Alabama', 'New York', 'San Francisco'];

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
     marginTop:"7px",
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
    },
  },
  modalHead: {
    textAlign:'center',
    fontSize:'20px',
    fontWeight:'bold'
  },
  // modal: {
  //   width: '50%',
  //   height: '50%',
  //   display: 'flex',
  //   justifyContent:'center',
  // }
}));

function Security({ className, ...rest }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen1, setModalIsOpen1] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);
  const [modalIsOpen3, setModalIsOpen3] = useState(false);


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
            <CardHeader title="Security Settings" />
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
                   Account Password
                   </Typography>
                   <InputBase
                    className={classes.input}
                    placeholder="Current password strength : Strong"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    />
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
                     onClick={() => setModalIsOpen(true)}
                     >
                       Modify
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
                   Phone Number
                   </Typography>
                   <InputBase
                    className={classes.input}
                    placeholder="india: +91"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    />
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
                     className={classes.margin}
                     onClick={() => setModalIsOpen1(true)}
                     >
                       Modify
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
                   Backup Email
                   </Typography>
                   <InputBase
                    className={classes.input}
                    placeholder="developer@domain.pro"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    />
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
                     className={classes.margin}
                     onClick={() => setModalIsOpen2(true)}
                     >
                       Modify
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
                   Address
                   </Typography>
                   <InputBase
                    className={classes.input}
                    placeholder="location : "
                    inputProps={{ 'aria-label': 'search google maps' }}
                    />
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
                    className={classes.margin}
                    onClick={() => setModalIsOpen3(true)}
                    >
                       Modify
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
                   MFA Device
                   </Typography>
                   <InputBase
                    className={classes.input}
                    placeholder="Disabled "
                    inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    </Grid>
                    <Grid
                      item
                        xs={3}
                        sm={3}
                        md={3}
                        lg={2}
                        className={classes.btngrid}
                        >
                    <Button size="small" className={classes.margin}>
                       Connect
                    </Button>
                    </Grid>
                </Paper> 
                </Grid>
                <Modal 
                isOpen={modalIsOpen}
                className={classes.modal}
                onRequestClose={() => setModalIsOpen(false) }
                style={{
                   overlay: {
                     backgroundColor:'lightgray',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center'
                   },
                   content: {
                     padding:'25px',
                     position:'',
                     alignItems:'center',
                     justifyContent:'center'
                   }
                }}
                 >
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
        <Typography 
         className={classes.modalHead}
         >
          Change Password
        </Typography>
                <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="Current Password"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                    style={{marginTop:"30px"}}
                  /> 
                <TextField
                    error={Boolean(touched.password && errors.password)}
                    fullWidth
                    helperText={touched.password && errors.password}
                    label="New Password"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.password}
                    variant="outlined"
                    style={{marginTop:"30px"}}
                  />
                  <TextField
                    error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
                    fullWidth
                    label="Password Confirmation"
                    name="passwordConfirm"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.passwordConfirm}
                    variant="outlined"
                    style={{marginTop:"30px"}}
                  />
                   {errors.submit && (
                <Box mt={3}>
                  <FormHelperText error>
                    {errors.submit}
                  </FormHelperText>
                </Box>
              )}
              <Box 
              style={{
                textAlign:'end',
                border:'0px #fff'
              }}
              >
              <Button size="small"
               style={{
                 marginTop:'30px',
                 marginRight:'30px'
               }}
               onClick={()=> setModalIsOpen(false)}
               >
                 Cancel
              </Button>
              <Button
                color="secondary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                style={{
                  marginTop:'30px'
                }}
              >
                Confirm
              </Button>
              </Box>
              </form>
               )}
              </Formik>
                </Modal>
                <Modal 
                isOpen={modalIsOpen1}
                className={classes.modal}
                onRequestClose={() => setModalIsOpen1(false) }
                style={{
                   overlay: {
                     backgroundColor:'lightgray',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center'
                   },
                   content: {
                     padding:'25px',
                     position:'',
                     alignItems:'center',
                     justifyContent:'center'
                   }
                }}
                 >
                 <form onSubmit={handleSubmit}>
                  <Typography 
                    className={classes.modalHead}
                  >
                     Change Phone No.
                  </Typography>
                   <TextField
                    fullWidth
                    label="Phone Number"
                    name="phoneNo"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="phoneNo"
                    value={values.phoneNo}
                    variant="outlined"
                    style={{
                      marginTop:'30px',
                      maxWidth:'600px',
                      minWidth:'400px'
                    }}
                  />
                  <Box style={{textAlign:'end'}}>
              <Button size="small"
               style={{
                 marginTop:'30px',
                 marginRight:'30px'
               }}
               onClick={()=> setModalIsOpen1(false)}
               >
                 Cancel
              </Button>
              <Button
                color="secondary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                style={{
                  marginTop:'30px'
                }}
              >
                Confirm
              </Button>
              </Box>
              </form>
                 </Modal>
                <Modal 
                isOpen={modalIsOpen2}
                className={classes.modal}
                onRequestClose={() => setModalIsOpen2(false) }
                style={{
                   overlay: {
                     backgroundColor:'lightgray',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center'
                   },
                   content: {
                     padding:'25px',
                     position:'',
                     alignItems:'center',
                     justifyContent:'center'
                   }
                }}
                 >
                 <form onSubmit={handleSubmit}>
                  <Typography 
                    className={classes.modalHead}
                  >
                     Backup Email Address
                  </Typography>
                   <TextField
                    fullWidth
                    label="Backup Email"
                    name="backUpEmail"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="Email"
                    value={values.backUpEmail}
                    variant="outlined"
                    style={{
                      marginTop:'30px',
                      maxWidth:'600px',
                      minWidth:'400px'
                    }}
                  />
                  <Box 
              style={{
                textAlign:'end',
                border:'0px #fff'
              }}
              >
              <Button size="small"
               style={{
                 marginTop:'30px',
                 marginRight:'30px'
               }}
               onClick={()=> setModalIsOpen2(false)}
               >
                 Cancel
              </Button>
              <Button
                color="secondary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                style={{
                  marginTop:'30px'
                }}
              >
                Confirm
              </Button>
              </Box>
              </form>
                 </Modal>
                <Modal 
                isOpen={modalIsOpen3}
                className={classes.modal}
                onRequestClose={() => setModalIsOpen3(false) }
                style={{
                   overlay: {
                     backgroundColor:'lightgray',
                     display: 'flex',
                     justifyContent: 'center',
                     alignItems: 'center'
                   },
                   content: {
                     padding:'25px',
                     position:'',
                     alignItems:'center',
                     justifyContent:'center'
                   }
                }}
                 >
                 <form onSubmit={handleSubmit}>
                  <Typography 
                    className={classes.modalHead}
                  >
                     Change Address
                  </Typography>
                   <TextField
                    fullWidth
                    label="Address - 1"
                    name="address1"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="address"
                    value={values.address1}
                    variant="outlined"
                    style={{
                      marginTop:'30px'
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Address - 2"
                    name="address2"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="address"
                    value={values.address2}
                    variant="outlined"
                    style={{
                      marginTop:'30px'
                    }}
                  />
                  <Grid container spacing={2}
                  style={{
                    display:'flex',
                    marginTop:'30px'
                  }}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                 <TextField
                    fullWidth
                    label="City"
                    name="City"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    value={values.city}
                    variant="outlined"
                  >
                   {cityOptions.map((state) => (
                      <option
                        key={state}
                        value={state}
                      >
                        {state}
                      </option>
                    ))}   

                  </TextField> 
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                 <TextField
                    fullWidth
                    label="City"
                    name="City"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    value={values.city}
                    variant="outlined"
                  >
                   {cityOptions.map((state) => (
                      <option
                        key={state}
                        value={state}
                      >
                        {state}
                      </option>
                    ))}   

                  </TextField> 
                </Grid>
                  </Grid>
                  <Grid container spacing={2}
                  style={{
                    display:'flex',
                    marginTop:'30px'
                  }}>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                 <TextField
                    fullWidth
                    label="City"
                    name="City"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    value={values.city}
                    variant="outlined"
                  >
                   {cityOptions.map((state) => (
                      <option
                        key={state}
                        value={state}
                      >
                        {state}
                      </option>
                    ))}   

                  </TextField> 
                </Grid>
                <Grid
                  item
                  md={6}
                  xs={12}
                >
                 <TextField
                    fullWidth
                    label="City"
                    name="City"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    value={values.city}
                    variant="outlined"
                  >
                   {cityOptions.map((state) => (
                      <option
                        key={state}
                        value={state}
                      >
                        {state}
                      </option>
                    ))}   

                  </TextField> 
                </Grid>
                  </Grid>
                  
                  
                  <Box 
              style={{
                textAlign:'end',
                border:'0px #fff'
              }}
              >
              <Button size="small"
               style={{
                 marginTop:'30px',
                 marginRight:'30px'
               }}
               onClick={()=> setModalIsOpen3(false)}
               >
                 Cancel
              </Button>
              <Button
                color="secondary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
                style={{
                  marginTop:'30px'
                }}
              >
                Confirm
              </Button>
              </Box>
              </form>
                 </Modal>
                  
                
                  
                  {/* <TextField
                    error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
                    fullWidth
                    helperText={touched.passwordConfirm && errors.passwordConfirm}
                    label="Password Confirmation"
                    name="passwordConfirm"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.passwordConfirm}
                    variant="outlined"
                  />
                  <TextField
                    fullWidth
                    helperText={touched.passwordConfirm && errors.passwordConfirm}
                    label="Phone Number"
                    name="phoneNo"
                    multiline
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="phoneNo"
                    value={values.phoneNo}
                    variant="outlined"
                    rows={4}
                  /> */}
                  {/* <TextField
                    fullWidth
                    label="Backup Email"
                    name="backupEmail"
                    multiline
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.backupEmail}
                    variant="outlined"
                    rows={4}
                  />
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    multiline
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="address"
                    value={values.address}
                    variant="outlined"
                    rows={4}
                  /> */}
                  {/* <TextField
                    fullWidth
                    style={{color:"#fff"}}
                    // id="react-input"
                    label="MFA Device"
                    name="mfaDevice"
                    // defaultValue="Disabled"
                    multiline
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="mfaDevice"
                    value={values.mfaDevice}
                    variant="outlined"
                    rows={4}
                  /> */}
                {/* </Grid> */}
                {/* <Grid
                  item
                  md={12}
                  sm={12}
                  xs={12}
                >
                  <TextField
                    error={Boolean(touched.passwordConfirm && errors.passwordConfirm)}
                    fullWidth
                    label="Password Confirmation"
                    name="passwordConfirm"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="password"
                    value={values.passwordConfirm}
                    variant="outlined"
                    style={{
                      height:"3rem"
                    }}
                  >
                </Grid> */}
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
            <Box
              p={2}
              display="flex"
              justifyContent="flex-end"
            >
              {/* <Button
                color="secondary"
                disabled={isSubmitting}
                type="submit"
                variant="contained"
              >
                Change Password
              </Button> */}
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
}

Security.propTypes = {
  className: PropTypes.string
};

export default Security;
