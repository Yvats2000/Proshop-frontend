import React from "react";
import Select from "react-select";



const CustomSelect =({ style, label, options, onChangehandler, defaultValue }) => {
    return (
    <div style={style}>
        {/* <h3>{label }</h3> */}
        <Select options={options} onChange={onChangehandler} defaultValue={defaultValue} />
    </div>
    )
}

export default CustomSelect;