import React, { useState,useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import './Table.css'
function Table() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  // Calculate the items to display on the current page
  const offset = currentPage * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);

  return (
    <div className="TestTable">
      <header className="App-header">
    <table >
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Country</th>
      <th>JobTitle</th>
     </tr>
   </thead>
   <tbody>
   {currentItems.map(item => (
              <tr key={item.ID}>
                <td>{item.ID}</td>
                <td>{item.Name}</td>
                <td>{item.Email}</td>
                <td>{item.Age}</td>
                <td>{item.Gender}</td>
                <td>{item.Country}</td>
                <td>{item.JobTitle}</td>
              </tr>
            ))}
 </tbody>
</table>
<ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={Math.ceil(data.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
</header>
    </div>
  )
}

export default Table