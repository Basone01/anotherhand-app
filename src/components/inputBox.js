import React from 'react'
import styled from 'styled-components';

const Label = styled.span `
    display:flex;
    flex-shrink:0;
    align-items:center;
    padding:14px 24px 12px 24px;
`;

const InputContainer = styled.span `
    display:flex;
    flex-grow:1;
    
`

const Input = styled.input `
    padding:14px 24px 12px 24px;
    flex-grow:1;
    min-width: 100%;
    max-width: 100%;
    width: 100%;
    box-sizing:border-box;
    border:none;
    outline:none;
    text-align:end;
    &[type=number]::-webkit-inner-spin-button, 
    &[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
    }
`

const InputBoxContainer = styled.label `
    display:flex;
    font-size:14px;
    font-weight:bold;
    border-bottom:1px solid rgba(0,0,0,0.2);

`;

const InputBox = ({
    prefix,
    type,
    ...rest
}) => {
    return (
        <InputBoxContainer>
            <Label>{prefix}</Label>
            <InputContainer>
                <Input type={type || "text"} onChange={rest.onChange} {...rest}/>
            </InputContainer>

        </InputBoxContainer>
    )
}

export default InputBox