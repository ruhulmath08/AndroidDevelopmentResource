import React from 'react';


export default function UserInfo(props) {
  return (
  <div style={{border: '2px solid #eee', padding: '0px'}}>

    <div style={{padding: '10px'}}><b>Created Date</b>: {`${new Date(props.createdDate).getFullYear()}-${new Date(props.createdDate).getMonth()+1}-${new Date(props.createdDate).getDate()}`}</div>
  </div>

  );
}
