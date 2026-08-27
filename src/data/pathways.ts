export interface Pathway {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  topicIds: number[];
  color: string;
  duration: string;
}

export const curatedPathways: Pathway[] = [
  {
    id: 'deep-emotional-intimacy',
    title: 'Foundations of Connection & Communication',
    subtitle: 'From active listening to radical vulnerability and aftercare',
    description: 'A 7-topic journey to dismantle performance anxiety, establish safe emotional containers, and talk about desires with zero pressure.',
    icon: 'HeartHandshake',
    topicIds: [1, 2, 3, 4, 7, 10, 12],
    color: 'from-rose-500/20 to-pink-500/10 border-rose-200 dark:border-rose-900/50',
    duration: '1–2 Weeks'
  },
  {
    id: 'sensory-awakening',
    title: 'The Sensory Awakening & Slow Sex Path',
    subtitle: 'Awaken non-genital erogenous zones, breath sync, and thermal contrasts',
    description: 'Transform foreplay into an intoxicating multi-sensory landscape using massage, breath entrainment, temperature play, and blindfolds.',
    icon: 'Sparkles',
    topicIds: [16, 17, 26, 29, 34, 35, 70, 72],
    color: 'from-amber-500/20 to-orange-500/10 border-amber-200 dark:border-amber-900/50',
    duration: '2 Weeks'
  },
  {
    id: 'mastering-oral-manual',
    title: 'The Art of Oral & Manual Pleasure',
    subtitle: 'Comprehensive anatomical mastery for cunnilingus, fellatio, and G-spot/P-spot play',
    description: 'Master anatomical mapping, rhythm modulation, lubrication mastery, and the Kivin method for reliable, effortless climaxes.',
    icon: 'Flame',
    topicIds: [24, 25, 39, 40, 41, 42, 43, 44],
    color: 'from-purple-500/20 to-indigo-500/10 border-purple-200 dark:border-purple-900/50',
    duration: '2–3 Weeks'
  },
  {
    id: 'ergonomics-positions',
    title: 'Positions, Angles & Ergonomic Mastery',
    subtitle: 'Unlock clitoral alignment, comfortable depth, and pillow hacks',
    description: 'Discover how the Coital Alignment Technique (CAT), slow pelvic grinding, and simple wedge pillows transform classic positions into toe-curling shared bliss.',
    icon: 'Compass',
    topicIds: [49, 50, 51, 52, 55, 60, 61, 62],
    color: 'from-emerald-500/20 to-teal-500/10 border-emerald-200 dark:border-emerald-900/50',
    duration: '2 Weeks'
  },
  {
    id: 'kink-power-adventure',
    title: 'Gentle Kink, Surrender & Power Dynamics',
    subtitle: 'Consensual dominance/submission, impact play, dirty talk, and blindfolds',
    description: 'Explore the intoxicating thrill of gentle power exchange, safe restraints, praise kinks, and dirty talk with ironclad safety rules and aftercare.',
    icon: 'ShieldCheck',
    topicIds: [70, 71, 76, 77, 78, 80, 81, 89],
    color: 'from-violet-500/20 to-purple-500/10 border-violet-200 dark:border-violet-900/50',
    duration: '3 Weeks'
  },
  {
    id: 'lifelong-vitality',
    title: 'Longevity, Pelvic Health & The Erotic Spark',
    subtitle: 'Sustain electric desire across decades, parenthood, and life transitions',
    description: 'Keep long-term passion ablaze using Esther Perel insights, pelvic floor mastery (Kegels & Reverse Kegels), scheduled intimacy, and evolving consent.',
    icon: 'Infinity',
    topicIds: [91, 92, 96, 97, 98, 99, 100, 101],
    color: 'from-blue-500/20 to-cyan-500/10 border-blue-200 dark:border-blue-900/50',
    duration: 'Lifelong'
  }
];
