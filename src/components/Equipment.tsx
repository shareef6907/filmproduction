'use client'

import { motion } from 'framer-motion'

const cameraEquipment = [
  { name: 'Sony FX6', type: 'Cinema Camera', spec: '4K 120fps' },
  { name: 'Sony A7S III', type: 'Mirrorless', spec: '4K 120fps' },
  { name: 'DJI Ronin RS3 Pro', type: 'Gimbal', spec: '3-Axis Stabilization' },
  { name: 'Cinema Lenses', type: 'Glass', spec: 'Cinematic Depth' },
]

const audioEquipment = [
  { name: 'Sennheiser MKH 416', type: 'Shotgun Mic', spec: 'Broadcast Quality' },
  { name: 'Rode Wireless GO II', type: 'Wireless Lav', spec: 'Dual Channel' },
  { name: 'Zoom F6', type: 'Field Recorder', spec: '32-bit Float' },
]

const lightingEquipment = [
  { name: 'Aputure 600d Pro', type: 'LED Light', spec: '600W Daylight' },
  { name: 'Aputure Light Dome', type: 'Softbox', spec: 'Professional Diffusion' },
  { name: 'RGB Panel Arrays', type: 'Creative Lighting', spec: 'Full Color Control' },
]

const postProduction = [
  { name: 'DaVinci Resolve Studio', type: 'Color Grading', spec: 'Professional Suite' },
  { name: 'Adobe Premiere Pro', type: 'Editing', spec: 'Industry Standard' },
  { name: 'After Effects', type: 'Motion Graphics', spec: 'VFX & Animation' },
]

const EquipmentCard = ({ title, icon, items }: { title: string; icon: React.ReactNode; items: typeof cameraEquipment }) => (
  <div className="bg-zinc-900/30 border border-white/5 rounded-xl p-6">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-film-gold/20 rounded-lg flex items-center justify-center">{icon}</div>
      <h3 className="font-display text-lg text-white">{title}</h3>
    </div>
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.name} className="border-b border-white/5 pb-3 last:border-0 last:pb-0">
          <p className="font-body text-white/80 text-sm">{item.name}</p>
          <p className="font-body text-white/40 text-xs">{item.type} • {item.spec}</p>
        </div>
      ))}
    </div>
  </div>
)

export default function Equipment() {
  return (
    <section className="py-20 md:py-28 px-4 md:px-12 lg:px-16 bg-zinc-950/50 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <p className="text-film-gold font-body text-sm tracking-widest uppercase mb-3">Professional Grade</p>
          <h2 className="font-display text-2xl md:text-4xl font-medium text-white mb-4">Our Equipment & Technology</h2>
          <p className="font-body text-white/50 max-w-2xl mx-auto">We invest in the latest cinema-grade equipment to ensure every production meets the highest broadcast and digital standards.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <EquipmentCard title="Camera" icon={<svg className="w-5 h-5 text-film-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>} items={cameraEquipment} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <EquipmentCard title="Audio" icon={<svg className="w-5 h-5 text-film-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>} items={audioEquipment} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
            <EquipmentCard title="Lighting" icon={<svg className="w-5 h-5 text-film-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>} items={lightingEquipment} />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <EquipmentCard title="Post-Production" icon={<svg className="w-5 h-5 text-film-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} items={postProduction} />
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-film-gold/10 border border-film-gold/30 rounded-lg">
            <svg className="w-5 h-5 text-film-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <span className="font-body text-sm text-white/80">Professional cinema-grade equipment for broadcast quality</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
