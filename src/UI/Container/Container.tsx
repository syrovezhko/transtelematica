import React, { useEffect } from 'react';
import './Container.css';
import { Select } from './../Select/Select';
import { fetchCategories } from './../../asyncActions/categories';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/index';
import {
  deleteCategoriesAction,
  highlightCategoriesAction,
  setCategoriesAction,
  toggleCategoriesAction,
  deleteOneSubCategoriesAction,
  deleteSubCategoriesAction,
  highlightSubCategoriesAction,
  setSubCategoriesAction,
  toggleSubCategoriesAction
} from './../../store/userActions';
import { fetchSubCategories } from './../../asyncActions/subCategories';

const Container = () => {
  const dispatch = useDispatch();
  const reduxCategory = useSelector((state: RootState) => state.category);
  const reduxItem = useSelector((state: RootState) => state.item);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSubCategories());
  }, []);

  return (
    <section className="wrapper">
      <Select
        multiple={false}
        parent={null}
        reduxCategory={reduxCategory}
        reduxSetCategory={(option) => dispatch(setCategoriesAction(option))}
        reduxDelete={(e) => dispatch(deleteCategoriesAction(e))}
        reduxHighlight={(id) => dispatch(highlightCategoriesAction(id))}
        reduxToggle={(e) => dispatch(toggleCategoriesAction(e))}
      />
      {reduxCategory.category && (
        <Select
          multiple={true}
          parent={reduxCategory.category.id}
          reduxCategory={reduxItem}
          reduxSetCategory={(option) => dispatch(setSubCategoriesAction(option))}
          reduxDelete={(e) => dispatch(deleteSubCategoriesAction(e))}
          reduxHighlight={(id) => dispatch(highlightSubCategoriesAction(id))}
          reduxToggle={(e) => dispatch(toggleSubCategoriesAction(e))}
          reduxDeleteOne={(option) => dispatch(deleteOneSubCategoriesAction(option))}
        />
      )}
    </section>
  );
};

export default Container;
