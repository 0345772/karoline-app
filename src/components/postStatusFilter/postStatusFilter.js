import React from 'react';
import './postStatusFilter.css';

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <button type="button" className="btn btn-info">Все</button>
      <button type="button" className="btn btn-outline-secondary">Сподобалось</button>
     
    </div>
  )
}
export default PostStatusFilter;
