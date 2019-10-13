import * as actionTypes from './store/actions';
export const mapStateToProps = state => {
    return {
        persons: state.persons,
    };
};

export const mapDispatchToProps = dispatch => {
	return {
		addPerson:  (value) => dispatch({type: actionTypes.ADD_PERSON, value: value}),
    removePerson:  (value) => dispatch({type: actionTypes.REMOVE_PERSON, value: value}),
	}
};
