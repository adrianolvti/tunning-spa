import React from 'react'

export default function Attribute({ attr, valueIndex, onChange, disabled }) {
  const levels = attr.levels
  const current = typeof valueIndex === 'number' ? valueIndex : null
  const repeatable = !!attr.repeatable
  const count = repeatable ? Number(valueIndex) || 0 : null

  const setIndex = (i) => onChange(attr.id, i)
  const clear = () => onChange(attr.id, null)
  const setTudo = () => onChange(attr.id, levels.length - 1)

  // parse optional note in parentheses
  const nameMatch = attr.name.match(/^(.*?)\s*\((.*)\)$/)
  const title = nameMatch ? nameMatch[1].trim() : attr.name
  const note = nameMatch ? nameMatch[2].trim() : null
  const isSingle = levels.length === 1

  return (
    <div className={"attribute" + (disabled ? ' disabled' : '')}>

      {/* ===== HEADER ===== */}
      <div className="attribute-header">
        <div className="attribute-title">
          <div className="title-row">
            <span className="title-main">{title}</span>

            {isSingle && (
              <span className="inline-value">
                {repeatable
                  ? (count > 0 ? `${count} × ${levels[0].label}` : levels[0].label)
                  : levels[0].label}
              </span>
            )}
          </div>

          {note && <div className="attribute-note">{note}</div>}
        </div>

        <div className="attribute-actions right">
          {/* MULTI-LEVEL BUTTONS */}
          {levels.length > 1 && (
            <>
              <button className="btn-tudo" onClick={setTudo} disabled={disabled}>
                Tudo
              </button>
              <button className="btn-clear" onClick={clear} disabled={disabled}>
                Remover
              </button>
            </>
          )}

          {/* SINGLE-VALUE TOGGLE INLINE */}
          {levels.length === 1 && !repeatable && (
            <button
              className={`btn-toggle ${current === null ? 'add' : 'remove'}`}
              onClick={() => {
                if (current === null) setIndex(0)
                else clear()
              }}
              disabled={disabled}
              aria-pressed={current !== null}
            >
              <span className="btn-icon">{current === null ? '＋' : '−'}</span>
              <span className="btn-text">
                {current === null ? 'Adicionar' : 'Remover'}
              </span>
            </button>
          )}
        </div>
      </div>

      {/* ===== BODY ===== */}

      {/* MULTI-LEVEL = segunda linha */}
      {levels.length > 1 && (
        <div className="levels">
          {levels.map((l, idx) => {
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
          })}
        </div>
      )}

      {/* SINGLE-VALUE REPEATABLE = mesma linha abaixo */}
      {levels.length === 1 && repeatable && (
        <div className="levels single-inline">
          <div className="qty-controls">
            <button
              className="qty-btn"
              onClick={() => onChange(attr.id, Math.max(0, count - 1))}
              disabled={disabled || count <= 0}
            >
              −
            </button>
            <div className="qty-count">{count}</div>
            <button
              className="qty-btn"
              onClick={() => onChange(attr.id, count + 1)}
              disabled={disabled}
            >
              +
            </button>
          </div>
        </div>
      )}

      {/* SLIDER só para multi-level */}
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
    </div>
  )
}



{/* <div className="attribute-footer">
        <div className="selected-price">
          {repeatable ? (count > 0 ? `${count} × ${levels[0].label} = ${levels[0].value * count}k` : '—') : (current !== null ? levels[current].label : '—')}
        </div>
      </div> */}