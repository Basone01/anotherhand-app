import { connect } from "react-redux";
import { createProduct } from "actions";
import { withRouter } from "react-router-dom";
import BackButton from "components/backButton";
import ImageUploader from "components/imageUploader";
import InputBox from "components/inputBox";
import InputTextArea from "components/inputTextArea";
import React, { Component } from "react";
import SizeInput from "components/sizeInput";
import SubmitIcon from "react-icons/lib/md/check";
import TagsInput from "components/tagsInput";

import { BlockButton, IconButton } from "../styles/button";
import { getProductById } from "../api";
import { IMAGE_ENDPOINT } from "../config";
import { hideLoadingSpinner, displayLoadingSpinner } from "actions";
import {
  PageContainer,
  ScrollableContainer,
  TopNavbarContainer
} from "../styles";

export class EditProductPage extends Component {
  state = {
    _id: null,
    images: [],
    name: "",
    price: 0,
    stock: 0,
    description: "",
    tags: [],
    sizes: [],
    size_type: "",
    defaultData: null
  };
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleImageRemove = this.handleImageRemove.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.addSize = this.addSize.bind(this);
    this.handleSizeRemove = this.handleSizeRemove.bind(this);
    this.handleSizeChange = this.handleSizeChange.bind(this);
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
  }

  async componentDidMount() {
    const { match, products } = this.props;
    let product = null;
    if (!products || !products.length) {
      this.props.displayLoadingSpinner();
      product = await getProductById(match.params.id);
    } else {
      product = products.find(product => product._id === match.params.id);
    }
    const { images_path, ...rest } = product;
    this.setState(state => ({
      ...rest,
      images: images_path,
      defaultData: {
        ...rest,
        images: images_path
      }
    }));
    this.props.hideLoadingSpinner();
  }

  handleImageChange(newImage) {
    this.setState(({ images }) => ({
      images: [...images, newImage]
    }));
  }
  handleImageRemove(newImagesList) {
    this.setState(({ images }) => ({ images: newImagesList }));
  }
  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleTagsChange(tagList) {
    this.setState(state => ({ tags: tagList }));
  }

  handleSizeRemove(index) {
    this.setState(({ sizes }) => ({
      sizes: sizes.filter((size, i) => i !== index)
    }));
  }
  handleSizeChange(e, index) {
    const { sizes } = this.state;
    const updatedSize = {
      ...sizes[index],
      [e.target.name]: e.target.value
    };
    this.setState(({ sizes }) => ({
      sizes: [...sizes.slice(0, index), updatedSize, ...sizes.slice(index + 1)]
    }));
  }

  addSize() {
    this.setState(({ sizes, price }) => ({
      sizes: [
        ...sizes,
        {
          size: "",
          price: price,
          stock: 0
        }
      ]
    }));
  }

  submit() {
    const { sizes, images, name } = this.state;
    let product = null;
    if (name === "") {
      console.error("Name is Required");
      return;
    }
    if (images.length === 0) {
      console.error("Image is Required");
      return;
    }
    if (sizes.filter(size => size.size !== "").length > 0) {
      // console.error('Size is Required');
      // return;
      const { stock, ...rest } = this.state;
      product = rest;
    } else {
      const { sizes, ...rest } = this.state;
      product = rest;
    }
    const { images_path, ...rest } = product;
    this.props.updateProduct(product);
  }

  reset() {
    this.setState(state => ({
      images: [],
      name: "",
      price: 0,
      stock: 0,
      description: "",
      tags: [],
      sizes: [],
      _id: null
    }));
    if (this.props.match.url !== "/add") {
      this.props.history.push("/add");
    }
  }

  render() {
    const {
      images,
      description,
      tags,
      sizes,
      name,
      price,
      stock,
      size_type,
      loading
    } = this.state;
    return (
      <PageContainer>
        <TopNavbarContainer>
          <BackButton />
          <span
            style={{
              flexGrow: 1,
              textAlign: "center"
            }}
          >
            เพิ่มสินค้าใหม่
          </span>
          <IconButton onClick={() => this.submit()}>
            <SubmitIcon size={20} />
          </IconButton>
        </TopNavbarContainer>
        <ScrollableContainer>
          <ImageUploader
            images={images}
            onRemove={this.handleImageRemove}
            onChange={this.handleImageChange}
          />
          <InputBox
            name="name"
            value={name}
            prefix="ชื่อ :"
            placeholder="ใส่ชื่อสินค้าที่ต้องการ"
            onChange={this.handleInputChange}
          />
          <InputTextArea
            name="description"
            value={description}
            prefix="รายละเอียด :"
            placeholder="ใส่อะไรก็ใส่มาเหอะ"
            onChange={this.handleInputChange}
          />
          {/*only render when no size  */}
          {!sizes.length && (
            <InputBox
              name="price"
              value={price}
              type="number"
              min={0}
              prefix="ราคา :"
              placeholder="ใส่ราคาสินค้าที่ต้องการ"
              onChange={this.handleInputChange}
            />
          )}
          {!sizes.length && (
            <InputBox
              name="stock"
              value={stock}
              type="number"
              min={0}
              prefix="จำนวน :"
              placeholder="ใส่จำนวนสของสินค้า"
              onChange={this.handleInputChange}
            />
          )}

          <TagsInput
            tags={tags}
            onChange={this.handleTagsChange}
            prefix="แท็ก :"
            placeholder="ใส่แท็กให้กับสินค้าของคุณ ไม่ว่าจะเป็น ยี่ห้อ รุ่น สี หรือประเภทของสินค้า เพื่อให้ง่ายต่อการค้นหา โดยกด Enter เพื่อเพิ่มแท็กแต่ละอัน"
          />

          <BlockButton onClick={this.addSize}>
            + เพิ่มตัวเลือกไซส์สินค้า
          </BlockButton>
          {sizes.map((size, i) => (
            <SizeInput
              key={i}
              {...size}
              onClick={e => this.handleSizeRemove(i)}
              onChange={e => this.handleSizeChange(e, i)}
            />
          ))}
          {sizes.length > 0 && (
            <InputBox
              name="size_type"
              value={size_type}
              prefix="หน่วยไซส์ :"
              placeholder="ใส่หน่วยให้กับสินค้าของท่าน (ถ้ามี)"
              onChange={this.handleInputChange}
            />
          )}
          <BlockButton
            onClick={this.reset}
            style={{ backgroundColor: "rgba(222,0,0,0.9)", color: "white" }}
          >
            ล้างข้อมูล
          </BlockButton>
        </ScrollableContainer>
      </PageContainer>
    );
  }
}

const mapStateToProps = ({ product }) => ({
  products: product.products
});

const mapDispatchToProps = dispatch => ({
  createProduct: product => dispatch(createProduct(product)),
  hideLoadingSpinner: () => dispatch(hideLoadingSpinner()),
  displayLoadingSpinner: () => dispatch(displayLoadingSpinner())
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(EditProductPage)
);
