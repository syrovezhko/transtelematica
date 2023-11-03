import React, { useEffect } from 'react';
import './app.css';
import { fetchCategories } from './asyncActions/categories';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSubCategories } from './asyncActions/subCategories';

const App = () => {
  const dispatch = useDispatch();
  const reduxCategory = useSelector((state: RootState) => state.category)

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchSubCategories());
  }, []);

  return (
    <section className="wrapper">
    </section>
  );
};

export default App;