const Filter = ({ setFilter, setSearch }) => {
    return (
      <div className="filter-bar">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
        <button onClick={() => setFilter('pending')}>Pending</button>
        <input type="text" placeholder="Search..." onChange={e => setSearch(e.target.value)} />
      </div>
    );
  };
  export default Filter;