import * as React from 'react';
import Dialog from '@mui/material/Dialog';

export const DialogComponent = () => {
  return (
    <div>
      {/* Your dialog content here */}
      <Dialog open={true}>Hello, World!</Dialog>
    </div>
  );
};

export default {
  title: 'Design System/Dialog',
  component: DialogComponent,
};
