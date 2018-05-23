import styled from 'styled-components';

export const UploadBoxContainer = styled.div `
    display:flex;
    flex-wrap:wrap;
    align-items:flex-start;
    justify-content:flex-start;
    padding:24px 18px;
    &>*{
        &:nth-child(3n-1){
            margin-left:12px;
            margin-right:12px;
            
        }
    }

`;


export const Image = styled.img `
    box-sizing:border-box;        
    height:100px;
    object-fit:cover;
    object-position:center;
    padding:8px;
    border-radius:4px;
    box-shadow:0 0 1px black;
    width:100px;
    transition:opacity 0.3s;
    margin-bottom:12px;    
    &:hover{
        opacity:0.7;
    }
`;



export const ImageContainerWithOverlay = styled.span`
    position: relative;
    &>span{
        cursor:pointer;
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height:100px;
        border-radius:4px;
        background-color:rgba(0,0,0,0.3);
        font-size:48px;
        color:white;
        user-select: none;
        display:flex;
        justify-content:center;
        align-items:center;
        opacity:0;
        transition:opacity 0.3s;
    }
    &:hover>span{
        opacity:1;
    }  
`;


export const UploaderButton = styled.label`
    display:flex;
    height:100px;
    max-width:100px;
    flex-grow:1;
    padding:12px;
    justify-content:center;
    align-items:center;
    box-shadow:0 0 1px black;
    border-radius:4px;
    cursor:pointer;
    transition:opacity 0.3s;
    &>input{
        display:none;
    }
    &:hover{
        opacity:0.7;
    }
`;