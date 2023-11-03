import React from 'react';
import './app.css';
import { fetchCategories } from './asyncActions/categories';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const reduxCategory = useSelector((state: RootState) => state.category)

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <section className="wrapper">
    </section>
  );
};

export default App;