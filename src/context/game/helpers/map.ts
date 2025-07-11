// types
import type { Units } from "@/types/game";
import type { UnitId } from "@/types/id";
import type { MapGrid, Tile } from "@/types/tile";

export function createMap(width: number = 8, height: number = 8): MapGrid {
  const tiles: Tile[][] = [];
  for (let y = 0; y < height; y++) {
    const row: Tile[] = [];
    for (let x = 0; x < width; x++) {
      row.push({ x, y });
    }
    tiles.push(row);
  }
  return { width, height, tiles };
}

export function applyUnitsToMap(map: MapGrid, units: Units): MapGrid {
  const tiles = map.tiles.map(
    (row) => row.map((tile) => ({ ...tile })) // shallow‑copy every tile
  );
  Object.values(units).forEach((u) => {
    tiles[u.position.y][u.position.x].occupantId = u.id;
  });
  return { ...map, tiles };
}

export function moveTileOccupant(
  tiles: Tile[][],
  unitId: UnitId,
  from: { x: number; y: number },
  to: { x: number; y: number }
): Tile[][] {
  const updatedTiles = tiles.map((row) => row.map((tile) => ({ ...tile })));
  updatedTiles[from.y][from.x].occupantId = undefined;
  updatedTiles[to.y][to.x].occupantId = unitId;

  return updatedTiles;
}

export function removeTileOccupant(
  tiles: Tile[][],
  pos: { x: number; y: number }
): Tile[][] {
  const updatedTiles = tiles.map((row) => row.map((tile) => ({ ...tile })));

  updatedTiles[pos.y][pos.x].occupantId = undefined;

  return updatedTiles;
}
