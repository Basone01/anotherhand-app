import React from 'react'
import styled from 'styled-components';

const InputBoxContainer = styled.label `
    display:flex;
    font-size:16px;
    font-weight:bold;
    border-bottom:1px solid rgba(0,0,0,0.2);
    &>input{
        flex-grow:1;
        padding:14px 24px 12px 24px;
        border:none;
        outline:none;
        text-align:end;
    }
    &>span{
        display:flex;
        align-items:center;
        padding:14px 24px 12px 24px;
    }    
`;

const InputBox = ({
    prefix,
    ...rest
}) => {
    return (
        <InputBoxContainer>
            <span>{prefix}</span>
            <input type="text" {...rest}/>
        </InputBoxContainer>
    )
}

export default InputBox