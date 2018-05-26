import { injectGlobal } from "styled-components";
import styledNormalize from "styled-normalize";
injectGlobal`
    
    ${styledNormalize}
    :root{
        --color-danger:rgba(222,0,0,0.9); 
        --color-shadow:rgba(0,0,0,0.5);
    }
    body{
        font-family: 'Helvetica, sans-serif';        
        background-color:hsla(290,60%,70%,0.3);
    }
    body,div,input,textarea,span,h1,h2,h3,h4,h5,h6,label,ul,li,ol,image,p{
        box-sizing:border-box;
        margin:0;
        padding:0;
        
    }
`;
