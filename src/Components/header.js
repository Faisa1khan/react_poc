import React from "react";
import { connect } from "react-redux";

import videoActions from "../actions/videoPage.actions";

const headerStyle={
    display: 'flex',
    justifyContent: 'space-around'
} 
const centerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

const Header = (props) => {
    //const [lang, changeLang] = useState('en');
    const { lang, changeLang, ids } = props;
    return (
        <div className="header card-body bg-info" style={headerStyle}>
                <div id="name" style={centerStyle}>{ids.name}</div>
            <div id="hello" style={centerStyle}>{ids.hello}</div>
            <div>
                <select className="custom-select mr-sm-2" value={lang} onChange={(e) => changeLang(e.target.value)}>
                    <option value="en">en</option>
                    <option value="pl">pl</option>
                </select>
            </div>
        </div>
    )
}

const mapState = state => ({
    lang: state.videoPage.lang || 'en',
    ids: state.videoPage.ids || {}
})
const actions = {
    changeLang: videoActions.changeLang
}

export default connect(mapState, actions)(Header);