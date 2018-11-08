import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {Grid, Cell} from 'react-mdl';
import uploadIcon from '../../../img/upload-icon.png';
import {Style} from './style';
import {css} from 'aphrodite';
export default (field)=> {
  const files = field.input.value;
  return (
    <Grid>
      <Cell col={8} offset={2}>
        <Dropzone
          name={field.name}
          onDrop={(filesToUpload,rejectedFiles)=> {
            return field.input.onChange(filesToUpload)
          }}
          className={css(Style.fileDrop)}
          >
          <div>
            <h4>Drag a file Or Click on it </h4>
            <img src={uploadIcon} className={css(Style.uploadImg)}/>
          </div>
        </Dropzone>
      </Cell>
      <Cell col={8} offset={2}>
        {field.meta.touched &&
          field.meta.error &&
          <span className="error">{field.meta.error}</span>}
        {files && Array.isArray(files) && (
          <ul>
            { files.map((file, i) => {
              return <li key={i}>{file.name}</li>
            }) }
          </ul>
        )}
      </Cell>
    </Grid>
  )
}
