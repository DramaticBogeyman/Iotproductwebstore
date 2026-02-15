export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Nexus Hub Gen 2',
    price: 129.99,
    description: 'The central brain of your smart home. Connects all your devices with seamless integration and voice control.',
    image: 'https://images.unsplash.com/photo-1661792775022-33203d0d0427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBodWIlMjBkZXZpY2UlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcxMTYyNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Hubs',
    features: ['Voice Control', 'Zigbee & Z-Wave', 'Touch Screen Display', 'Matter Support']
  },
  {
    id: '2',
    name: 'Lumina Smart Bulb',
    price: 34.99,
    description: '16 million colors to set the perfect mood. Energy efficient and fully dimmable via app or voice.',
    image: 'https://images.unsplash.com/photo-1711006155490-ec01a0ecf0de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGxpZ2h0JTIwYnVsYiUyMGNvbG9yfGVufDF8fHx8MTc3MTE2MjU0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Lighting',
    features: ['16 Million Colors', 'Voice Compatible', 'Schedule & Timers', 'Energy Efficient']
  },
  {
    id: '3',
    name: 'Sentinel Pro Camera',
    price: 199.99,
    description: 'Keep an eye on your home 24/7 with 4K resolution, night vision, and AI-powered person detection.',
    image: 'https://images.unsplash.com/photo-1769847933914-a29c8e17aae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBjYW1lcmElMjBtb2Rlcm58ZW58MXx8fHwxNzcxMTYyNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Security',
    features: ['4K HDR Video', 'Color Night Vision', '2-Way Audio', 'AI Detection']
  },
  {
    id: '4',
    name: 'EcoThermostat',
    price: 249.99,
    description: 'Learns your schedule and adjusts the temperature automatically to save energy without sacrificing comfort.',
    image: 'https://images.unsplash.com/photo-1770625467384-304e461ef1be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHRoZXJtb3N0YXQlMjB3YWxsfGVufDF8fHx8MTc3MTE2MjU0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Climate',
    features: ['Smart Scheduling', 'Remote Access', 'Energy Reports', 'Multi-Room Sensors']
  },
  {
    id: '5',
    name: 'SecureLock Touch',
    price: 179.99,
    description: 'Unlock your door with your fingerprint, keypad, or smartphone. Never worry about lost keys again.',
    image: 'https://images.unsplash.com/photo-1637241613318-646f2c2a854a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGRvb3IlMjBsb2NrJTIwZGlnaXRhbHxlbnwxfHx8fDE3NzExNjI1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Security',
    features: ['Fingerprint ID', 'Auto-Lock', 'Activity Log', 'Emergency Key Support']
  },
  {
    id: '6',
    name: 'Motion Sense',
    price: 29.99,
    description: 'Detects movement in any room to trigger lights, alarms, or notifications on your phone.',
    image: 'https://images.unsplash.com/photo-1753039495488-434a2fe53e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMG1vdGlvbiUyMHNlbnNvciUyMGRldmljZXxlbnwxfHx8fDE3NzExNjI1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'Sensors',
    features: ['Wide Angle Detection', 'Long Battery Life', 'Instant Alerts', 'Compact Design']
  }
];
