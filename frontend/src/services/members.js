import api from "../services";

async function postMember({ firstName, lastName, address, ssn, token }) {
  const addResponse = await api(token).post("/api/members", {
    firstName,
    lastName,
    address,
    ssn,
  });
  return addResponse;
}

async function getMembers({ token }) {
  const getResponse = await api(token).get("/api/members");

  return getResponse;
}

export { postMember, getMembers };
