import React, { Fragment, useState, useContext, useRef } from 'react';
import Context from "../../../Context";
import { Form, Button} from "reactstrap";

import { withRouter } from "react-router";


const SearchForm = (props) => {
    const { query, setQuery } = useContext(Context);
  const [searchQuery, setSearchQuery] = useState(query);
  const [visibleSearch, setVisibleSearch] = useState(false);
  const inputEl = useRef(null);
    const searchBooks = e => {
        e.preventDefault();
        setSearchQuery(e.target.value);
      };
    
      const handleSubmit = e => {
        e.preventDefault();
        setQuery(searchQuery);
        props.history.push("/");
      };
    
      const showSearchForm = async() => {
        await setVisibleSearch(!visibleSearch);
        await inputEl.current.focus();
      };
    return (
        <Fragment>
            <Button
          onClick={() => showSearchForm()}
          className="d-sm-none pr-0 rounded-0 text-dark"
          color="link"
        >
          <i className="icons icon-magnifier" />
        </Button>
        <Form
          className={`${
            !!visibleSearch ? "d-flex" : "d-none"
          } d-sm-flex search-form `}
          onSubmit={e => handleSubmit(e)}
        >
          <input
            type="text"
            className="form-control rounded-0 pl-0 border-0 bg-transparent"
            onChange={e => searchBooks(e)}
            placeholder="Search by Title..."
            ref={inputEl} 
          />
          {visibleSearch ? (
            <Button
              onClick={() => showSearchForm()}
              className="pr-0 rounded-0 text-dark"
              color="link"
            >
              <i className="icons icon-close" />{" "}
            </Button>
          ) : (
            <Button className="pr-0 rounded-0 text-dark" color="link">
              <i className="icons icon-magnifier" />
            </Button>
          )}
        </Form>
        </Fragment>
    );
};

export default withRouter(SearchForm);