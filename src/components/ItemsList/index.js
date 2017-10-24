import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem, markItem } from "../../logic/actions";
import './styles.css';

export const ItemsList = ({items, filterCompleted, onDelete, onMark}) =>{
    return (
        <div>
            <ul className="itemsList-ul">
                {items.length < 1 && <p id="items-missing">Add some tasks above.</p>}
                {items.map(item => {
                    let hideClass = (item.marked === true && filterCompleted === true) ? "hidden": "";
                    return (
                        <li key={item.id} className={hideClass}>
                            <input key={`input-${item.id}`} type="checkbox" checked={item.marked} onChange={()=>{onMark(item.id)}}/>
                            <p>{item.content}</p>
                            <div className="icon"><i className="fa fa-trash" onClick={()=>{ onDelete (item.id)}} /></div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onMark: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
    onDelete: id => dispatch(deleteItem(id)),
    onMark: id => dispatch(markItem(id)),
});

const mapStateToProps = state => {
  return {
      items: state.todos.items,
      filterCompleted: state.todos.filterCompleted
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemsList);
