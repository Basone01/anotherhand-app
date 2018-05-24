import styled from 'styled-components';

export const UploadBoxContainer = styled.div `
    display:flex;
    flex-wrap:wrap;
    align-items:flex-start;
    justify-content:flex-start;
    padding:18px 16px;
    &>*{
        margin-right:12px;
        &:last-child{
            margin-right:0;
        }       
    }

`;

export const Image = styled.img `
    width:100%;
    height:100%;
    object-fit:cover;
    object-position:center; 
`;

export const ImageContainerWithOverlay = styled.span `
    position: relative;
    box-sizing:border-box;        
    overflow:hidden;
    width:100px;
    height:100px;
    padding:8px;
    border-radius:4px;
    box-shadow:0 0 1px black;
    transition:opacity 0.3s;
    &:hover{
        opacity:0.7;
        &>span{
            opacity:1;
        }  
    }    
    &>span{
        cursor:pointer;
        position:absolute;
        top:0;
        left:0;
        width: 100%;
        height:100%;
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
    
`;

export const UploaderButton = styled.label `
    display:flex;
    height:100px;
    max-width:100px;
    width:100px;
    flex-grow:1;
    flex-shrink:0;
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