import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PageContainer, MainContainer, TopNavbarContainer, BottomNavbarContainer} from '../styles/index'



export class AddProductPage extends Component {
    render() {
        return (
            <PageContainer>
                <TopNavbarContainer>
                    <h1>Top</h1>
                </TopNavbarContainer>
                <MainContainer>
                    
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>
                    <input type="text"/>

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
