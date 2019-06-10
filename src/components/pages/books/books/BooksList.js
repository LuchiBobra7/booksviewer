import React, { Fragment } from "react";
import BookItem from "./BookItem";
import BooksSkeleton from "./BooksSkeleton";

const BooksList = ({list,  isLoading }) => {
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

export default BooksList;
