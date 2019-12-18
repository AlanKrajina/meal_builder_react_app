import React from 'react';
import Layout from './components/Layout/Layout';
import MealBuilder from './containers/MealBuilder/MealBuilder';

function App() {
  return (
    <div>
      <Layout>
        <MealBuilder />
      </Layout>
    </div>
  );
}

export default App;
