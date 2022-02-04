import React, { useEffect, useState } from 'react';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../components/LoadingScreen';
import TableMapper from '../components/TableMapper';

function MainView() {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const [filts, setFilts] = useState([]);
  const dtr = useSelector(({ tab }:any) => tab);
  const deleteItems = () => {
    const text = `Are you sure want to delete ${filts.length} items`;
    if (window.confirm(text) === true) {
      dispatch({
        type: 'REMOVE_DATA',
        payload: filts,
      });
      setFilts([]);
    }
  };
  useEffect(() => {
    if (data.length === 0) {
      fetch('https://jsonplaceholder.typicode.com/todos').then(async (res) => {
        const dt = await res.json();
        // console.log("Data is ::",dt);
        dispatch({
          type: 'FETCH_TABLES_DATA',
          payload: dt,
        });
        setData(dt);
      }).catch((err) => console.log('eer::', err));
    }
    console.log(JSON.stringify(filts));
    console.log(JSON.stringify(dtr));
    setData(dtr);
  }, [data, filts]);
  return (
    <div>
      <h3 className="h3"> Table Format</h3>
      { data.length > 0
        ? (
          <div>
            <button type="button" className="btn btn-danger" disabled={filts.length === 0} onClick={() => deleteItems()}>Delete</button>
            <table className="table table-bordered table-styler" style={{ width: ' 60%', margin: '6%' }}>
              <thead>
                <tr>
                  <th>{' '}</th>
                  <th>Id</th>
                  <th>UserId</th>
                  <th>Title</th>
                  <th>Completed</th>
                </tr>

              </thead>
              <tbody>
                {
                    data.map((item) => <TableMapper dta={item} filts={filts} setFilts={setFilts} />)
                }
              </tbody>
            </table>
          </div>
        )
        : <LoadingScreen />}
    </div>
  );
}

export default MainView;
