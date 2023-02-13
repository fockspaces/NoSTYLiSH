import React, { useState } from "react";
import Product from "./Product";
import Category from "./Category";
import Items from "./Items";
import Buttons from "./Buttons";

import sentForm from "../utils/sentForm";

const ProductForm = () => {
  const [isValid, setIsValid] = useState(true);
  const [page, setPage] = useState(0);

  const [product, setProduct] = useState({
    category: "",
    title: "",
    description: "",
    main_image: {},
  });

  const [category, setCategory] = useState({
    texture: "",
    wash: "",
    place: "",
    note: "",
    story: "",
  });

  const [items, setItems] = useState([]);

  const productChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const imageChange = (file) => {
    setProduct({ ...product, main_image: file });
  };

  const categoryChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const itemsChange = (item) => {
    setItems([...items, item]);
  };

  const formPages = [
    <Product
      product={product}
      productChange={productChange}
      imageChange={imageChange}
    />,
    <Category category={category} categoryChange={categoryChange} />,
    <Items items={items} itemsChange={itemsChange} />,
  ];

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const checkValidity = (obj) => {
    const hasEmpty = Object.values(obj).filter((val) => val === "");
    return hasEmpty.length === 0;
  };

  const handleSubmit = async () => {
    if (
      checkValidity(product) &&
      checkValidity(category) &&
      checkValidity(items)
    ) {
      setIsValid(true);

      const res = await sentForm({ product, category, items });
      console.log(res);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div className="mt-5 col-6 offset-3">
      <h2>Product</h2>
      {!isValid && (
        <div className="alert alert-danger" role="alert">
          Plesase finish all required inputs
        </div>
      )}
      {formPages[page]}
      <Buttons
        page={page}
        pagelength={formPages.length}
        handlePrev={handlePrev}
        handleNext={handleNext}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default ProductForm;
