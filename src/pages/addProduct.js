import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PageContainer, ScrollableContainer, TopNavbarContainer} from '../styles/index'
import {BlockButton, IconButton} from '../styles/button'
import InputBox from 'components/inputBox'
import InputTextArea from 'components/inputTextArea'
import TagsInput from 'components/tagsInput'
import ImageUploader from 'components/imageUploader'
import SizeInput from 'components/sizeInput';

export class AddProductPage extends Component {
    state = {
        images: [
            "https://pbs.twimg.com/profile_images/955376907574427649/aHNuNU8n_400x400.jpg", "https://pbs.twimg.com/profile_images/955376907574427649/aHNuNU8n_400x400.jpg", "https://pbs.twimg.com/profile_images/955376907574427649/aHNuNU8n_400x400.jpg"
        ],
        name: '',
        price: 0,
        stock: 0,
        description: '',
        tags: [],
        sizes: []
    }
    constructor(props) {
        super(props);
        this.handleInputChange = this
            .handleInputChange
            .bind(this)
        this.handleImageChange = this
            .handleImageChange
            .bind(this)
        this.handleImageRemove = this
            .handleImageRemove
            .bind(this)
        this.handleTagsChange = this
            .handleTagsChange
            .bind(this)
        this.addSize = this
            .addSize
            .bind(this)
        this.handleSizeRemove = this
            .handleSizeRemove
            .bind(this)
        this.handleSizeChange = this
            .handleSizeChange
            .bind(this)
        this.submit = this
            .submit
            .bind(this)
    }

    handleImageChange(newImage) {
        this.setState(({images}) => ({
            images: [
                ...images,
                newImage
            ]
        }))
    }
    handleImageRemove(newImagesList) {
        this.setState(({images}) => ({images: newImagesList}))
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleTagsChange(tagList) {
        this.setState(state=>({
            tags:tagList
        }))
    }

    handleSizeRemove(index) {
        this.setState(({sizes}) => ({
            sizes: sizes.filter((size, i) => i !== index)
        }))
    }
    handleSizeChange(e, index) {
        const {sizes} = this.state
        const updatedSize = {
            ...sizes[index],
            [e.target.name]: e.target.value
        }
        this.setState(({sizes}) => ({
            sizes: [
                ...sizes.slice(0, index),
                updatedSize,
                ...sizes.slice(index + 1)
            ]
        }))
    }

    addSize() {
        this.setState(({sizes, price}) => ({
            sizes: [
                ...sizes, {
                    size: '',
                    price: price,
                    stock: 0
                }
            ]
        }))
    }

    submit() {
        console.log(this.state)
    }

    render() {
        const {
            images,
            description,
            tags,
            sizes,
            name,
            price,
            stock
        } = this.state;

        return (
            <PageContainer>
                <TopNavbarContainer>
                    <IconButton>{"<"}</IconButton>
                    <span
                        style={{
                        flexGrow: 1,
                        textAlign: "center"
                    }}>เพิ่มสินค้าใหม่</span>
                    <IconButton onClick={() => this.submit()}>{">"}</IconButton>
                </TopNavbarContainer>
                <ScrollableContainer>
                    <ImageUploader
                        images={images}
                        onRemove={this.handleImageRemove}
                        onChange={this.handleImageChange}/>
                    <InputBox
                        name="name"
                        value={name}
                        prefix="ชื่อ :"
                        placeholder="ใส่ชื่อสินค้าที่ต้องการ"
                        onChange={this.handleInputChange}/>
                    <InputBox
                        name="price"
                        value={price}
                        type="number"
                        min={0}
                        prefix="ราคา :"
                        placeholder="ใส่ราคาสินค้าที่ต้องการ"
                        onChange={this.handleInputChange}/>
                    <InputBox
                        name="stock"
                        value={stock}
                        type="number"
                        min={0}
                        prefix="จำนวน :"
                        placeholder="ใส่จำนวนสของสินค้า"
                        onChange={this.handleInputChange}/>
                    <InputTextArea
                        name="description"
                        value={description}
                        prefix="รายละเอียด :"
                        placeholder="ใส่อะไรก็ใส่มาเหอะ"
                        onChange={this.handleInputChange}/>
                    <TagsInput
                        tags={tags}
                        onChange={this.handleTagsChange}
                        prefix="แท็ก :"
                        placeholder="ใส่แท็กให้กับสินค้าของคุณ ไม่ว่าจะเป็น ยี่ห้อ รุ่น สี หรือประเภทของสินค้า เพื่อให้ง่ายต่อการค้นหา โดยกด Enter เพื่อเพิ่มแท็กแต่ละอัน"/>

                    <BlockButton onClick={this.addSize}>+ เพิ่มตัวเลือกไซส์สินค้า</BlockButton>
                    {sizes.map((size, i) => (<SizeInput
                        key={i}
                        {...size}
                        onClick={(e) => this.handleSizeRemove(i)}
                        onChange={(e) => this.handleSizeChange(e, i)}/>))}
                    <dir style={{
                        paddingBottom: 500
                    }}></dir>
                </ScrollableContainer>
            </PageContainer>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductPage)
