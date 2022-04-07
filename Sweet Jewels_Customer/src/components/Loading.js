import React from 'react'
import { css } from '@emotion/core';
import { HashLoader} from 'react-spinners';
import '../styles/css/styles.css';

const override = css`
    margin: 0 auto;
    text-align:center;
    background-color: var(--theme-color);
    padding: 70px;
    border-radius: 100%;
`;

const Loading = ()=>{
    return(
        <div style={{paddingTop: 300 + 'px'}}>
        <HashLoader
          css={override}
          sizeUnit={"px"}
          size={70}
          color={"#ffffff"}
        /> 
        </div>
    );
}

export default Loading