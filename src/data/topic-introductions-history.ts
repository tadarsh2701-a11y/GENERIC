import { TopicItem } from '../types/topics';

/**
 * Provides rich, contextually grounded Introduction and History sections
 * for topics aligned with the 10 reference educational platforms:
 * - Yoga of Intimacy (Body-based sacred sexuality, desire restoration, devotion)
 * - Beducated (Shame-free, expert-led modern erotic education)
 * - ISTA (International School of Temple Arts - life-force energy, boundaries)
 * - John Wineland (Sacred intimacy, masculine/feminine polarity)
 * - The Sensual Arts School (Neo-tantra, somatic sensuality)
 * - School of Erotic Mysteries (Conscious kink, erotic empowerment)
 * - Love for Couples / Diana Richardson (Slow Sex, non-goal presence)
 * - Passion and Presence (Mindful sex, neuroscience & intimacy)
 * - Lit Up Love (Sensation play tools & pleasure expansion)
 * - Sacred Sex Coaches (Tantra coaching & intimacy facilitation landscape)
 */

export function getTopicIntroduction(topic: TopicItem): string {
  if (topic.introduction && topic.introduction.trim().length > 0) {
    return topic.introduction;
  }

  const titleLower = topic.title.toLowerCase();
  const cat = (topic.categoryId || '').toLowerCase();

  if (cat.includes('communication') || titleLower.includes('listen') || titleLower.includes('desire') || titleLower.includes('consent')) {
    return `In modern conscious intimacy frameworks—exemplified by platforms like Beducated and Passion and Presence—transparent communication is recognized as the ultimate aphrodisiac. Rather than treating intimate conversations as clinical or uncomfortable, contemporary relationship psychology demonstrates that sharing desires and establishing clear nervous-system safety creates the baseline oxytocin release necessary for authentic erotic arousal and emotional depth.`;
  }

  if (cat.includes('foreplay') || cat.includes('arousal') || titleLower.includes('slow') || titleLower.includes('touch')) {
    return `Drawing from the 'Slow Sex' teachings of Diana Richardson (Love for Couples) and the polarity practices of John Wineland, this topic reframes foreplay from a hurried prelude into a self-contained sacred art. By relinquishing goal-oriented performance pressure and tuning into somatic presence, partners learn to expand their nervous system's capacity for sustained pleasure and electrical connection.`;
  }

  if (cat.includes('oral') || cat.includes('manual') || titleLower.includes('clitoris') || titleLower.includes('massage')) {
    return `As taught in expert-led programs at Beducated and The Sensual Arts School, oral and manual touch are elevated when approached with anatomical mastery and mindful reverence. Moving beyond mechanical routines, this practice invites lovers into a sensory dialogue of gradual build-up, attentive listening to micro-responses, and deep physical devotion.`;
  }

  if (cat.includes('position') || cat.includes('penetration') || titleLower.includes('pose') || titleLower.includes('rhythm')) {
    return `Rooted in body-based intimacy work like the Yoga of Intimacy (Justin Patrick Pierce & Londin Angel Winters), physical positioning during lovemaking is far more than geometry—it is an energetic posture that dictates emotional eye contact, breath synchronization, and depth of polarity. Aligning physical vectors with emotional intention transforms physical connection into a transformative meditation.`;
  }

  if (cat.includes('toy') || cat.includes('enhancement') || titleLower.includes('lube') || titleLower.includes('sensation')) {
    return `Educators at Lit Up Love and modern sexologists view intimacy tools and enhancements not as crutches, but as creative amplifiers of human pleasure. Introducing sensory tools with enthusiasm and curiosity allows partners to explore uncharted neural pathways of delight while keeping communication playful and judgment-free.`;
  }

  if (cat.includes('advanced') || cat.includes('exploratory') || titleLower.includes('kink') || titleLower.includes('tantra')) {
    return `In alignment with trainings at ISTA (International School of Temple Arts) and the School of Erotic Mysteries, advanced exploratory intimacy integrates sacred container-building, boundary mastery, and life-force energy movement. When approached with radical consent and somatic awareness, non-ordinary states of intimacy offer profound catharsis and mutual empowerment.`;
  }

  if (cat.includes('aftercare') || cat.includes('health') || titleLower.includes('longevity') || titleLower.includes('cuddle')) {
    return `Highlighted by Sacred Sex Coaches and mindfulness educators, the integration period after intimate practice is as essential as the arousal phase itself. Dedicated aftercare stabilizes the autonomic nervous system, locks in emotional bonding hormones, and ensures both partners feel deeply cherished, safe, and seen.`;
  }

  return `Grounded in modern somatic sexology and conscious relationship education, this guide offers practical tools and embodied wisdom to deepen your physical and emotional connection. By combining nervous-system awareness with shame-free curiosity, you can cultivate an enduring, vibrant intimate life with your partner.`;
}

export function getTopicHistory(topic: TopicItem): string {
  if (topic.history && topic.history.trim().length > 0) {
    return topic.history;
  }

  const titleLower = topic.title.toLowerCase();
  const cat = (topic.categoryId || '').toLowerCase();

  if (cat.includes('communication') || titleLower.includes('listen') || titleLower.includes('desire') || titleLower.includes('consent')) {
    return `Historically, open dialogue surrounding sexual desires was often constrained by societal taboos and shame. The evolution of humanistic psychology in the mid-20th century, combined with modern somatic boundary work (such as ISTA's Wheel of Consent and non-violent communication traditions), revolutionized how lovers converse. Today, sacred intimacy traditions view clear communication not as a barrier to passion, but as the ancient art of creating a safe sanctuary for the soul to express its deepest truths.`;
  }

  if (cat.includes('foreplay') || cat.includes('arousal') || titleLower.includes('slow') || titleLower.includes('touch')) {
    return `The practice of non-goal-oriented arousal traces back thousands of years to Classical Tantric texts and Taoist sexual longevity manuals (such as the Su Nu Ching). Ancient practitioners understood that rushing toward climax depletes vital energy (Jing), whereas slow, mindful energy circulation cultivates longevity, emotional harmony, and heightened spiritual awareness. Modern pioneers like Diana Richardson have translated these ancient secrets into accessible contemporary practices.`;
  }

  if (cat.includes('oral') || cat.includes('manual') || titleLower.includes('clitoris') || titleLower.includes('massage')) {
    return `Honoring the genitals through ritualized touch has a rich heritage in ancient civilizations. In classical Indian Kamashastra texts and sacred temple traditions, Yoni (sacred space) and Lingam (column of light) worship were regarded as devotional arts of healing and veneration. Modern embodiment schools have reclaimed these ancient practices, stripping away modern pornography's rushed stereotypes in favor of meditative, respectful touch.`;
  }

  if (cat.includes('position') || cat.includes('penetration') || titleLower.includes('pose') || titleLower.includes('rhythm')) {
    return `The study of erotic postures dates back to 4th-century Sanskrit treatises like Vatsyayana's Kama Sutra and medieval European manuals of courtly love. Far from mere physical mechanics, historical Tantric traditions viewed intimate postures as 'Asanas'—bodily configurations designed to direct subtle energy channels (Nadis) and harmonize the polarities of masculine (Shiva) and feminine (Shakti) energies.`;
  }

  if (cat.includes('toy') || cat.includes('enhancement') || titleLower.includes('lube') || titleLower.includes('sensation')) {
    return `Erotic enhancements have been utilized since antiquity, with archaeological evidence of silk wraps, botanical oils, and polished stone instruments dating back to ancient Greece, Rome, and Han Dynasty China. In the 20th century, the medicalization and subsequent liberation of pleasure devices transformed these tools into mainstream, high-tech instruments of personal and relational empowerment.`;
  }

  if (cat.includes('advanced') || cat.includes('exploratory') || titleLower.includes('kink') || titleLower.includes('tantra')) {
    return `Ritualized power dynamics, sensory deprivation, and ecstatic trance states have deep roots in ancient mystery schools, shamanic initiation rites, and esoteric Tantric practices. Ancient temple arts utilized intentional containers to transcend everyday ego identity. Contemporary conscious kink and sacred mystery schools synthesize these ancient cathartic traditions with modern psychological safety and trauma-informed consent protocols.`;
  }

  if (cat.includes('aftercare') || cat.includes('health') || titleLower.includes('longevity') || titleLower.includes('cuddle')) {
    return `Ancient Taoist physicians and Ayurvedic practitioners placed immense emphasis on post-intimacy recovery, prescribing herbal teas, warm oil massages, and quiet stillness to prevent energy depletion. Modern neuroscience validates this ancient wisdom, showing that the post-climax 'neuro-chemical window' is when brain neuroplasticity and oxytocin absorption are at their peak, making aftercare the ultimate ritual for long-term relational bonding.`;
  }

  return `This practice inherits a rich historical continuum bridging ancient Eastern energy traditions with modern Western somatic neuroscience. By honoring the wisdom of ancient lineage alongside contemporary evidence-based relationship science, lovers can experience intimacy as both an enduring art and a transformative practice.`;
}
