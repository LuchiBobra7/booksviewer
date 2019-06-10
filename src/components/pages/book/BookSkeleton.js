import React from 'react';
import { Row, Col } from "reactstrap";
import Skeleton from '../../ui/Skeleton';

const BookSkeleton = () => {
    return (
        <Row>
          <Col md="4">
            <Skeleton height="450px" />
          </Col>
          <Col md="8">
            <Skeleton height="50px" />
            <Skeleton height="20px" />
            <Skeleton height="180px" />
           </Col>
        </Row>  
    );
};

export default BookSkeleton;