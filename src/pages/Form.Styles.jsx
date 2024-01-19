import styled from "styled-components";
import { COLORS } from "../constants/constants";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-bottom: 55px;
`;
export const FormWrapper = styled.div`
  // flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  max-width: 956px;
  width: 100%;
`;
export const Heading = styled.div`
  text-decoration: underline;
  font-weight: bold;
  padding-bottom: 20px;
`;

export const FlexContainer = styled.div`
  flex: 1;
  display: flex;
  column-gap: 30px;
`;
export const FirstHalfContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  // margin-left: 30px;
  // margin-right: 30px;
  row-gap: 10px;
  margin-bottom: 10px;
`;
export const Label = styled.label`
  color: ${COLORS.LABEL_TEXT};

  font-size: 13px;
  font-weight: 500;
`;

export const InputBox = styled.input`
  height: 34px;

  border: 0.5px solid ${COLORS.BORDER};
  background-color: ${COLORS.PRIMARY_STROKE_COLOR};
  color: ${COLORS.TERTIARY_TEXT_COLOR};
  border-radius: 4px;
  padding-left: 10px;
  padding-right: 10px;
  outline: none;
`;
export const ErrorParagraph = styled.p`
  color: red;
`;
export const SecondHalfContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  // margin-left: 30px;
  // margin-right: 30px;
  row-gap: 10px;
  margin-bottom: 10px;
`;
export const SubmitBtn = styled.input`
  width: 135px;
  height: 35px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 30px;
`;
export const TableContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;
