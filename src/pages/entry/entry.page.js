import React,{useState} from 'react'
import './entry.style.css'
import { Jumbotron } from 'react-bootstrap'
import { LoginForm } from '../../components/login/login.comp'
import { ResetPassword } from '../../components/passwordReset/Password-reset.comp'

export const Entry = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formLoad, setFormLoad] = useState("login");

    const handleOnChange = e=> {
        const {name,value} = e.target;
        switch(name){
            case 'email':
                setEmail(value)
                break
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    const handleOnSubmit = e => {
        e.preventDefault();
        if(!email || !password){
            return alert("Fields can't be left empty!")
        }
        //TODO API call to submit

    }

    const handleOnResetSubmit = e => {
        e.preventDefault();
        if(!email){
            return alert("Please enter email!")
        }
        //TODO API call to submit

    }

    const formSwitcher = formType => {
        setFormLoad(formType);
    }

    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box"> 
                {formLoad==='login' && <LoginForm 
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    formSwitcher={formSwitcher}
                    email={email}
                    pass = {password} 
                    />}

                {formLoad==="reset" && <ResetPassword 
                    handleOnChange={handleOnChange}
                    handleOnResetSubmit={handleOnResetSubmit}
                    formSwitcher={formSwitcher}
                    email={email}
                    />}
            </Jumbotron>
            
        </div>
    )
}
