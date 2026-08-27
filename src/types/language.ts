export type LanguageCode =
  | 'en'   // English (Default)
  | 'hi'   // Hindi (हिन्दी)
  | 'mr'   // Marathi (मराठी)
  | 'bn'   // Bengali (বাংলা)
  | 'te'   // Telugu (తెలుగు)
  | 'ta'   // Tamil (தமிழ்)
  | 'gu'   // Gujarati (ગુજરાતી)
  | 'kn'   // Kannada (ಕನ್ನಡ)
  | 'ml'   // Malayalam (മലയാളം)
  | 'or'   // Odia (ଓଡ଼ିଆ)
  | 'pa'   // Punjabi (ਪੰਜਾਬੀ)
  | 'as'   // Assamese (অসমীয়া)
  | 'mai'  // Maithili (मैथिली)
  | 'sat'  // Santali (ᱥᱟᱱᱛᱟᱲᱤ)
  | 'ks'   // Kashmiri (कॉशुर / کٲشُر)
  | 'ne'   // Nepali (नेपाली)
  | 'kok'  // Konkani (कोंकणी)
  | 'sd'   // Sindhi (सिंधी / سنڌي)
  | 'doi'  // Dogri (डोगरी)
  | 'sa'   // Sanskrit (संस्कृतम्)
  | 'ur';  // Urdu (اردو)

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  region: string;
  direction?: 'ltr' | 'rtl';
  popular?: boolean;
}

export const INDIAN_REGIONAL_LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', region: 'Global / India', popular: true },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', region: 'North & Central India', popular: true },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', region: 'Maharashtra', popular: true },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', region: 'West Bengal, Tripura, Assam', popular: true },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', region: 'Andhra Pradesh, Telangana', popular: true },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', region: 'Tamil Nadu, Puducherry', popular: true },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', region: 'Gujarat', popular: true },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', region: 'Karnataka', popular: true },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', region: 'Kerala, Lakshadweep', popular: true },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', region: 'Odisha', popular: true },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', region: 'Punjab, Delhi', popular: true },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', region: 'Assam', popular: false },
  { code: 'mai', name: 'Maithili', nativeName: 'मैथिली', region: 'Bihar, Jharkhand', popular: false },
  { code: 'sat', name: 'Santali', nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ', region: 'Jharkhand, West Bengal, Odisha', popular: false },
  { code: 'ks', name: 'K Kashmiri', nativeName: 'कॉशुर / کٲشُر', region: 'Jammu & Kashmir', popular: false },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', region: 'Sikkim, West Bengal, Assam', popular: false },
  { code: 'kok', name: 'Konkani', nativeName: 'कोंकणी', region: 'Goa, Maharashtra, Karnataka', popular: false },
  { code: 'sd', name: 'Sindhi', nativeName: 'सिंधी / سنڌي', region: 'Gujarat, Maharashtra, Rajasthan', popular: false },
  { code: 'doi', name: 'Dogri', nativeName: 'डोगरी', region: 'Jammu & Kashmir, Himachal Pradesh', popular: false },
  { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृतम्', region: 'Classical & Sacred', popular: false },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', region: 'Telangana, Delhi, UP, Bihar', direction: 'rtl', popular: true }
];
