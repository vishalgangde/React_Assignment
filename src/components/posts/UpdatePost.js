import React from 'react';
import { Field,reduxForm} from 'redux-form';

class UpdatePost extends React.Component{

    renderError({touched,error}){
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input,label,meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        console.log(meta);
        
        return(
                <div className={className}>
                    <label>{label}</label>
                    <input {...input}  autoComplete="off" />
                    {this.renderError(meta)}
            </div>
        );
        
    }

    onSubmit(formValues) {
        console.log(formValues);
       
        
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <h2>Update Post</h2 >
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field inputType="text" name="Title" component={this.renderInput} label="Enter Title" />
                <Field inputType="text" name="Description" component={this.renderInput} label="Enter Description" />
                <Field inputType="text" name="Status" component={this.renderInput} label="Status" />
                <button className="ui button primary">Submit</button>
            </form>
            </div>
            
        );
    }
}

const validate = (formValues) => {
    const error = {};

    if(!formValues.Title){
        error.Title = 'Please Enter a title';
    }

    if(!formValues.Description){
        error.Description = 'Please Enter a description';
    }

    if(!formValues.Status){
        error.Status = 'Please Enter a Status';
    }

    return error;

}

export default reduxForm({
    form: 'UpdatePost',
    validate:validate
    })(UpdatePost);