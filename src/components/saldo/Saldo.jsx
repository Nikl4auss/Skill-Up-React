import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box component="span" sx={{ display: 'inline-block', mx: '30px', transform: 'scale(0.8)'}}>
        •
    </Box>
);

const card = (
    <React.Fragment>
        <CardContent sx={{ backgroundColor: '#2660a4', borderRadius: '12px'}}>
            <Typography sx={{ fontSize: 25 }} color="white" gutterBottom>
                SALDO ACTUAL
            </Typography>
            <Typography variant="h3" component="div" color='white'>
                $56000
            </Typography>
           
        </CardContent>
    </React.Fragment>
);

export default function OutlinedCard() {
    return (
        <div style={{marginLeft: '25px', marginRight: '25px'}}>

        <Box sx={{ minWidth: 100 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
        </div>
    );
}