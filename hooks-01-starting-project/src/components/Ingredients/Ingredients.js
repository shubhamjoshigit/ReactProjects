import React,{ useEffect, useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [userInputIngredients,setUserInputIngredients] = useState([]);

  useEffect(()=>{
    fetch('https://react-hooks-update-cff12-default-rtdb.firebaseio.com/incredient.json')
    .then(response =>{
      return response.json();
    }).then(responseData=>{
      const ingredientsData=[];
      for(const key in responseData){
        ingredientsData.push({
          id: key,
          title: responseData[key].title,
          amount: responseData[key].amount
        })
      }
      setUserInputIngredients(ingredientsData);
    });
  },[]);

  const onAddIngredientHandler = ingredient => {
    fetch('https://react-hooks-update-cff12-default-rtdb.firebaseio.com/incredient.json',{
      method: 'POST',
      body: JSON.stringify(ingredient),
      header: {'content-type': 'applicaion/json'}
    }).then(response => {
      return response.json();
    }).then(responseData =>{
      setUserInputIngredients(prevIngredient => [
        ...prevIngredient,{id: responseData.name, ...ingredient}
      ]);
    });
    
  };

  const onRemoveItemHandler = ingredientId => {
    setUserInputIngredients(prevIngredient =>
       prevIngredient.filter(ingredient => ingredient.id !== ingredientId));
  };
  return (
    <div className="App">
      <IngredientForm onAddIngredient={onAddIngredientHandler}/>

      <section>
        <Search />
        <IngredientList ingredients={userInputIngredients} onRemoveItem={onRemoveItemHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
