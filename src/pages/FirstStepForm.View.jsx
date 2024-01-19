import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  ErrorParagraph,
  FirstHalfContainer,
  FlexContainer,
  FormContainer,
  FormWrapper,
  GenderSelect,
  Heading,
  InputBox,
  Label,
  SecondHalfContainer,
  SelectDivContainer,
  SelectOption,
  SubmitBtn,
  TableContainer,
} from "./Form.Styles";
import { IDoptions, STRING, options } from "../constants/constants";
import { useEffect, useState } from "react";
import Select from "react-select";
import Table from "../component/Table.View";
import { useDispatch, useSelector } from "react-redux";
import { personalDataCreators } from "./store/action";
import { useNavigate } from "react-router-dom";
const AddressSchema = yup.object().shape({
  name: yup.string().required().min(3),
  age: yup.number().required().positive().integer(),
  mobile: yup
    .string()
    .required()
    .matches(/^[6-9]\d{9}$/, "Invalid Indian Mobile Number")
    .max(10),
  govtId: yup
    .string()
    .required()
    .matches(
      /^[2-9]\d{11}$/,
      "Invalid Aadhar Number. It should have 12 numeric digits and should not start with 0 and 1."
    ),
});
const FirstStepForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { personalDataAdded } = useSelector((state) => state.userData);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedIDOption, setSelectedIDOption] = useState(false);
  const [optionError, setOptionError] = useState(false);
  const [IdSelection, setIdSelection] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddressSchema),
  });
  const onSubmit = (data) => {
    const payload = { ...data };
    if (!selectedOption) {
      setOptionError(true);
      return;
    }
    if (!IdSelection) {
      setSelectedIDOption(true);
      return;
    }
    payload["sex"] = selectedOption?.value;
    payload["id_type"] = IdSelection?.value;
    dispatch(personalDataCreators.personalDataStore({ data: payload }));
  };
  const onChange = (data) => {
    setSelectedOption(data);
    if (data) {
      setOptionError(false);
    } else {
      setOptionError(true);
    }
  };
  const onIdChange = (data) => {
    setIdSelection(data);
    if (data) {
      setSelectedIDOption(false);
    } else {
      setSelectedIDOption(true);
    }
  };
  useEffect(() => {
    if (personalDataAdded) {
      navigate("/address_detail");
    }
    return () => {
      dispatch(personalDataCreators.resetFirstStep());
    };
  }, [personalDataAdded]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <FormWrapper>
          <Heading>{STRING.PERSONAL_DETAILS}</Heading>

          {/* <------------------first name and DOB container----------------> */}

          <FlexContainer>
            <FirstHalfContainer>
              <Label>{STRING.FIRST_NAME}</Label>
              <InputBox
                placeholder={STRING.PLACEHOLDER_FIRST_NAME}
                {...register("name", { required: true, minLength: 3 })}
              />
              {errors.name && (
                <ErrorParagraph>{errors.name.message}</ErrorParagraph>
              )}
            </FirstHalfContainer>
            <SecondHalfContainer>
              <Label>{STRING.DOB}</Label>
              <InputBox
                placeholder={STRING.PLACEHOLDER_DOB}
                {...register("age", { required: true })}
              />
              {errors.age && (
                <ErrorParagraph>{errors.age.message}</ErrorParagraph>
              )}
            </SecondHalfContainer>
          </FlexContainer>
          {/* <--------------------sex and mobile container------------------------> */}
          <FlexContainer>
            <FirstHalfContainer>
              <Label>{STRING.SEX}</Label>
              <Select
                defaultValue={selectedOption}
                onChange={onChange}
                options={options}
              />
              {optionError && (
                <ErrorParagraph>{STRING.SELECT_GENDER}</ErrorParagraph>
              )}
            </FirstHalfContainer>
            <SecondHalfContainer>
              <Label>{STRING.MOBILE}</Label>
              <InputBox
                maxLength={10}
                {...register("mobile", { required: true, maxLength: 10 })}
              />
              {errors.mobile && (
                <ErrorParagraph>{errors.mobile.message}</ErrorParagraph>
              )}
            </SecondHalfContainer>
          </FlexContainer>

          {/* <-------------------Govt issued Id-------------------------> */}
          <FlexContainer>
            <FirstHalfContainer>
              <Label>{STRING.ID_TYPE}</Label>
              <Select
                defaultValue={IdSelection}
                onChange={onIdChange}
                options={IDoptions}
              />
              {selectedIDOption && (
                <ErrorParagraph>{STRING.SELECT_ID_TYPE}</ErrorParagraph>
              )}
            </FirstHalfContainer>
            <SecondHalfContainer>
              <Label>{STRING.GOVT_ID}</Label>
              <InputBox
                {...register("govtId", { required: true, minLength: 3 })}
              />
              {errors.govtId && (
                <ErrorParagraph>{errors.govtId.message}</ErrorParagraph>
              )}
            </SecondHalfContainer>
          </FlexContainer>
        </FormWrapper>
        <SubmitBtn type="submit" />
      </FormContainer>
      <TableContainer>
        <Table />
      </TableContainer>
    </form>
  );
};
export default FirstStepForm;
