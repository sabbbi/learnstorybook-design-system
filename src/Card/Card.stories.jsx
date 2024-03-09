import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default {
  title: 'Components/Card',
  component: Card,
};

export const ExampleCard = (_args) => {
  return (
    <Card>
      <CardHeader title='This is the card header'></CardHeader>
      <CardContent>
        <div>
          <Typography variant='h6' component='div'>
            The content of the card starts here
          </Typography>
        </div>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant='h5' component='div'>
          be.nev.o.lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          adjective
        </Typography>
        <Typography variant='body2'>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  );
};
