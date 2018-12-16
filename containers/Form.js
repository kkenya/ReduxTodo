import { connect } from 'react-redux';
import {
  addTodo,
} from '../actions';
import Form from '../component/Form';

const mapStateToProps = state => ({
  todos: state,
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
