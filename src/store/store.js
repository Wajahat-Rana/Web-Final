// store.js
import { configureStore } from '@reduxjs/toolkit';
import metricsReducer from '../features/metricsSlice';

const store = configureStore({
  reducer: {
    metrics: metricsReducer
  },
});

export default store;

