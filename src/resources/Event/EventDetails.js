import React from 'react';
import { Show, SimpleShowLayout, TextField, useTranslate, ImageField } from 'react-admin';

import { Button, makeStyles, Typography, Box, Avatar, Card } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ShareIcon from '@material-ui/icons/Share';
import Container from '@material-ui/core/Container';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PropTypes from 'prop-types';
import ContactField from '../../commons/fields/ContactField';





const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 24,
    display: 'block',
    width: '100%'
  },
  title: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `radial-gradient(circle at 50% 10em, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
    color: theme.palette.primary.contrastText,
    height: 90,
    position: 'relative',
  },
  avatarWrapper: {
    position: 'absolute',
    margin: 15,
    top: 0,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70
  },
  block: {
    backgroundColor: 'white',
    paddingTop: 70,
    paddingBottom: 20,

  },
  text:{
    display: 'block'
  },
  actions:{
    display:'flex'
  },
  buttonAction:{
    flex:1
  }
}));





MessageDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};


function MessageDialog(props) {
  
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      
      <DialogTitle variant="h4" align="center" id="simple-dialog-title">
        Contacter &nbsp;
        <TextField variant="h4" align="center" source="vcard:given-name" />
      </DialogTitle>
      
      
      <ContactField label="Contacter la personne" source="dc:creator" context="id" />
    </Dialog>
  );
}








const EventDetails = (props) => {
  const classes = useStyles(props);
  const [open, setOpen] = React.useState(false);
  const translate = useTranslate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <Container className={classes.root}>
          <Box className={classes.title}>
            <Box className={classes.avatarWrapper} display="flex" justifyContent="center">
              <ImageField source="vcard:photo" className={classes.avatar}/>
            </Box>
          </Box>

          <Box className={classes.block}>
            <TextField variant="h4" className={classes.text} align="center" source="vcard:given-name" />
            <TextField variant="p" className={classes.text} align="center" source="vcard:note" />
          </Box>

          <ButtonGroup className={classes.actions} variant="contained" aria-label="outlined primary button group">
              <Button className={classes.buttonAction} color="secondary" onClick={handleClickOpen}>
                {translate('app.action.contact')}
              </Button>

              <Button className={classes.buttonAction} color="secondary" label={translate('app.action.share')} >
                <ShareIcon />
              </Button>
          </ButtonGroup>
      </Container>
      <MessageDialog open={open} onClose={handleClose} />
    </>
  );
};

export default EventDetails;
