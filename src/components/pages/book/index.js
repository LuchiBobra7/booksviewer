import React, { useLayoutEffect, useContext, useState } from "react";
import Layout from "../../layout";
import { Container, Alert } from "reactstrap";
import Context from "../../../Context";
import BookInfo from "./BookInfo";
import BookSkeleton from "./BookSkeleton";
import { getBook } from "../../../api";
import PropTypes from "prop-types";

const BookPage = (props, state) => {
  const { query } = useContext(Context);
  const [isLoading, setLoading] = useState(true);
  const [book, setBook] = useState({
    volumeInfo: {
      title: "",
      averageRating: "",
      previewLink: "",
      imageLinks: { small: "", medium: "" }
    },
    accessInfo: {
      webReaderLink: ""
    }
  });
  const [error, setError] = useState(null);
  const fetchData = async id => {
    try {
      const request = await getBook(props.match.params.id);
      const bookInfo = await request.data;
      await setLoading(false);
      setBook(bookInfo);
    } catch (err) {
      setError(err.data.message);
    }
  };
  useLayoutEffect(() => {
    fetchData();
  }, [query]);

  return (
    <Layout>
      <Container className="py-4">
        {error && <Alert color="danger">{error}</Alert>}
        {!isLoading ? (
          <BookInfo book={book} isLoading={isLoading} />
        ) : (
          <BookSkeleton />
        )}
      </Container>
    </Layout>
  );
};

BookPage.propTypes = {
  book: PropTypes.arrayOf(PropTypes.shape(BookInfo.proptypes))
};

export default BookPage;