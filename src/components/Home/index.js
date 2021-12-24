import React, { useState } from "react";
import { Typography, Container, Grid, Avatar, Tooltip, Box } from '@mui/material';
import { stringAvatar } from '../../utils';
import Lawyers from "../Lawyers";

const DATA = [
  {
    id: '1', firm: 'Wordict Law', lawyers: [
      { name: 'Augusta Wind', speciality: ['divorce', 'criminal', 'property'], availability: 'Today, 04 Sep', cost: 1200, rating: 4 },
      { name: 'Chris Anthemum', speciality: ['criminal', 'property'], availability: 'Today, 04 Sep', cost: 800, rating: 3 },
      { name: 'Anne Teak', speciality: ['criminal',], availability: 'Tomorrow, 05 Sep', cost: 5500, rating: 4 },
    ]
  },
  {
    id: '2', firm: 'Axfait Firm', lawyers: [
      { name: 'U.R. Nice', speciality: ['divorce', 'criminal', 'property'], availability: 'Tomorrow, 05 Sep', cost: 1200, rating: 5 },
      { name: 'Anita Bath', speciality: ['criminal', 'property'], availability: 'Today, 04 Sep', cost: 800, rating: 5 },
    ]
  },
  {
    id: '3', firm: 'Uniglobe Immigration Services', lawyers: [
      { name: 'Marge Areen', speciality: ['divorce', 'criminal', 'property'], availability: 'Today, 04 Sep', cost: 1200, rating: 5 },
      { name: 'Al Annon', speciality: ['criminal', 'property'], availability: 'Tomorrow, 05 Sep', cost: 800, rating: 3 },
      { name: 'Barry Kade', speciality: ['criminal', 'property'], availability: 'Today, 04 Sep', cost: 600, rating: 2 },
      { name: 'Neil Down', speciality: ['criminal', 'property'], availability: 'Tomorrow, 05 Sep', cost: 800, rating: 3 },
      { name: 'Lee Nonmi', speciality: ['criminal',], availability: 'Today, 04 Sep', cost: 5500, rating: 5 },
    ]
  },
  {
    id: '4', firm: 'Round World Immigration', lawyers: [
      { name: 'Hope Furaletter', speciality: ['divorce', 'criminal', 'property'], availability: 'Today, 04 Sep', cost: 1200, rating: 5 },
      { name: 'B. Homesoon', speciality: ['criminal', 'property'], availability: 'Tomorrow, 05 Sep', cost: 800, rating: 3 },
      { name: 'C. Yasoon', speciality: ['criminal',], availability: 'Today, 04 Sep', cost: 500, rating: 4 },
    ]
  },
];

const Home = () => {
  const [selectedLawyers, setSelectedLawyers] = useState(DATA[0].lawyers);

  const lawyerHandler = (index) => {
    setSelectedLawyers(DATA[index].lawyers);
  };

  return (
    <Container maxWidth="lg" sx={{ p: 2 }}>
      <Typography variant="h5">Firms</Typography>
      <Box sx={{ my: 2 }}>
        <Grid container justifyContent='space-between'>
          {DATA.map((d, i) => (
            <Grid sx={{ cursor: 'pointer' }}>
              <Tooltip key={d.id} title={d.firm}>
                <Avatar onClick={() => lawyerHandler(i)} {...stringAvatar(d.firm)} />
              </Tooltip>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h5">Lawyers</Typography>
        <Grid container justifyContent='space-evenly'>
          {selectedLawyers.map(lawyer => (<Lawyers key={lawyer.name} {...lawyer} />))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home;