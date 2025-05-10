import React from 'react'
import title from './Title.module.scss';

export const Title = ({titleName}) => {
  return (
    <div className={title.row}>
      <div className={title.header}>
        <h2 className={title.title}>{titleName}</h2>
        <div className={title.line}></div>
      </div>
    </div>
  )
}
