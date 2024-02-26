import Dialog from '@mui/material/Dialog';

import * as React from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import DialogActions from '@mui/material/DialogActions';
// or
import { DialogActions } from '@mui/material';

export const Dialog = forwardRef(function Dialog(
  {
    isDisabled,
    isLoading,
    loadingText,
    isLink,
    children,
    ButtonWrapper,
    ...props
  },
  ref,
) {
  if (ButtonWrapper) {
    return (
      <StyledButton
        as={ButtonWrapper}
        disabled={isDisabled}
        isLoading={isLoading}
        {...props}
        ref={ref}
      >
        <>
          <Text>{children}</Text>
          {isLoading && <Loading>{loadingText || 'Loading...'}</Loading>}
        </>
      </StyledButton>
    );
  }
  if (isLink) {
    return (
      <StyledButton as={ButtonLink} isLoading={isLoading} {...props} ref={ref}>
        <>
          <Text>{children}</Text>
          {isLoading && <Loading>{loadingText || 'Loading...'}</Loading>}
        </>
      </StyledButton>
    );
  }
  return (
    <StyledButton
      disabled={isDisabled}
      isLoading={isLoading}
      {...props}
      ref={ref}
    >
      <>
        <Text>{children}</Text>
        {isLoading && <Loading>{loadingText || 'Loading...'}</Loading>}
      </>
    </StyledButton>
  );
});

export default {
  title: 'Design System/Dialog',
  component: Dialog,
};
