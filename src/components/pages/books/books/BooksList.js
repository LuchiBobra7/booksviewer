import React, { Fragment } from "react";
import BookItem from "./BookItem";
import BooksSkeleton from "./BooksSkeleton";
import PropTypes from "prop-types";

const BooksList = ({ list, isLoading }) => {
  return (
    <Fragment>
      {!isLoading ? (
        list && list.map((item, i) => <BookItem key={item.id} item={item} />)
      ) : (
        <BooksSkeleton />
      )}
    </Fragment>
  );
};

BooksList.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape(BookItem.proptypes))
};

export default BooksList;