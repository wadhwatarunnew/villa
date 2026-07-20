export type GalleryCategory = 'all' | 'resort-tents' | 'safari-tents' | 'luxury-villas' | 'projects' | 'international-projects' | 'national-projects';

export interface GalleryItem {
  title: string;
  location: string;
  category: Exclude<GalleryCategory, 'all'>;
  image: string;
}

export interface GalleryCategoryTab {
  label: string;
  value: GalleryCategory;
}

export const GALLERY_CATEGORIES: GalleryCategoryTab[] = [
  { label: 'All', value: 'all' },
  { label: 'Resort Tents', value: 'resort-tents' },
  { label: 'Safari Tents', value: 'safari-tents' },
  { label: 'Luxury Villas', value: 'luxury-villas' },
  { label: 'Projects', value: 'projects' },
  { label: 'International Projects', value: 'international-projects' },
  { label: 'National Projects', value: 'national-projects' }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    title: 'Oberoi Rajgarh Palace',
    location: 'Khajuraho, Madhya Pradesh',
    category: 'projects',
    image: 'assets/images/villatent1.webp'
  },
  {
    title: 'Luxury Tent Suite',
    location: 'Ranthambore, Rajasthan',
    category: 'resort-tents',
    image: 'assets/images/villatent2.webp'
  },
  {
    title: 'Hill View Pavilion',
    location: 'Manali, Himachal Pradesh',
    category: 'safari-tents',
    image: 'assets/images/villatent3.webp'
  },
  {
    title: 'Forest Retreat',
    location: 'Jim Corbett, Uttarakhand',
    category: 'national-projects',
    image: 'assets/images/villatent4.webp'
  },
  {
    title: 'Private Villa Interior',
    location: 'Goa, India',
    category: 'luxury-villas',
    image: 'assets/images/villatent5.webp'
  },
  {
    title: 'Lakefront Project',
    location: 'Udaipur, Rajasthan',
    category: 'international-projects',
    image: 'assets/images/villatent6.webp'
  },
  {
    title: 'Heritage Suite',
    location: 'Pushkar, Rajasthan',
    category: 'resort-tents',
    image: 'assets/images/villatent7.webp'
  },
  {
    title: 'Garden Tent Deck',
    location: 'Saputara, Gujarat',
    category: 'projects',
    image: 'assets/images/villatent8.webp'
  },
  {
    title: 'Royal Pool Villa',
    location: 'Alibaug, Maharashtra',
    category: 'luxury-villas',
    image: 'assets/images/villatent9.webp'
  }
];
