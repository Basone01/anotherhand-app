import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PageContainer, ScrollableContainer, TopNavbarContainer} from '../styles/index'
import InputBox from 'components/inputBox'
import InputTextArea from 'components/inputTextArea'
import TagsInput from 'components/tagsInput'
import ImageUploader from 'components/imageUploader'

export class AddProductPage extends Component {
    render() {
        return (
            <PageContainer>
                <TopNavbarContainer>
                <span>{"<"}</span>
                <span style={{flexGrow:1,textAlign:"center"}}>เพิ่มสินค้าใหม่</span>
                <span >{">"}</span>
                </TopNavbarContainer>
                <ScrollableContainer>
                        <ImageUploader /> 
                
                        <InputBox prefix="ชื่อ :" placeholder="ใส่ชื่อสินค้าที่ต้องการ"/>
                        <InputBox prefix="ราคา :" placeholder="ใส่ราคาสินค้าที่ต้องการ"/>
                        <InputTextArea prefix="รายละเอียด :" placeholder="ใส่อะไรก็ใส่มาเหอะ"/>
                        <TagsInput
                            prefix="แท็ก :"
                            placeholder="ใส่แท็กให้กับสินค้าของคุณ ไม่ว่าจะเป็น ยี่ห้อ รุ่น สี หรือประเภทของสินค้า เพื่อให้ง่ายต่อการค้นหา โดยกด Enter เพื่อเพิ่มแท็กแต่ละอัน"/>
                    <dir style={{paddingBottom:500}}></dir>
                </ScrollableContainer>

            </PageContainer>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductPage)
