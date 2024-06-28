import React from 'react';
import { Button, ButtonGroup } from '@mui/material';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <ButtonGroup variant="contained">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        {pageNumbers.map(number => (
          <Button
            key={number}
            onClick={() => onPageChange(number)}
            variant={currentPage === number ? 'outlined' : 'contained'}
          >
            {number}
          </Button>
        ))}
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Pagination;
