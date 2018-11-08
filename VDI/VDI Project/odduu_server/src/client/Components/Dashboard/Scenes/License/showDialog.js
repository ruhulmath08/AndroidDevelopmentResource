import React,{Component} from 'react';
import {Dialog,DialogActions,Button,DialogTitle,DialogContent,Grid,Cell} from 'react-mdl';

var props = '';
/**
 * @function ShowDialog - Render a Modal/Dialouge to show token
 * @param {{close: Function, token: String, openDialog: Function}} prop 
 */
export const ShowDialog = (prop) => {
  var props = prop;
  return (
    <div className={`container`}>
    <Dialog open={props.openDialog} style={{width:'35%'}}>

        <DialogTitle>
          {props.title}

        </DialogTitle>
          <DialogContent>
            <textarea rows="5" cols="50" value={props.token}>
                {props.token}
            </textarea>
          </DialogContent>

          <DialogActions>
            <Button raised onClick={()=> {props.close()}}>Close</Button>
          </DialogActions>

    </Dialog>
    </div>
  )
}
