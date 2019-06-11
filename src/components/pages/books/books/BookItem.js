import React from "react";
import { Link } from "react-router-dom";
import SmoothImage from 'react-smooth-image';
import { DEFAULT_IMG }  from '../../../../api'
import PropTypes from 'prop-types';

const BookItem = ({ item }) => {
  return (
    <article>
      <Link to={`/book/${item.id}`} className="mb-3 book-img-wrapper">
        <SmoothImage 
          src={item.volumeInfo.imageLinks 
            ? item.volumeInfo.imageLinks.thumbnail 
            : DEFAULT_IMG }
          alt={item.volumeInfo.title}
          containerStyles={{paddingBottom: '154%'}}
          imageStyles={{bottom: '0px', top: 'auto'}}
        />
      </Link>
      <Link to={`/book/${item.id}`} className="text-uppercase mb-3 book-title">
        {item.volumeInfo.title}
      </Link>
    </article>
  );
};


BookItem.propTypes = {
  volumeInfo: PropTypes.shape({
    imageLinks: PropTypes.object,
    title: PropTypes.string
  })
}

export default BookItem;
