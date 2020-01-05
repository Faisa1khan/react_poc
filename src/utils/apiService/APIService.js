import API from "./API";

const APIService = {
  getPeople: async () => {
    try {
      API.get("people").then(data => console.log(data));
    } catch (e) {
      console.log(e);
    } finally {
    }
  },

  loadUsersById: async id => {
    // ajax magic
  }
};

export default APIService;
