import { useCallback, useEffect, useState } from "react";
import { STRING } from "../constants/constants";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  ErrorParagraph,
  FirstHalfContainer,
  FlexContainer,
  FormContainer,
  FormWrapper,
  Heading,
  InputBox,
  Label,
  SecondHalfContainer,
  SubmitBtn,
  TableContainer,
} from "./Form.Styles";
import Select from "react-select";
import { debounce } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { personalDataCreators } from "./store/action";
import Table from "../component/Table.View";
import { useNavigate } from "react-router-dom";
const SignupSchema = yup.object().shape({
  address: yup.string().optional(),
  state: yup.string().optional(),
  city: yup.string().optional(),
  pincode: yup.string().optional().matches(/^\d+$/, "Pincode must be numeric"),
});
const SecondStepForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectConutry, setSelectConutry] = useState(null);
  const { countryNameList, addressDataAdded } = useSelector(
    (state) => state?.userData
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  useEffect(() => {
    dispatch(personalDataCreators.fetchCountryName({ search: "" }));
  }, []);
  const onCountrySelect = (data) => {
    setSelectConutry(data);
  };
  const fetchCountries = (data) => {
    dispatch(personalDataCreators.fetchCountryName({ search: data }));
  };
  const debounceOnChange = useCallback(debounce(fetchCountries, 400), []);
  const onSubmit = (data) => {
    const payload = { ...data };
    if (selectConutry) {
      payload["country"] = selectConutry?.value;
    }
    dispatch(personalDataCreators.addressDelatilsStore({ data: payload }));
  };
  useEffect(() => {
    if (addressDataAdded) {
      navigate("/");
    }
    return () => {
      dispatch(personalDataCreators.resetSecondStep());
    };
  }, [addressDataAdded]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContainer>
        <FormWrapper>
          <Heading>{STRING.ADDRESS_DETAILS}</Heading>
          {/*<----------------------------------------------->  */}
          <FlexContainer>
            <FirstHalfContainer>
              <Label>{STRING.ADDRESS}</Label>
              <InputBox
                placeholder={STRING.PLACEHOLDER_ADDRESS}
                {...register("address")}
              />
              {errors.address && (
                <ErrorParagraph>{errors.address.message}</ErrorParagraph>
              )}
            </FirstHalfContainer>
            <SecondHalfContainer>
              <Label>{STRING.STATE}</Label>
              <InputBox
                placeholder={STRING.PLACEHOLDER_STATE}
                {...register("state")}
              />
              {errors.state && (
                <ErrorParagraph>{errors.state.message}</ErrorParagraph>
              )}
            </SecondHalfContainer>
          </FlexContainer>
          {/*<----------------------------------------------->  */}
          <FlexContainer>
            <FirstHalfContainer>
              <Label>{STRING.CITY}</Label>
              <InputBox
                placeholder={STRING.PLACEHOLDER_CITY}
                {...register("city")}
              />
              {errors.city && (
                <ErrorParagraph>{errors.city.message}</ErrorParagraph>
              )}
            </FirstHalfContainer>
            <SecondHalfContainer>
              <Label>{STRING.COUNTRY}</Label>
              <Select
                onChange={onCountrySelect}
                options={countryNameList}
                value={selectConutry}
                isClearable={true}
                isSearchable={true}
                onInputChange={(data) => debounceOnChange(data)}
              />
            </SecondHalfContainer>
          </FlexContainer>
          <FlexContainer>
            <FirstHalfContainer>
              <Label>{STRING.PINCODE}</Label>
              <InputBox
                placeholder={STRING.PLACEHOLDER_PINCODE}
                {...register("pincode")}
              />
              {errors.pincode && (
                <ErrorParagraph>{errors.pincode.message}</ErrorParagraph>
              )}
            </FirstHalfContainer>
            <SecondHalfContainer></SecondHalfContainer>
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
export default SecondStepForm;
