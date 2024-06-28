import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia } from '@mui/material';

const MovieCard = React.forwardRef(({ movie, bookmarks, setBookmarks }, ref) => {
  const isBookmarked = bookmarks.includes(movie.id);

  const handleBookmark = () => {
    if (isBookmarked) {
      setBookmarks(bookmarks.filter(id => id !== movie.id));
    } else {
      setBookmarks([...bookmarks, movie.id]);
    }
  };

  return (
    <Card ref={ref} className="m-2 w-64">
      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <CardContent>
        <Typography variant="h5" className="truncate">{movie.title}</Typography>
        <Typography className="truncate">{movie.release_date}</Typography>
        <Button onClick={handleBookmark} className="mt-2">
          {isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
        </Button>
      </CardContent>
    </Card>
  );
});

export default MovieCard;
