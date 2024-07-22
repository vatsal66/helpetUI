import { Dialog, DialogContent } from '@mui/material';
import React from 'react';

import RightIcon from '@assets/images/BlogDetails/RightIcon.svg';

import { DialogContentText, SaveButton } from './styled';

const SubmitDialog = ({ submitDialog, setSubmitDialog }) => {
  return (
    <Dialog
      open={submitDialog}
      onClose={() => setSubmitDialog(false)}
      fullWidth
      sx={{
        width: '25%',
        left: '37.5%',
        right: '37.5%',
        '& .MuiDialog-paper': {
          margin: 0,
          maxWidth: 'unset',
          width: '100%',
          background: 'none',
          boxShadow: 'none',
        },
      }}
    >
      <DialogContent sx={{
        position: 'relative',
        overflow: 'hidden',
        padding: '36px 30px',
        display: 'flex',
        border: '5px solid #007E60',
        borderRadius: '50px',
        background: '#ffffff',
        gap: '24px',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <RightIcon />
        <DialogContentText>
          Il tuo commento è stato
          pubblicato correttamente.
          Grazie per il tuo contributo!
        </DialogContentText>
        <SaveButton onClick={() => setSubmitDialog(false)}>Ok</SaveButton>
      </DialogContent>
    </Dialog>
  );
};

export default SubmitDialog;