import React, { useEffect } from 'react';
import { UPDATE_CATEGORIES, UPDATE_CURRENT_CATEGORY } from '../../utils/actions';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_CATEGORIES } from '../../utils/queries';

// Provider Global Store import
// commented out in favor of redux logic
// import { useStoreContext } from '../../utils/GlobalState';

import { useDispatch, useSelector } from 'react-redux';

// Import IndexDB helper which will allow the app to talk
// to the database
import { idbPromise } from '../../utils/helpers';

function CategoryMenu() {
  // Before migrating to use global Store
  //const { data: categoryData } = useQuery(QUERY_CATEGORIES);
  //const categories = categoryData?.categories || [];

  // commented out in favor of redux logic
  //const [state, dispatch] = useStoreContext();
  const state = useSelector((state) => {
    return state
  });
  const dispatch = useDispatch();

    
  const { categories } = state;
  // loading will be used for offline capabilities
  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  // Update the state with the categories upon page load or change
  useEffect(() => {
    // loading will be used for offline capabilities
        // if categoryData exists or has changed from the response of useQuery, then run dispatch to update the state with the UPDATE_CATEGORIES action
    if (categoryData) {
      console.log(categoryData)
      // execute our dispatch function with our action object indicating the type of action and the data to set our state for categories to
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });

         // also store the category data in IndexedDB
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      console.log("I am offline")
      
            // if the user is offline, load data from IndexedDB
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

   // on click before global state was setCategory(item._id);
  // now is handleClick(item._id);

  return (
    <div>
      <h2>Choose a Category:</h2>
      {categories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
