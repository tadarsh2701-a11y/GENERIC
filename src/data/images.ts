// Generated and curated fine art imagery for Velvet & Ember
import heroEmbrace from '../assets/images/sensual_embrace_warm_1787823085718.jpg';
import handsTouch from '../assets/images/intimate_hands_touch_1787823102661.jpg';
import breathUnion from '../assets/images/somatic_breath_union_1787823118307.jpg';
import caressOil from '../assets/images/sensual_caress_oil_1787823133435.jpg';
import positionArt from '../assets/images/intimate_position_art_1787823151474.jpg';

export const appImages = {
  hero: heroEmbrace,
  hands: handsTouch,
  breath: breathUnion,
  oil: caressOil,
  position: positionArt,
  about: heroEmbrace,
};

// Unique category images so no single category repeats the same asset
export const categoryImageMap: Record<string, string> = {
  'communication': 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop', // intimate couple talking soft light
  'self-partner-knowledge': handsTouch, // close tactile hands touch
  'foreplay-arousal': caressOil, // oil and skin caress
  'oral-manual': 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format&fit=crop', // sensual close touch silhouette
  'penetration-positions': positionArt, // elegant sculptural intertwined embrace
  'toys-enhancement': 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=1200&auto=format&fit=crop', // artistic luxury aesthetic
  'advanced-exploratory': breathUnion, // ethereal sacred breath & energy
  'aftercare-health-longevity': 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1200&auto=format&fit=crop' // gentle tender resting embrace
};

// Returns a unique image per topic ID if specific, or category fallback
export function getTopicImage(topicId: number, categoryId: string): string {
  // Rotate through generated imagery and specific curated mood shots
  if (categoryId === 'penetration-positions') return positionArt;
  if (categoryId === 'foreplay-arousal') return caressOil;
  if (categoryId === 'self-partner-knowledge') return handsTouch;
  if (categoryId === 'advanced-exploratory') return breathUnion;

  return categoryImageMap[categoryId] || heroEmbrace;
}
