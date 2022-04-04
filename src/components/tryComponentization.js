// import React, { useEffect, useState } from 'react';
// import useIngredientsList from '../hooks/useIngredientsList';
// import usePath from '../hooks/usePath';
// import { addProgressToLocal, getProgressFromLocal } from '../services/index';

// const Ingredients = () => {
//   const { list, ingredients } = useIngredientsList();
//   const [checked, setChecked] = useState([]);
//   const { id, routeFoods } = usePath();

//   const verifyIDLocalStorage = (newDataIng) => {
//     let newChecked = newDataIng.slice();
//     let key = '';
//     if (routeFoods) key = 'meals';
//     if (!routeFoods) key = 'cocktails';

//     const progress = localStorage.getItem('inProgressRecipes');
//     if (!progress) {
//       setChecked(newChecked.fill(false));
//       return false;
//     }
//     const results = getProgressFromLocal()[key];
//     if (!results || !results[id]) {
//       setChecked(newChecked.fill(false));
//       return false;
//     }
//     const stepsCheckedBefore = results[id];
//     newChecked = newChecked.map((_item, index) => {
//       let isCheck = false;
//       stepsCheckedBefore.forEach((itemCheck) => {
//         if (itemCheck === index) isCheck = true;
//       });
//       return isCheck;
//     });
//     setChecked(newChecked);
//   };

//   useEffect(() => {
//     verifyIDLocalStorage(ingredients);
//   }, [ingredients]);

//   const handleValidationFinish = (newChecked) => {
//     const isAllChecked = newChecked.every((element) => element === true);
//     setDisabled(!isAllChecked);
//   };

//   const handleLocalStorageUpdate = (newChecked) => {
//     let key = '';
//     if (routeFoods) key = 'meals';
//     if (!routeFoods) key = 'cocktails';
//     const allCheckedStep = newChecked.map((item, index) => (item && index))
//       .filter((item) => item !== false);
//     addProgressToLocal(key, { id, ingredients: allCheckedStep });
//   };

//   const handleCheckbox = (index) => {
//     console.log('realmente ta funcionando :o');
//     const newChecked = checked
//       .map((element, indexCheck) => (indexCheck === index ? !element : element));
//     setChecked(newChecked);
//     handleValidationFinish(newChecked);
//     handleLocalStorageUpdate(newChecked);
//   };

//   return (
//     <div>
//       { ingredients.map((item, index) => (
//         <div key={ index } data-testid={ `${index}-ingredient-step` }>
//           <input
//             id={ item }
//             type="checkbox"
//             onChange={ () => handleCheckbox(index) }
//             checked={ checked[index] }
//             value={ checked[index] }
//           />
//           <label
//             htmlFor={ item }
//             style={ checked[index] ? { textDecoration: 'line-through' }
//               : { textDecoration: 'none' } }
//           >
//             {`${list[index]}`}
//           </label>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default Ingredients;
