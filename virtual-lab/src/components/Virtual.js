import React from 'react';
import ReactDOM from 'react-dom';
import {Grid} from 'react-virtualized';
export function Virtual(props) {
    const list = [
        ['Brian Vaughn', 'Software Engineer', 'San Jose', 'CA', 95125 /* ... */],
        // And so on...
      ];
      
      function cellRenderer({columnIndex, key, rowIndex, style}) {
        return (
          <div key={key} style={style}>
            {list[rowIndex][columnIndex]}
          </div>
        );
      }
      
      // Render your grid
      ReactDOM.render(
        <Grid
          cellRenderer={cellRenderer}
          columnCount={list[0].length}
          columnWidth={100}
          height={300}
          rowCount={list.length}
          rowHeight={30}
          width={300}
        />,
        document.getElementById('example'),
      );
}