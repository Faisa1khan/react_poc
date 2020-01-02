import React from "react";

const style = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column'    
}

const Container = (props) => (
    <div style={style} className="a">
        { props.children }
    </div>
);

export default Container;