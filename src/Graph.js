import React from 'react';

import { range } from './utils';

function Graph({ from, to }) {

  return (
    <div className="graph">
    {
      range(from, to + 10, 10).map((_peg) => (
        <div className="peg" key={_peg}>{_peg}</div>
      ))
    }
    </div>
  );
}

export default Graph;