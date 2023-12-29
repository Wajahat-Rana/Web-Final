
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMetrics } from '../features/metricsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  const metrics = useSelector((state) => state.metrics.data);

  useEffect(() => {
    dispatch(getMetrics());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {metrics.map((metric) => (
          <li key={metric.id}>
            {metric.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

















