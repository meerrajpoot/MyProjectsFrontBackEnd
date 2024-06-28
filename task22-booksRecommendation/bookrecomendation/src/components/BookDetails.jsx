import React from 'react';
import { Descriptions, Modal } from 'antd';

const BookDetails = ({ book, visible, onClose }) => (
  <Modal visible={visible} onCancel={onClose} footer={null}>
    <Descriptions title="Book Details" className="p-4">
      <Descriptions.Item label="Title">{book.volumeInfo.title}</Descriptions.Item>
      <Descriptions.Item label="Author">{book.volumeInfo.authors.join(', ')}</Descriptions.Item>
      <Descriptions.Item label="Description">{book.volumeInfo.description}</Descriptions.Item>
    </Descriptions>
  </Modal>
);

export default BookDetails;
