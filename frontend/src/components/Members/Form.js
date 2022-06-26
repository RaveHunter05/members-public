import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { FormInput } from "../../forms/SimpleFieldForm";
import { ErrorContainer } from "../../forms/SimpleFieldForm/components";
import { postMember } from "../../services/members";

import { useDispatch } from "react-redux";
import { updateData } from "../../store/slices/membersSlice";

const FormMembers = ({ token }) => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, { setErrors }) => {
    try {
      Object.keys(values).forEach(
        (value) => (values[value] = values[value].trim())
      );

      const result = await postMember({ ...values, token });

      dispatch(updateData(result.data));
    } catch (error) {
      setErrors({ api: error.data.message });
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          address: "",
          ssn: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object({
          firstName: Yup.string().trim().required(),
          lastName: Yup.string().trim().required(),
          address: Yup.string().trim().required(),
          ssn: Yup.string()
            .required()
            .matches(
              /\d{3}-\d{2}-\d{4}/g,
              "ssh does not match the format ###-##-####"
            ),
        })}
      >
        {({ errors }) => (
          <Form>
            <FormInput label="firstName" type="text" name="firstName" />

            <FormInput label="lastName" type="text" name="lastName" />
            <FormInput label="address" type="text" name="address" />

            <FormInput label="ssn" type="text" name="ssn" />

            {errors?.api && <ErrorContainer>{errors.api}</ErrorContainer>}

            <button type="reset">Reset</button>

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormMembers;
