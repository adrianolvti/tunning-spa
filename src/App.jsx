import React, {useState, useMemo, useEffect, useRef} from 'react'
import data from './data'
import Attribute from './components/Attribute'
import Cart from './components/Cart'

export default function App(){
  const [selections, setSelections] = useState({})

  const handleChange = (id, index) => {
    setSelections(prev => ({...prev, [id]: index}))
  }

  const findAttr = (id) => {
    for(const sec of data){
      for(const a of sec.attributes){
        if(a.id === id) return a
      }
    }
    return null
  }

  const total = useMemo(() => {
    let sum = 0
    for(const [id, val] of Object.entries(selections)){
      if(val === null || typeof val === 'undefined') continue
      const a = findAttr(id)
      if(!a) continue
      if(a.repeatable){
        const count = Number(val) || 0
        const level = a.levels[0]
        if(level) sum += level.value * count
      } else {
        const level = a.levels[val]
        if(level) sum += level.value
      }
    }
    return sum
  }, [selections])

  const resetAll = () => setSelections({})

  // Cart state & helpers
  const [showCart, setShowCart] = useState(false)
  const cartCount = Object.entries(selections).reduce((sum, [id, val]) => {
    if(val === null || typeof val === 'undefined') return sum
    const a = findAttr(id)
    if(a?.repeatable) return sum + (Number(val) || 0)
    return sum + 1
  }, 0)
  const removeSelection = (id) => setSelections(prev => { const next = {...prev}; delete next[id]; return next })

  // Discount percent for the whole order (0-100)
  const [discountPercent, setDiscountPercent] = useState(0)
  const discountAmount = Math.round(total * (Number(discountPercent) || 0) / 100)
  const discountedTotal = Math.round((total - discountAmount) * 100) / 100

  const tabs = ['FULL TUNING', 'TUNAGEM AVULSA']
  const [activeTab, setActiveTab] = useState(tabs[0])

  // animated tab switch states
  const [leaving, setLeaving] = useState(false)
  const [entering, setEntering] = useState(false)
  const tabTimeoutRef = useRef(null)

  const handleTabClick = (t) => {
    if(t === activeTab) return
    if(tabTimeoutRef.current) clearTimeout(tabTimeoutRef.current)
    setLeaving(true)
    tabTimeoutRef.current = setTimeout(() => {
      setActiveTab(t)
      setLeaving(false)
      setEntering(true)
      tabTimeoutRef.current = setTimeout(() => setEntering(false), 260)
    }, 200)
  }

  useEffect(() => {
    return () => { if(tabTimeoutRef.current) clearTimeout(tabTimeoutRef.current) }
  }, [])

  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  useEffect(() => {
    localStorage.setItem('theme', theme)
    // add a short-lived class to enable smooth transitions
    document.documentElement.classList.add('theme-transition')
    document.documentElement.classList.toggle('dark-theme', theme === 'dark')
    const t = setTimeout(() => document.documentElement.classList.remove('theme-transition'), 320)
    return () => clearTimeout(t)
  }, [theme])
  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  const visibleMain = data.find(s => s.section === activeTab)
  const otherSections = data.filter(s => !tabs.includes(s.section))

  const isFull = visibleMain && visibleMain.section === 'FULL TUNING'
  const fullSelected = isFull && (selections['carro_full'] != null || selections['moto_full'] != null)

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-row topbar-primary">
          <h1>Configurator Tuning Sakura</h1>
          <div className="header-right">
            <button className="btn-theme" onClick={toggleTheme} aria-pressed={theme === 'dark'}>
              {theme === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
        </div>

        <div className="topbar-row topbar-secondary">
          <div className="header-left">
            <label className="discount-inline">Desconto %
              <input
                type="number"
                min="0"
                max="100"
                value={discountPercent}
                onFocus={() => { if (Number(discountPercent) === 0) setDiscountPercent('') }}
                onChange={(e) => setDiscountPercent(e.target.value)}
                onBlur={() => {
                  if (discountPercent === '') return setDiscountPercent(0)
                  const n = Number(discountPercent) || 0
                  setDiscountPercent(Math.max(0, Math.min(100, n)))
                }}
              />
            </label>
          </div>
          <div className="header-right">
            <button className={`btn-cart ${showCart ? 'open' : ''}`} onClick={() => setShowCart(s => !s)} aria-pressed={showCart} aria-label="Abrir carrinho">
              🛒 <span className="cart-count">{cartCount}</span>
            </button>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="tabbar" role="tablist" aria-label="Tuning tabs">
          {['FULL TUNING','TUNAGEM AVULSA'].map(t => (
            <button
              key={t}
              role="tab"
              aria-selected={activeTab === t}
              className={`tab-btn ${activeTab === t ? 'active' : ''}`}
              onClick={() => handleTabClick(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {visibleMain && (
          <section key={visibleMain.section} className={`section ${visibleMain.section === 'FULL TUNING' ? 'full' : ''} ${leaving ? 'fade-out' : ''} ${entering ? 'fade-in' : ''}`}>
            <h2 className="section-title">{visibleMain.section}</h2>
            <div className="attrs">
              {visibleMain.attributes.map((attr) => (
                <Attribute
                  key={attr.id}
                  attr={attr}
                  valueIndex={selections[attr.id]}
                  onChange={handleChange}
                  disabled={isFull && fullSelected && (selections[attr.id] == null || typeof selections[attr.id] === 'undefined')}
                />
              ))}
            </div>
          </section>
        )}

        {otherSections.map((sec) => (
          <section key={sec.section} className={`section ${sec.section === 'FULL TUNING' ? 'full' : ''}`}>
            <h2 className="section-title">{sec.section}</h2>
            <div className="attrs">
              {sec.attributes.map((attr) => (
                <Attribute
                  key={attr.id}
                  attr={attr}
                  valueIndex={selections[attr.id]}
                  onChange={handleChange}
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      <footer className="footer" role="contentinfo">
        <button className="btn-reset" onClick={resetAll}>Resetar tudo</button>
        <div className="summary" aria-live="polite">
          Soma: <strong>{total}k</strong>
          {discountPercent > 0 && (
            <span className="discount"> — Desconto {discountPercent}% (-{discountAmount}k) <strong className="discounted-total">{discountedTotal}k</strong></span>
          )}
        </div>
      </footer>

      {/* Header popover cart */}
      {showCart && <div className="cart-overlay" onClick={() => setShowCart(false)} />}
      {showCart && (
        <div className="cart-popover header-popover" role="dialog" aria-label="Carrinho popover">
          <Cart compact selections={selections} data={data} onRemove={(id) => removeSelection(id)} onClear={() => setSelections({})} onChange={handleChange} discountPercent={discountPercent} onDiscountChange={setDiscountPercent} />
        </div>
      )}
    </div>
  )
}
