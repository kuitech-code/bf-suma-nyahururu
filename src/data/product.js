export const productCategories = [
  'All',
  'Cardiovascular Health',
  'Bone & Joint Health',
  'Immune Support',
  'NMN & Healthy Aging',
  'Digestive & Gut Health',
  'Personal Care',
  'Skincare',
  "Men's Health",
  'Healthy Beverages',
]

const productImageModules = import.meta.glob('../assets/Products/*', {
  eager: true,
  import: 'default',
  query: '?url',
})

const productImageFiles = {
  'micro-o2-cycle-tablets': 'MicroO2.png',
  'cere-brain-tablets': 'BF-Suma-CereBrain-Tablets.png',
  'detoxilive-capsules': 'detoxilive-capsules2.png',
  'prostat-relax-capsules': 'prostat-relax-capsules.png',
  'x-power-man-tablets': 'x-power-man-plus-capsule.png',
  'x-power-man-coffee': 'x-power-man-coffee.png',
  'ganoderma-spores': 'Pure___Broken_Ganoderma_Spores.png',
  'yunzhi-essence-capsules': 'Yunzhi_Essence_Capsules.png',
  'novel-depile-capsules': 'novel-depile-capsules.png',
  'probio3-plus-probiotics': 'Probio3_Plus_Probiotics.png',
  'arthroxtra-tablets': 'ArthroXtra_Tablets.png',
  'gluzo-joint-f-capsules': 'Gluzo-Joint_F_Capsules.png',
  'zaminocal-plus-capsules': 'ZaminoCal_Plus_Capsules.png',
  'four-in-one-reishi-coffee': '4-in-1_Reishi_Coffee.png',
  'four-in-one-ginseng-coffee': '4-in-1_Ginseng_Coffee.png',
  'four-in-one-cordyceps-coffee': '4-in-1_Cordyceps_Coffee.png',
  'ganoderma-spores-deluxe': 'Pure___Broken_Ganoderma_Spores__Deluxe.png',
  'quad-reishi': 'QUAD-REISHI.png',
  'nmn-capsule': 'NMN_Capsule.png',
  'nmn-duo-release': 'NMN_Duo_Release.png',
  'fem-inergy': 'FemInergy.png',
  'youth-ever': 'YouthEver.png',
  'nt-diarr-pills': 'NTDiarr_Pills.png',
  'ez-xlim': 'Ez-Xlim.png',
  'consti-relax': 'Consti-Relax.png',
  'veggie-veggie': 'Veggie_Veggie.png',
  femicare: 'FemiCare.png',
  'anatic-herbal-essence-soap': 'Anatic_Herbal_Essence_Soap.png',
  'dr-ts-toothpaste': 'Dr._Ts_Toothpaste.png',
  'cool-roll': 'Cool_Roll.png',
  'youth-refreshing-facial-cleanser': 'Youth_Refreshing_Facial_Cleanser.png',
  'youth-essence-toner': 'Youth_Essence_Toner.png',
  'youth-essence-lotion': 'Youth_Essence_Lotion-cream.png',
  'youth-essence-facial-cream': 'Youth_Essence_Facial_Cream.png',
  'youth-essence-facial-mask': 'Youth_Essence_Facial_Mask.png',
}

const productContent = {
  'pressure-free-tea': {
    ingredients: 'Luoboma Tea and Green Tea',
    description:
      'Powerful antioxidant drink helps lower blood pressure and cholesterol, strengthens the heart for optimal circulatory health and offers soothing relief from both anxiety and respiratory symptoms like coughs or asthma, while promoting better urinary tract function.',
    benefits: [
      'A potent antioxidant blend, it actively works to strengthen the heart and enhance overall circulatory system health by assisting in lowering both blood pressure and cholesterol levels. Beyond its primary cardiovascular benefits, the tea serves as a calming tonic that provides gentle relief from anxiety and daily stress. It also provides targeted respiratory support by relieving stubborn cough and asthma symptoms, while simultaneously promoting better urinary health to help keep your body balanced and functioning at its best.',
    ],
  },
  'micro-o2-cycle-tablets': {
    ingredients:
      'Radix Panax Notoginseng, Borneolum Syntheticum, Salviae Miltiorrhizae (Danshen)',
    description:
      'Advanced circulatory support formula helpful for removing blood stasis and improving flow through micro-vascular networks.',
    benefits: [
      'Helpful for removing blood stasis and improving the flow of blood through the small vascular network. It enhances oxygen and nutrients delivery while offering anti-oxidation, free radical clearance and cardiac muscular protection. In addition to assisting with cholesterol and triglyceride normalization, improves blood circulation and eyesight, lowers whole blood and plasma viscosity and decreases blood platelet aggregation. This strong anti-oxidant is good for hypertension management, helps prevent arteriosclerosis and aids in preventing senile dementia and Alzheimer’s. Ultimately, it is designed for stroke prevention, reversing stroke consequences, and preventing heart attacks alongside other cardiovascular issues.',
    ],
    caution:
      'Not suitable for pregnant or breastfeeding mothers. Do not combine with aspirin.',
  },
  'cere-brain-tablets': {
    ingredients: 'Ginkgo leaf extract',
    description:
      'Premium brain cell health supplement formulated for individuals with mentally demanding lifestyles and elderly preventive care.',
    benefits: [
      'Promotes oxygen and nutrient delivery directly to brain cells while enhancing blood circulation within brain blood vessels. This formulation helps reduce memory loss brought about by aging, improves brain cell metabolism and boosts the overall function of the nervous system. Beyond its primary cognitive benefits, it also works to relax the coronary artery to improve blood flow to the heart and relaxes the bronchus to relieve asthma symptoms.',
    ],
    caution: 'Consult a wellness professional if taking blood thinners.',
  },
  'detoxilive-capsules': {
    ingredients: 'Soybean lecithin',
    description:
      'Natural lecithin complex designed to optimize liver filtration, fat metabolism and lipid balances.',
    benefits: [
      'Improve liver function and combat fatty liver disease while helping to detoxify the entire system. This detoxification process works in tandem with promoting cardiovascular health, normal cholesterol and a healthy blood pressure range. Supports a better quality of sleep, ensures the proper synthesis of vitamins in the body and improves both overall blood flow and mental alertness.',
    ],
    caution:
      'Check the product label for allergen information, especially if you have a soy allergy.',
  },
  'gluco-blocker-tea': {
    ingredients: 'Gymnema sylvestre, Camellia sinensis (green tea)',
    description:
      'Holistic herbal infusion target-formulated to support healthy pancreatic functions and glycemic balances.',
    benefits: [
      'Suppresses sugar cravings and reduces the overall intake and absorption of glucose within the body. Additionally, it works to increase the secretion of insulin and provides robust anti-oxidant properties that protect your cells from damaging free radicals.',
    ],
    caution:
      'Monitor blood sugar levels during use, especially if taking glucose-lowering medication.',
  },
  'prostat-relax-capsules': {
    ingredients: 'Prostaep (flavone, polysaccharide)',
    description:
      'Highly targeted formulation recommended for men over 40 to protect prostate health and preserve urinary flow functions.',
    benefits: [
      'Support men’s reproductive and urinary wellness by maintaining the overall homeostatic balance of the uro-genital ecosystem. It targets the hormonal roots of prostate issues by actively blocking the conversion of testosterone to Dihydrotestosterone (DHT), which works to prevent prostate enlargement and address chronic inflammation. By managing this growth, the formula significantly improves quality of life by reducing uncomfortable urinary urgency, a weak stream, frequent night urination and post-void dribbling. Additionally, its systemic therapeutic properties help alleviate radiating pain or stiffness often felt in the lower back, hips and thighs, offering robust, everyday physical comfort.',
    ],
    caution:
      'Use as directed on the product label and consult a qualified health professional with questions.',
  },
  'x-power-man-tablets': {
    ingredients:
      'Fresh maca, Pro Staep, tannine, L-arginine, black ginger extract',
    description:
      'Vigor-enhancing botanical blend created to combat daily physical exhaustion and maintain masculine cellular health.',
    benefits: [
      'Vitality and Endurance Formula is uniquely designed to naturally optimize and stabilize male testosterone levels, significantly improving masculine vitality, endurance, and muscular strength. Beyond physical performance, it works on a systemic level to enhance the functional capacities of vital organs including the kidneys, lungs, heart, and liver. The formula provides essential neurological support to fight memory decline and strengthen the central nervous system, while its anti-hypotensive properties help safely regulate low blood pressure issues for total circulatory balance.',
    ],
  },
  'x-power-man-coffee': {
    ingredients:
      'Maca extracts, Tongkat Ali, Epimedium herb, American ginseng',
    description:
      'An invigorating 4-in-1 premium coffee blend supporting immediate energy release and blood circulation.',
    benefits: [
      'Formulated to comprehensively revitalize male reproductive health and physical stamina by naturally promoting testosterone secretion. By optimizing this essential hormone, it works directly to improve sexual performance, enhance libido, and restore confidence. Additionally, the blend provides vital fertility support by actively boosting sperm count and motility, while its energizing properties quickly relieve fatigue to restore everyday vitality and endurance.',
    ],
  },
  'ganoderma-spores': {
    ingredients: 'Broken Ganoderma',
    description:
      'Premium advanced immune formulation featuring shell-broken spores resulting in 90% higher bioavailability.',
    benefits: [
      '100% shell-broken, 90% easier to absorb.',
      'Boosts the immune system.',
      'Reduces side effects from chemotherapy/radiotherapy (vomiting, weakness).',
      'Raises appetite.',
      'Improves blood circulation in the coronary artery.',
      'Prevents atherosclerosis and heart problems.',
      'Improves skin conditions.',
      'Anti-inflammatory.',
    ],
  },
  'yunzhi-essence-capsules': {
    ingredients:
      'Yunzhi essence, Polysaccharide Peptide (PSP - Poly Saccharide Peptide Krestin)',
    description:
      'An immunomodulatory extract rich in protective Polysaccharide Peptides designed for deep systemic reinforcement.',
    benefits: [
      'Enhances immunity system.',
      'Improves energy and vitality.',
      'Enhances appetite and reduces illness.',
      'Increases white blood cell and lymphocyte count.',
      'Reduces chemotherapy side effects.',
      'Reduces pain during serious immune challenges.',
      'Supports normal cell growth via polysaccharides.',
      'Raises female libido and enhances orgasm.',
      'Helps dysmenorrhea (cleanses and avoids painful/difficult menstruation).',
    ],
  },
  'novel-depile-capsules': {
    ingredients: 'Citrus extract derivative',
    description:
      'Aids in treating hemorrhoid bleeding and swelling, naturally alkalizes the blood, and neutralizes aging free radicals. It simultaneously promotes weight loss, healthy skin collagen, liver and kidney protection.',
    benefits: [
      'Operating as a natural anti-inflammatory and potent antioxidant, this formula works on a systemic level to neutralize free radicals, delay aging, and alkalize the bloodstream. It offers targeted relief by effectively treating the bleeding and swelling associated with hemorrhoids, while also managing cellular pathways involved in allergic reactions. Beyond structural relief, it assists in weight management through deep detoxifying properties, stimulates collagen formation for rapid wound healing, and guards against liver and kidney diseases. Furthermore, it supports cognitive vitality by aiding brain protein synthesis to improve sleep, enhance memory, and provide nutritional support ideal for individuals managing anemia.',
    ],
  },
  'probio3-plus-probiotics': {
    ingredients: '20 billion viable probiotics, vitamins K, B6, and B12',
    description:
      'High-potency multi-strain gut balance ecosystem delivering 20 billion active flora markers—matching 80 cups of yogurt.',
    benefits: [
      'High-potency, broad-spectrum probiotic delivering 20 billion viable good bacteria per sachet to comprehensively restore digestive, vaginal and urinary health. Fortified with vitamins K, B6 and B12, this fast-acting powder boosts immune defense, reduces antibiotic dependency, and directly counters gastrointestinal inflammation. It also helps clear skin conditions like eczema and acne while supporting healthy cholesterol levels.',
    ],
  },
  'arthroxtra-tablets': {
    ingredients: 'Glucosamine, Chondroitin',
    description:
      'A joint support formula intended to support cartilage, mobility, and joint comfort.',
    benefits: [
      'Makes and repairs joint cartilage.',
      'Reduces pain symptoms of osteoarthritis and further deterioration.',
      'Improves the ability of joint movement.',
      'Keeps joints lubricated and normalizes joint metabolism.',
      'Promotes strong and elastic protective tissue.',
      'Promotes production of synovial fluid and reduces joint friction.',
      'Alleviates swelling, stiffness, and numbness.',
      'Prevents osteoarthritis and age-related arthritis (ages 50–85, and above 90).',
      'Relieves low back pain and joint pain.',
      'Good for shoulder issues in middle-aged people.',
      'Mucopolysaccharide mineral composition is rapidly absorbed and activated by body cells.',
    ],
  },
  'gluzo-joint-f-capsules': {
    ingredients: 'Glucosamine',
    description:
      'A glucosamine supplement intended to support cartilage, joint lubrication, and everyday movement.',
    benefits: [
      'Reduces pain symptoms of osteoarthritis.',
      'Supports the natural ability to regenerate cartilage.',
      'Helps rebuild cartilage and lubricate joints.',
      'Alleviates joint discomfort.',
      'Helps maintain healthy articular cartilage.',
      'Nourishes joints in athletes and active people.',
    ],
  },
  'zaminocal-plus-capsules': {
    ingredients: 'Calcium Amino Acid Chelate, Zinc Amino Acid Chelate, Vitamin D',
    description:
      'A calcium, zinc, and vitamin D supplement intended to support bone and teeth health, tissue repair, and immune function.',
    benefits: [
      'Enhances absorption of calcium and zinc to over 90%.',
      'Maintains healthy bones and teeth.',
      'Prevents and improves osteoporosis.',
      'Suitable for minors, teens, lactating women, and the elderly.',
      'Good for prostate health.',
      'Nourishes joints in athletes and active people; helps dysmenorrhea.',
      'Promotes tissue repair and growth.',
      'Slows down the aging process of bone structure.',
      'Improves the immune system.',
      'Rich in natural collagens which nourish the skin.',
      'Prevents and treats rheumatoid arthritis.',
      'Heals and strengthens muscular, cartilage, and nerve tissues.',
      'Helps pregnant mothers deliver quickly and supports post-delivery recovery.',
    ],
  },
  'four-in-one-reishi-coffee': {
    ingredients:
      'Reishi extract, Mushroom & Ganoderma Extract, Triterpenoids, Adenosine, Raw sugarcane, Coffee powder',
    description:
      'A reishi coffee blend intended to support energy, sleep quality, digestion, circulation, and immune health.',
    benefits: [
      'Promotes self-healing.',
      'Refreshes the brain and energizes the body.',
      'Promotes sleep quality.',
      'Prevents allergy caused by histamine (blocks lanostan).',
      'Prevents virus infection; good for HIV and influenza.',
      'Strengthens the digestive system.',
      'Good for kidney problems.',
      'Prevents formation of blood clots.',
      'Strengthens the heart muscles.',
      'Good for skin conditions such as psoriasis and acne.',
      'Stimulates bone marrow to produce new blood cells.',
      'Improves sinusitis and hormonal imbalance.',
    ],
  },
  'four-in-one-ginseng-coffee': {
    ingredients:
      'Panax Quinquefolius and Ginseng Herb Extract, Vitamins B1/B2/B12/C, Iron, Folic Acid & Minerals',
    description:
      'A ginseng coffee blend intended to support energy, mental alertness, stamina, and vitality.',
    benefits: [
      'Boosts brain nerve cells and helps prevent dementia.',
      'Enhances energy levels and mental alertness.',
      'Rejuvenates and increases stamina/libido.',
      'Regulates blood pressure.',
      'Reduces cramps (dysmenorrhea).',
      'Reduces diabetes potential.',
    ],
  },
  'four-in-one-cordyceps-coffee': {
    ingredients:
      'Cordycepin, Polysaccharides, Amino acids, Vitamins, Trace elements, Raw sugarcane, Coffee powder',
    description:
      'A cordyceps coffee blend intended to support energy, circulation, and immune function.',
    benefits: [
      'Boosts immune system against viral infection.',
      'Stimulates blood circulation.',
      'Reduces fatigue and work-related stress.',
      'Reduces inflammation.',
      'Increases acidity levels for ulcer patients.',
      'Increases energy and mental alertness.',
      'Has anti-allergic properties.',
      'Improves congestion and lung inflammation.',
      'Boosts CD counts.',
      'Strengthens body immunity and combats cancer cell proliferation.',
      'Reduces swelling associated with rheumatoid arthritis.',
      'Natural antibiotic recommended for ARDS.',
    ],
  },
  'ganoderma-spores-deluxe': {
    ingredients:
      '3x concentration Ganoderma triterpenes and polysaccharides; Ganoderma oil equivalent to 3g Ganoderma lucidum spore powder',
    description:
      'A concentrated Ganoderma formula with triterpenes and polysaccharides, intended to support immune health.',
    benefits: [
      'Highest concentration of Ganoderma triterpenes and polysaccharides for optimal therapeutic effect.',
      'Gentle extraction technology removes impurities, leaving pure bioactive material.',
      'Longest-lasting effects for immune health.',
    ],
  },
  'quad-reishi': {
    ingredients: 'Ganoderma, Yunzhi, Antrodia, Chaga',
    description:
      'A four-mushroom blend intended to support immune function and healthy blood sugar balance.',
    benefits: [
      'Stimulates the body’s immune system against bacteria and viruses.',
      'Supports lung cancer prevention (one of the leading causes of cancer deaths).',
      'Supports prevention of cancer cell growth; targets cancer cells found in the liver.',
      'Helps lower blood sugar levels and insulin resistance in people with diabetes.',
    ],
  },
  'nmn-capsule': {
    ingredients: 'NMN (Nicotinamide Mononucleotide)',
    description:
      'An NMN supplement intended to support NAD+ levels, energy metabolism, and healthy aging.',
    benefits: [
      'Basic Version positioning in a Vegetarian capsule dosage form.',
      'Delivers essential gene repair by increasing vital NAD+ levels.',
      'Assists in recovery from addiction by reducing/eliminating cravings and withdrawal symptoms.',
      'Promotes DNA repair, toxin elimination, and brightens complexion by reducing sagging and wrinkles.',
      'Helps reduce arterial stiffness and lowers systolic blood pressure in adults at risk of hypertension.',
      'Relevant for arthritis by mitigating joint swelling and tenderness that worsens with age.',
      'Enhances insulin sensitivity by supporting the repair of insulin-secreting pancreatic beta cells.',
      'Promotes better joint function and supports metabolic optimization for weight management.',
    ],
  },
  'nmn-duo-release': {
    ingredients: 'NMN (Nicotinamide Mononucleotide)',
    description:
      'A double-layer NMN tablet intended to support energy, physical endurance, and healthy metabolism.',
    benefits: [
      'Advanced Version positioning in a specialized Double-Layer Tablet dosage form.',
      'Engineered for rapid gene repair action within 24 hours.',
      'Designed to keep you highly energetic when at work or performing daily tasks.',
      'Promotes improved blood flow to the muscles and increased energy supply for physical endurance.',
      'Supports weight management by promoting the breakdown of food into energy and increasing basal metabolic rate.',
      'Offers long-lasting metabolic optimization and healthy aging benefits through elevated NAD+ activation.',
    ],
  },
  'nmn-coffee': {
    ingredients: 'NMN (Nicotinamide Mononucleotide), Coffee powder blend',
    description:
      'A gourmet coffee and NMN blend intended to support daily energy, stamina, heart health, and mental focus.',
    benefits: [
      'A unique blend of gourmet coffee that tastes great while delivering anti-aging support.',
      'Actively supports longevity pathways and boosts the body’s immune system.',
      'Promotes daily energy production, physical stamina, and workout endurance.',
      'Promotes metabolic optimization and actively supports long-term heart health.',
      'Supports cognitive function and sharpens daily mental focus.',
    ],
  },
  'nmn-sharp-mind': {
    ingredients: 'NMN, Resveratrol, Ginkgo Leaf Extracts',
    description:
      'An NMN, resveratrol, and ginkgo formula intended to support brain metabolism, focus, and healthy aging.',
    benefits: [
      'Serves as a direct and potent NAD+ supplement to help break down food and sugars into energy.',
      'Activates longevity genes (SIRTUIN activator) and repairs broken DNA strands.',
      'Promotes youthful gene expression and maintains already-healthy glucose levels.',
      'Supports a healthy inflammatory response, inhibits oxidation, and promotes cardiovascular function.',
      'Improves brain cell metabolism and enhances blood flow and nutrient delivery to the brain.',
      'Useful in counter-acting age-related memory loss for people with mentally demanding lifestyles.',
    ],
  },
  'fem-inergy': {
    ingredients: 'Grape Seed Extract, containing 95% OPC',
    description:
      'A grape seed extract supplement intended to provide antioxidant support for vitality, skin, and overall wellness.',
    benefits: [
      'Recommended for hormonal imbalance.',
      'Relieves fatigue, allergies, and menopausal symptoms.',
      'Delays aging and maintains a youthful look.',
      'Reclaims wrinkles, skin laxity, and melasma.',
      'Good for people with cardiovascular and cerebrovascular disease.',
      'Supportive for people who have had radiotherapy or chemotherapy.',
      'Good for cancer, diabetes, and cardiovascular support.',
      'Beneficial for Alzheimer’s patients.',
      'Prevents cataracts; has anti-inflammatory effects.',
      'Prevents dental cavities and gingivitis.',
      'Improves memory and alertness.',
      'Natural antioxidant.',
    ],
  },
  'youth-ever': {
    ingredients: 'NMN, Resveratrol, Fruit Essences',
    description:
      'An NMN, resveratrol, and fruit essence blend intended to support a youthful appearance and antioxidant activity.',
    benefits: [
      'Delays aging and maintains a youthful look.',
      'Anti-cancer.',
      'Repairs DNA.',
      'Improves body free radical levels; anti-oxidative for brain, skin, and internal organs.',
    ],
  },
  'nt-diarr-pills': {
    ingredients: 'Cortex Phellodendric, Creosote, Glycyrrhiza',
    description:
      'A digestive formula intended to support gastrointestinal function and ease stomach discomfort and diarrhea.',
    benefits: [
      'Anti-bacterial effect in the digestive system.',
      'Relieves stomach pain.',
      'Effectively controls acute diarrhea.',
      'Reduces gastrointestinal dysfunction.',
      'Inhibits intestinal pathogens such as shigella bacteria and shigella dysenteriae.',
      'Inhibits intestinal hyperactivity to control diarrhea.',
      'Regulates gastrointestinal function; reduces abdominal pain, appetite loss, and nausea.',
      'Good for peptic duodenal and gastric ulcers.',
      'Good for food poisoning and indigestion.',
    ],
  },
  'ez-xlim': {
    ingredients:
      'Gymnema, Kidney Bean, Chitosan and Citrus Aurantium Tablet, Natural Essence Dietary Supplement',
    description:
      'A botanical supplement intended to support blood sugar balance, reduce sugar absorption, and support weight management.',
    benefits: [
      'Good for diabetes.',
      'Eliminates excess blood sugar (lowers blood sugar level).',
      'Cleanses blood via synthesis of fatty acids and cholesterol.',
      'Modulates pancreas efficiency.',
      'Reduces sugar absorption.',
      'Accelerates fat burning.',
      'Blocks starch decomposition and reduces starch-to-fat synthesis.',
      'Slows sugar absorption to prevent blood sugar spikes.',
      'Slows fat storage decomposition and aids weight management.',
      'Prevents fat storage.',
    ],
  },
  'consti-relax': {
    ingredients: 'FOS (Fructo-oligosaccharide), Radix Astragali, Prebiotic',
    description:
      'A prebiotic blend intended to support digestion, regularity, and gut comfort.',
    benefits: [
      'Regulates microcirculation, edema, lymphatic function, and capillary filtration.',
      'Promotes proper digestion.',
      'Alleviates acute hemorrhoid symptoms (swelling, bleeding).',
      'Complements leukotrienes and prostaglandins involved in allergic reaction.',
      'Improves lymph circulation; speeds up return of tissue fluid and reduces swelling.',
      'Reduces pain symptoms of hemorrhoids and varicose veins caused by constipation.',
      'Contains probiotics that aid gut regulation.',
      'Naturally eases constipation.',
    ],
  },
  'veggie-veggie': {
    ingredients: 'Bioenzymes from vegetables & fruits',
    description:
      'A fruit and vegetable enzyme blend intended to support digestion, metabolism, and the body’s natural detoxification processes.',
    benefits: [
      'All-natural detox.',
      'Effectively assists digestive function and eliminates toxins from the GI tract.',
      'Facilitates intestinal motility and lowers cholesterol levels.',
      'Boosts metabolism for weight management.',
      'Eliminates accumulated waste and toxins, lowering inflammation and GI risk.',
    ],
  },
  'youth-refreshing-facial-cleanser': {
    ingredients: 'Purifying · Balancing · Refreshing',
    description:
      'A gentle, moisturizing cleanser that removes dirt and leaves skin feeling clean, soft, and fresh.',
    benefits: [
      'Restores firmness in 10 seconds.',
      'Gentle, moisturizing formula creates a rich creamy foam.',
      'Gently removes dirt while maintaining skin’s healthy balance.',
      'Leaves skin clean, soft, and fresh.',
    ],
  },
  'youth-essence-toner': {
    ingredients: 'Firming · Moisturizing · Softening',
    description:
      'A moisturizing toner that nourishes the skin and helps it look firmer, smoother, and more vibrant.',
    benefits: [
      'Restores firmness in 10 seconds.',
      'Moisturizes and nourishes the skin surface.',
      'Penetrates deep to tighten pores.',
      'Skin appears firmer, smoother, and more vibrant.',
    ],
  },
  'youth-essence-lotion': {
    ingredients: 'Rejuvenating · Brightening · Softening',
    description:
      'A nourishing lotion that moisturizes the skin and helps it look firmer, smoother, and more vibrant.',
    benefits: [
      'Restores firmness in 10 seconds.',
      'Moisturizes, nourishes, and penetrates deep to tighten pores.',
      'Skin appears firmer, smoother, and more vibrant.',
    ],
  },
  'youth-essence-facial-cream': {
    ingredients: 'Smoothing · Activating · Brightening',
    description:
      'A facial cream intended to support collagen, soften the look of wrinkles, and reduce the appearance of dark spots.',
    benefits: [
      'Restores firmness in 10 seconds.',
      'Uses mitochondrial repair and liposome penetration technology.',
      'Boosts natural collagen, diminishes dark spots, and softens wrinkles.',
      'Skin appears healthier and more vibrant.',
    ],
  },
  'youth-essence-facial-mask': {
    ingredients: 'Firming · Revitalizing · Brightening',
    description:
      'A facial mask intended to support collagen, soften the look of wrinkles, and reduce the appearance of dark spots.',
    benefits: [
      'Restores firmness in 10 seconds.',
      'Uses mitochondrial repair and liposome penetration technology.',
      'Boosts natural collagen, diminishes dark spots, and softens wrinkles.',
      'Skin appears healthier and more vibrant.',
    ],
  },
  femicare: {
    ingredients:
      'Sanitarium, Green tea, Grape seed extract - procyanidolic oligomers (OPC), Natural olive oil, Honey',
    description:
      'A feminine cleanser intended to support cleanliness, freshness, and comfort.',
    benefits: [
      'Keeps the vaginal area clean and comfortable.',
      'Reinforces the vagina’s resistance to infection from UTIs.',
      'Eliminates abnormal vaginal discharge, unpleasant odor, and itchiness.',
      '100% natural - main ingredient from USA Great Salt Lake. Effective to remove bacteria and vaginal yeast within 7 days.',
      'Is an astringent which tightens the vagina.',
      'Promotes natural lubrication.',
      'Improves vaginal contractions.',
    ],
  },
  'anatic-herbal-essence-soap': {
    ingredients:
      'Sanitarium, Green tea, Grape seed extract - procyanidolic oligomers (OPC), Natural olive oil, Honey',
    description:
      'A cleansing soap intended to nourish and moisturize skin while removing dirt and dead skin cells.',
    benefits: [
      'Nourishes and moisturizes the skin.',
      'Removes acne and black spots.',
      'Relieves itching of the skin.',
      'Removes dead cells in the skin.',
      'Cleanses the skin.',
      'Renews the skin.',
    ],
  },
  'dr-ts-toothpaste': {
    ingredients: 'Dr. Ts toothpaste',
    description:
      'A toothpaste intended to support gum health, freshen breath, and strengthen and whiten teeth.',
    benefits: [
      'Protects and heals gums from wounds and infection (anti-bacterial).',
      'Soothes nerves and nourishes the gums.',
      'Prevents tooth decay and heals mouth ulcers.',
      'Eliminates bad breath.',
      'Strengthens and whitens teeth.',
    ],
  },
  'cool-roll': {
    ingredients:
      'Blend of traditional Chinese medicine, essential oils, camphor, and menthol',
    description:
      'A portable medicated oil intended to ease headaches, dizziness, travel sickness, bites, and everyday aches.',
    benefits: [
      'Relieves dizziness and headache.',
      'Helps with mosquito bites.',
      'Eases carsickness.',
      'Relieves pain.',
      'Relieves colds, fevers, infections, and the flu.',
      'Unique ball design fits the skin better when in use and is easy to carry.',
    ],
  },
}

const productList = [
  { 
    id: 'micro-o2-cycle-tablets', 
    name: 'Micro-O2 Cycle Tablets', 
    category: 'Cardiovascular Health', 
    packaging: '100 Tablets / Bottle' 
  },
  { 
    id: 'cere-brain-tablets', 
    name: 'Cere-Brain Tablets', 
    category: 'Cardiovascular Health', 
    packaging: '60 Tablets / Bottle' 
  },
  { 
    id: 'detoxilive-capsules', 
    name: 'Detoxilive Capsules', 
    category: 'Cardiovascular Health', 
    packaging: '60 Capsules / Bottle' 
  },
  { 
    id: 'gluco-blocker-tea', 
    name: 'Gluco-Blocker Tea', 
    category: 'Healthy Beverages', 
    packaging: '20 Tea Bags / Box' 
  },
  { 
    id: 'prostat-relax-capsules', 
    name: 'ProstatRelax Capsules', 
    category: "Men's Health", 
    packaging: '60 Capsules / Bottle' 
  },
  { 
    id: 'x-power-man-tablets', 
    name: 'X-Power Man Tablets', 
    category: "Men's Health", 
    packaging: '30 Tablets / Bottle' 
  },
  { 
    id: 'x-power-man-coffee', 
    name: 'X-Power Man Coffee', 
    category: 'Healthy Beverages', 
    packaging: '8 Sachets / Box' 
  },
  { 
    id: 'ganoderma-spores', 
    name: 'Pure & Broken Ganoderma Spores', 
    category: 'Immune Support', 
    packaging: '30 Capsules / Bottle' 
  },
  { 
    id: 'yunzhi-essence-capsules', 
    name: 'Yunzhi Essence Capsules', 
    category: 'Immune Support', 
    packaging: '60 Capsules / Bottle' 
  },
  { 
    id: 'novel-depile-capsules', 
    name: 'Novel-Depile Capsules', 
    category: 'Digestive & Gut Health', 
    packaging: '60 Capsules / Bottle' 
  },
  { 
    id: 'probio3-plus-probiotics', 
    name: 'Probio3 Plus Probiotics', 
    category: 'Digestive & Gut Health', 
    packaging: '15 Sachets / Box' 
  },
  { 
    id: 'pressure-free-tea', 
    name: 'Pressure Free Tea', 
    category: 'Healthy Beverages' 
  },
  { 
    id: 'arthroxtra-tablets', 
    name: 'ArthroXtra Tablets', 
    category: 'Bone & Joint Health', 
    packaging: "60 Tablets / Bottle" 
  },
  { 
    id: 'gluzo-joint-f-capsules', 
    name: 'Gluzo-Joint F Capsules', 
    category: 'Bone & Joint Health', 
    packaging: "60 Capsules / Bottle" 
  },
  { 
    id: 'zaminocal-plus-capsules', 
    name: 'ZaminoCal Plus Capsules', 
    category: 'Bone & Joint Health', 
    packaging: "60 Capsules / Bottle" 
  },
  { 
    id: 'four-in-one-reishi-coffee', 
    name: '4-in-1 Reishi Coffee', 
    category: 'Healthy Beverages', 
    packaging: '20 Sachets' 
  },
  { 
    id: 'four-in-one-ginseng-coffee', 
    name: '4-in-1 Ginseng Coffee', 
    category: 'Healthy Beverages', 
    packaging: '20 Sachets' 
  },
  { 
    id: 'four-in-one-cordyceps-coffee', 
    name: '4-in-1 Cordyceps Coffee', 
    category: 'Healthy Beverages', 
    packaging: '20 Sachets' 
  },
  { 
    id: 'ganoderma-spores-deluxe', 
    name: 'Pure & Broken Ganoderma Spores (Deluxe)', 
    category: 'Immune Support' 
  },
  { 
    id: 'quad-reishi', 
    name: 'QUAD-REISHI', 
    category: 'Immune Support' 
  },
  { 
    id: 'nmn-capsule', 
    name: 'NMN Capsule', 
    category: 'NMN & Healthy Aging' 
  },
  { 
    id: 'nmn-duo-release', 
    name: 'NMN Duo Release', 
    category: 'NMN & Healthy Aging' 
  },
  { 
    id: 'nmn-coffee', 
    name: 'NMN Coffee', 
    category: 'Healthy Beverages' 
  },
  { 
    id: 'nmn-sharp-mind', 
    name: 'NMN Sharp Mind', 
    category: 'NMN & Healthy Aging' 
  },
  { 
    id: 'fem-inergy', 
    name: 'FemInergy', 
    category: 'NMN & Healthy Aging', 
    packaging: '60 Capsules' 
  },
  { 
    id: 'youth-ever', 
    name: 'YouthEver', 
    category: 'NMN & Healthy Aging' 
  },
  { 
    id: 'nt-diarr-pills', 
    name: 'NTDiarr Pills', 
    category: 'Digestive & Gut Health', 
    packaging: '50 Capsules' 
  },
  { 
    id: 'ez-xlim', 
    name: 'Ez-Xlim', 
    category: 'Digestive & Gut Health', 
    packaging: '90 / Bottle' 
  },
  { 
    id: 'consti-relax', 
    name: 'Consti-Relax', 
    category: 'Digestive & Gut Health', 
    packaging: '30 Sachets' 
  },
  { 
    id: 'veggie-veggie', 
    name: 'Veggie Veggie', 
    category: 'Digestive & Gut Health' 
  },
  { 
    id: 'femicare', 
    name: 'FemiCare', 
    category: 'Personal Care' 
  },
  { 
    id: 'anatic-herbal-essence-soap', 
    name: 'Anatic Herbal Essence Soap', 
    category: 'Personal Care' 
  },
  { 
    id: 'dr-ts-toothpaste', 
    name: "Dr. Ts Toothpaste", 
    category: 'Personal Care' 
  },
  { 
    id: 'cool-roll', 
    name: 'Cool Roll', 
    category: 'Personal Care' 
  },
  { 
    id: 'youth-refreshing-facial-cleanser', 
    name: 'Youth Refreshing Facial Cleanser', 
    category: 'Skincare' 
  },
  { 
    id: 'youth-essence-toner', 
    name: 'Youth Essence Toner', 
    category: 'Skincare' 
  },
  { 
    id: 'youth-essence-lotion', 
    name: 'Youth Essence Lotion', 
    category: 'Skincare' 
  },
  { 
    id: 'youth-essence-facial-cream', 
    name: 'Youth Essence Facial Cream', 
    category: 'Skincare' 
  },
  { 
    id: 'youth-essence-facial-mask', 
    name: 'Youth Essence Facial Mask', 
    category: 'Skincare' 
  },
]

export const products = productList.map((product) => {
  const imageFile = productImageFiles[product.id]

  return {
    ...product,
    ...productContent[product.id],
    image: imageFile
      ? productImageModules[`../assets/Products/${imageFile}`]
      : undefined,
  }
})
