import React, { useState } from 'react'
import ReactSelect from "react-select";
import CustomSelect from '../form/customSlyle'

const talkToExport = () => {
    // const [productDetail, setProducrDetail] = useState({
    //     name :"",
    //     description : "",
    //     image: '',
    //     brand : "",
    //     category : "",
    //     price : ""
    // })
    const options = [
        {label: 'Delhi, delhi', value:'Delhi, delhi'},
        {label: 'mumbai', value:'mumbai'},
        {label: 'pune', value:'js'},
        {label: 'gurugram', value:'css'},

    ]
    const onChangehandlerInput = (value) => {
        console.log(value)
    }
    return (
        <div >
            <div>
                <h3>Add Product </h3>
                <button >close</button>
            </div>
        <form>
        <br />
            <label for="Name">Name</label>
            <input type="text" id="fname" name="name"  />
            <br />
            <br />
            <label for="Email">Email</label>
            <input type="text" id="lemail" name="Email"/>
            <br />
            <br />
            <div>
            <label>Enter Mobile</label><br />
            <div class="formInput">
              <select>
                <option value="+91">+91</option>
                <option value="+968">+968</option>
                <option value="+965">+965</option>
                <option value="+971">+971</option>
              </select> 
              <input
                type="text"
                placeholder="Enter Number"
              />
            </div>
            </div>
              <br />
              <label>Enter City</label><br />
              <ReactSelect 
              label="choose the city" 
              // defaultValue={options[1]} 
              options={options} 
              onChangehandler ={onChangehandlerInput}
              />
            <br />
            <label for="Etype">Employment type</label>
            <input type="text" id="Etype"/><br />

            <button >Submit</button>
            
            </form>
     </div>
    )
}

export default talkToExport
