import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchFiles = createAsyncThunk('files/fetchFiles', async () => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let fileName = params.get('fileName');
  if (fileName) {
    const file = await fetch(`http://localhost:5000/files/data?fileName=${fileName}`).then(res => res.json());
    return file;
  }
  const files = await fetch("http://localhost:5000/files/data").then(res => res.json());
  return files;
});

export const fileSlice = createSlice({
  name: 'files',
  initialState: {
    files: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchFiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFiles.fulfilled, (state, action) => {
        state.loading = false;
        state.files = action.payload;
      })
      .addCase(fetchFiles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
})

export default fileSlice.reducer