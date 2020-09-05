import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './PostDetail.css';
import Comments from '../Comments/Comments';
import SingleHeader from '../SingleHeader/SingleHeader';

// Material UI Style
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const PostDetail = () => {
  // Material UI card style
  const classes = useStyles();

  // Get post ID from dynamic link
  const { selectId } = useParams();

  // State for match post
  const [post, setPost] = useState({});
  const { id, title, body } = post;

  // State for Comments
  const [comments, setComments] = useState([]);

  // Get post from match ID
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${selectId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  // Load comment from API with dynamic id
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${selectId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <SingleHeader></SingleHeader>
      <div className='main-container'>
        <div className='left-container'></div>
        <div className='post-detail'>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Id : {id}
                </Typography>
                <Typography gutterBottom variant='h5' component='h2'>
                  {title}
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  {body}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          {comments.map((comment) => (
            <Comments comment={comment} key={comment.id}></Comments>
          ))}
          <div className='right-container'></div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
