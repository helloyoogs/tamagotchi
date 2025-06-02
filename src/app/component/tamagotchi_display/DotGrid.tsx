interface DotGridProps {
  positions: number[];
}

export function DotGrid({ positions }: DotGridProps) {
  const rows = 24;
  const cols = 30;

  const totalCells = rows * cols;
  const gridItems = Array.from({ length: totalCells }, (_, i) => i);

  return (<div
      style={{
        display: 'grid', gridTemplateColumns: `repeat(${cols}, 12px)`, gridTemplateRows: `repeat(${rows}, 12px)`, gap: '1px', backgroundColor: '#eee', width: 'fit-content', border: '1px solid #ccc',
      }}
    >

      {gridItems.map(i => (<div
          key={i}
          style={{
            width: '10px', height: '10px', backgroundColor: positions.includes(i) ? '#000' : 'transparent'
          }}
        />))}
    </div>);
}
