import CryptoJS from 'crypto-js'
const hello=()=>{
    const bytes  = CryptoJS.AES.decrypt('U2FsdGVkX1+fm+ZikbckTsr9YTNobpNRmACgE7nSYKcxf+2E5ajVzdEd8dby5cUADUxHTJwArqWNQkxUEVdiBg==', 'rebayflockiskewly');
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
}

export default  hello