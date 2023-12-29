import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';


// export const fetchMetrics = async (country) => {
//   const response = await getMetrics(country);
//   return response.data;
// };
export const getMetrics = async () => {
    const response = await fetch('https://api.github.com/repos/cheatsnake/emojihub');
    return response.data;
  }

export const fetchMetrics = createAsyncThunk('metrics/fetchMetrics', async (country) => {
  try {
    const response = await getMetrics(country);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const metricsSlice = createSlice({
  name: 'metrics',
  initialState: { data: [], loading: 'idle', error: null },
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetrics.pending, (state) => {
        state.loading = 'loading';
      })
      .addCase(fetchMetrics.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchMetrics.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message;
      });
  },
});

export default metricsSlice.reducer;

