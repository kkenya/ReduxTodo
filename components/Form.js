import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
  },
  addButton: {
    margin: 5,
    padding: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#fff',
  },
});

class Form extends Component {
  onPress = () => {
    const { text, addTodo, onChangeText } = this.props;

    if (!text) {
      return;
    }
    addTodo(text);
    onChangeText('');
  };

  render() {
    const { text, onChangeText } = this.props;
    return (
      <View>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={onChangeText}
          onSubmitEditing={this.onPress}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={this.onPress}
        >
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Form.propTypes = {
  text: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default Form;
