import api from "../services";

async function loginService({ username, password }) {
  const loginResponse = await api().post("/auth", {
    username,
    password,
  });

  return loginResponse;
}

export { loginService };
