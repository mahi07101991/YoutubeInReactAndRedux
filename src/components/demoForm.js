import React from 'react';
import {reduxForm, Field } from 'redux-form';

let DemoForm = props => {
    return (
        <form>
            <div>
               
               
            </div>
        </form>
    );
};

let createReduxForm = reduxForm({ form: 'demo' })

DemoForm = createReduxForm(DemoForm)

export default DemoForm;