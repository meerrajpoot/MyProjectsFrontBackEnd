import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const BookCard = ({ book }) => (
  <Card
    hoverable
    className="w-full md:w-60"
    cover={<img alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks?.thumbnail} className="h-80 object-cover" />}
  >
    <Meta title={book.volumeInfo.title} description={book.volumeInfo.authors.join(', ')} />
  </Card>
);

export default BookCard;
