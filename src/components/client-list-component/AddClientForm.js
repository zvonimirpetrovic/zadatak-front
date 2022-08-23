import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";
import ClientListComponent from "./ClientListComponent";

const AddClientForm = (props) => {

  let state = {
    name: '', country: '', city: '', street_name: '', street_number: '', zip: '',
  }

  const validationSchema = Yup.object().shape({
    name: 
      Yup.string()
      .required("Required"),
    country: 
      Yup.string()
      .required("Required"),
    city: 
      Yup.string()
      .required("Required"),
    street_name: 
      Yup.string()
      .required("Required"),
    street_number: 
      Yup.number()
      .required("Required"),
    zip:
      Yup.number()
      .required("Required"),
  });
  console.log(props);
  return (
    <div className="form-wrapper">
      <Formik initialValues={{}} {...props} validationSchema={validationSchema} onSubmit={console.log('')}>
        <Form>
          <FormGroup>
            <Field name="name" type="text" 
                className="form-control" placeholder="Name"/>
            <ErrorMessage
              name="name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="country" type="text" 
                className="form-control" placeholder="Country"/>
            <ErrorMessage
              name="country"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="city" type="text" 
                className="form-control" placeholder="City"/>
            <ErrorMessage
              name="city"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="street_name" type="text" 
                className="form-control" placeholder="Street name"/>
            <ErrorMessage
              name="street_name"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="street_number" type="number" 
                className="form-control" placeholder="Street number"/>
            <ErrorMessage
              name="street_number"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <FormGroup>
            <Field name="zip" type="number" 
                className="form-control" placeholder="Zip"/>
            <ErrorMessage
              name="zip"
              className="d-block invalid-feedback"
              component="span"
            />
          </FormGroup>
          <Button className="btn" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
  
export default AddClientForm;