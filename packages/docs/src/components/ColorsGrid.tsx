import { colors } from '@radiance-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    const textColor = getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF'
    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'monospace', color: textColor }}>
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}