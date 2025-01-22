import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataTable() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://sheets.googleapis.com/v4/spreadsheets/{spreadsheetId}/values/Sheet1?key={API_KEY}')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = data.filter(item =>
      item['Domain Name'].toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleSort = (key) => {
    const sortedData = [...filteredData].sort((a, b) => a[key].localeCompare(b[key]));
    setFilteredData(sortedData);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search by Domain Name"
      />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('Domain Name')}>Domain Name</th>
            <th onClick={() => handleSort('Other Column')}>Other Column</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td>{row['Domain Name']}</td>
              <td>{row['Other Column']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;

