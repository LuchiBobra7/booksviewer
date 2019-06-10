import React from "react";
import { Row, Col } from "reactstrap";
import SmoothImage from "react-smooth-image";
import Parser from "html-react-parser";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";
import Facebook from "react-sharingbuttons/dist/buttons/Facebook";
import Twitter from "react-sharingbuttons/dist/buttons/Twitter";
import "react-sharingbuttons/dist/main.css";

const BookInfo = ({ book, isLoading }) => {
  const {
    title,
    imageLinks,
    authors,
    previewLink,
    publishedDate,
    averageRating,
    description
  } = book.volumeInfo;
  const {
    webReaderLink
  } = book.accessInfo;
  return (
    <Row>
      <Col sm="5" lg="3" xl="4">
        <div className="img-wrapper-lg">
          <SmoothImage
            src={imageLinks && imageLinks.medium ? imageLinks.medium : "/no_img.png"}
            alt="a nice image of mordor"
            containerStyles={{ paddingBottom: "150%" }}
          />
        </div>
      </Col>
      <Col sm="7" lg="9" xl="8">
        <div>
          <div className="d-flex align-items-center">
            <h1 className="h1 title">{title}</h1>
          </div>
          {(authors || publishedDate || averageRating || webReaderLink) && (
            <ul className="meta border-top border-bottom py-2 my-2 list-unstyled d-flex flex-wrap align-items-center">
              {averageRating > 1 && (
                <li className="meta-item d-flex align-items-center mb-0">
                  <Rater rating={averageRating} total={5} interactive={false} />
                </li>
              )}
              {authors && (
                <li className="meta-item d-flex align-items-center">
                  <i className="icons icon-user mr-2" />
                  <span className="small text-muted">{authors.join(", ")}</span>
                </li>
              )}
              {publishedDate && (
                <li className="meta-item d-flex align-items-center">
                  <i className="icons icon-calendar mr-2" />
                  <span className="small text-muted">{publishedDate}</span>
                </li>
              )}
             
              {webReaderLink && (
                <li className="meta-item d-flex align-items-center">
                  <i className="icons icon-eye mr-2" />
                  <a className="small text-muted" href={webReaderLink} target="_blank" rel="noopener noreferrer">Read episode</a>
                </li>
              )}
            </ul>
          )}
          <div className="mb-3">
            {book && description ? Parser(description) : ""}
          </div>
          <div>
            <Facebook url={book && previewLink} />
            <Twitter url={book && previewLink} shareText="" />
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default BookInfo;
