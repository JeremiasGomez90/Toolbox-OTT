import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiles } from './store/filesSlice';
import { useEffect } from 'react';

function TableItem({ file, lines }) {
  return lines.map(line => (
    <tr key={`${file}-${line.hex}`}>
      <td>{file}</td>
      <td>{line.text}</td>
      <td>{line.number}</td>
      <td>{line.hex}</td>
    </tr>
  ))
}

function App() {
  const dispatch = useDispatch();
  const { files, loading } = useSelector((state) => state.files);

  useEffect(() => {
    dispatch(fetchFiles());
  }, [dispatch]);

  return (
    <main>
      <h2 className="py-2 px-2">React Test App</h2>
      <div className="container">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Text</th>
              <th>Number</th>
              <th>Hex</th>
            </tr>
          </thead>
          <tbody>
          {loading && <tr><td colSpan={4}>Loading...</td></tr>}
          {!loading && !files.length && (<tr><td colSpan={4}>File not found</td></tr>)}
          {!!files && files.map((f, index) => <TableItem key={f.file} file={f.file} lines={f.lines} />)}
          </tbody>
        </Table>
      </div>
    </main>
  )
}

export default App
