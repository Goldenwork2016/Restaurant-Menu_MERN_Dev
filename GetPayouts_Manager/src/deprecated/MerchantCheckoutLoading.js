import React from 'react'
import { css } from '@emotion/core';
import { PulseLoader} from 'react-spinners';

const override = css`
    margin: 0 auto;
    text-align:center;
`;

const MerchantCheckoutLoading = ()=>{
    return(
        <PulseLoader
          css={override}
          sizeUnit={"px"}
          size={20}
          color={'#CA14B8'}
        /> 
    );
}

export default MerchantCheckoutLoading