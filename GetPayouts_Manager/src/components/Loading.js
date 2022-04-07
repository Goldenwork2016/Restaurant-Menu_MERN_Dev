import React from 'react'
import { css } from '@emotion/core';
import { PulseLoader} from 'react-spinners';

const override = css`
    margin: 0 auto;
    text-align:center;
`;

const Loading = ()=>{
    return(
        <div 
        // style={{paddingTop: 300 + 'px'}}
        >
        <PulseLoader
          css={override}
          sizeUnit={"px"}
          size={20}
          color={'#000100'}
        /> 
        </div>
    );
}

export default Loading