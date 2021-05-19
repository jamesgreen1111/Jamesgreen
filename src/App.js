import Layout from './Layout/Layout';
import classes from './App.css';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div >
      <Layout ClassName={classes.Background} />
    </div>
    </BrowserRouter>
  );
}

export default App;
