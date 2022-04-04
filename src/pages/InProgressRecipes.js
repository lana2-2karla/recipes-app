import React from 'react';
// import { useSelector } from 'react-redux';
import DetailsWithoutIng from '../components/DetailsWithoutIngredients';
// import Ingredients from '../components/Ingredients';

// const InProgressRecipes = () => {
// const { disableButton } = useSelector((state) => state.finish);

//   return (
//     <div>
//       <DetailsWithoutIng />
//       {/* <button
//         data-testid="finish-recipe-btn"
//         // onClick={ }
//         disabled={ disableButton }
//         type="button"
//       >
//         Finish Recipe
//       </button> */}
//     </div>
//   );
// };

const InProgressRecipes = () => (<div><DetailsWithoutIng /></div>);
export default InProgressRecipes;
