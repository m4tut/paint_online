import React from 'react';
import toolState from '../store/toolState';
import '../styles/toolbar.scss';

const SettingsBar = () => {
  return (
    <div className='settings-bar'>
      <label>
        <span>Толщина линии: </span>
        <input type='number' defaultValue={1} min={1} max={50} onChange={e => toolState.setLineWidth(e.target.value)} />
      </label>
      <label>
        <span> Цвет обводки: </span>
        <input type='color' onChange={e => toolState.setStrokeColor(e.target.value)} />
      </label>
    </div>
  );
};

export default SettingsBar;
