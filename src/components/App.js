import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Context from '../Context';
import BooksPage from "../components/pages/books";
import BookPage from "../components/pages/book";
import AboutPage from "../components/pages/about";

const App = () => {
  const [query, setQuery] = useState("Blue & Pink");
  return (
    <Context.Provider value={{
      query, 
      setQuery
      }}>
      <Router>
        <Switch>
          <Route exact path="/" component={BooksPage} />
          <Route exact path="/book/:id" component={BookPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </Router>
    </Context.Provider>
  )
}
  
  export default App;