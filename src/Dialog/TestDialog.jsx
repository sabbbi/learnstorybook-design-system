import React from 'react';
import TestDialog from './TestDialog'; // Import your TestDialog component

const TestDialog = () => {
  // Your component logic here
  return (
    <div>
      {
        <Dialog>
          <DialogTitle>This is the test dialog title</DialogTitle>
          <div>
            {/* Content of the dialog */}
            <p>This is the content of the test dialog.</p>
          </div>
        </Dialog>
      }
    </div>
  );
};

export default TestDialog;
