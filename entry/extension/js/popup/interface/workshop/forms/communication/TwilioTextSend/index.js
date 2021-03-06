/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { databaseWriteRequest} from 'store/departments/actions'
import {  fromAuthentication } from 'store/departments/selectors'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
const FormRedux = props => <FormRender { ...props} />

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, state) => new Promise((resolve, reject) => {
  const payload = {
    uid: 'test',
    type: 'single',
    payload: {
      ...data
    },
    metadata: {
      requesting: data.requesting,
    }
  }

  // Dispatch | Request Database Writes
  const config = {writeType: 'create'}
  const metadata = {entity: 'infrastructure', branch: ['messages', 'outbound', 'request']}
  dispatch(databaseWriteRequest({payload, metadata, config }))
})

const mapStateToProps = (state) => { 
  const requesting = fromAuthentication.getUserId(state)
  return {
    initialValues: {
      requesting
    }
  }
}

const mapDispatchToProps = dispatch => ({

})

/* -------------------------- Form Configuration ---------------------------- */
const config = {
  form: 'TwilioTextSend',
  fields: [
    'requesting',
    'textBody',
    'textRecipient',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-- Export Form ---*/
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormRedux))
