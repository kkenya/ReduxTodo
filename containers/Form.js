import { connect } from 'react-redux';
import {
  addTodo,
} from '../actions';
import Form from '../components/Form';

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
