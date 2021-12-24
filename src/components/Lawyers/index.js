import React from "react";
import { Card, Avatar, CardContent, Box, Grid, Typography, CardActionArea, Stack, Rating, CardActions, Button, Chip } from '@mui/material';
import { stringAvatar } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { bookAppt, cancelAppt } from '../../store'

const Lawyers = ({ availability, cost, name, rating, speciality }) => {
  const appointments = useSelector(state => state.appointments);
  const dispatch = useDispatch();

  const bookHandler = () => {
    dispatch(bookAppt({ name }));
  };

  const cancelHandler = () => {
    dispatch(cancelAppt({ name }));
  };

  return (
    <Card sx={{ maxWidth: 400, my: 2, minWidth: 300, mr: 2 }}>
      <CardActionArea>
        <CardContent sx={{ p: 0 }}>
          <Grid container justifyContent='space-between' sx={{ borderBottom: '1px solid #e6e6e6', px: 2, py: 1, backgroundColor: '#faf5f7' }}>
            <Typography color={appointments.booked.includes(name) ? 'secondary' : 'text.title'}>{appointments.booked.includes(name) ? 'Not Available' : availability}</Typography>
            <Typography color='text.title'>Cost &#8377;{cost}</Typography>
          </Grid>
          <Box sx={{ my: 2 }}>
            <Grid container justifyContent='space-around' alignItems='center'>
              <Avatar {...stringAvatar(name)} />
              <Stack>
                <Typography variant='subtitle2'>{name}</Typography>
                <Grid container justifyContent='space-between'>
                  {speciality.map(s => <Chip key={s} label={s} size="small" sx={{ marginRight: 1 }} />)}
                </Grid>
                <Rating name="size-small" defaultValue={rating} size="small" readOnly />
              </Stack>
            </Grid>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: 'space-around', borderTop: '1px solid #e6e6e6', p: 0 }}>
        <Button color="secondary" onClick={bookHandler}>Book</Button>
        <Button color="secondary" onClick={cancelHandler}>Cancel</Button>
      </CardActions>
    </Card >
  );
};

export default Lawyers;