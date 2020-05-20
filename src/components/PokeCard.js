import React from 'react';

import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

// Material UI
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 290,
    margin: '1em',
    textAlign: 'center',
    margin: '2em',
    padding: '1em',
  },
  media: {
    minHeight: 315,
  },
});

function PokeCard({ name, classes, image, to = '#', description }) {
  classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Link to={to}>
          <Typography component="p" variant="h6">
            {name}
          </Typography>
        </Link>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PokeCard;
