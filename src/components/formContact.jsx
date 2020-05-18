import React, { useState, useEffect } from 'react';
import $ from '../../node_modules/jquery';

export default function FormContact({ id, editValue, addContact }) {

    const [val, setVal] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [preFillByEditFlag, setPreFillByEditFlag] = useState(true);
    let editId = null;
    //once edit is clicked in list, then useeffect will be call first to prefille the input elemnts by flag true
    useEffect(() => {

        console.log(val ? val.name : "nothing", "forms++++++++++++++++++++++++++++++++++++=")

        console.log(editId ? editId : "nothing", "forms++++++++++++++++++++++++++++++++++++=")
        // debugger
        if (editValue) {
            // debugger
            editId = editValue[1];
            console.log(editId, "after edit click edit id ===========================")
        }
        if (editValue && preFillByEditFlag) {

            console.log(editValue[1], 'effect')
            setVal(editValue[0]) // this call the redder metod to update the value  in form
        }
        // debugger;
        //to check the object wheter it is empty or not
        //
        if (Object.keys(errors).length == 0 && isSubmitted) {
            alert("submitted succesfully")
            setIsSubmitted(false)
            if (editId === 0 || editId > 0) {
                //  debugger;
                // editId ===0
                addContact(val, editId)
                setPreFillByEditFlag(true)
                editId = null;
                editValue = null;

            } else {
                editId = null;
                setPreFillByEditFlag(true)
                addContact(val, null);

            }
            setVal("")
            window.$("#addModal").modal('hide')
            //  setPreFillByEditFlag(true)
        }
    })


    const handleSubmit = (e) => {
        // debugger
        e.preventDefault();
        setIsSubmitted(true)
        setErrors(validation(val))

    }
    const onChangeHandle = (e) => {

        e.persist();
        console.log(e.target.value, 'oncl')
        console.log([e.target.name] + ":" + e.target.value)
        //here am flase the flag to allow the  onchange value to update in val state then  render it value in fomr
        setPreFillByEditFlag(false);
        //heree we aree doing the computed property name with shallow copy which means ssame properyt name overwrittine with new value called shallow copy
        setVal({ ...val, [e.target.name]: e.target.value })
    }

    function validation(val) {
        debugger;
        const errors = {}

        //for all val untouch
        if (!val || !val.name) {
            errors.name = "Name is required";
        }
        if (!val || !val.email) {
            errors.email = "email is required";
        }else if(!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(val.email)){
            errors.email="email is not valid"
        }
        if (!val || !val.phone) {
            errors.phone = "phone is required";
        }else if(!/^(\+\d{1,2}(\s)?)?\(?\d{3}\)?([\s.-])?\d{3}([\s.-])?\d{4}$/.test(val.phone)){
            errors.phone="phone is not  valid"
        }
        // 123-456-7890
        // (123) 456-7890
        // 123 456 7890
        // 123.456.7890
        // +91 (123) 456-7890
        // validain india number
        if (!val || !val.location) {
            errors.location = "location is required";
        }else if(!/^([a-zA-Z\d\s]{20,25})$/.test(val.location)){
            errors.location="location should be min 20 char and max 25 char"
        }

        return errors
    }
    return (
        <>
            {errors ? errors.name : "errors"}
            {console.log(val ? val.name : "jkj")}
            <form action="" onSubmit={handleSubmit} noValidate >
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" name="name"
                        value={val ? val.name : ""} onChange={onChangeHandle} />
                    {errors ? errors.name : ""}
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input type="text" name="email"
                        value={val ? val.email : ""} onChange={onChangeHandle} />
                    {errors ? errors.email : ''}
                </div>
                <div>
                    <label htmlFor="phone"></label>
                    <input type="text" name="phone"
                        value={val ? val.phone : ""} onChange={onChangeHandle} />
                    {errors ? errors.phone : ''}
                </div>
                <div>
                    <label htmlFor="location"></label>
                    <input type="text" name="location"
                        value={val ? val.location : ""} onChange={onChangeHandle} />
                    {errors ? errors.location : ''}
                </div>
                <input type="submit" />
            </form>
        </>
    )
}