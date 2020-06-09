import React from 'react';
import Visualization from './Visualization';

const urlPrefix = 'https://s3.amazonaws.com/vitessce-data/0.0.27/master_release';
const viewConfig = {
  name: 'Dries',
  description: 'Giotto, a pipeline for integrative analysis and visualization of single-cell spatial transcriptomic data',
  layers: [
    {
      name: 'cells',
      type: 'CELLS',
      url: `${urlPrefix}/dries/dries.cell_sets.json`,
    },
    {
      name: 'cell_sets',
      type: 'CELL_SETS',
      url: `${urlPrefix}/dries/dries.cell_sets.json`,
    }

  ],
  staticLayout: [
    { component: 'description',
      props: {
        description: '',
      },
      x: 9, y: 0, w: 3, h: 2 },
    { component: 'status',
      x: 9, y: 2, w: 3, h: 2 },
    { component: 'scatterplot',
      props: {
        mapping: 't-SNE',
        view: {
          zoom: 3,
          target: [0, 0, 0],
        },
      },
      x: 0, y: 2, w: 5, h: 4 },
    { component: 'spatial',
      props: {
        cellRadius: 50,
        view: {
          zoom: -4.4,
          target: [3800, -900, 0],
        },
      },
      x: 5, y: 0, w: 4, h: 4 },
    { component: 'scatterplot',
      props: {
        mapping: 'UMAP',
        view: {
          zoom: 3,
          target: [0, 0, 0],
        },
      },
      x: 0, y: 0, w: 5, h: 4 },
    { component: 'cellSets',
      x: 9, y: 4, w: 3, h: 4 },
  ],
};

export default function App() {
  return (
    <div className="App">
      <Visualization vitData={viewConfig} />
    </div>
  );
}