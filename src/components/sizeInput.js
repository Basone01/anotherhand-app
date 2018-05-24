import React from 'react'
import InputBox from './inputBox';
import styled from 'styled-components';

const Container = styled.div `
    display: flex;
`;

const RemoveButton = styled.a `
    display:flex;
    box-sizing:border-box;
    flex-shrink:0;
    width: 48px;
    justify-content:center;
    align-items:center;
    background-color:red;
    user-select: none;
    cursor:pointer;
    color:white;
    border:1px solid rgba(0,0,0,0.3);
    border-right:none;
`;

const FormContainer = styled.div `
    flex-grow:1;
    &>:last-child{
       border-bottom:0; 
    }
`

const SizeInput = ({
    size = '',
    price = 0,
    stock = 0,
    onClick,
    onChange
}) => {
    return (
        <Container>
            <RemoveButton onClick={onClick}>X</RemoveButton>
            <div
                style={{
                border: '1px solid rgba(0,0,0,0.3)'
            }}>
                <FormContainer>
                    <InputBox 
                        name="size" 
                        prefix="ไซส์ :" 
                        value={size} 
                        onChange={onChange}/>
                    <InputBox
                        type="number"
                        name="price"
                        prefix="ราคา :"
                        value={price}
                        onChange={onChange}/>
                    <InputBox
                        type="number"
                        name="stock"
                        prefix="จำนวน :"
                        value={stock}
                        onChange={onChange}/>
                </FormContainer>

            </div>
        </Container>

    )
}

export default SizeInput