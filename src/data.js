const data = [
  {
    section: 'FULL TUNING',
    attributes: [
      // { id: 'carro_full_blindagem', name: 'Carro (com blindagem)', levels: [{ label: '380k', value: 380 }] },
      { id: 'carro_full', name: 'Carro (sem blindagem)', levels: [{ label: '290k', value: 290 }] },
      { id: 'moto_full', name: 'Moto (sem suspensão)', levels: [{ label: '230k', value: 230 }] },
    ]
  },
  {
    section: 'TUNAGEM AVULSA',
    attributes: [
      {
        id: 'turbo', name: 'Turbo', levels: [
          { label: '50k', value: 50 }
        ]
      },
      {
        id: 'motor', name: 'Motor', levels: [
          { label: 'Level 1 - 20k', value: 20 },
          { label: 'Level 2 - 30k', value: 30 },
          { label: 'Level 3 - 40k', value: 40 },
          { label: 'Level 4 - 50k', value: 50 },
        ]
      },
      {
        id: 'freio', name: 'Freio', levels: [
          { label: 'Level 1 - 30k', value: 30 },
          { label: 'Level 2 - 35k', value: 35 },
          { label: 'Level 3 - 40k', value: 40 },
        ]
      },
      {
        id: 'transmissao', name: 'Transmissão', levels: [
          { label: 'Level 1 - 35k', value: 35 },
          { label: 'Level 2 - 45k', value: 45 },
          { label: 'Level 3 - 55k', value: 55 },
        ]
      },
      {
        id: 'suspensao', name: 'Suspensão', levels: [
          { label: 'Level 1 - 15k', value: 15 },
          { label: 'Level 2 - 25k', value: 25 },
          { label: 'Level 3 - 35k', value: 35 },
          { label: 'Level 4 - 45k', value: 45 },
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
          { label: '40% (45k)', value: 45 },
          { label: '60% (70k)', value: 70 },
          { label: '80% (95k)', value: 95 },
          { label: '100% (115k)', value: 115 },
        ]
      }
    ]
  },

  {
    section: 'EMBELEZAMENTO EXTERNO',
    attributes: [
      { id: 'aerofolio', name: 'Aerofólio', levels: [{ label: '10k', value: 10 }] },
      { id: 'bloco_motor', name: 'Bloco motor', levels: [{ label: '20k', value: 20 }] },
      { id: 'buzina', name: 'Buzina', levels: [{ label: '10k', value: 10 }] },
      { id: 'capo', name: 'Capô', levels: [{ label: '10k', value: 10 }] },
      { id: 'chassi', name: 'Chassi', levels: [{ label: '10k', value: 10 }] },
      { id: 'decal', name: 'Decal', levels: [{ label: '20k', value: 20 }] },
      { id: 'escapamento', name: 'Escapamento', levels: [{ label: '10k', value: 10 }] },
      { id: 'farol', name: 'Farol', levels: [{ label: '35k', value: 35 }] },
      { id: 'filtro_ar', name: 'Filtro de ar', levels: [{ label: '10k', value: 10 }] },
      { id: 'grelha', name: 'Grelha', levels: [{ label: '10k', value: 10 }] },
      { id: 'hidraulica', name: 'Hidráulica', levels: [{ label: '25k', value: 25 }] },
      { id: 'neon', name: 'Neon', levels: [{ label: '10k', value: 10 }] },
      { id: 'para_choque_driant', name: 'Para-choque dianteiro', levels: [{ label: '10k', value: 10 }] },
      { id: 'para_choque_tras', name: 'Para-choque traseiro', levels: [{ label: '10k', value: 10 }] },
      { id: 'para_lama', name: 'Para-lama', levels: [{ label: '10k', value: 10 }] },
      { id: 'pintura', name: 'Pintura', levels: [{ label: '15k', value: 15 }] },
      { id: 'porta', name: 'Porta', levels: [{ label: '10k', value: 10 }] },
      { id: 'placa_custom', name: 'Placa custom', levels: [{ label: '25k', value: 25 }] },
      { id: 'porta_placa', name: 'Porta-placa', levels: [{ label: '30k', value: 30 }] },
      { id: 'saia', name: 'Teto', levels: [{ label: '10k', value: 10 }] },
      { id: 'vidro', name: 'Vidro', levels: [{ label: '10k', value: 10 }] },


      // { id: 'rodas_externo', name: 'Rodas', levels: [{ label: '20k', value: 20 }] },
      // { id: 'extras_externo', name: 'Extras (cada)', repeatable: true, levels: [{ label: '3k', value: 3 }] },
    ]
  },
  {
    section: 'EXTRAS',
    attributes: [
      { id: 'cor', name: 'Cor', levels: [{ label: '5k', value: 5 }] },
      { id: 'custom', name: 'Custom', levels: [{ label: '5k', value: 5 }] },
      { id: 'drift', name: 'Drift', levels: [{ label: '10k', value: 10 }] },
      { id: 'fumaca', name: 'Fumaça', levels: [{ label: '5k', value: 5 }] },
      { id: 'rodas_completo', name: 'Rodas (completo)', levels: [{ label: '60k', value: 60 }] },
    ]
  },

  {
    section: 'EMBELEZAMENTO INTERNO',
    attributes: [
      { id: 'volante', name: 'Volante', levels: [{ label: '25k', value: 25 }] },
      { id: 'cambio', name: 'Câmbio', levels: [{ label: '25k', value: 25 }] },
      { id: 'ponteiros', name: 'Ponteiros', levels: [{ label: '25k', value: 25 }] },
      { id: 'enfeites', name: 'Enfeites', levels: [{ label: '60k', value: 60 }] },
      { id: 'placas_internas', name: 'Placas internas', levels: [{ label: '35k', value: 35 }] },
      { id: 'design_interno', name: 'Design interno', levels: [{ label: '20k', value: 20 }] },
      { id: 'som', name: 'Som', levels: [{ label: '10k', value: 10 }] },
      { id: 'porta_malas', name: 'Porta-malas', levels: [{ label: '15k', value: 15 }] },
    ]
  }
]

export default data
