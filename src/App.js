import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { connect } from "react-redux";
import changeLanguage from "./actionCreator/changeLanguage";

function App(props) {
  const { t, i18n } = useTranslation();
  console.log(props.language);
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    // props.changeLanguage(i18n.language);
  };

  return (
    <div>
      <select
        onChange={e => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">en</option>
        <option value="hi">hi</option>
        <option value="fr">fr</option>
      </select>

      <h1>{t("heading")}</h1>
      <Trans i18nKey="detail">
        India is a country in South Asia. It is the seventh-largest country by
        area, the second-most populous country.India is a very beautiful country
      </Trans>
    </div>
  );
}

const mapStateToProps = ({ language }) => ({
  language
});

const mapDispatchToProps = dispatch => ({
  changeLanguage(language) {
    dispatch(changeLanguage(language));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
