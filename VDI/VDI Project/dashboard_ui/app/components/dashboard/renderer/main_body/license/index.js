import React from 'react';
import {Grid,Cell,DataTable, TableHeader,Button} from 'react-mdl';
import {Field, reduxForm} from 'redux-form';

export default class License extends React.Component {
  constructor(props) {
    super(props);
    this.submitAction = this.submitAction.bind(this);
  }
  submitAction(values) {
    /**
     * @link actions.submitToken
     */
    this.props.submitToken(values)
  }

  render() {
    var _that = this;

    return(
      <div>
      <Grid >
          <Cell col={12} >
            <Grid>
              <Cell col={8} offset={1}>
                <TokenForm onSubmit={this.submitAction} />
              </Cell>
            </Grid>
          </Cell>
          <Cell col={8} offset={2}>
              <DataTable
                shadow={0}
                rowKeyColumn='startedDate'
                rows={this.props.licenseList || []}
              >
                <TableHeader name='startedDate' id='startedDate' cellFormatter={(date, obj, index)=> {
                  return date.split('T')[0]
                }}  tooltip='License Subscribed Date'>Subscribed</TableHeader>
                <TableHeader name='expDate' id='expDate' cellFormatter={(date, obj, index)=> {
                  return date.split('T')[0]
                }} tooltip='License Expiry Date' >Expire</TableHeader>
                <TableHeader name='qty' id='qty' tooltip='Quantity' >Quantity</TableHeader>
              </DataTable>
          </Cell>
      </Grid>
      </div>
    )
  }
}

let TokenForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className={`container`}>
    <form onSubmit={handleSubmit}>

          <Grid noSpacing={true}>
            <Cell col={8} offset={1}>

                <Field className={`mdl-textfield__textarea`} name='token' component='textarea'   placeholder='Paste Token' />

            </Cell>
            <Cell col={2}>

                  <Button  raised colored  disabled={pristine || submitting} type="submit">Submit</Button>

            </Cell>
          </Grid>

    </form>
    </div>
  )
}

TokenForm = reduxForm({
  form: 'tokenForm'
})(TokenForm);
