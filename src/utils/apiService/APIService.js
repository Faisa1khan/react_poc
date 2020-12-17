import API from "./API";

const APIService = {
  getPeople: async params => {
    return API.get("people", { params }).then(res => res.data);
  },

  getPeopleById: async id => {
    // ajax magic
  }
};

export default APIService;
