import React from 'react';

class User_info extends React.Component {
render() {
return (
<div  style={{border: '2px solid #eee', padding: '0px'}}>
<div style={{padding: '10px'}}><b style={{margin: '0 27px 0 0'}}>User Role </b>: {this.props.role.toUpperCase()}</div>
<div style={{padding: '10px'}}><b>Created Date</b>: {`${new Date(this.props.createdDate).getFullYear()}-${new Date(this.props.createdDate).getMonth()+1}-${new Date(this.props.createdDate).getDate()}`}</div>
</div>

);
}
}

export default User_info;
