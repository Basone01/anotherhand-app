import styled from 'styled-components';

export const BlockButton = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 36px;
	background-color: white;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-style: dashed;
	cursor: pointer;
	transition: background 0.25s;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

export const IconButton = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 32px;
	height: 32px;
	cursor: pointer;
	user-select: none;
	transition: color 0.25s;
	&:hover {
		color: white;
	}
`;
