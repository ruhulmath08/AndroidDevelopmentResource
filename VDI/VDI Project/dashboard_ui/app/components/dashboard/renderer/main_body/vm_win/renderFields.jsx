
import React from 'react';
import {Button, Grid, Cell} from 'react-mdl';
import {Field} from 'redux-form';
const renderField = ({input, label, type, meta : {touched, error}}) => {
  return  (
    <div>
      <input {...input} type={type} placeholder = {label} />
      {touched && error && <span> {error} </span>}
    </div>
  )
}
const renderTextArea = ({input, label, type, meta : {touched, error}}) => {
  return  (
    <div>
      <textarea {...input} type={type} placeholder = {label} />
      {touched && error && <span> {error} </span>}
    </div>
  )
}

export const attributeField = ({fields, meta: {touched, error}}) => {
  return (
    <Grid>
      <Cell col={4} offset={4}>
          <Button raised type="button"  onClick={() => (fields.push())} >Add Attributes</Button>
          {touched && error && <span>{error}</span>}
      </Cell>
      {
        fields.map((attribute, index) => {
          return (
            <Cell col ={8} offset={2} key ={index}>
              <Grid noSpacing={true}>
                  <Cell col={4}>
                      <Field
                        name = {`${attribute}`}
                        type="text"
                        component = {renderField}
                        label ="Put Attribute"
                        />
                  </Cell>
                  <Cell col={4}>
                      <Button type="button" style={{backgroundColor : '#FA706E'}} onClick={() => (fields.remove(index))} >Remove</Button>
                  </Cell>
              </Grid>
            </Cell>
          )
        })
      }
      </Grid>

  )
}

export const cmdField =({fields, meta: {touched, error}}) => {
  return (
    <Grid>
      <Cell col={4} offset={4}>
          <Button type="button" raised onClick={() => (fields.push())}>Add Command</Button>
          {touched && error && <span>{error}</span>}
      </Cell>
      {
        fields.map((attribute, index) => {
          return (
            <Cell col ={8} offset={2} key ={index}>
              <Grid noSpacing={true}>
                  <Cell col={4}>
                      <Field
                        name = {`${attribute}`}
                        type="text"
                        component = {renderTextArea}
                        label ="Put Command"
                        />
                  </Cell>
                  <Cell col={4}>
                      <Button type="button" style={{backgroundColor : '#FA706E'}} onClick={() => (fields.remove(index))} >Remove</Button>
                  </Cell>
              </Grid>
            </Cell>
          )
        })
      }
      </Grid>

  )
}
