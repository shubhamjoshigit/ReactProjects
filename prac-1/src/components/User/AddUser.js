import React,{useState} from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {

    const [enteredUserName,setEnteredUsername] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError] = useState();

    const userNameChangeHandler=(event)=>{
        setEnteredUsername(event.target.value);
    };

    const ageChangeHandler=(event)=>{
        setEnteredAge(event.target.value);
    };

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUserName.trim().length === 0 || enteredAge.trim().length ===0){
            setError({
                title: "Invalid Username and age",
                message: "Please fill correct info."
            });
            return ;
        }
        if(+enteredAge < 1){
            setError({
                title: "Invalid Age",
                message: "please fill age > 0."
            });
            return ;
        }
         props.onAddUser(enteredUserName,enteredAge);
         setEnteredUsername('');
         setEnteredAge('');
    };

    const errorHandler=()=>{
        setError(null);
    }

    return (
        <div>
            {error && (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>)}
        <Card className={classes.input} >
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type="text" value={enteredUserName} onChange={userNameChangeHandler}></input>
            <label htmlFor='age'>Age</label>
            <input id='age' type="number" value={enteredAge} onChange={ageChangeHandler}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    );
};

export default AddUser;