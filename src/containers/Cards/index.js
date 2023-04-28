import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

export default function Cards(props) {
  return (
    <Card {...props}>
        <Paper {...props}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.label}
        </Typography>
        {props?.description && <Typography gutterBottom  component="div" sx={{paddingTop: 5, marginTop: 5, borderTop: "1px solid #c9e6ff"}}>
          {props?.description}
        </Typography>}
        </CardContent>
      </Paper>
    </Card>
  );
}