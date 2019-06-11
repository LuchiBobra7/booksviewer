import React, { Fragment } from "react";

const Credits = () => {
  return (
    <Fragment>
      <h6 className="footer-title text-uppercase  my-3">Credits</h6>
      <ul className="footer-list">
        <li className="footer-item">
          Icon from FROM ICON SET&nbsp;
          <a
            href="https://www.vandelaydesign.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link link"
          >
            Vandelay Design
          </a>
          <br />
          is licensed by&nbsp;
          <a
            href="https://creativecommons.org/licenses/by/3.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link link"
          >
            Creative Commons (Attribution 3.0 Unported)
          </a>
        </li>
        <li className="footer-item">
          Icon from FROM ICON SET&nbsp;
          <a
            href="https://www.iconfinder.com/MartaKonyk"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link link"
          >
            Marta Konyk
          </a>
          <br />
          is licensed by&nbsp;
          <a
            href="https://creativecommons.org/licenses/by/3.0/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link link"
          >
            Creative Commons (Attribution 3.0 Unported)
          </a>
        </li>
        <li className="footer-item">
          <a
            href="https://images.unsplash.com/photo-1512045482940-f37f5216f639?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Unsplash.com
          </a>
        </li>
        <li className="footer-item">
          <a
            href=" https://developers.google.com/books"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            Google Books APIs
          </a>
        </li>
      </ul>
    </Fragment>
  );
};

export default Credits;