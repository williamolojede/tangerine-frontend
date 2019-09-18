import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import axios from 'axios';
import css from './style.scss';

import { LoadingSpinner } from './icons/LoadingSpinner'

const initialValues = {
  firstName: '',
  lastName: '',
  mobileNumber: '',
  email: '',
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required.'),
  lastName: Yup.string().required('Last Name is required.'),
  mobileNumber: Yup.string()
    .matches(/^\d{11}$/, 'Phone number must be exactly 11 digits.')
    .required('Phone number is required.'),
  email: Yup.string()
    .email('Invalid email.')
    .required('Email is required.'),
});

const Input = ({ field, form, ...props }) => {
  return ( <input {...field} {...props} /> )
}

const ErrorMessageText = ({ children }) => {
  return <span className={css.errorMessage}>{children}</span>
}

const ContactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await axios.post('https://tangerine-api.herokuapp.com/early-access', values);
        setSubmitting(false);
      }}
      render={({ isSubmitting }) => {
        return (
          <Form className={css.form}>
            <div className={css.formgroup}>
              <label className={css.formlabel}>First Name</label>
              <Field
                name="firstName"
                type="text"
                className={css.input}
                component={Input}
              />
              <ErrorMessage name="firstName" component={ErrorMessageText} />
            </div>

            <div className={css.formgroup}>
              <label className={css.formlabel}>Last Name</label>
              <Field
                name="lastName"
                type="text"
                className={css.input}
                component={Input}
              />
              <ErrorMessage name="lastName" component={ErrorMessageText} />
            </div>

            <div className={css.formgroup}>
              <label className={css.formlabel}>Mobile Number</label>
              <Field
                name="mobileNumber"
                type="tel"
                className={css.input}
                component={Input}
              />
              <ErrorMessage name="mobileNumber" component={ErrorMessageText} />
            </div>

            <div className={css.formgroup}>
              <label className={css.formlabel}>Email</label>
              <Field
                name="email"
                type="email"
                className={css.input}
                component={Input}
              />
              <ErrorMessage name="email" component={ErrorMessageText} />
            </div>

            <div className={css.formgroup}>
              <button 
                className={css.button}
                className={cx(css.button, { [css.isLoading]: isSubmitting })}
                type="submit"
                disabled={isSubmitting}
              >
                Submit
                <LoadingSpinner 
                  className={cx(css.loadingSpinner, { [css.isLoading]: isSubmitting })}
                />
              </button>
            </div>
          </Form>
        )
      }}
    />
  );
}

export default ContactForm;
