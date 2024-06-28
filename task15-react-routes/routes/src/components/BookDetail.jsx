import React from 'react';

import { useParams } from 'react-router-dom';

const BookDetail = () => {
  const { id } = useParams();
  const book = {
    title: `Book ${id}`,
    author: `Author ${id}`,
    description: `This is the description for Book ${id}.`,
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-5">{book.title}</h1>
      <h2 className="text-xl mb-3">{book.author}</h2>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetail;
