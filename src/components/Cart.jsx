import React from 'react'

export default function Cart({selections, data, onRemove, onClear, compact, onChange, discountPercent = 0, onDiscountChange = () => {}}){
  const items = Object.entries(selections)
    .map(([id, idx]) => {
      let attr = null
      for(const sec of data){
        for(const a of sec.attributes){
          if(a.id === id) attr = a
        }
      }
      if(!attr) return null
      if(attr?.repeatable){
        const count = Number(idx) || 0
        if(count <= 0) return null
        const unit = attr.levels[0]
        return {id, name: attr?.name || id, label: `${unit.label} × ${count}`, value: (unit?.value || 0) * count, qty: count, repeatable: true}
      }
      const level = attr?.levels?.[idx]
      if(!level) return null
      return {id, name: attr?.name || id, label: level?.label || '—', value: level?.value || 0, repeatable: false}
    })
    .filter(Boolean)

  const total = items.reduce((s,i) => s + i.value, 0)
  const discount = Number(discountPercent) || 0
  const discountAmount = Math.round(total * discount / 100)
  const discounted = Math.round((total - discountAmount) * 100) / 100

  return (
    <aside className={"cart" + (compact ? ' compact' : '')} role="dialog" aria-label="Carrinho de compras">
      <header className="cart-header">
        <h3>Carrinho</h3>
        <div className="cart-header-right">
          <label className="discount-label">Desconto %
            <input
              type="number"
              min="0"
              max="100"
              value={discountPercent}
              onFocus={() => { if (Number(discountPercent) === 0) onDiscountChange('') }}
              onChange={(e) => onDiscountChange(e.target.value)}
              onBlur={() => {
                if (discountPercent === '') return onDiscountChange(0)
                const n = Number(discountPercent) || 0
                onDiscountChange(Math.max(0, Math.min(100, n)))
              }}
            />
          </label>
        </div>
      </header>

      <div className="cart-items">
        {items.length === 0 ? (
          <div className="cart-empty">Nenhum item adicionado</div>
        ) : items.map(it => (
          <div key={it.id} className="cart-item">
            <div className="cart-item-info">
              <div className="cart-item-name">{it.name}</div>
              <div className="cart-item-label">{it.label}</div>
            </div>

            <div className="cart-item-right">
              {it.repeatable ? (
                <>
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => onChange(it.id, Math.max(0, it.qty - 1))}>−</button>
                    <div className="qty-count">{it.qty}</div>
                    <button className="qty-btn" onClick={() => onChange(it.id, it.qty + 1)}>+</button>
                  </div>
                  <div className="cart-item-value">{it.value}k</div>
                  <button className="cart-item-remove" onClick={() => onRemove(it.id)}>Remover</button>
                </>
              ) : (
                <>
                  <div className="cart-item-value">{it.value}k</div>
                  <button className="cart-item-remove" onClick={() => onRemove(it.id)}>Remover</button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      <footer className="cart-footer">
        <button className="cart-clear" onClick={onClear}>Remover tudo</button>
        {discount > 0 ? (
          <div className="cart-totals">
            <div className="cart-sub">Subtotal: {total}k</div>
            <div className="cart-sub">Desconto: -{discountAmount}k ({discount}%)</div>
            <div className="cart-total">Total: <strong>{discounted}k</strong></div>
          </div>
        ) : (
          <div className="cart-total">Total: <strong>{total}k</strong></div>
        )}
      </footer>
    </aside>
  )
}