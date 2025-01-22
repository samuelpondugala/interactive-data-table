import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import DataTable from './components/DataTable'; // Example for another route

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/data-table" element={<DataTable />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
