import React from 'react';
import { Snackbar, Button } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  onUndo: () => void;
}

export default function UndoSnackbar({ open, onClose, onUndo }: Props) {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    // Only close on timeout or escape key, not on clickaway
    if (reason === 'clickaway') {
      return;
    }
    onClose();
  };

  const handleUndo = () => {
    onUndo();
    // Close the snackbar after undo
    onClose();
  };

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      autoHideDuration={4000}
      message="Task deleted"
      action={<Button color="secondary" size="small" onClick={handleUndo}>Undo</Button>}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
}


