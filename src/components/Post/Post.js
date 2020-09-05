import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Post.css';

const Post = (props) => {
  const { id, title, body } = props.post;

  return (
    <div className='wrap-container'>
      <Card className='card-container'>
        <CardActionArea>
          <CardContent>
            <Typography variant='body2' color='textSecondary' component='p'>
              {id}
            </Typography>
            <Typography gutterBottom variant='h5' component='h2'>
              {title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {body}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link className='detail-button' to={`/post/${id}`}>
            <Button variant='contained'>Read More</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
