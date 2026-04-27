export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterGroup {
  id: string;
  title: string;
  type: 'checkbox' | 'dropdown';
  options: FilterOption[];
}

// 🔥 giống API response
export const FILTER_DATA: FilterGroup[] = [
  {
    id: 'brand',
    title: 'Brand',
    type: 'checkbox',
    options: [
      { label: 'Apple', value: 'apple' },
      { label: 'Samsung', value: 'samsung' },
      { label: 'Xiaomi', value: 'xiaomi' },
      { label: 'Poco', value: 'poco' },
      { label: 'OPPO', value: 'oppo' },
      { label: 'Honor', value: 'honor' },
      { label: 'Motorola', value: 'motorola' },
      { label: 'Nokia', value: 'nokia' },
      { label: 'Realme', value: 'realme' }
    ]
  },
  {
    id: 'battery',
    title: 'Battery capacity',
    type: 'dropdown',
    options: [
      { label: '3000mAh', value: '3000' },
      { label: '4000mAh', value: '4000' },
      { label: '5000mAh', value: '5000' },
      { label: '6000mAh', value: '6000' },
      { label: '7000mAh', value: '7000' }
    ]
  },
  {
    id: 'screen type',
    title: 'Screen type',
    type: 'dropdown',
    options: [
      { label: 'Under 6.0"', value: '0-6' },
      { label: '6.0 - 6.5"', value: '6-6.5' },
      { label: '6.5 - 7.0"', value: '6.5-7' },
      { label: 'Over 7.0"', value: '7+' }
    ]
  },
  {
    id: 'ram',
    title: 'RAM',
    type: 'dropdown',
    options: [
      { label: '2 GB', value: '2' },
      { label: '4 GB', value: '4' },
      { label: '6 GB', value: '6' },
      { label: '8 GB', value: '8' },
      { label: '12 GB+', value: '12+' }
    ]
  },
  {
  id: 'storage',
  title: 'Built-in memory',
  type: 'dropdown',
  options: [
    { label: '32 GB', value: '32' },
    { label: '64 GB', value: '64' },
    { label: '128 GB', value: '128' },
    { label: '256 GB', value: '256' },
    { label: '512 GB+', value: '512+' }
  ]
  },
  {
  id: 'camera',
  title: 'Main camera',
  type: 'dropdown',
  options: [
    { label: 'Under 12 MP', value: '0-12' },
    { label: '12 - 48 MP', value: '12-48' },
    { label: '48 - 108 MP', value: '48-108' },
    { label: '108 MP+', value: '108+' }
  ]
},
{
  id: 'rating',
  title: 'By Rating',
  type: 'checkbox',
  options: [
    { label: '5 Stars', value: '5' },
    { label: '4+ Stars', value: '4' },
    { label: '3+ Stars', value: '3' },
    { label: '2+ Stars', value: '2' },
    { label: '1+ Stars', value: '1' }
  ]
}

];