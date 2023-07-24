import React from 'react';
import classes from './UsersList.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
 
const UsersList=(props)=>{
    return(
        <Card className={classes.users}>
        <ul>
            {props.users.map((user)=>(
                <li key={user.id}>{user.name}({user.age} years old)<Button onClick={props.onTouch}>X</Button></li>
            ))}
        </ul>
        </Card>
    );
};

export default UsersList;