import styled from 'styled-components';


export const MainContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:stretch;
    justify-content:flex-start;
    background-color:#fff;
    overflow-x:hidden;
    overflow-y:scroll;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const PageContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:stretch;
    position:relative;
    &> ${MainContainer} {
        flex-grow:1;
    }
    
`;

export const AppContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:stretch;
    position:relative;
    max-width:360px;
    min-height:96vh;
    max-height:96vh;
    border:1px solid #222;
    margin:2vh auto;
    overflow-x:hidden;
    border-radius:12px;
    &> ${PageContainer} {
        flex-grow:1;
    }
`;


const BaseNavbarContainer = styled.div`
    display: block;
    position:relative;
    max-height:42px;
    min-height:42px;
    background-color:#eee;  
    box-shadow:0 0 1px rgba(0,0,0,0.5);
    padding:12px 24px;
    
`;

export const BottomNavbarContainer = BaseNavbarContainer.extend`
    bottom: 0;
    left:0;
    right:0;

`;

export const TopNavbarContainer = BaseNavbarContainer.extend`
    top: 0;
    left:0;
    right:0;

`;