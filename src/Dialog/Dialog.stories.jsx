import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

export default {
  title: 'Components/Dialog',
  component: Dialog,
};

// Define the SimpleDialog component
const SimpleDialog = ({ onClose, selectedValue, open }) => {
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>This is the Default dialog title</DialogTitle>
      <div>
        {/* Content of the dialog */}
        <p>This is the content of the Default dialog.</p>
      </div>
    </Dialog>
  );
};

// Define PropTypes for the SimpleDialog component
SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

// Export the SimpleDialog component
export const SimpleDialogComponent = SimpleDialog;

// Define the Default story
export const Default = () => {
  // Simulate props
  const [open, setOpen] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState('');

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>
      <Typography variant='subtitle1' component='div'>
        Selected: {selectedValue}
      </Typography>
      <br />
      <Button variant='outlined' onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <SimpleDialog
        onClose={handleClose}
        open={open}
        selectedValue={selectedValue}
      />
    </div>
  );
};
