import * as React from 'react';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>

      <div>
        <div>
          <Link to='/games'>Games</Link>
        </div>
        <div>
          <Link to='/sports'>Sports</Link>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
