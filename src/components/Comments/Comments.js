import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import './Comments.css';
import { useParams } from 'react-router-dom';

// Material UI Style
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
}));

const Comments = (props) => {
  const { postId, name, email, body } = props.comment;

  // Material UI card style
  const classes = useStyles();

  // Get post ID from dynamic link
  const { selectId } = useParams();

  // State for Image
  const [image, setImage] = useState({});

  // Load image thumbnail from API with dynamic id
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/photos/${selectId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImage(data));
  }, []);

  return (
    <div className='main-container'>
      <div className='comments-container'>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Post Comment
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Post Id : {postId}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                <div
                  variant='body2'
                  color='textSecondary'
                  component='p'
                  className={classes.root}
                >
                  <Avatar
                    alt='Remy Sharp'
                    src={image.thumbnailUrl}
                    className={classes.large}
                  />
                </div>
              </Typography>
              <Typography gutterBottom variant='h5' component='h2'>
                Name : {name}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Email : {email}
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Comment : {body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <div className='right-container'></div>
      </div>
    </div>
  );
};

export default Comments;
