import React, { useEffect } from "react";
import profile from "../../assests/images/profile.jpg";
import { connect } from "react-redux";
import { detailPageActions } from "../../actions";
import { Loader } from "../../components/commons";


function DetailPage(props){
    useEffect(() => {
        if(!props.email)
            return;
        props.getDetail(props.email);
    }, []);
    console.log('detail-page', props);

    const { user } = props;
    
    if(!user)
        return <Loader />;

    return (
        <div className="detail-page">
            <div className="detail-page__pic">
                <img src={profile} style={{width: '150px'}} className="rounded-circle d-block mx-auto"></img>
            </div>
            <div className="detail-page__detail1 m-4 p-4 border">
                <label className="text-muted">Name</label>
                <p>{user.name}</p>
                <label className="text-muted">username</label>
                <p>{user.username}</p>
                <label className="text-muted">email</label>
                <p>{user.email}</p>
            </div>
            <div className="detail-page__detail2 m-4 p-4 border">
                <label className="text-muted">Website</label>
                <p>{user.website}</p>
                <label className="text-muted">Phone</label>
                <p>{user.phone}</p>
            </div>
            {user.company && (
                <div className="detail-page__detail3 m-4 p-4 border">
                    <h3>Company</h3>
                    <label className="text-muted">Company Name</label>
                    <p>{user.company.name}</p>
                    <label className="text-muted">About</label>
                    <p>{user.company.catchPhrase}</p>
                </div>
            )}
        </div>
    );
}

const mapState = (state) => ({
    email: state.auth.email || 'Sincere@april.biz',  // remove and persist store
    user: state.detailPage.user
})
const mapActions = {
    getDetail : detailPageActions.getDetail
}
const con = connect(mapState, mapActions)(DetailPage);
export { con as DetailPage} ;