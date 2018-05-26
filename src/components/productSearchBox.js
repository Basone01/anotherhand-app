import React from "react";
import InputBox from "components/inputBox";
import SearchIcon from "react-icons/lib/fa/search";

const ProductSearchBox = ({ value, onChange }) => (
  <div>
    <InputBox value={value} onChange={onChange} prefix={<SearchIcon />} />
  </div>
);

export default ProductSearchBox;
