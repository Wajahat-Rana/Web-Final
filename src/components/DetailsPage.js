import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { getMetrics } from '../features/metricsSlice';

const DetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const metric = useSelector((state) => state.metrics.data);

  useEffect(() => {
    dispatch(getMetrics(id));
  }, [dispatch, id]);

  if (!metric) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Details Page</h1>
      <p>Name: {metric.name}</p>
      <p>Value: {metric.value}</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default DetailsPage;



















// .find((m) => m.id === parseInt(id, 10))