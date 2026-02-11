interface ManualCategoryType {
  icon: string;
  color: string;
  rating: string;
  description: string;
}

export const CATEGORY_MAPPINGS: Record<string, ManualCategoryType> = {
  'General Knowledge': {
    icon: '🌍',
    color: 'from-blue-500 to-cyan-500',
    rating: '4.8',
    description: 'Test your basic knowledge about the world',
  },
  'Entertainment: Books': {
    icon: '📚',
    color: 'from-amber-500 to-orange-500',
    rating: '4.5',
    description: 'Classic and contemporary literature trivia',
  },
  'Entertainment: Film': {
    icon: '🎬',
    color: 'from-purple-500 to-pink-500',
    rating: '4.6',
    description: 'Hollywood movies and film history',
  },
  'Entertainment: Music': {
    icon: '🎵',
    color: 'from-green-500 to-emerald-500',
    rating: '4.7',
    description: 'Genres, artists, and music history',
  },
  'Entertainment: Musicals & Theatres': {
    icon: '💃',
    color: 'from-red-500 to-rose-500',
    rating: '4.3',
    description: 'Musicals, plays, and stage productions',
  },
  'Entertainment: Television': {
    icon: '📺',
    color: 'from-indigo-500 to-blue-500',
    rating: '4.4',
    description: 'TV shows and series trivia',
  },
  'Entertainment: Video Games': {
    icon: '🎮',
    color: 'from-violet-500 to-purple-500',
    rating: '4.8',
    description: 'Video game history and popular titles',
  },
  'Entertainment: Board Games': {
    icon: '🎲',
    color: 'from-yellow-500 to-amber-500',
    rating: '4.2',
    description: 'Classic and modern board games',
  },
  'Science & Nature': {
    icon: '🔬',
    color: 'from-teal-500 to-cyan-500',
    rating: '4.7',
    description: 'Biology, physics, and natural phenomena',
  },
  'Science: Computers': {
    icon: '💻',
    color: 'from-gray-700 to-gray-900',
    rating: '4.6',
    description: 'Computer science and technology',
  },
  'Science: Mathematics': {
    icon: '➗',
    color: 'from-blue-600 to-indigo-600',
    rating: '4.4',
    description: 'Mathematics and logic puzzles',
  },
  Mythology: {
    icon: '🕯',
    color: 'from-amber-600 to-orange-600',
    rating: '4.3',
    description: 'Gods, legends, and mythological stories',
  },
  Sports: {
    icon: '⚽',
    color: 'from-green-600 to-lime-500',
    rating: '4.5',
    description: 'Sports history, rules, and champions',
  },
  Geography: {
    icon: '🗺️',
    color: 'from-emerald-500 to-teal-500',
    rating: '4.6',
    description: 'Countries, capitals, and geographical features',
  },
  History: {
    icon: '🏛️',
    color: 'from-stone-600 to-stone-800',
    rating: '4.5',
    description: 'Historical events and figures',
  },
  Politics: {
    icon: '⚖️',
    color: 'from-red-600 to-pink-600',
    rating: '4.2',
    description: 'Political systems and government',
  },
  Art: {
    icon: '🎨',
    color: 'from-fuchsia-500 to-purple-500',
    rating: '4.4',
    description: 'Art history and famous artworks',
  },
  Celebrities: {
    icon: '🌟',
    color: 'from-pink-500 to-rose-500',
    rating: '4.3',
    description: 'Famous personalities and pop culture',
  },
  Animals: {
    icon: '🦁',
    color: 'from-brown-500 to-amber-700',
    rating: '4.6',
    description: 'Animal kingdom and wildlife facts',
  },
  Vehicles: {
    icon: '🚗',
    color: 'from-orange-500 to-red-500',
    rating: '4.3',
    description: 'Cars, planes, and transportation',
  },
  'Entertainment: Comics': {
    icon: '🦸',
    color: 'from-red-400 to-pink-400',
    rating: '4.5',
    description: 'Comic books and superheroes',
  },
  'Science: Gadgets': {
    icon: '📱',
    color: 'from-slate-500 to-gray-600',
    rating: '4.4',
    description: 'Technology gadgets and devices',
  },
  'Entertainment: Japanese Anime & Manga': {
    icon: '🇯🇵',
    color: 'from-rose-500 to-pink-500',
    rating: '4.7',
    description: 'Japanese animation and comics',
  },
  'Entertainment: Cartoon & Animations': {
    icon: '🐱',
    color: 'from-sky-400 to-blue-400',
    rating: '4.4',
    description: 'Cartoons and animated series',
  },
};
