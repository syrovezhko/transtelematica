import React, { useEffect } from 'react';
import './app.css';
import { Select } from './UI/Select';
import { fetchCategories } from './asyncActions/categories';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/index';
import {
  deleteCategoriesAction,
  highlightCategoriesAction,
  setCategoriesAction,
  toggleCategoriesAction
} from './store/categoryReducer';
import { fetchSubCategories } from './asyncActions/subCategories';
import {
  deleteOneSubCategoriesAction,
  deleteSubCategoriesAction,
  highlightSubCategoriesAction,
  setSubCategoriesAction,
  toggleSubCategoriesAction
} from './store/itemReducer';

const App = () => {
  const dispatch = useDispatch();
  const reduxCategory = useSelector((state: RootState) => state.category);
  const reduxItem = useSelector((state: RootState) => state.item);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSubCategories());
  }, []);

  return (
    <section className="wrapper">
      {reduxCategory.categories.length ? (
        <Select
          multiple={false}
          parent={null}
          reduxCategory={reduxCategory}
          reduxSetCategory={(option) => dispatch(setCategoriesAction(option))}
          reduxDelete={() => dispatch(deleteCategoriesAction())}
          reduxHighlight={(id) => dispatch(highlightCategoriesAction(id))}
          reduxToggle={() => dispatch(toggleCategoriesAction())}
        />
      ) : (
        <h1>Loading</h1>
      )}
      {reduxCategory.category && (
        <Select
          multiple={true}
          parent={reduxCategory.category.id}
          reduxCategory={reduxItem}
          reduxSetCategory={(option) => dispatch(setSubCategoriesAction(option))}
          reduxDelete={() => dispatch(deleteSubCategoriesAction())}
          reduxHighlight={(id) => dispatch(highlightSubCategoriesAction(id))}
          reduxToggle={() => dispatch(toggleSubCategoriesAction())}
          reduxDeleteOne={(option) => dispatch(deleteOneSubCategoriesAction(option))}
        />
      )}
    </section>
  );
};

export default App;
