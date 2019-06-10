import React from "react";
import { Link } from "react-router-dom";
import SmoothImage from 'react-smooth-image';

const BookItem = ({ item }) => {
  return (
    <article>
      <Link to={`/book/${item.id}`} className="mb-3 book-img-wrapper">
        <SmoothImage 
          src={item.volumeInfo.imageLinks 
            ? item.volumeInfo.imageLinks.thumbnail 
            : 'no-image.png'}
          alt="a nice image of mordor"
          containerStyles={{paddingBottom: '144%'}}
          imageStyles={{bottom: '0px', top: 'auto'}}
        />
      </Link>
      <Link to={`/book/${item.id}`} className="text-uppercase mb-3 book-title">
        {item.volumeInfo.title}
      </Link>
    </article>
  );
};

export default BookItem;
