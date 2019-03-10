import React from 'react';
import { Field, reduxForm} from 'redux-form';
import { signIn } from '../../actions';
import { connect } from 'react-redux';

class SignIn extends React.Component{
    renderError({touched,error}){
        //console.log({error});
        //console.log({touched})
        
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({input,type,label,meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        
        return(
                <div className={className}>
                    <label>{label}</label>
                    <input {...input} type={type} autoComplete="off" />
                    {this.renderError(meta)}
                </div>
        );
        
    }

    onSubmit= (formValues)=>{
        console.log(formValues);
        this.props.signIn(formValues)
        
    }

    render(){
        //console.log(this.props);
        return(
            <div>
                <h2>Log-in Here</h2 >
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field  
                    name="username"
                    type="text"  
                    component={this.renderInput} 
                    label="UserName" 
                />
                <Field  
                    name="password"
                    type="password"  
                    component={this.renderInput} 
                    label="Password" 
                />
                <button className="ui button primary">Submit</button>
                </form>
                </div>

        );
    }
}

const validate = (formValues) => {
    const error = {};

    if(!formValues.username){
        error.username = 'Must enter valid user name';
    }

    if(!formValues.password){
        error.password = 'Must enter valid password';
    }
    return error;

}
const logVal= reduxForm({
    form: 'SignIn',
    validate
})(SignIn);

export default connect(null,{signIn})(logVal)