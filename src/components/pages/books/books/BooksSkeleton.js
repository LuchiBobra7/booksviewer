import React from "react";
import Skeleton from "../../../ui/Skeleton";

const MockArr = [...Array(10)];

const SkeletonArr = MockArr.map((item, i) => (
  <article key={i}>
    <Skeleton height="193px" />
    <Skeleton height="30px" />
  </article>
));

const BooksSkeleton = () => SkeletonArr;

export default BooksSkeleton;
