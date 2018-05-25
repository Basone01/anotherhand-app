import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PageContainer, ScrollableContainer, TopNavbarContainer, BottomNavbarContainer } from '../styles';

class HomePage extends Component {
	render() {
		return (
			<PageContainer>
				<TopNavbarContainer>TOP</TopNavbarContainer>
				<ScrollableContainer>
					<h1> นี่ HOME ไง จำไม่ได้หรอ</h1>
				</ScrollableContainer>
				<BottomNavbarContainer>
					<NavLink to="/add">เพิ่มสินค้า</NavLink>
				</BottomNavbarContainer>
			</PageContainer>
		);
	}
}

export default connect()(HomePage);
