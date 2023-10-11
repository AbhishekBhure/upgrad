import React from "react";

const BookCard = ({data}) => {
  return data ? (
    <div className="book-card">
      <div className="book-title">{data.title}</div>
      {data.thumbnailUrl ? (
        <img className="book-thumb" src={data.thumbnailUrl} alt={data.title} />
      ) : null}
    </div>
  ) : null;
};

export default BookCard;
