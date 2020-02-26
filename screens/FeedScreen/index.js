import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as photoActions } from "../../redux/modules/photo";


const mapStateToProps = (state, ownProps) => {
    const { photo: { feed } } = state;
    console.log(feed);
    return {
        feed
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getFeed: () => {
            dispatch(photoActions.getFeed());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
