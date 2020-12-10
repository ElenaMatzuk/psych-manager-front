import React from 'react';

const Select = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}> {props.title} </label>
      <select
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
        className="form-control"
      >
        <option>{props.placeholder}</option>
        {props.options.map(option => {
          return <option value={option.id}>{option.name}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
