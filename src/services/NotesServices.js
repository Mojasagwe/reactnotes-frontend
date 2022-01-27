import httpClient from "../http-common";

const getAll = () => {
	return httpClient.get("/notes");
};
// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll };
