import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';

import '../styles/canvas.scss';
import Brush from '../tools/Brush';

const Canvas = observer(() => {
  const canvasRef = useRef();

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  const mouseDownHandler = () => {
    canvasState.pushToUndoList(canvasRef.current.toDataURL());
  };

  return (
    <div className='canvas'>
      <canvas ref={canvasRef} width={600} height={400} onMouseDown={mouseDownHandler} />
    </div>
  );
});

export default Canvas;
