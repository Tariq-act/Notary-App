import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    const ApiCall = async () => {
      const response = await axios.post(
        'http://demo2211087.mockable.io/mock',
        {}
      );
      setCompanies(response.data.companies);
    };

    ApiCall();
  }, []);

  return (
    <div className=''>
      <Table className='container' striped bordered>
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{company.name}</td>
              <td>{company.email}</td>
              <td>{company.status}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
