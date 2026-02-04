const data = [
  {
    section: 'FULL TUNING',
    attributes: [
      { id: 'carro_full', name: 'Carro (sem blindagem)', levels: [{ label: '280k', value: 280 }] },
      { id: 'moto_full', name: 'Moto (sem suspensão)', levels: [{ label: '220k', value: 220 }] },
    ]
  },
  {
    section: 'TUNAGEM AVULSA',
    attributes: [
      {
        id: 'turbo', name: 'Turbo', levels: [
          { label: '45k', value: 45 }
        ]
      },
      {
        id: 'motor', name: 'Motor', levels: [
          { label: 'Level 1 - 15k', value: 15 },
          { label: 'Level 2 - 25k', value: 25 },
          { label: 'Level 3 - 35k', value: 35 },
          { label: 'Level 4 - 45k', value: 45 },
        ]
      },
      {
        id: 'freio', name: 'Freio', levels: [
          { label: 'Level 1 - 25k', value: 25 },
          { label: 'Level 2 - 30k', value: 30 },
          { label: 'Level 3 - 35k', value: 35 },
        ]
      },
      {
        id: 'transmissao', name: 'Transmissão', levels: [
          { label: 'Level 1 - 30k', value: 30 },
          { label: 'Level 2 - 40k', value: 40 },
          { label: 'Level 3 - 50k', value: 50 },
        ]
      },
      {
        id: 'suspensao', name: 'Suspensão', levels: [
          { label: 'Level 1 - 10k', value: 10 },
          { label: 'Level 2 - 20k', value: 20 },
          { label: 'Level 3 - 30k', value: 30 },
          { label: 'Level 4 - 40k', value: 40 },
        ]
      },
    ]
  },
  {
    section: 'BLINDAGEM',
    attributes: [
      {
        id: 'blindagem', name: 'Blindagem', levels: [
          { label: '20% (25k)', value: 25 },
          { label: '40% (50k)', value: 50 },
          { label: '60% (75k)', value: 75 },
          { label: '80% (100k)', value: 100 },
          { label: '100% (130k)', value: 130 },
        ]
      }
    ]
  },
  {
    section: 'EMBELEZAMENTO INTERNO',
    attributes: [
      { id: 'volante', name: 'Volante', levels: [{ label: '20k', value: 20 }] },
      { id: 'cambio', name: 'Câmbio', levels: [{ label: '20k', value: 20 }] },
      { id: 'ponteiros', name: 'Ponteiros', levels: [{ label: '20k', value: 20 }] },
      { id: 'enfeites', name: 'Enfeites', levels: [{ label: '50k', value: 50 }] },
      { id: 'placas_internas', name: 'Placas internas', levels: [{ label: '30k', value: 30 }] },
      { id: 'design_interno', name: 'Design interno', levels: [{ label: '15k', value: 15 }] },
      { id: 'som', name: 'Som', levels: [{ label: '5k', value: 5 }] },
      { id: 'porta_malas', name: 'Porta-malas', levels: [{ label: '10k', value: 10 }] },
    ]
  },
  {
    section: 'EMBELEZAMENTO EXTERNO',
    attributes: [
      { id: 'aerofolio', name: 'Aerofólio', levels: [{ label: '8k', value: 8 }] },
      { id: 'bloco_motor', name: 'Bloco motor', levels: [{ label: '15k', value: 15 }] },
      { id: 'farol', name: 'Farol', levels: [{ label: '30k', value: 30 }] },
      { id: 'neon', name: 'Neon', levels: [{ label: '6k', value: 6 }] },
      { id: 'hidraulica', name: 'Hidráulica', levels: [{ label: '20k', value: 20 }] },
      { id: 'rodas_externo', name: 'Rodas', levels: [{ label: '20k', value: 20 }] },
      { id: 'pintura', name: 'Pintura', levels: [{ label: '10k', value: 10 }] },
      { id: 'placa_custom', name: 'Placa custom', levels: [{ label: '20k', value: 20 }] },
      { id: 'porta_placa', name: 'Porta-placa', levels: [{ label: '25k', value: 25 }] },
      { id: 'extras_externo', name: 'Extras (cada)', repeatable: true, levels: [{ label: '3k', value: 3 }] },
    ]
  },
  {
    section: 'EXTRAS',
    attributes: [
      { id: 'cor', name: 'Cor', levels: [{ label: '1k', value: 1 }] },
      { id: 'custom', name: 'Custom', levels: [{ label: '3k', value: 3 }] },
      { id: 'drift', name: 'Drift', levels: [{ label: '8k', value: 8 }] },
      { id: 'fumaca', name: 'Fumaça', levels: [{ label: '1k', value: 1 }] },
      { id: 'rodas_completo', name: 'Rodas completo', levels: [{ label: '50k', value: 50 }] },
    ]
  }
]

export default data
