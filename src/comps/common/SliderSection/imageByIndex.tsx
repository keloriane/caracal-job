import coffee from './../../../../public/images/coffee.webp';
import plant from './../../../../public/images/plant.jpeg';
import sunset from './../../../../public/images/sunset.webp';
import whale from './../../../../public/images/whale.jpeg';

export const images: string[] = [sunset.src, plant.src, coffee.src, whale.src];

const imageByIndex = (index: number): string => images[index % images.length];

export default imageByIndex;
