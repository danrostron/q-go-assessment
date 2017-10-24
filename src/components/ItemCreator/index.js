import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addItem, filterCompleted} from '../../logic/actions';
import './styles.css';

export const ItemCreator = ({ onAdd, onFilter }) => {
  let inputField, filterButton;
  let showText = 'Show completed items';
  let hideText = 'Hide completed items';
  let isFiltering = false;

  return (
    <div className="itemCreator">
      <input
        ref={input => {
          inputField = input;
        }}
        className="itemCreator-input"
        type="text"
        placeholder="What do you need to do?"
      />
      <input
        className="itemCreator-button"
        type="button"
        value="Add Task"
        onClick={() => {
          inputField.value && onAdd(inputField.value);
          inputField.value = '';
        }}
      />

        <input
            ref = {filter => {
                filterButton = filter;
            }}
            className="itemCreator-button"
            type="button"
            value={hideText}
            onClick={() => {
                isFiltering = !isFiltering;
                onFilter(isFiltering);
                filterButton.value = isFiltering ? showText : hideText
            }}
        />
    </div>
  );
};

ItemCreator.propTypes = {
    onAdd: PropTypes.func.isRequired,
    onFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    onAdd: newItem => dispatch(addItem(newItem)),
    onFilter: hide => dispatch(filterCompleted(hide))
});

export default connect(null, mapDispatchToProps)(ItemCreator);
