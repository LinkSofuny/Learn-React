import CountUI from "../../components/Header/index";
import { connect } from 'react-redux'
import { incrementAction, incrementActionAsync, decrementAction } from "../../redux/count_action";


const mapStateToProps = (state) => {
    return {
        count: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        increment: value => dispatch(incrementAction(value)),

        incrementAsync: (value, time) => dispatch(incrementActionAsync(value, time)),

        decrement: value => dispatch(decrementAction(value))
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
