const healthTopicImageModules = import.meta.glob('../assets/bg-healthtopics/*.jpg', {
  eager: true,
  import: 'default',
  query: '?url',
})

const healthTopicImages = {
  cardiovascular: 'Cardiovascular Health.jpg',
  boneJoint: 'Bone & Joint Health.jpg',
  healthyBeverages: 'Healthy Beverages.jpg',
  immune: 'Immune Support.jpg',
  healthyAging: 'NMN & Healthy Aging.jpg',
  digestive: 'Digestive & Gut Health.jpg',
  personalCare: 'Personal Care.jpg',
  skincare: 'Skincare.jpg',
  mensHealth: "Men's Health.jpg",
}

export const healthTopics = [
  {
    id: 'cardiovascular-health',
    title: 'Cardiovascular Health',
    tagline: 'Optimize Circulation & Vitality',
    shortDescription: 'Support a healthy cardiovascular system and circulation with specialized formulations featuring natural botanicals and targeted compounds.',
    description: 'Maintain a steady, vibrant rhythm with specialized formulations engineered to support robust cardiovascular function. Utilizing premium, natural botanicals like desert-sourced Luobuma tea leaves and advanced vascular-targeting compounds, products like PressureFree Tea and Micro2 Cycle Tablets help maintain optimal blood pressure, clear arterial circulation, and total micro-circulation vitality.',
    image: healthTopicImageModules[
      `../assets/bg-healthtopics/${healthTopicImages.cardiovascular}`
    ],
    productIds: [
      'micro-o2-cycle-tablets',
      'cere-brain-tablets',
      'detoxilive-capsules',
      'gluco-blocker-tea',
      'pressure-free-tea',
    ],
  },
    {
    id: 'bone-joint-health',
    title: 'Bone & Joint Health',
    tagline: 'Strengthen Structure & Mobility',
    shortDescription: 'Support bone strength, joint comfort, and everyday mobility with foundational supplements made with calcium, vitamin D3, and cartilage-supporting ingredients.',
    description: 'Reclaim your freedom of movement and cushion active joints against everyday wear. Formulated with highly absorbable organic calcium matrices, amino acid chelates, vitamin D3, and premium cartilage-nourishing glucosamine, foundational supplements like ZaminoCal Plus and ArthroXtra work synergistically to promote bone density, relieve joint discomfort, and accelerate tissue repair.',
    image: healthTopicImageModules[
      `../assets/bg-healthtopics/${healthTopicImages.boneJoint}`
    ],
    productIds: [
      'arthroxtra-tablets',
      'gluzo-joint-f-capsules',
      'zaminocal-plus-capsules',
    ],
  },
  {
    id: 'immune-support',
    title: 'Immune Support',
    tagline: 'Reinforce Your Body’s Natural Shields',
    shortDescription: 'Explore mushroom-based products featuring Ganoderma spores and Yunzhi, traditionally used to support immune health and overall wellness.',
    description: 'Build a resilient foundation against environmental stressors and seasonal threats. Rooted in traditional cellular wisdom and modern extraction technologies, this category harnesses the profound defense-boosting properties of pure, cell-wall-broken Ganoderma Spores (Reishi) and refined Yunzhi medical mushrooms to naturally modulate immune responses and promote systemic wellness.',
    image: healthTopicImageModules[
      `../assets/bg-healthtopics/${healthTopicImages.immune}`
    ],
    productIds: [
      'four-in-one-reishi-coffee',
      'four-in-one-ginseng-coffee',
      'four-in-one-cordyceps-coffee',
      'ganoderma-spores',
      'ganoderma-spores-deluxe',
      'yunzhi-essence-capsules',
      'quad-reishi',
    ],
  },
  {
    id: 'healthy-beverages',
    title: 'Healthy Beverages',
    tagline: 'Daily Wellness in Every Sip',
    shortDescription: 'Discover functional coffees and herbal teas with ingredients such as Cordyceps and ginseng for a flavorful daily wellness ritual.',
    description: 'Transform your beverage breaks into a powerful wellness habit. Blending high-grade gourmet coffee and premium tea bases with legendary adaptogens like Cordyceps sinensis and immune-modulating ginseng, our functional drinks—including 4-in-1 Cordyceps Coffee and therapeutic herbal infusions—provide sharp mental clarity and steady metabolic energy without jitters or caffeine crashes.',
    image: healthTopicImageModules[
      `../assets/bg-healthtopics/${healthTopicImages.healthyBeverages}`
    ],
    productIds: [
      'four-in-one-reishi-coffee',
      'four-in-one-ginseng-coffee',
      'four-in-one-cordyceps-coffee',
      'x-power-man-coffee',
      'nmn-coffee',
      'gluco-blocker-tea',
      'pressure-free-tea',
    ],
  },
    {
    id: 'healthy-aging',
    title: 'Anti Aging',
    tagline: 'Cellular Longevity From Within',
    shortDescription: 'Learn about NMN products and dual-release formulations designed to support cellular energy and healthy aging.',
    description: 'Turn back the clock at a cellular level and reignite your body’s youth metabolism. Powered by cutting-edge, high-purity Nicotinamide Mononucleotide (NMN) and advanced liposomal dual-release technologies, our NMN Duo Release line acts as a powerful precursor to NAD+. It optimizes mitochondrial energy, protects natural gene expression, enhances insulin sensitivity, and counteracts age-linked physical decline.',
    image: healthTopicImageModules[
      `../assets/bg-healthtopics/${healthTopicImages.healthyAging}`
    ],
    productIds: [
      'nmn-capsule',
      'nmn-duo-release',
      'nmn-coffee',
      'nmn-sharp-mind',
      'fem-inergy',
      'youth-ever',
    ],
  },
  {
    id: 'digestive-gut-health',
    title: 'Digestive & Gut Health',
    tagline: 'Balance Your Inner Ecosystem',
    shortDescription: 'Explore products formulated to support digestion, gut flora balance, and everyday digestive comfort.',
    description: 'Restore internal harmony, improve nutrient bio-availability, and calm your gastrointestinal tract. Featuring multi-strain pro-matrix formulations like Probio3 and specialized dietary soothing supplements like Novel Depile, this range actively replenishes your gut microbiome to optimize digestion, ease irregularity, and defend against internal toxic build-up.',
    image: healthTopicImageModules[
      `../assets/bg-healthtopics/${healthTopicImages.digestive}`
    ],
    productIds: [
      'nt-diarr-pills',
      'ez-xlim',
      'consti-relax',
      'veggie-veggie',
      'novel-defile-capsules',
      'probio3-plus-probiotics',
    ],
  },
    {
    id: 'personal-care',
    title: 'Personal Care',
    tagline: 'Everyday Therapeutic Essentials',
    shortDescription: 'Find everyday cleansing and oral-care essentials featuring ingredients such as green tea, honey, and mineral salts.',
    description: 'Elevate your daily grooming into a deeply protective and cleansing ritual. Infused with antimicrobial, highly purified natural extracts like organic green tea, premium honey, and therapeutic Great Salt Lake minerals, essentials such as Anatic Herbal Essence Soap and Dr. Ts Toothpaste heal surface tissue, eliminate harmful bacterial film, and refresh skin and gums safely.',
    image: healthTopicImageModules[
      `../assets/bg-healthtopics/${healthTopicImages.personalCare}`
    ],
    productIds: [
      'femicare',
      'anatic-herbal-essence-soap',
      'dr-ts-toothpaste',
      'cool-roll',
    ],
  },
  {
    id: 'skincare',
    title: 'Skincare',
    tagline: 'High-Performance Rejuvenation',
    shortDescription: 'Explore the Youth Essence skincare collection, created to support smooth, radiant-looking skin and a more even appearance.',
    description: 'Reveal smooth, radiant, and intensely firmed skin utilizing professional-grade clinical treatments. Centered around the advanced SUMA Grand Youth Essence collection, our skincare line incorporates cutting-edge mitochondrial repair networks and deep-penetrating liposome spheres to actively stimulate natural collagen production, lighten hyperpigmentation, and minimize dark spots and fine lines within seconds.',
    image: healthTopicImageModules[
      `../assets/bg-healthtopics/${healthTopicImages.skincare}`
    ],
    productIds: [
      'youth-refreshing-facial-cleanser',
      'youth-essence-toner',
      'youth-essence-lotion',
      'youth-essence-facial-cream',
      'youth-essence-facial-mask',
    ],
  },
  {
    id: 'mens-health',
    title: "Men's Health",
    tagline: 'Ignite Power & Peak Performance',
    shortDescription: 'Discover products with adaptogenic ingredients such as maca and ginseng to support energy, stamina, and men’s wellness.',
    description: 'Maximize raw stamina, combat physical exhaustion, and support hormonal vitality. Crafted around premium adaptogenic tonics like wild Epimedium, maca, and ginseng, performance-focused essentials like XPower Man Plus Capsules and XPower Coffee work deep within the male endocrine system to relieve fatigue, enhance fertility, support prostate wellness, and deliver clean, lasting energy.',
    image: healthTopicImageModules[
      `../assets/bg-healthtopics/${healthTopicImages.mensHealth}`
    ],
    productIds: [
      'prostat-relax-capsules',
      'x-power-man-tablets',
      'x-power-man-coffee',
    ],
  },
]
