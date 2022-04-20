import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

const MemberMsg =(props)=>{
    const {memberExists} = props;
    if(memberExists){
        return <div>
                <FontAwesomeIcon
                style={{
                    color:'red'
                }} 
                icon={faExclamationTriangle}
                /> You are already a member. <br></br>
            </div>
    } else {    
        return <div>
                <FontAwesomeIcon
                style={{
                    color:'red'
                }} 
                icon={faExclamationTriangle}
                /> You are not a member. Only members can checkin.<br></br>
            </div>
    }
}
export default MemberMsg