import React from "react";
import InputBox from "components/inputBox";
import SearchIcon from "react-icons/lib/fa/search";

const ProductSearchBox = ({ value, onChange,style }) => (
  <div style={style}>
    <InputBox style={{textAlign:'start',paddingLeft:0}} value={value} onChange={onChange} prefix={<SearchIcon />} />
  </div>
);

export default ProductSearchBox;
