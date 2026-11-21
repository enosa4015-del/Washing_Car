const pexels = (id: number, width: number, height?: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&fit=crop&w=${width}${height ? `&h=${height}` : ""}&q=80`;

const unsplash = (id: string, width: number, height?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}${height ? `&h=${height}` : ""}&q=80`;

export const IMAGES = {
  hero: pexels(6873174, 2000, 1200),
  heroPortrait: pexels(29504458, 700, 900),
  exterior: pexels(6873121, 900, 700),
  interior: pexels(5233285, 900, 700),
  detailing: pexels(6872161, 900, 700),
  engine: pexels(4116220, 900, 700),
  wax: pexels(14615262, 900, 700),
  ceramic: pexels(14231701, 900, 700),
  why: pexels(28995187, 1100, 1300),
  galleryFoam: pexels(6873174, 1000, 1200),
  galleryBubbles: pexels(5693659, 900, 1100),
  galleryInterior: pexels(6873185, 1000, 800),
  galleryPolish: pexels(14615262, 1000, 800),
  galleryTeam: pexels(6873179, 1000, 1200),
  galleryWax: pexels(6026083, 1000, 800),
  compareAfter: unsplash("photo-1503376780353-7e6692767b70", 1600, 900),
  avatar1: pexels(7625292, 240, 240),
  avatar2: pexels(30004320, 240, 240),
  avatar3: pexels(30767565, 240, 240),
  avatar4: pexels(3791554, 240, 240),
};
