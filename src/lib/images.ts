/** Dynamic image registry for /public/baba/ assets */

export interface BabaImage {
  src: string;
  alt: string;
  id: number;
}

const BABA_IMAGE_COUNT = 11;
const BABA_DIR = "/baba";

/** All guru/baba images – add more entries and the UI auto-adapts */
export const babaImages: BabaImage[] = Array.from(
  { length: BABA_IMAGE_COUNT },
  (_, i) => ({
    src: `${BABA_DIR}/bab${i + 1}.jpeg`,
    alt: `Adhyatmik Sankalp – Sacred Moment ${i + 1}`,
    id: i + 1,
  })
);

/** Logo */
export const logoImage = {
  src: `${BABA_DIR}/logo.jpeg`,
  alt: "Adhyatmik Sankalp Logo",
};

/** Helpers: split images into groups for marquee rows etc. */
export function splitImages(arr: BabaImage[], groups: number): BabaImage[][] {
  const result: BabaImage[][] = Array.from({ length: groups }, () => []);
  arr.forEach((img, i) => result[i % groups].push(img));
  return result;
}

/** Pick N images starting from offset (wraps around) */
export function pickImages(count: number, offset = 0): BabaImage[] {
  const result: BabaImage[] = [];
  for (let i = 0; i < count; i++) {
    result.push(babaImages[(offset + i) % babaImages.length]);
  }
  return result;
}
