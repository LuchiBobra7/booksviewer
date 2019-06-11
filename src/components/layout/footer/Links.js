import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "About Project",
    url: "/about"
  },
  {
    title: "My Portfolio",
    url: "/"
  },
  {
    title: "Contacts",
    url: "/"
  },
  {
    title: "Sourse Code",
    url: "/"
  }
];

const Links = () => {
  return (
    <Fragment>
      <h6 className="footer-title text-uppercase my-3">Links</h6>
      <ul className="footer-list">
        {navLinks.map((item, i) => (
          <li className="footer-item" key={i}>
            <Link to={item.url} className="footer-link">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default Links;