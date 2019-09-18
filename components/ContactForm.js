import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import css from './style.scss';

const initialValues = {
  firstName: '',
  lastName: '',
  mobileNumber: '',
  email: '',
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  mobileNumber: Yup.string()
    .matches(/^\d{11}$/, 'Phone number must be exactly 11 digits.')
    .required(),
  email: Yup.string()
    .email('Invalid email.')
    .required(),
});

const Input = ({ field, form, ...props }) => {
  return ( <input {...field} {...props} /> )
}

const ContactForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log({ values });
      }}
      render={(props) => {
        return (
          <Form>
            <div className={css.formgroup}>
              <label className={css.formlabel}>First Name</label>
              <Field
                name="firstName"
                type="text"
                className={css.input}
                component={Input}
              />
            </div>

            <div className={css.formgroup}>
              <label className={css.formlabel}>Last Name</label>
              <Field
                name="lastName"
                type="text"
                className={css.input}
                component={Input}
              />
            </div>

            <div className={css.formgroup}>
              <label className={css.formlabel}>Mobile Number</label>
              <Field
                name="mobileNumber"
                type="tel"
                className={css.input}
                component={Input}
              />
            </div>

            <div className={css.formgroup}>
              <label className={css.formlabel}>Email</label>
              <Field
                name="email"
                type="email"
                className={css.input}
                component={Input}
              />
            </div>

            <div className={css.formgroup}>
              <button className={css.button} type="submit">Submit</button>
            </div>
          </Form>
        )
      }}
    />
  );
}

export default ContactForm;
