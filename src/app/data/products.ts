export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  features: string[];
  model3D?: string;
  packaging3D?: string;
  catalogPDF?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'هاب مرکزی نکسوس (Nexus Hub Gen 2)',
    price: 6500000,
    description: 'مغز متفکر خانه هوشمند شما. تمام دستگاه‌های شما را با یکپارچگی کامل و کنترل صوتی به هم متصل می‌کند.',
    image: 'https://images.unsplash.com/photo-1661792775022-33203d0d0427?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWUlMjBodWIlMjBkZXZpY2UlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcxMTYyNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'هاب‌ها',
    features: ['کنترل صوتی', 'پشتیبانی از زیگبی و زد-ویو', 'صفحه نمایش لمسی', 'پشتیبانی از مَتِر'],
    model3D: '/models/nexus-hub.glb',
    packaging3D: '/models/nexus-hub-package.glb',
    catalogPDF: '/catalogs/nexus-hub-catalog.pdf'
  },
  {
    id: '2',
    name: 'لامپ هوشمند لومینا (Lumina)',
    price: 850000,
    description: '۱۶ میلیون رنگ برای تنظیم حال و هوای عالی. کم‌مصرف و کاملاً قابل تنظیم نور از طریق برنامه یا صدا.',
    image: 'https://images.unsplash.com/photo-1711006155490-ec01a0ecf0de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGxpZ2h0JTIwYnVsYiUyMGNvbG9yfGVufDF8fHx8MTc3MTE2MjU0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'روشنایی',
    features: ['۱۶ میلیون رنگ', 'سازگار با فرمان صوتی', 'زمان‌بندی و تایمر', 'مصرف انرژی بهینه'],
    model3D: '/models/lumina-bulb.glb',
    packaging3D: '/models/lumina-package.glb',
    catalogPDF: '/catalogs/lumina-catalog.pdf'
  },
  {
    id: '3',
    name: 'دوربین امنیتی سنتینل (Sentinel Pro)',
    price: 4200000,
    description: 'با رزولوشن 4K، دید در شب رنگی و تشخیص انسان با هوش مصنوعی، ۲۴ ساعته مراقب خانه خود باشید.',
    image: 'https://images.unsplash.com/photo-1769847933914-a29c8e17aae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lJTIwc2VjdXJpdHklMjBjYW1lcmElMjBtb2Rlcm58ZW58MXx8fHwxNzcxMTYyNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'امنیتی',
    features: ['ویدیو 4K HDR', 'دید در شب رنگی', 'صدای دوطرفه', 'تشخیص هوشمند'],
    model3D: '/models/sentinel-camera.glb',
    packaging3D: '/models/sentinel-package.glb',
    catalogPDF: '/catalogs/sentinel-catalog.pdf'
  },
  {
    id: '4',
    name: 'ترموستات اکو (EcoThermostat)',
    price: 5800000,
    description: 'برنامه شما را یاد می‌گیرد و دما را به طور خودکار تنظیم می‌کند تا بدون فدا کردن راحتی، در مصرف انرژی صرفه‌جویی کنید.',
    image: 'https://images.unsplash.com/photo-1770625467384-304e461ef1be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHRoZXJtb3N0YXQlMjB3YWxsfGVufDF8fHx8MTc3MTE2MjU0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'تهویه مطبوع',
    features: ['زمان‌بندی هوشمند', 'دسترسی از راه دور', 'گزارش‌های مصرف انرژی', 'سنسورهای چند اتاقی'],
    model3D: '/models/ecothermostat.glb',
    packaging3D: '/models/ecothermostat-package.glb',
    catalogPDF: '/catalogs/ecothermostat-catalog.pdf'
  },
  {
    id: '5',
    name: 'قفل هوشمند (SecureLock Touch)',
    price: 7900000,
    description: 'در را با اثر انگشت، صفحه کلید یا تلفن هوشمند باز کنید. دیگر نگران گم کردن کلیدها نباشید.',
    image: 'https://images.unsplash.com/photo-1637241613318-646f2c2a854a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGRvb3IlMjBsb2NrJTIwZGlnaXRhbHxlbnwxfHx8fDE3NzExNjI1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'امنیتی',
    features: ['شناسایی اثر انگشت', 'قفل خودکار', 'گزارش فعالیت', 'کلید اضطراری'],
    model3D: '/models/securelock.glb',
    packaging3D: '/models/securelock-package.glb',
    catalogPDF: '/catalogs/securelock-catalog.pdf'
  },
  {
    id: '6',
    name: 'سنسور حرکتی (Motion Sense)',
    price: 950000,
    description: 'حرکت در هر اتاقی را تشخیص می‌دهد تا چراغ‌ها، آلارم‌ها یا اعلان‌ها را روی گوشی شما فعال کند.',
    image: 'https://images.unsplash.com/photo-1753039495488-434a2fe53e41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMG1vdGlvbiUyMHNlbnNvciUyMGRldmljZXxlbnwxfHx8fDE3NzExNjI1NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'سنسورها',
    features: ['تشخیص زاویه باز', 'عمر باتری طولانی', 'هشدارهای فوری', 'طراحی جمع و جور'],
    model3D: '/models/motion-sensor.glb',
    packaging3D: '/models/motion-sensor-package.glb',
    catalogPDF: '/catalogs/motion-sensor-catalog.pdf'
  }
];
