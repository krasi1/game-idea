import { Stage, useApp } from '@pixi/react';
import '@pixi/unsafe-eval';
import * as PIXI from 'pixi.js';
import mountain from '../../assets/icons/mountain.png';
import './App.css';

async function run(app: any) {
  PIXI.Assets.add({
    alias: 'mountain',
    src: mountain,
  });

  await PIXI.Assets.load('mountain');

  const sprite = PIXI.Sprite.from(PIXI.Assets.cache.get('mountain'));

  app.stage.addChild(sprite);
}

function Game() {
  const app = useApp();
  app.stage.removeChildren();
  run(app);
  return <></>;
}

export default function App() {
  return (
    <>
      <h1>HAHA</h1>
      <Stage width={800} height={500}>
        <Game />
      </Stage>
    </>
  );
}
