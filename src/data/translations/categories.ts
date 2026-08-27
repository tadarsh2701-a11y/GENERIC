import { LanguageCode } from '../../types/language';

export interface CategoryTranslation {
  title: string;
  shortName: string;
  description: string;
}

export const categoryTranslations: Record<LanguageCode, Record<string, CategoryTranslation>> = {
  en: {
    'communication': {
      title: 'Communication & Consent',
      shortName: 'Communication',
      description: 'Building vulnerability, transparent desires, somatic check-ins, and shared boundaries.'
    },
    'self-partner-knowledge': {
      title: 'Self & Partner Knowledge',
      shortName: 'Anatomy & Arousal',
      description: 'Comprehensive anatomy, pelvic neural architecture, responsive vs spontaneous desire, and maps of pleasure.'
    },
    'foreplay-arousal': {
      title: 'Foreplay & Sensual Arousal',
      shortName: 'Foreplay & Sensation',
      description: 'The art of anticipation, touch choreography, temperature play, and whole-body arousal.'
    },
    'oral-manual': {
      title: 'Oral & Manual Mastery',
      shortName: 'Tactile Mastery',
      description: 'Rhythm calibration, varied pressures, anatomical focal points, and nuanced tactile artistry.'
    },
    'penetration-positions': {
      title: 'Penetration & Position Variations',
      shortName: 'Positions & Angles',
      description: 'Pelvic elevation, angle adjustments, depth control, pacing, and ergonomic intimacy comfort.'
    },
    'toys-enhancement': {
      title: 'Toys, Enhancements & Atmosphere',
      shortName: 'Enhancements',
      description: 'Sensory devices, high-viscosity lubricants, silk blindfolds, ambient lighting, and sacred atmosphere.'
    },
    'advanced-exploratory': {
      title: 'Advanced & Exploratory Intimacy',
      shortName: 'Exploratory & Tantra',
      description: 'Tantric breath synchronization, extended arousal plateaus, power dynamics, and erotic role-play.'
    },
    'aftercare-health-longevity': {
      title: 'Aftercare, Health & Longevity',
      shortName: 'Aftercare & Health',
      description: 'Hormonal grounding, post-session debriefs, pelvic health longevity, and relationship resilience.'
    }
  },
  hi: {
    'communication': {
      title: 'संवाद और सहमति',
      shortName: 'संवाद',
      description: 'स्पष्ट इच्छाएं, भावनात्मक सुरक्षा और आपसी सीमाओं की समझ।'
    },
    'self-partner-knowledge': {
      title: 'शारीरिक ज्ञान एवं कामेच्छा',
      shortName: 'शरीर रचना',
      description: 'शरीर विज्ञान, तंत्रिका बिंदु और कामुक सुख के प्रमुख केंद्र।'
    },
    'foreplay-arousal': {
      title: 'फोरप्ले और कामोत्तेजना',
      shortName: 'फोरप्ले',
      description: 'स्पर्श, धीमी गति और पूरे शरीर में संवेदना जगाने की कला।'
    },
    'oral-manual': {
      title: 'मौखिक और हस्त स्पर्श कला',
      shortName: 'स्पर्श कला',
      description: 'लय, कोमल दबाव और सुखद बिंदुओं का नाजुक स्पर्श।'
    },
    'penetration-positions': {
      title: 'मुद्राएं एवं कोण परिवर्तन',
      shortName: 'मुद्राएं',
      description: 'शारीरिक कोण, गहराई, लय और आरामदेह स्थितियाँ।'
    },
    'toys-enhancement': {
      title: 'साधन, तेल एवं वातावरण',
      shortName: 'उपकरण एवं सुगंध',
      description: 'सुगंधित तेल, स्पर्श उपकरण और रोमांटिक वातावरण।'
    },
    'advanced-exploratory': {
      title: 'तांत्रिक एवं उन्नत अंतरंगता',
      shortName: 'तांत्रिक योग',
      description: 'श्वास समन्वय, दीर्घ काम सुख और तांत्रिक साधना।'
    },
    'aftercare-health-longevity': {
      title: 'सत्रोपरांत देखभाल और स्वास्थ्य',
      shortName: 'देखभाल व स्वास्थ्य',
      description: 'सत्र के बाद का आलिंगन, विश्राम और स्वास्थ्य।'
    }
  },
  mr: {
    'communication': {
      title: 'संवाद आणि परस्पर सहमती',
      shortName: 'संवाद',
      description: 'भावनिक मोकळेपणा, स्पष्ट इच्छा आणि सुरक्षित सीमा.'
    },
    'self-partner-knowledge': {
      title: 'शरीर रचना आणि संवेदनशीलता',
      shortName: 'शरीर ज्ञान',
      description: 'शरीरशास्त्र आणि कामोत्तेजनाचे मुख्य केंद्र.'
    },
    'foreplay-arousal': {
      title: 'फोरप्ले आणि संवेदनशीलता',
      shortName: 'फोरप्ले',
      description: 'स्पर्श, हळुवार लय आणि सर्व शरीराची अनुभूती.'
    },
    'oral-manual': {
      title: 'हस्त आणि मौखिक स्पर्श कला',
      shortName: 'स्पर्श कौशल्य',
      description: 'नाजूक लय आणि योग्य दाब.'
    },
    'penetration-positions': {
      title: 'मुद्रा आणि कोन बदल',
      shortName: 'मुद्रा',
      description: 'आरामदायी स्थिती आणि लयबद्ध हालचाली.'
    },
    'toys-enhancement': {
      title: 'साधने, तेल आणि वातावरण',
      shortName: 'वातावरण निर्मिती',
      description: 'सुगंधी तेले आणि सुरेख वातावरण.'
    },
    'advanced-exploratory': {
      title: 'तांत्रिक आणि प्रगत जवळीक',
      shortName: 'तांत्रिक पद्धती',
      description: 'श्वास ताळमेळ आणि दीर्घ आनंद.'
    },
    'aftercare-health-longevity': {
      title: 'सत्रानंतरची काळजी आणि आरोग्य',
      shortName: 'काळजी आणि आरोग्य',
      description: 'समाधानानंतरचे आलिंगन आणि विश्रांती.'
    }
  },
  bn: {
    'communication': {
      title: 'যোগাযোগ ও পারস্পরিক সম্মতি',
      shortName: 'যোগাযোগ',
      description: 'আবেগীয় খোলামেলা ভাব ও পারস্পরিক শ্রদ্ধা।'
    },
    'self-partner-knowledge': {
      title: 'শারীরিক জ্ঞান ও অনুভূতি',
      shortName: 'শারীরবৃত্ত',
      description: 'শরীরতত্ত্ব ও কামোত্তেজনার মানচিত্র।'
    },
    'foreplay-arousal': {
      title: 'ফোরপ্লে ও স্পর্শ কলা',
      shortName: 'ফোরপ্লে',
      description: 'ধীর স্পর্শ ও সম্পূর্ণ শরীরে অনুভূতি জাগানোর শিল্প।'
    },
    'oral-manual': {
      title: 'স্পর্শ ও সংবেদনশীল কৌশল',
      shortName: 'স্পর্শ কৌশল',
      description: 'ছন্দবদ্ধ চাপ ও সংবেদনশীল অংশের পরিচর্যা।'
    },
    'penetration-positions': {
      title: 'আসন ও শারীরিক অবস্থান',
      shortName: 'আসন',
      description: 'কোণ পরিবর্তন ও আরামদায়ক অবস্থান।'
    },
    'toys-enhancement': {
      title: 'উপকরণ, তেল ও পরিবেশ',
      shortName: 'পরিবেশ ও তেল',
      description: 'সুগন্ধি তেল ও অন্তরঙ্গ পরিবেশ সৃষ্টি।'
    },
    'advanced-exploratory': {
      title: 'তান্ত্রিক ও উন্নত ঘনিষ্ঠতা',
      shortName: 'তান্ত্রিক পথ',
      description: 'শ্বাস-প্রশ্বাসের ছন্দ ও দীর্ঘস্থায়ী আনন্দ।'
    },
    'aftercare-health-longevity': {
      title: 'পরবর্তী যত্ন ও স্বাস্থ্য',
      shortName: 'পরবর্তী যত্ন',
      description: 'আলিঙ্গন, মানসিক প্রশান্তি ও স্বাস্থ্য সচেতনতা।'
    }
  },
  te: {
    'communication': {
      title: 'సంభాషణ మరియు సమ్మతి',
      shortName: 'సంభాషణ',
      description: 'భావోద్వేగ రక్షణ, స్పష్టమైన కోరికలు మరియు పరస్పర గౌరవం.'
    },
    'self-partner-knowledge': {
      title: 'శరీర విజ్ఞానం & శృంగార కేంద్రాలు',
      shortName: 'శరీర శాస్త్రం',
      description: 'శరీర స్పర్శ కేంద్రాలు మరియు ఉద్వేగాల అవగాహన.'
    },
    'foreplay-arousal': {
      title: 'ఫోర్‌ప్లే & స్పర్శానుభూతి',
      shortName: 'ఫోర్‌ప్లే',
      description: 'సున్నితమైన స్పర్శ మరియు శరీర ఉద్వేగం.'
    },
    'oral-manual': {
      title: 'స్పర్శ మరియు నైపుణ్య కళ',
      shortName: 'స్పర్శ కళ',
      description: 'లయబద్ధమైన ఒత్తిడి మరియు సున్నిత ప్రదేశాల స్పర్శ.'
    },
    'penetration-positions': {
      title: 'స్థానాలు & కోణ మార్పులు',
      shortName: 'స్థానాలు',
      description: 'సౌకర్యవంతమైన భంగిమలు మరియు లయబద్ధమైన వేగం.'
    },
    'toys-enhancement': {
      title: 'సాధనాలు, నూనెలు & వాతావరణం',
      shortName: 'పరికరాలు',
      description: 'సుగంధ తైలాలు మరియు ప్రశాంతమైన వాతావరణం.'
    },
    'advanced-exploratory': {
      title: 'తాంత్రిక & ఉన్నత సాన్నిహిత్యం',
      shortName: 'తాంత్రిక పద్ధతి',
      description: 'శ్వాస సమన్వయం మరియు సుదీర్ఘ ఆనందం.'
    },
    'aftercare-health-longevity': {
      title: 'తదుపరి సంరక్షణ మరియు ఆరోగ్యం',
      shortName: 'సంరక్షణ',
      description: 'కౌగిలింత, సాంత్వన మరియు భావోద్వేగ స్థిరత్వం.'
    }
  },
  ta: {
    'communication': {
      title: 'தொடர்பாடல் & பரஸ்பர ஒப்புதல்',
      shortName: 'தொடர்பாடல்',
      description: 'மனமார்ந்த உரையாடல் மற்றும் விருப்பங்களை பகிர்தல்.'
    },
    'self-partner-knowledge': {
      title: 'உடல் நுட்பம் & உணர்ச்சி மையங்கள்',
      shortName: 'உடற்கூறியல்',
      description: 'உடல் அமைப்பு மற்றும் உணர்ச்சி புள்ளிகள்.'
    },
    'foreplay-arousal': {
      title: 'முன்விளையாட்டு & தீண்டல் கலை',
      shortName: 'முன்விளையாட்டு',
      description: 'மென்மையான தொடுதல் மற்றும் மெல்லெழும் இன்பம்.'
    },
    'oral-manual': {
      title: 'தொடு உணர்வு & நுட்பங்கள்',
      shortName: 'தொடு கலை',
      description: 'சீரான அழுத்தம் மற்றும் நுட்பமான தீண்டல்.'
    },
    'penetration-positions': {
      title: 'நிலைகள் & கோண மாற்றங்கள்',
      shortName: 'நிலைகள்',
      description: 'சௌகரியமான நிலைகள் மற்றும் சீரான வேகம்.'
    },
    'toys-enhancement': {
      title: 'சாதனங்கள், எண்ணெய்கள் & சூழல்',
      shortName: 'சூழல் உருவாக்கம்',
      description: 'நறுமண எண்ணெய்கள் மற்றும் இனிமையான சூழல்.'
    },
    'advanced-exploratory': {
      title: 'தாந்திரீக & மேம்பட்ட நெருக்கம்',
      shortName: 'தாந்திரீகம்',
      description: 'சுவாச ஒத்திசைவு மற்றும் நீடித்த இன்பம்.'
    },
    'aftercare-health-longevity': {
      title: 'பின்கவனிப்பு & ஆரோக்கியம்',
      shortName: 'பின்கவனிப்பு',
      description: 'அரவணைப்பு, அமைதி மற்றும் நல்வாழ்வு.'
    }
  },
  gu: {
    'communication': {
      title: 'વાતચીત અને પરસ્પર સંમતિ',
      shortName: 'સંવાદ',
      description: 'ભાવનાત્મક સ્પષ્ટતા અને સુરક્ષિત સીમાઓ.'
    },
    'self-partner-knowledge': {
      title: 'શરીર રચના અને સંવેદના',
      shortName: 'શરીર જ્ઞાન',
      description: 'શરીરશાસ્ત્ર અને ઉત્તેજનાના મુખ્ય બિંદુઓ.'
    },
    'foreplay-arousal': {
      title: 'ફોરપ્લે અને સ્પર્શ સંવેદના',
      shortName: 'ફોરપ્લે',
      description: 'ધીમો સ્પર્શ અને સમગ્ર શરીરની ઉત્તેજના.'
    },
    'oral-manual': {
      title: 'હસ્ત અને મૌખિક સ્પર્શ કળા',
      shortName: 'સ્પર્શ કળા',
      description: 'લયબદ્ધ દબાણ અને નાજુક સ્પર્શ.'
    },
    'penetration-positions': {
      title: 'સ્થિતિ અને ખૂણામાં ફેરફાર',
      shortName: 'મુદ્રાઓ',
      description: 'આરામદાયક મુદ્રાઓ અને ગતિનું નિયંત્રણ.'
    },
    'toys-enhancement': {
      title: 'સાધનો, તેલ અને રોમેન્ટિક વાતાવરણ',
      shortName: 'વાતાવરણ',
      description: 'સુગંધિત તેલ અને શાંત વાતાવરણ.'
    },
    'advanced-exploratory': {
      title: 'તાંત્રિક અને ઊંડી નિકટતા',
      shortName: 'તાંત્રિક કળા',
      description: 'શ્વાસનું સંકલન અને લાંબો આનંદ.'
    },
    'aftercare-health-longevity': {
      title: 'પછીની કાળજી અને સ્વાસ્થ્ય',
      shortName: 'સંભાળ',
      description: 'સત્ર પછીનું આલિંગન અને માનસિક શાંતિ.'
    }
  },
  kn: {
    'communication': {
      title: 'ಸಂವಹನ ಮತ್ತು ಸಮ್ಮತಿ',
      shortName: 'ಸಂವಹನ',
      description: 'ಭಾವನಾತ್ಮಕ ಮುಕ್ತತೆ ಮತ್ತು ಪರಸ್ಪರ ಗೌರವ.'
    },
    'self-partner-knowledge': {
      title: 'ದೇಹ ವಿಜ್ಞಾನ ಮತ್ತು ಸಂವೇದನೆ',
      shortName: 'ದೇಹ ರಚನೆ',
      description: 'ದೇಹಶಾಸ್ತ್ರ ಮತ್ತು ಸ್ಪರ್ಶ ಕೇಂದ್ರಗಳು.'
    },
    'foreplay-arousal': {
      title: 'ಪೂರ್ವಕ್ರೀಡೆ ಮತ್ತು ಸ್ಪರ್ಶಕಲೆ',
      shortName: 'ಪೂರ್ವಕ್ರೀಡೆ',
      description: 'ಮೃದುವಾದ ಸ್ಪರ್ಶ ಮತ್ತು ದೇಹದ ಜಾಗೃತಿ.'
    },
    'oral-manual': {
      title: 'ಸ್ಪರ್ಶ ಮತ್ತು ಕೌಶಲ್ಯ ಕಲೆ',
      shortName: 'ಸ್ಪರ್ಶ ಕಲೆ',
      description: 'ಲಯಬದ್ಧ ಒತ್ತಡ ಮತ್ತು ಮೃದು ಸ್ಪರ್ಶ.'
    },
    'penetration-positions': {
      title: 'ಭಂಗಿಗಳು ಮತ್ತು ಕೋನ ಬದಲಾವಣೆ',
      shortName: 'ಭಂಗಿಗಳು',
      description: 'ಆರಾಮದಾಯಕ ಸ್ಥಾನಗಳು ಮತ್ತು ಲಯ.'
    },
    'toys-enhancement': {
      title: 'ಸಾಧನಗಳು, ತೈಲಗಳು ಮತ್ತು ಪರಿಸರ',
      shortName: 'ಪರಿಸರ',
      description: 'ಸುಗಂಧ ತೈಲಗಳು ಮತ್ತು ಪ್ರಣಯ ಪರಿಸರ.'
    },
    'advanced-exploratory': {
      title: 'ತಾಂತ್ರಿಕ ಮತ್ತು ಸಾಮೀಪ್ಯ ಕಲೆ',
      shortName: 'ತಾಂತ್ರಿಕ ಮಾರ್ಗ',
      description: 'ಉಸಿರಾಟದ ಸಮನ್ವಯ ಮತ್ತು ಆನಂದ.'
    },
    'aftercare-health-longevity': {
      title: 'ನಂತರದ ಆರೈಕೆ ಮತ್ತು ಆರೋಗ್ಯ',
      shortName: 'ಆರೈಕೆ',
      description: 'ಆಲಿಂಗನ ಮತ್ತು ಮನಸ್ಸಿನ ಶಾಂತಿ.'
    }
  },
  ml: {
    'communication': {
      title: 'ആശയവിനിമയവും സമ്മതവും',
      shortName: 'ആശയവിനിമയം',
      description: 'തുറന്ന സംഭാഷണവും പരസ്പര വിശ്വാസവും.'
    },
    'self-partner-knowledge': {
      title: 'ശരീരശാസ്ത്രവും ഉത്തേജന കേന്ദ്രങ്ങളും',
      shortName: 'ശരീരശാസ്ത്രം',
      description: 'ശരീരഘടനയും ആനന്ദ ബിന്ദുക്കളും.'
    },
    'foreplay-arousal': {
      title: 'ഫോർപ്ലേയും സ്പർശന കലയും',
      shortName: 'ഫോർപ്ലേ',
      description: 'ലോലമായ സ്പർശനവും ശരീരമുണർത്തലും.'
    },
    'oral-manual': {
      title: 'സ്പർശന നൈപുണ്യങ്ങൾ',
      shortName: 'സ്പർശന കല',
      description: 'താളത്തിലുള്ള സ്പർശനവും മർദ്ദവും.'
    },
    'penetration-positions': {
      title: 'നിലകളും കോൺ മാറ്റങ്ങളും',
      shortName: 'നിലകൾ',
      description: 'സുഖപ്രദമായ നിലകളും താളവും.'
    },
    'toys-enhancement': {
      title: 'ഉപകരണങ്ങൾ, എണ്ണകൾ & അന്തരീക്ഷം',
      shortName: 'അന്തരീക്ഷം',
      description: 'സുഗന്ധ എണ്ണകളും ശാന്തമായ അന്തരീക്ഷവും.'
    },
    'advanced-exploratory': {
      title: 'താന്ത്രിക സാമീപ്യം',
      shortName: 'താന്ത്രിക രീതി',
      description: 'ശ്വാസ താളവും ദീർഘ ആനന്ദവും.'
    },
    'aftercare-health-longevity': {
      title: 'ശേഷ പരിചരണവും ആരോഗ്യവും',
      shortName: 'പരിചരണം',
      description: 'ആലിംഗനവും മാനസിക സ്വസ്ഥതയും.'
    }
  },
  or: {
    'communication': {
      title: 'ସମ୍ବାଦ ଓ ପାରସ୍ପରିକ ସମ୍ମତି',
      shortName: 'ସମ୍ବାଦ',
      description: 'ଭାବନାତ୍ମକ ସ୍ପଷ୍ଟତା ଓ ପାରସ୍ପରିକ ସମ୍ମାନ।'
    },
    'self-partner-knowledge': {
      title: 'ଶରୀର ବିଜ୍ଞାନ ଓ ଅନୁଭୂତି',
      shortName: 'ଶରୀର ବିଜ୍ଞାନ',
      description: 'ଶରୀର ଗଠନ ଓ ସ୍ପର୍ଶ ବିନ୍ଦୁ।'
    },
    'foreplay-arousal': {
      title: 'ଫୋରପ୍ଲେ ଓ ସ୍ପର୍ଶ କଳା',
      shortName: 'ଫୋରପ୍ଲେ',
      description: 'ମଧୁର ସ୍ପର୍ଶ ଏବଂ ସମଗ୍ର ଶରୀର ଜାଗ୍ରତ।'
    },
    'oral-manual': {
      title: 'ସ୍ପର୍ଶ ଏବଂ ନିପୁଣତା',
      shortName: 'ସ୍ପର୍ଶ କଳା',
      description: 'କୋମଳ ଚାପ ଏବଂ ନାଜୁକ ସ୍ପର୍ଶ।'
    },
    'penetration-positions': {
      title: 'ଆସନ ଓ ସ୍ଥିତି ପରିବର୍ତ୍ତନ',
      shortName: 'ଆସନ',
      description: 'ଆରାମଦାୟକ ସ୍ଥିତି ଏବଂ ଗତିର ତାଳମେଳ।'
    },
    'toys-enhancement': {
      title: 'ଉପକରଣ, ତେଲ ଏବଂ ପରିବେଶ',
      shortName: 'ପରିବେଶ',
      description: 'ସୁଗନ୍ଧିତ ତେଲ ଏବଂ ରୋମାଣ୍ଟିକ ପରିବେଶ।'
    },
    'advanced-exploratory': {
      title: 'ତାନ୍ତ୍ରିକ ଏବଂ ଗଭୀର ଆତ୍ମୀୟତା',
      shortName: 'ତାନ୍ତ୍ରିକ ପଥ',
      description: 'ଶ୍ୱାସର ସମନ୍ୱୟ ଏବଂ ଦୀର୍ଘକାଳୀନ ଆନନ୍ଦ।'
    },
    'aftercare-health-longevity': {
      title: 'ପରବର୍ତ୍ତୀ ଯତ୍ନ ଏବଂ ସ୍ୱାସ୍ଥ୍ୟ',
      shortName: 'ଯତ୍ନ',
      description: 'ଆଲିଙ୍ଗନ, ବିଶ୍ରାମ ଏବଂ ମାନସିକ ଶାନ୍ତି।'
    }
  },
  pa: {
    'communication': {
      title: 'ਸੰਚਾਰ ਅਤੇ ਸਹਿਮਤੀ',
      shortName: 'ਸੰਚਾਰ',
      description: 'ਭਾਵਨਾਤਮਕ ਖੁੱਲ੍ਹਾਪਣ ਅਤੇ ਆਪਸੀ ਸਤਿਕਾਰ।'
    },
    'self-partner-knowledge': {
      title: 'ਸਰੀਰ ਰਚਨਾ ਅਤੇ ਸੰਵੇਦਨਾ',
      shortName: 'ਸਰੀਰ ਗਿਆਨ',
      description: 'ਸਰੀਰਕ ਬਣਤਰ ਅਤੇ ਅਹਿਸਾਸ ਦੇ ਕੇਂਦਰ।'
    },
    'foreplay-arousal': {
      title: 'ਫੋਰਪਲੇਅ ਅਤੇ ਛੋਹ ਦੀ ਕਲਾ',
      shortName: 'ਫੋਰਪਲੇਅ',
      description: 'ਹੌਲੀ-ਹੌਲੀ ਛੋਹ ਅਤੇ ਪੂਰੇ ਸਰੀਰ ਦੀ ਜਾਗ੍ਰਿਤੀ।'
    },
    'oral-manual': {
      title: 'ਛੋਹ ਅਤੇ ਮੁਹਾਰਤ',
      shortName: 'ਛੋਹ ਕਲਾ',
      description: 'ਕੋਮਲ ਦਬਾਅ ਅਤੇ ਨਾਜ਼ੁਕ ਛੋਹ।'
    },
    'penetration-positions': {
      title: 'ਆਸਣ ਅਤੇ ਕੋਣ ਤਬਦੀਲੀ',
      shortName: 'ਆਸਣ',
      description: 'ਆਰਾਮਦਾਇਕ ਸਥਿਤੀਆਂ ਅਤੇ ਲੈਅ।'
    },
    'toys-enhancement': {
      title: 'ਸਾਧਨ, ਤੇਲ ਅਤੇ ਮਾਹੌਲ',
      shortName: 'ਮਾਹੌਲ',
      description: 'ਖੁਸ਼ਬੂਦਾਰ ਤੇਲ ਅਤੇ ਰੋਮਾਂਟਿਕ ਮਾਹੌਲ।'
    },
    'advanced-exploratory': {
      title: 'ਤਾਂਤਰਿਕ ਅਤੇ ਡੂੰਘੀ ਨੇੜਤਾ',
      shortName: 'ਤਾਂਤਰਿਕ ਰਾਹ',
      description: 'ਸਾਹਾਂ ਦਾ ਤਾਲਮੇਲ ਅਤੇ ਲੰਬਾ ਆਨੰਦ।'
    },
    'aftercare-health-longevity': {
      title: 'ਬਾਅਦ ਦੀ ਦੇਖਭਾਲ ਅਤੇ ਸਿਹਤ',
      shortName: 'ਦੇਖਭਾਲ',
      description: 'ਜੱਫੀ, ਸ਼ਾਂਤੀ ਅਤੇ ਭਾਵਨਾਤਮਕ ਸੁੱਖ।'
    }
  },
  as: {
    'communication': {
      title: 'সংযোগ আৰু পাৰস্পৰিক সন্মতি',
      shortName: 'সংযোগ',
      description: 'আৱেগিক স্বচ্ছতা আৰু পাৰস্পৰিক সন্মান।'
    },
    'self-partner-knowledge': {
      title: 'শাৰীৰিক জ্ঞান আৰু অনুভূতি',
      shortName: 'দেহজ্ঞান',
      description: 'দেহৰ গঠন আৰু সংবেদনশীল বিন্দু।'
    },
    'foreplay-arousal': {
      title: 'ফোৰপ্লে আৰু স্পৰ্শ কলা',
      shortName: 'ফোৰপ্লে',
      description: 'ধীৰ স্পৰ্শ আৰু সমগ্ৰ শৰীৰৰ জাগৰণ।'
    },
    'oral-manual': {
      title: 'স্পৰ্শ আৰু কৌশল',
      shortName: 'স্পৰ্শ কলা',
      description: 'ছন্দোময় চাপ আৰু সূক্ষ্ম স্পৰ্শ।'
    },
    'penetration-positions': {
      title: 'আসন আৰু অৱস্থান পৰিবৰ্তন',
      shortName: 'আসন',
      description: 'আৰামদায়ক অৱস্থান আৰু ছন্দ।'
    },
    'toys-enhancement': {
      title: 'সঁজুলি, তেল আৰু পৰিৱেশ',
      shortName: 'পৰিৱেশ',
      description: 'সুগন্ধি তেল আৰু অন্তৰংগ পৰিৱেশ।'
    },
    'advanced-exploratory': {
      title: 'তান্ত্রিক আৰু গভীৰ নৈকট্য',
      shortName: 'তান্ত্রিক পথ',
      description: 'শ্বাসৰ মিলন আৰু চিৰস্থায়ী আনন্দ।'
    },
    'aftercare-health-longevity': {
      title: 'পৰৱৰ্তী যত্ন আৰু স্বাস্থ্য',
      shortName: 'যত্ন',
      description: 'আলিংগন, মানসিক প্ৰশান্তি আৰু স্বাস্থ্য।'
    }
  },
  mai: {
    'communication': {
      title: 'संवाद आ सहमति',
      shortName: 'संवाद',
      description: 'भावनात्मक सुरक्षा आ आपसी समझ।'
    },
    'self-partner-knowledge': {
      title: 'शारीरिक ज्ञान आ कामेच्छा',
      shortName: 'शरीर विज्ञान',
      description: 'शरीर रचना आ संवेदना केंद्र।'
    },
    'foreplay-arousal': {
      title: 'फोरप्ले आ कामोत्तेजना',
      shortName: 'फोरप्ले',
      description: 'कोमल स्पर्श आ संपूर्ण शरीरक जागृति।'
    },
    'oral-manual': {
      title: 'हस्त व मौखिक स्पर्श कला',
      shortName: 'स्पर्श कला',
      description: 'लय आ नाजुक स्पर्श।'
    },
    'penetration-positions': {
      title: 'मुद्रा आ कोण परिवर्तन',
      shortName: 'मुद्रा',
      description: 'सुखद स्थिति आ गतिक तालमेल।'
    },
    'toys-enhancement': {
      title: 'साधन, तेल आ वातावरण',
      shortName: 'वातावरण',
      description: 'सुगंधित तेल आ पवित्र वातावरण।'
    },
    'advanced-exploratory': {
      title: 'तांत्रिक आ प्रगत अंतरंगता',
      shortName: 'तांत्रिक साधना',
      description: 'सांस समरसता आ दीर्घ आनंद।'
    },
    'aftercare-health-longevity': {
      title: 'सत्रोपरांत देखरेख आ स्वास्थ्य',
      shortName: 'देखरेख',
      description: 'आलिंगन, विश्राम आ मानसिक शांति।'
    }
  },
  sat: {
    'communication': {
      title: 'ᱨᱚᱯᱚᱲ ᱟᱨ ᱨᱮᱵᱮᱱ',
      shortName: 'ᱨᱚᱯᱚᱲ',
      description: 'ᱢᱚᱱᱮ ᱨᱮᱱᱟᱜ ᱠᱟᱛᱷᱟ ᱟᱨ ᱢᱟᱹᱱ᱾'
    },
    'self-partner-knowledge': {
      title: 'ᱦᱚᱲᱢᱚ ᱵᱟᱰᱟᱭ ᱟᱨ ᱥᱩᱯᱩᱨ',
      shortName: 'ᱦᱚᱲᱢᱚ ᱜᱮᱭᱟᱱ',
      description: 'ᱦᱚᱲᱢᱚ ᱵᱟᱵᱚᱛ ᱵᱟᱰᱟᱭ ᱟᱨ ᱵᱩᱡᱷᱟᱹᱣ᱾'
    },
    'foreplay-arousal': {
      title: 'ᱯᱷᱚᱨᱯᱞᱮ ᱟᱨ ᱡᱚᱴᱮᱫ ᱦᱩᱱᱟᱹᱨ',
      shortName: 'ᱯᱷᱚᱨᱯᱞᱮ',
      description: 'ᱞᱟᱹᱲᱦᱟᱹᱭ ᱡᱚᱴᱮᱫ ᱟᱨ ᱦᱚᱲᱢᱚ ᱪᱮᱸᱜᱷᱟ᱾'
    },
    'oral-manual': {
      title: 'ᱛᱤ ᱟᱨ ᱢᱚᱪᱟ ᱛᱮ ᱡᱚᱴᱮᱫ',
      shortName: 'ᱡᱚᱴᱮᱫ ᱦᱩᱱᱟᱹᱨ',
      description: 'ᱨᱤᱫᱚᱢ ᱛᱮ ᱡᱚᱴᱮᱫ ᱟᱨ ᱫᱟᱵᱟᱣ᱾'
    },
    'penetration-positions': {
      title: 'ᱛᱷᱟᱶ ᱟᱨ ᱠᱳᱬ ᱵᱚᱫᱚᱞ',
      shortName: 'ᱛᱷᱟᱶ',
      description: 'ᱥᱩᱠᱷ ᱛᱷᱟᱶ ᱟᱨ ᱞᱟᱦᱟ-ᱛᱟᱭᱚᱢ᱾'
    },
    'toys-enhancement': {
      title: 'ᱥᱟᱢᱟᱱ, ᱥᱩᱱᱩᱢ ᱟᱨ ᱴᱷᱟᱶ',
      shortName: 'ᱴᱷᱟᱶ',
      description: 'ᱥᱚ ᱥᱩᱱᱩᱢ ᱟᱨ ᱥᱩᱯᱩᱨ ᱴᱷᱟᱶ᱾'
    },
    'advanced-exploratory': {
      title: 'ᱛᱟᱱᱛᱨᱤᱠ ᱟᱨ ᱜᱟᱹᱦᱤᱨ ᱥᱟᱹᱜᱟᱹᱭ',
      shortName: 'ᱛᱟᱱᱛᱨᱤᱠ',
      description: 'ᱥᱟᱦᱮᱫ ᱢᱮᱞ ᱟᱨ ᱡᱤᱞᱤᱧ ᱨᱟᱹᱥᱠᱟᱹ᱾'
    },
    'aftercare-health-longevity': {
      title: 'ᱛᱟᱭᱚᱢ ᱡᱚᱛᱚᱱ ᱟᱨ ᱦᱚᱲᱢᱚ',
      shortName: 'ᱡᱚᱛᱚᱱ',
      description: 'ᱠᱚᱞᱮ ᱨᱮ ᱟᱯᱱᱟᱨ ᱟᱨ ᱡᱤᱨᱟᱹᱣ᱾'
    }
  },
  ks: {
    'communication': {
      title: 'بات چیت تہٕ رضامندی',
      shortName: 'بات چیت',
      description: 'جذباتی حفاظت تہٕ باہمی احترام۔'
    },
    'self-partner-knowledge': {
      title: 'جسمانی علم تہٕ احساس',
      shortName: 'جسمانی علم',
      description: 'جسمانی ساخت تہٕ حساس مقامات۔'
    },
    'foreplay-arousal': {
      title: 'فور پلے تہٕ چھُوَنُک فن',
      shortName: 'فور پلے',
      description: 'آہستہ چھُووُن تہٕ جسم بیدار کرُن۔'
    },
    'oral-manual': {
      title: 'ہاتھک تہٕ زبانہٕ ہُنٛد فن',
      shortName: 'چھُوَنُک فن',
      description: 'مناسب دباؤ تہٕ نازک انداز۔'
    },
    'penetration-positions': {
      title: 'آسن تہٕ زاویہٕ تبدیلی',
      shortName: 'آسن',
      description: 'آرام دہ انداز تہٕ رفتار۔'
    },
    'toys-enhancement': {
      title: 'سامان، تیل تہٕ ماحول',
      shortName: 'ماحول',
      description: 'خوشبودار تیل تہٕ رومانوی ماحول۔'
    },
    'advanced-exploratory': {
      title: 'تانترک تہٕ گہٕر قربت',
      shortName: 'تانترک طریقہٕ',
      description: 'ساکھک ملاپ تہٕ طویل سکون۔'
    },
    'aftercare-health-longevity': {
      title: 'پتہٕ دیکھ بھال تہٕ صحت',
      shortName: 'دیکھ بھال',
      description: 'گلے لگاون، آرام تہٕ سکون۔'
    }
  },
  ne: {
    'communication': {
      title: 'संवाद र सहमति',
      shortName: 'संवाद',
      description: 'भावनात्मक सुरक्षा र आपसी समझदारी।'
    },
    'self-partner-knowledge': {
      title: 'शारीरिक ज्ञान र उत्तेजना',
      shortName: 'शरीर विज्ञान',
      description: 'शरीर रचना र स्पर्शका केन्द्रहरू।'
    },
    'foreplay-arousal': {
      title: 'फोरप्ले र स्पर्श कला',
      shortName: 'फोरप्ले',
      description: 'सुस्त स्पर्श र सम्पूर्ण शरीरको उत्तेजना।'
    },
    'oral-manual': {
      title: 'हात र मुखको स्पर्श कला',
      shortName: 'स्पर्श कला',
      description: 'लयबद्ध स्पर्श र कोमल दबाब।'
    },
    'penetration-positions': {
      title: 'आसन र कोण परिवर्तन',
      shortName: 'आसनहरू',
      description: 'आरामदायी आसन र चालको तालमेल।'
    },
    'toys-enhancement': {
      title: 'साधन, तेल र वातावरण',
      shortName: 'वातावरण',
      description: 'सुगन्धित तेल र रोमान्टिक वातावरण।'
    },
    'advanced-exploratory': {
      title: 'तान्त्रिक र गहिरो आत्मीयता',
      shortName: 'तान्त्रिक योग',
      description: 'श्वास समन्वय र दीर्घ आनन्द।'
    },
    'aftercare-health-longevity': {
      title: 'सत्रपछिको हेरचाह र स्वास्थ्य',
      shortName: 'हेरचाह',
      description: 'आलिंगन, आराम र मानसिक शान्ति।'
    }
  },
  kok: {
    'communication': {
      title: 'उलोवप आनी परस्पर मान्यताय',
      shortName: 'संवाद',
      description: 'भावनिक मोकळेपण आनी सुरक्षीत मर्यादा.'
    },
    'self-partner-knowledge': {
      title: 'कुडीची रचना आनी संवेदनशीलताय',
      shortName: 'कुडीचें ज्ञान',
      description: 'शरीरशास्त्र आनी स्पर्शाचे केंद्र.'
    },
    'foreplay-arousal': {
      title: 'फोरप्ले आनी स्पर्श कला',
      shortName: 'फोरप्ले',
      description: 'हळुवार स्पर्श आनी कुडीचें भान.'
    },
    'oral-manual': {
      title: 'हात आनी तोंडाची स्पर्श कला',
      shortName: 'स्पर्श कौशल्य',
      description: 'नाजूक लय आनी फावो तो दाब.'
    },
    'penetration-positions': {
      title: 'मुद्रा आनी कोन बदल',
      shortName: 'मुद्रा',
      description: 'सोयीस्कर स्थिती आनी हालचाल.'
    },
    'toys-enhancement': {
      title: 'साधनां, तेल आनी वातावरण',
      shortName: 'वातावरण',
      description: 'परमळीत तेल आनी शांत वातावरण.'
    },
    'advanced-exploratory': {
      title: 'तांत्रिक आनी खोल लागीकपण',
      shortName: 'तांत्रिक मार्ग',
      description: 'स्वासाचो मेळ आनी लांब काळ आनंद.'
    },
    'aftercare-health-longevity': {
      title: 'उपरांतची जतनाय आनी भलायकी',
      shortName: 'जतनाय',
      description: 'वेळ जातकच वेंग आनी विश्रांती.'
    }
  },
  sd: {
    'communication': {
      title: 'ڳالهه ٻولهه ۽ رضامندي',
      shortName: 'ڳالهه ٻولهه',
      description: 'جذباتي تحفظ ۽ باهمي احترام.'
    },
    'self-partner-knowledge': {
      title: 'جسماني علم ۽ احساس',
      shortName: 'جسماني ڄاڻ',
      description: 'جسماني بيهڪ ۽ حساس جڳهيون.'
    },
    'foreplay-arousal': {
      title: 'فورپلي ۽ ڇهاءُ جو فن',
      shortName: 'فورپلي',
      description: 'نرمي سان ڇهڻ ۽ جسم کي بيدار ڪرڻ.'
    },
    'oral-manual': {
      title: 'هٿ ۽ زبان جو فن',
      shortName: 'ڇهاءُ جو فن',
      description: 'مناسب دٻاءُ ۽ نازڪ طريقو.'
    },
    'penetration-positions': {
      title: 'آسن ۽ زاوين جي تبديلي',
      shortName: 'آسن',
      description: 'آرامده پوزيشن ۽ رفتار جي هم آهنگي.'
    },
    'toys-enhancement': {
      title: 'سامان، تيل ۽ ماحول',
      shortName: 'ماحول',
      description: 'خوشبودار تيل ۽ رومانٽڪ ماحول.'
    },
    'advanced-exploratory': {
      title: 'تانترڪ ۽ گھري ويجهڙائي',
      shortName: 'تانترڪ رستو',
      description: 'ساهه جو ملاپ ۽ ڊگهو سڪون.'
    },
    'aftercare-health-longevity': {
      title: 'بعد جي سنڀال ۽ صحت',
      shortName: 'سنڀال',
      description: 'ڀاڪਰ، آرام ۽ ذهني سڪون.'
    }
  },
  doi: {
    'communication': {
      title: 'गलबात ते रजामंदी',
      shortName: 'गलबात',
      description: 'भावनात्मक सुरक्खा ते आपसी आदर।'
    },
    'self-partner-knowledge': {
      title: 'शरीर ज्ञान ते संवेदनशीलता',
      shortName: 'शरीर ज्ञान',
      description: 'शरीर रचना ते छुअन दे केंद्र।'
    },
    'foreplay-arousal': {
      title: 'फोरप्ले ते छुअन दी कला',
      shortName: 'फोरप्ले',
      description: 'होली-होली छुअन ते सारे शरीर गी जगाना।'
    },
    'oral-manual': {
      title: 'हत्थ ते मुंह दी छुअन कला',
      shortName: 'छुअन कला',
      description: 'कोमल दबाव ते नाजुक छुअन।'
    },
    'penetration-positions': {
      title: 'आसन ते कोण बदलाव',
      shortName: 'आसन',
      description: 'आरामदेह स्थितियां ते चाल दी लय।'
    },
    'toys-enhancement': {
      title: 'साधन, तेल ते वातावरण',
      shortName: 'माहौल',
      description: 'खुशबूदार तेल ते रोमानी माहौल।'
    },
    'advanced-exploratory': {
      title: 'तांत्रिक ते गूंघी नजदीकी',
      shortName: 'तांत्रिक साधना',
      description: 'साह दा सुमेल ते लम्मा आनंद।'
    },
    'aftercare-health-longevity': {
      title: 'सत्र बाद देखभाल ते सेहत',
      shortName: 'देखभाल',
      description: 'गले लगाना, आराम ते मानसिक शांति।'
    }
  },
  sa: {
    'communication': {
      title: 'संभाषणं सम्मतिश्च',
      shortName: 'संभाषणम्',
      description: 'भावनात्मकसुरक्षा परस्परगौरवं च।'
    },
    'self-partner-knowledge': {
      title: 'शरीरज्ञानं कामोद्दीपकेन्द्राणि च',
      shortName: 'शरीरज्ञानम्',
      description: 'शारीररचना संवेदनशीलाङ्गानां च ज्ञानम्।'
    },
    'foreplay-arousal': {
      title: 'पूर्वकेलिः स्पर्शकला च',
      shortName: 'पूर्वकेलिः',
      description: 'कोमलस्पर्शः समग्रशरीरोत्तेजनं च।'
    },
    'oral-manual': {
      title: 'कर-मुखयोः स्पर्शमाधुर्यम्',
      shortName: 'स्पर्शमाधुर्यम्',
      description: 'लयबद्धस्पर्शः कोमलन्यस्तता च।'
    },
    'penetration-positions': {
      title: 'आसनानि कोणपरिवर्तनं च',
      shortName: 'आसनानि',
      description: 'सुखदानि आसनानि गतिनियन्त्रणं च।'
    },
    'toys-enhancement': {
      title: 'उपकरणानि, तैलाः सुरभितवातावरणं च',
      shortName: 'वातावरणम्',
      description: 'सुगन्धिततैलाः पवित्रवातावरणं च।'
    },
    'advanced-exploratory': {
      title: 'तान्त्रिकात्मीयता गहनसम्बन्धश्च',
      shortName: 'तान्त्रिकमार्गः',
      description: 'प्राणसमन्वयः दीर्घकालसुखं च।'
    },
    'aftercare-health-longevity': {
      title: 'उत्तरसत्रपरिचर्या स्वास्थ्यं च',
      shortName: 'परिचर्या',
      description: 'आलिङ्गनं, विश्रान्तिः मानसिकशान्तिश्च।'
    }
  },
  ur: {
    'communication': {
      title: 'گفتگو اور باہمی رضامندی',
      shortName: 'گفتگو',
      description: 'جذباتی تحفظ اور باہمی احترام۔'
    },
    'self-partner-knowledge': {
      title: 'جسمانی معلومات اور جنسی احساس',
      shortName: 'جسمانی علم',
      description: 'جسمانی ساخت اور حساس ترین مقامات۔'
    },
    'foreplay-arousal': {
      title: 'فور پلے اور لمس کا فن',
      shortName: 'فور پلے',
      description: 'ہلکا لمس اور جسمانی بیداری کا فن۔'
    },
    'oral-manual': {
      title: 'ہاتھ اور زبان کی چھونے کی مہارت',
      shortName: 'لمس کا فن',
      description: 'مناسب دباؤ اور نزاکت کے ساتھ لمس۔'
    },
    'penetration-positions': {
      title: 'آسن اور زاویے کی تبدیلی',
      shortName: 'آسن',
      description: 'آرام دہ پوزیشنز اور رفتار کا توازن۔'
    },
    'toys-enhancement': {
      title: 'سامان، تیل اور رومانوی ماحول',
      shortName: 'ماحول',
      description: 'خوشبودار تیل اور دلکش فضا۔'
    },
    'advanced-exploratory': {
      title: 'تانترک اور گہری قربت',
      shortName: 'تانترک طریقہ',
      description: 'سانس کی ہم آہنگی اور طویل سکون۔'
    },
    'aftercare-health-longevity': {
      title: 'سیشن کے بعد دیکھ بھال اور صحت',
      shortName: 'دیکھ بھال',
      description: 'آغوش میں لینا، آرام اور ذہنی تسکین۔'
    }
  }
};
