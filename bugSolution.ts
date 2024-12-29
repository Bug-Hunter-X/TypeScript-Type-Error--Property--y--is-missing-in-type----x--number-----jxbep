function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

function printCoordSafe(pt: { x: number; y?: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + (pt.y === undefined ? "not defined" : pt.y));
}

printCoord({ x: 3, y: 7 });
printCoordSafe({ x: 3 });