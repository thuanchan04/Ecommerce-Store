import { Icons } from "../shared/components/icon/icon.model";

export interface Category {
  id: string;
  name: string;
  icon: Icons;
}

export const CATEGORIES: Category[] = [
  { id: 'phone', name: 'Phone', icon: Icons.PHONES_BIG },
  { id: 'watch', name: 'Smart Watches', icon: Icons.SMART_WATCHES_BIG },
  { id: 'camera', name: 'Cameras', icon: Icons.CAMERAS },
  { id: 'headphone', name: 'Headphones', icon: Icons.HEADPHONES_BIG },
  { id: 'computer', name: 'Computers', icon: Icons.COMPUTERS_BIG },
  { id: 'gaming', name: 'Gaming', icon: Icons.GAMING_BIG },
];