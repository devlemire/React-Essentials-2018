import React from 'react'
import './InfoCircle.css'

export default function InfoCircle(props) {
  const { num, label, borderColor } = props

  return (
    <div className="info-container">
      <div className="info-circle" style={{ borderColor }}>
        <span>{num}</span>
      </div>

      <h1 className="info-label">{label}</h1>
    </div>
  )
}
