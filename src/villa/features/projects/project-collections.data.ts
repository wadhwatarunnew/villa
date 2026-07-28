export interface ProjectCategory {
  slug: string;
  name: string;
  image: string;
  projects: string[];
}

export const projectImages = [
  'assets/images/villatent1.webp', 'assets/images/villatent2.webp', 'assets/images/villatent3.webp',
  'assets/images/villatent4.webp', 'assets/images/villatent5.webp', 'assets/images/villatent6.webp',
  'assets/images/villatent7.webp', 'assets/images/villatent8.webp', 'assets/images/villatent9.webp',
  'assets/images/villatent10.webp', 'assets/images/villatent11.webp'
];

export const projectCategories: ProjectCategory[] = [
  {
    slug: 'international-projects', name: 'International Projects', image: projectImages[1],
    projects: ['Ultra Luxury Bhutan Resort Tent Project', 'USA Project']
  },
  {
    slug: 'national-projects', name: 'National Projects', image: projectImages[2],
    projects: [
      'The Oberoi Rajgarh Palace, Khajuraho Project', 'Luxury Resort Tent Manufacturer For Oberoi Group',
      'The Oberoi Vindhyavilas Wildlife Resort, Bandhavgarh', 'Luxury Resort Tents For Storii By ITC Hotels, Jaisalmer',
      'Luxury Resort Tent Project, Igatpuri, Nashik, Maharashtra', 'The Oberoi Vanyavilas Family Resort Tent Project, Ranthambore, Rajasthan',
      'A Banyan Tree Group Resort Tents Project', 'Resort Tent In Jaisalmer Project', 'Rajgarh Exotica Project, Himachal Pardesh',
      'The Oberoi Rajvilas, Jaipur Tent Project', 'Bandhavgarh Resort Tent Project', 'Bir Billing Resort Tent Project, Himachal Pradesh',
      'Jim Corbett National Park Resort Tent Project', 'Solapur, Maharashtra Project', 'Government Of Andaman Luxury Tent Project',
      'Hawa Bill Nest, Neil Island', 'Mahabaleshwar, Maharashtra, Resort Tent Project', 'Nalagarh, Project',
      'Religious Resort Project Pune, Maharashtra', 'Kanha Treasure Resort ProJet', 'Mussoorie Resort Tent Project, Uttarakhand'
    ]
  }
];

export function projectGallery(categorySlug: string, project: string): string[] {
  const seed = [...(categorySlug + project)].reduce((total, char) => total + char.charCodeAt(0), 0);
  return Array.from({ length: 6 }, (_, index) => projectImages[(seed + index) % projectImages.length]);
}

export function projectRouteSlug(name: string): string {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

export function matchesProjectRoute(name: string, routeValue: string): boolean {
  return projectRouteSlug(name) === routeValue || name.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === routeValue.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
}
