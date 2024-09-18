import { nanoid } from "nanoid";
import { useId } from "react";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import { addContact } from "../../redux/contactsSlice";

import style from "./ContactForm.module.css";

const initialValues = {
  name: "",
  number: "",
};

const phoneBookSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "To Short")
    .max(50, "To Long!")
    .required("Required"),
  number: Yup.string()
    .min(6, "To Short")
    .max(12, "To Long!")
    .required("Required"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const id = nanoid();
    dispatch(addContact({ id, name: values.name, number: values.number }));
    actions.resetForm();
  };

  const idLabel = useId();
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={initialValues}
      validationSchema={phoneBookSchema}
    >
      <Form className={style.contactForm} autoComplete="off">
        <h1 className={style.formTitle}>Contact Form</h1>
        <div className={style.group}>
          <Field
            className={style.formField}
            type="text"
            name="name"
            id={`${idLabel}-'name'`}
            placeholder=" "
          />
          <label className={style.formLabel} htmlFor={`${idLabel}-'name'`}>
            Name
          </label>
          <ErrorMessage name="name" component="span" />
        </div>
        <div className={style.group}>
          <Field
            className={style.formField}
            type="string"
            name="number"
            id={`${idLabel}-'number'`}
            placeholder=" "
          />
          <label className={style.formLabel} htmlFor={`${idLabel}-'number'`}>
            Number
          </label>
          <ErrorMessage name="number" component="span" />
        </div>
        <button className={style.formButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
