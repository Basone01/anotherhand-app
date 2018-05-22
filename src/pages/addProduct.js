import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PageContainer, MainContainer, TopNavbarContainer, BottomNavbarContainer} from '../styles/index'
import InputBox from 'components/inputBox'
import InputTextAreaBox from 'components/inputTextAreaBox'


export class AddProductPage extends Component {
    render() {
        return (
            <PageContainer>
                <TopNavbarContainer>
                    <h1>เพิ่มสินค้าใหม่</h1>
                </TopNavbarContainer>
                <MainContainer>
                <InputBox prefix="ชื่อ :" placeholder="ใส่ชื่อสินค้าที่ต้องการ"/>
                <InputBox prefix="ราคา :" placeholder="ใส่ราคาสินค้าที่ต้องการ"/>
                <InputTextAreaBox prefix="รายละเอียด :" placeholder="ใส่อะไรก็ใส่มาเหอะ"/>
                

                </MainContainer>
                <BottomNavbarContainer>
                    <h1>BOTTOM</h1>
                </BottomNavbarContainer>
            </PageContainer>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductPage)
