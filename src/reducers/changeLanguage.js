export default function language(
  state = window.localStorage.getItem("i18nextLng"),
  action
) {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return action.payload;
    default:
      return state;
  }
}
