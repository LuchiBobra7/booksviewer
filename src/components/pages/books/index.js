import React, { useState, useContext, useEffect } from "react";
import { Container, Alert } from "reactstrap";
import { getBooks } from "../../../api";
import Context from "../../../Context";
import Layout from "../../layout";
import Banner from "./banner";
import BooksList from "./books/BooksList";
import Features from "./feautures";

const BooksPage = () => {
  const { query } = useContext(Context);
  const [list, setBooks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const fetchData = async () => {
    try {
      const request = await getBooks(query);
      const booksList = await request.data.items;
      await setBooks(booksList);
      await setLoading(false);
    } catch (err) {
      setErrorMessage(err.response.data.error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <Layout>
      <Banner />
      <Container className="py-4">
        <div className="card shadow-sm border-0 mb-4 books-card">
          <header className="card-header ">
            <div className="card-title d-flex flex-wrap align-items-center mb-0">
              <b className="text-muted">Results by query:</b>&nbsp;
              <span className="h4 mb-0 selection title">{query}</span>
            </div>
          </header>
          <div className="card-body">
            {errorMessage ? (
              <Alert color="danger">{errorMessage}</Alert>
            ) : (
              <div className="books-grid">
                <BooksList list={list} isLoading={isLoading} />
              </div>
            )}
            {!isLoading && !list && <h4>No results</h4>}
          </div>
        </div>
      </Container>
      <Features />
    </Layout>
  );
};

export default BooksPage;