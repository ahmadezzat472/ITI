import { useRouter } from "next/router";
import React from "react";

const SingleProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>SingleProduct: {id}</div>;
};

export default SingleProduct;
