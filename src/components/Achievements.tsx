'use client'

import { motion } from 'framer-motion'

const achievements = [
  { icon: '🏆', title: 'Award-Winning', description: 'International recognition' },
  { icon: '🎬', title: '10+ Years', description: 'Industry experience' },
  { icon: '📽️', title: '900+ Projects', description: 'Successfully delivered' },
  { icon: '🌍', title: 'GCC Coverage', description: 'Regional reach' },
  { icon: '✨', title: '4K Cinema', description: 'Broadcast quality' },
  { icon: '🎨', title: 'Color Grading', description: 'Hollywood-grade finishing' },
]

export default function Achievements() {
  return (
    <section className="py-8 md:py-10 px-4 md:px-12 lg:px-16 bg-gradient-to-r from-film-gold/10 via-film-gold/5 to-film-gold/10 border-y border-film-gold/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-12"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="flex items-center gap-3"
            >
              <span className="text-2xl md:text-3xl">{achievement.icon}</span>
              <div>
                <p className="font-display text-sm md:text-base text-white font-medium">{achievement.title}</p>
                <p className="font-body text-xs text-white/50">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
