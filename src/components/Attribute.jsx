import React from 'react'

export default function Attribute({attr, valueIndex, onChange, disabled}){
  const levels = attr.levels
  const current = typeof valueIndex === 'number' ? valueIndex : null
  const repeatable = !!attr.repeatable
  const count = repeatable ? Number(valueIndex) || 0 : null

  const setIndex = (i) => onChange(attr.id, i)
  const clear = () => onChange(attr.id, null)
  const setTudo = () => onChange(attr.id, levels.length - 1)

  // parse optional note in parentheses, e.g. "Moto (sem suspensão)"
  const nameMatch = attr.name.match(/^(.*?)\s*\((.*)\)$/)
  const title = nameMatch ? nameMatch[1].trim() : attr.name
  const note = nameMatch ? nameMatch[2].trim() : null
  const isSingle = levels.length === 1
  const displayValue = isSingle
    ? levels[0].label
    : (current !== null && levels[current] ? levels[current].label : null)

  return (
    <div className={"attribute" + (disabled ? ' disabled' : '')}>
      <div className="attribute-header">
        <div className="attribute-title">
          <div className="title-row">
            <span className="title-main">{title}</span>
            {isSingle && <span className="inline-value">{repeatable ? (count > 0 ? `${count} × ${levels[0].label}` : levels[0].label) : displayValue}</span>}
          </div>
          {note && <div className="attribute-note">{note}</div>}
        </div>
        <div className="attribute-actions">
          {levels.length > 1 && (
            <>
              <button className="btn-tudo" onClick={setTudo} disabled={disabled}>Tudo</button>
              <button className="btn-clear" onClick={clear} disabled={disabled}>Remover</button>
            </>
          )}
        </div>
      </div>

      <div className="levels">
        {levels.length > 1 ? (
          levels.map((l, idx) => {
            const parts = l.label.split(/\s*-\s*/)
            const top = parts.length > 1 ? parts[0] : null
            const bottom = parts.length > 1 ? parts[1] : parts[0]
            return (
              <button
                key={idx}
                className={"level-btn" + (current === idx ? ' active' : '')}
                onClick={() => setIndex(idx)}
                disabled={disabled}
              >
                {top && <div className="level-label-top">{top}</div>}
                <div className="level-label-bottom">{bottom}</div>
              </button>
            )
          })
        ) : (
          <div className="single-value">
            {repeatable ? (
              <div className="qty-controls">
                <button className="qty-btn" onClick={() => onChange(attr.id, Math.max(0, count - 1))} disabled={disabled || count <= 0}>−</button>
                <div className="qty-count">{count}</div>
                <button className="qty-btn" onClick={() => onChange(attr.id, count + 1)} disabled={disabled}>+</button>
              </div>
            ) : (
              <div className="single-controls">
                <button className="btn-add" onClick={() => setIndex(0)} disabled={current === 0 || disabled}>Adicionar</button>
                <button className="btn-remove" onClick={clear} disabled={current === null}>Remover</button>
              </div>
            )}
          </div>
        )}
      </div>

      {levels.length > 1 && (
        <div className="slider-wrap">
          <input
            type="range"
            min={0}
            max={levels.length - 1}
            step={1}
            value={current ?? 0}
            onChange={(e) => setIndex(Number(e.target.value))}
            disabled={disabled}
          />
        </div>
      )}



      <div className="attribute-footer">
        <div className="selected-price">
          {repeatable ? (count > 0 ? `${count} × ${levels[0].label} = ${levels[0].value * count}k` : '—') : (current !== null ? levels[current].label : '—')}
        </div>
      </div> 
    </div>
  )
}
