import Form from "./Form";
import Table from "./Table";
import { MemberBodyContainer } from "./components";

import { getToken } from "../../store/selectors/auth";
import { useSelector } from "react-redux";

export const Members = () => {
  const token = useSelector(getToken);

  return (
    <MemberBodyContainer>
      <Form token={token} />

      <Table token={token} />
    </MemberBodyContainer>
  );
};
