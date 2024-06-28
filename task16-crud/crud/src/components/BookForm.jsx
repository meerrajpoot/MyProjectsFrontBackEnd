import React, { useState, useEffect } from 'react';

const BookForm = ({ currentBook, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentBook) {
      setTitle(currentBook.title);
      setAuthor(currentBook.author);
      setDescription(currentBook.description);
    } else {
      setTitle('');
      setAuthor('');
      setDescription('');
    }
  }, [currentBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author || !description) {
      alert('All fields are required.');
      return;
    }
    onSave({ title, author, description, id: currentBook ? currentBook.id : null });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 bg-white bg-opacity-50 p-4 rounded shadow-md">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="block w-full p-2 mb-2 border border-gray-300 rounded bg-transparent placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        className="block w-full p-2 mb-2 border border-gray-300 rounded bg-transparent placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="block w-full p-2 mb-2 border border-gray-300 rounded bg-transparent placeholder-gray-500 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded mr-2">
        {currentBook ? 'Update' : 'Add'} Book
      </button>
      {currentBook && (
        <button type="button" onClick={onCancel} className="bg-gray-500 text-white py-2 px-4 rounded">
          Cancel
        </button>
      )}
    </form>
  );
};

export default BookForm;
