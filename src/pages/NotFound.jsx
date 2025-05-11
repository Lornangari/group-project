const NotFound = ({ setRoute }) => (
    <div>
      <h2>404 – Page Not Found</h2>
      <button onClick={() => setRoute('home')}>Go to Home</button>
    </div>
  );
  
  export default NotFound;
  