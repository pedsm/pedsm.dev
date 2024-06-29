import Title from '/components/title'
import Link from 'next/link'
import { SimplexNoise } from 'ts-perlin-simplex'
import { useEffect, useMemo, useState } from 'react';

export function generatePermutation(size: number): number[][] {
  let grid = new Array(size);
  for (let i = 0; i < size; i++) {
    grid[i] = new Array(size);
    for (let j = 0; j < size; j++) {
      grid[i][j] = Math.floor(Math.random() * 256);
    }
  }
  return grid;
}
function fade(t: number): number {
    return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(t: number, a: number, b: number): number {
    return a + t * (b - a);
}

function grad(hash: number, x: number, y: number): number {
    const h = hash & 15;
    const u = h < 8 ? x : y;
    const v = h < 4 ? y : h === 12 || h === 14 ? x : 0;
    return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
}

export function perlinNoise(grid: number[][], x: number, y: number): number {
  const X = Math.floor(x) & 255;
  const Y = Math.floor(y) & 255;

  x -= Math.floor(x);
  y -= Math.floor(y);

  const u = fade(x);
  const v = fade(y);

  const aa = grid[X][Y];
  const ab = grid[X][Y + 1];
  const ba = grid[X + 1][Y];
  const bb = grid[X + 1][Y + 1];

  const gradAA = grad(aa, x, y);
  const gradBA = grad(ba, x - 1, y);
  const gradAB = grad(ab, x, y - 1);
  const gradBB = grad(bb, x - 1, y - 1);

  const lerpX1 = lerp(u, gradAA, gradBA);
  const lerpX2 = lerp(u, gradAB, gradBB);

  return lerp(v, lerpX1, lerpX2);
}

export default function error() {
  const grid = useMemo(() => new SimplexNoise(), [])
  const noise = (x: number, y: number) => grid.noise(x, y)

  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(offset + 0.005)
    }, 1000/30)
    return () => clearInterval(interval)
  })


  const size = 300 / 20
  const distance = 0.01
  const table = new Array(size).fill(0).map((_, i) => i * distance)

  const smallDot = 10
  const dotGrowth = 5

  return (
    <section className="section" style={{display: 'flex', flexDirection:'column'}}>
      <Title>Oops...</Title>
      <h1 className="is-size-1">Oops...</h1>
      <p><Link href="/">Not here</Link></p>
      <svg width="300px" height="300px" style={{overflow:'visible', margin:'auto', marginTop: '24px'}}>
        {table.map((_, y) => (
          <>
            {table.map((_2, x) => <circle fill="var(--heading)" r={smallDot + noise(offset + x, y) * dotGrowth} cx={x * 20 + smallDot} cy={y * 20 + smallDot}></circle>)}
          </>
        ))}
      </svg>
    </section>
  )
}