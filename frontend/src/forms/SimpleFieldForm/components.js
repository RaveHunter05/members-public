import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const LabelField = styled.label`
  display: block;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  color: rgb(55 65 81);
  text-transform: capitalize;
`;

export const Description = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(107 114 128);
`;

export const ErrorContainer = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: rgb(220 38 38);
`;
