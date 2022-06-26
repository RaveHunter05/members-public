import { ErrorMessage, Field, useField } from "formik";

import {
  FormGroup,
  LabelField,
  Description,
  ErrorContainer,
} from "./components";

export const FormInput = ({
  label,
  name,
  type = "text",
  placeholder,
  disabled = false,
  description,
  id,
}) => {
  return (
    <FormGroup>
      {label && <LabelField htmlFor={id || name}>{label}</LabelField>}
      <div>
        <Field
          type={type}
          name={name}
          id={id || name}
          placeholder={placeholder}
          disabled={disabled}
        />
      </div>
      {description && <Description>{description}</Description>}
      <ErrorContainer>
        <ErrorMessage name={name} />
      </ErrorContainer>
    </FormGroup>
  );
};
