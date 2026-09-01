export interface DeviceSpec {
  id: string;
  name: string;
  category: 'macbook' | 'iphone' | 'ipad' | 'monitor' | 'laptop' | 'android';
  diagonal: number; // inches
  width: number;    // native horizontal pixels
  height: number;   // native vertical pixels
  ppi: number;      // physical pixels per inch
  dpr: number;      // device pixel ratio
  os: 'macos' | 'ios' | 'windows' | 'android' | 'other';
  viewportWidth?: number;
  viewportHeight?: number;
}

export const DEVICE_DATABASE: DeviceSpec[] = [
  // --- Apple MacBooks ---
  { id: 'mbp-14-m3', name: 'MacBook Pro 14″ (M1/M2/M3/M4)', category: 'macbook', diagonal: 14.2, width: 3024, height: 1964, ppi: 254, dpr: 2, os: 'macos', viewportWidth: 1512, viewportHeight: 982 },
  { id: 'mbp-16-m3', name: 'MacBook Pro 16″ (M1/M2/M3/M4)', category: 'macbook', diagonal: 16.2, width: 3456, height: 2234, ppi: 254, dpr: 2, os: 'macos', viewportWidth: 1728, viewportHeight: 1117 },
  { id: 'mba-13-m2', name: 'MacBook Air 13.6″ (M2/M3)', category: 'macbook', diagonal: 13.6, width: 2560, height: 1664, ppi: 224, dpr: 2, os: 'macos', viewportWidth: 1280, viewportHeight: 832 },
  { id: 'mba-15-m2', name: 'MacBook Air 15.3″ (M2/M3)', category: 'macbook', diagonal: 15.3, width: 2880, height: 1864, ppi: 224, dpr: 2, os: 'macos', viewportWidth: 1440, viewportHeight: 932 },
  { id: 'mba-13-m1', name: 'MacBook Air 13.3″ (M1 / Intel)', category: 'macbook', diagonal: 13.3, width: 2560, height: 1600, ppi: 227, dpr: 2, os: 'macos', viewportWidth: 1280, viewportHeight: 800 },
  { id: 'mbp-13-m2', name: 'MacBook Pro 13.3″ (M1/M2)', category: 'macbook', diagonal: 13.3, width: 2560, height: 1600, ppi: 227, dpr: 2, os: 'macos', viewportWidth: 1280, viewportHeight: 800 },
  { id: 'imac-24', name: 'iMac 24″ 4.5K Retina', category: 'macbook', diagonal: 23.5, width: 4480, height: 2520, ppi: 218, dpr: 2, os: 'macos', viewportWidth: 2240, viewportHeight: 1260 },

  // --- Apple Displays ---
  { id: 'studio-display-27', name: 'Apple Studio Display 27″ 5K', category: 'monitor', diagonal: 27.0, width: 5120, height: 2880, ppi: 218, dpr: 2, os: 'macos', viewportWidth: 2560, viewportHeight: 1440 },
  { id: 'pro-display-xdr-32', name: 'Apple Pro Display XDR 32″ 6K', category: 'monitor', diagonal: 32.0, width: 6016, height: 3384, ppi: 218, dpr: 2, os: 'macos', viewportWidth: 3008, viewportHeight: 1692 },

  // --- Apple iPads ---
  { id: 'ipad-pro-13-m4', name: 'iPad Pro 13″ (M4 OLED)', category: 'ipad', diagonal: 13.0, width: 2752, height: 2064, ppi: 264, dpr: 2, os: 'ios', viewportWidth: 1024, viewportHeight: 1366 },
  { id: 'ipad-pro-11-m4', name: 'iPad Pro 11″ (M4 OLED)', category: 'ipad', diagonal: 11.0, width: 2420, height: 1668, ppi: 264, dpr: 2, os: 'ios', viewportWidth: 834, viewportHeight: 1194 },
  { id: 'ipad-air-11-m2', name: 'iPad Air 11″ (M2)', category: 'ipad', diagonal: 10.86, width: 2360, height: 1640, ppi: 264, dpr: 2, os: 'ios', viewportWidth: 820, viewportHeight: 1180 },
  { id: 'ipad-air-13-m2', name: 'iPad Air 13″ (M2)', category: 'ipad', diagonal: 12.9, width: 2732, height: 2048, ppi: 264, dpr: 2, os: 'ios', viewportWidth: 1024, viewportHeight: 1366 },
  { id: 'ipad-mini-6', name: 'iPad mini 8.3″ (6th/7th Gen)', category: 'ipad', diagonal: 8.3, width: 2266, height: 1488, ppi: 326, dpr: 2, os: 'ios', viewportWidth: 744, viewportHeight: 1133 },
  { id: 'ipad-10', name: 'iPad 10.9″ (10th Gen)', category: 'ipad', diagonal: 10.9, width: 2360, height: 1640, ppi: 264, dpr: 2, os: 'ios', viewportWidth: 820, viewportHeight: 1180 },

  // --- Apple iPhones ---
  { id: 'iphone-16-pro-max', name: 'iPhone 16 Pro Max (6.9″)', category: 'iphone', diagonal: 6.9, width: 2868, height: 1320, ppi: 460, dpr: 3, os: 'ios', viewportWidth: 440, viewportHeight: 956 },
  { id: 'iphone-16-pro', name: 'iPhone 16 Pro (6.3″)', category: 'iphone', diagonal: 6.3, width: 2622, height: 1206, ppi: 460, dpr: 3, os: 'ios', viewportWidth: 402, viewportHeight: 874 },
  { id: 'iphone-16-plus', name: 'iPhone 16 Plus (6.7″)', category: 'iphone', diagonal: 6.7, width: 2796, height: 1290, ppi: 460, dpr: 3, os: 'ios', viewportWidth: 430, viewportHeight: 932 },
  { id: 'iphone-16', name: 'iPhone 16 (6.1″)', category: 'iphone', diagonal: 6.1, width: 2556, height: 1179, ppi: 460, dpr: 3, os: 'ios', viewportWidth: 393, viewportHeight: 852 },
  { id: 'iphone-15-pro-max', name: 'iPhone 15 Pro Max (6.7″)', category: 'iphone', diagonal: 6.7, width: 2796, height: 1290, ppi: 460, dpr: 3, os: 'ios', viewportWidth: 430, viewportHeight: 932 },
  { id: 'iphone-15-pro', name: 'iPhone 15 Pro (6.1″)', category: 'iphone', diagonal: 6.1, width: 2556, height: 1179, ppi: 460, dpr: 3, os: 'ios', viewportWidth: 393, viewportHeight: 852 },
  { id: 'iphone-15', name: 'iPhone 15 / 15 Plus', category: 'iphone', diagonal: 6.1, width: 2556, height: 1179, ppi: 460, dpr: 3, os: 'ios', viewportWidth: 393, viewportHeight: 852 },
  { id: 'iphone-14-13-12', name: 'iPhone 14 / 13 / 12 (6.1″)', category: 'iphone', diagonal: 6.06, width: 2532, height: 1170, ppi: 460, dpr: 3, os: 'ios', viewportWidth: 390, viewportHeight: 844 },
  { id: 'iphone-se-3', name: 'iPhone SE (3rd Gen / 4.7″)', category: 'iphone', diagonal: 4.7, width: 1334, height: 750, ppi: 326, dpr: 2, os: 'ios', viewportWidth: 375, viewportHeight: 667 },

  // --- Windows Laptops ---
  { id: 'laptop-13-fhd', name: 'Laptop 13.3″ Full HD (1920×1080)', category: 'laptop', diagonal: 13.3, width: 1920, height: 1080, ppi: 166, dpr: 1.25, os: 'windows', viewportWidth: 1536, viewportHeight: 864 },
  { id: 'laptop-14-fhd', name: 'Laptop 14.0″ Full HD (1920×1080)', category: 'laptop', diagonal: 14.0, width: 1920, height: 1080, ppi: 157, dpr: 1.25, os: 'windows', viewportWidth: 1536, viewportHeight: 864 },
  { id: 'laptop-14-qhd', name: 'Laptop 14.0″ QHD+ (2880×1800 16:10)', category: 'laptop', diagonal: 14.0, width: 2880, height: 1800, ppi: 243, dpr: 2, os: 'windows', viewportWidth: 1440, viewportHeight: 900 },
  { id: 'laptop-15-fhd', name: 'Laptop 15.6″ Full HD (1920×1080)', category: 'laptop', diagonal: 15.6, width: 1920, height: 1080, ppi: 141, dpr: 1.25, os: 'windows', viewportWidth: 1536, viewportHeight: 864 },
  { id: 'laptop-15-4k', name: 'Laptop 15.6″ 4K UHD (3840×2160)', category: 'laptop', diagonal: 15.6, width: 3840, height: 2160, ppi: 282, dpr: 2.5, os: 'windows', viewportWidth: 1536, viewportHeight: 864 },
  { id: 'laptop-16-qhd', name: 'Laptop 16.0″ QHD+ (2560×1600 16:10)', category: 'laptop', diagonal: 16.0, width: 2560, height: 1600, ppi: 189, dpr: 1.5, os: 'windows', viewportWidth: 1707, viewportHeight: 1067 },
  { id: 'laptop-17-fhd', name: 'Laptop 17.3″ Full HD (1920×1080)', category: 'laptop', diagonal: 17.3, width: 1920, height: 1080, ppi: 127, dpr: 1.25, os: 'windows', viewportWidth: 1536, viewportHeight: 864 },
  { id: 'dell-xps-13', name: 'Dell XPS 13 (FHD+ 1920×1200)', category: 'laptop', diagonal: 13.4, width: 1920, height: 1200, ppi: 169, dpr: 1.25, os: 'windows', viewportWidth: 1536, viewportHeight: 960 },
  { id: 'dell-xps-15', name: 'Dell XPS 15 (OLED 3.5K 3456×2160)', category: 'laptop', diagonal: 15.6, width: 3456, height: 2160, ppi: 261, dpr: 2, os: 'windows', viewportWidth: 1728, viewportHeight: 1080 },
  { id: 'surface-pro-9', name: 'Microsoft Surface Pro 9 / 10 (13.0″)', category: 'laptop', diagonal: 13.0, width: 2880, height: 1920, ppi: 267, dpr: 2, os: 'windows', viewportWidth: 1440, viewportHeight: 960 },
  { id: 'surface-laptop-5-13', name: 'Microsoft Surface Laptop 13.5″', category: 'laptop', diagonal: 13.5, width: 2256, height: 1504, ppi: 201, dpr: 1.5, os: 'windows', viewportWidth: 1504, viewportHeight: 1003 },

  // --- External Desktop Monitors ---
  { id: 'monitor-21-fhd', name: 'Monitor 21.5″ Full HD (1920×1080)', category: 'monitor', diagonal: 21.5, width: 1920, height: 1080, ppi: 102, dpr: 1, os: 'other', viewportWidth: 1920, viewportHeight: 1080 },
  { id: 'monitor-24-fhd', name: 'Monitor 24″ Full HD (1920×1080)', category: 'monitor', diagonal: 23.8, width: 1920, height: 1080, ppi: 93, dpr: 1, os: 'other', viewportWidth: 1920, viewportHeight: 1080 },
  { id: 'monitor-24-qhd', name: 'Monitor 24″ QHD 1440p (2560×1440)', category: 'monitor', diagonal: 23.8, width: 2560, height: 1440, ppi: 123, dpr: 1.25, os: 'other', viewportWidth: 2048, viewportHeight: 1152 },
  { id: 'monitor-27-fhd', name: 'Monitor 27″ Full HD (1920×1080)', category: 'monitor', diagonal: 27.0, width: 1920, height: 1080, ppi: 82, dpr: 1, os: 'other', viewportWidth: 1920, viewportHeight: 1080 },
  { id: 'monitor-27-qhd', name: 'Monitor 27″ QHD 1440p (2560×1440)', category: 'monitor', diagonal: 27.0, width: 2560, height: 1440, ppi: 109, dpr: 1, os: 'other', viewportWidth: 2560, viewportHeight: 1440 },
  { id: 'monitor-27-4k', name: 'Monitor 27″ 4K UHD (3840×2160)', category: 'monitor', diagonal: 27.0, width: 3840, height: 2160, ppi: 163, dpr: 1.5, os: 'other', viewportWidth: 2560, viewportHeight: 1440 },
  { id: 'monitor-32-4k', name: 'Monitor 32″ 4K UHD (3840×2160)', category: 'monitor', diagonal: 31.5, width: 3840, height: 2160, ppi: 140, dpr: 1.5, os: 'other', viewportWidth: 2560, viewportHeight: 1440 },
  { id: 'monitor-34-uwqhd', name: 'Monitor 34″ Ultrawide (3440×1440)', category: 'monitor', diagonal: 34.0, width: 3440, height: 1440, ppi: 110, dpr: 1, os: 'other', viewportWidth: 3440, viewportHeight: 1440 },
  { id: 'monitor-38-uwqhd', name: 'Monitor 38″ Ultrawide (3840×1600)', category: 'monitor', diagonal: 37.5, width: 3840, height: 1600, ppi: 111, dpr: 1, os: 'other', viewportWidth: 3840, viewportHeight: 1600 },
  { id: 'monitor-49-suwqhd', name: 'Monitor 49″ Super Ultrawide (5120×1440)', category: 'monitor', diagonal: 48.8, width: 5120, height: 1440, ppi: 109, dpr: 1, os: 'other', viewportWidth: 5120, viewportHeight: 1440 },

  // --- Android Devices (Smartphones & Tablets) ---
  // Samsung Flagships
  { id: 'galaxy-s24-ultra', name: 'Samsung Galaxy S24 Ultra (6.8″)', category: 'android', diagonal: 6.8, width: 3120, height: 1440, ppi: 505, dpr: 3.5, os: 'android', viewportWidth: 412, viewportHeight: 891 },
  { id: 'galaxy-s24-plus', name: 'Samsung Galaxy S24+ (6.7″)', category: 'android', diagonal: 6.7, width: 3120, height: 1440, ppi: 513, dpr: 3.5, os: 'android', viewportWidth: 412, viewportHeight: 915 },
  { id: 'galaxy-s24', name: 'Samsung Galaxy S24 (6.2″)', category: 'android', diagonal: 6.2, width: 2340, height: 1080, ppi: 416, dpr: 3, os: 'android', viewportWidth: 360, viewportHeight: 780 },
  { id: 'galaxy-s23-ultra', name: 'Samsung Galaxy S23 Ultra (6.8″)', category: 'android', diagonal: 6.8, width: 3088, height: 1440, ppi: 500, dpr: 3.5, os: 'android', viewportWidth: 384, viewportHeight: 824 },
  { id: 'galaxy-s23-plus', name: 'Samsung Galaxy S23+ (6.6″)', category: 'android', diagonal: 6.6, width: 2340, height: 1080, ppi: 393, dpr: 3, os: 'android', viewportWidth: 384, viewportHeight: 824 },
  { id: 'galaxy-s23', name: 'Samsung Galaxy S23 / S22 (6.1″)', category: 'android', diagonal: 6.1, width: 2340, height: 1080, ppi: 425, dpr: 3, os: 'android', viewportWidth: 360, viewportHeight: 780 },
  { id: 'galaxy-s21-ultra', name: 'Samsung Galaxy S21 Ultra (6.8″)', category: 'android', diagonal: 6.8, width: 3200, height: 1440, ppi: 515, dpr: 3.5, os: 'android', viewportWidth: 384, viewportHeight: 854 },
  // Samsung Foldables
  { id: 'galaxy-z-fold-6', name: 'Samsung Galaxy Z Fold 6 (Inner 7.6″)', category: 'android', diagonal: 7.6, width: 2160, height: 1856, ppi: 374, dpr: 2.625, os: 'android', viewportWidth: 823, viewportHeight: 707 },
  { id: 'galaxy-z-flip-6', name: 'Samsung Galaxy Z Flip 6 / 5 (6.7″)', category: 'android', diagonal: 6.7, width: 2640, height: 1080, ppi: 426, dpr: 3, os: 'android', viewportWidth: 360, viewportHeight: 880 },
  // Samsung Popular A-Series
  { id: 'galaxy-a55', name: 'Samsung Galaxy A55 5G / A54 (6.6″)', category: 'android', diagonal: 6.6, width: 2340, height: 1080, ppi: 390, dpr: 2.75, os: 'android', viewportWidth: 412, viewportHeight: 915 },
  { id: 'galaxy-a35', name: 'Samsung Galaxy A35 / A34 (6.6″)', category: 'android', diagonal: 6.6, width: 2340, height: 1080, ppi: 390, dpr: 2.75, os: 'android', viewportWidth: 412, viewportHeight: 915 },
  { id: 'galaxy-a15', name: 'Samsung Galaxy A15 / A14 (6.5″)', category: 'android', diagonal: 6.5, width: 2340, height: 1080, ppi: 396, dpr: 2.75, os: 'android', viewportWidth: 384, viewportHeight: 832 },
  // Samsung Tablets
  { id: 'galaxy-tab-s9-ultra', name: 'Samsung Galaxy Tab S9 Ultra (14.6″)', category: 'android', diagonal: 14.6, width: 2960, height: 1848, ppi: 239, dpr: 2, os: 'android', viewportWidth: 1480, viewportHeight: 924 },
  { id: 'galaxy-tab-s9', name: 'Samsung Galaxy Tab S9 / S8 (11.0″)', category: 'android', diagonal: 11.0, width: 2560, height: 1600, ppi: 274, dpr: 2, os: 'android', viewportWidth: 800, viewportHeight: 1280 },
  { id: 'galaxy-tab-a9', name: 'Samsung Galaxy Tab A9+ (11.0″)', category: 'android', diagonal: 11.0, width: 1920, height: 1200, ppi: 206, dpr: 1.5, os: 'android', viewportWidth: 800, viewportHeight: 1280 },

  // Google Pixel Series
  { id: 'pixel-9-pro-xl', name: 'Google Pixel 9 Pro XL (6.8″)', category: 'android', diagonal: 6.8, width: 2992, height: 1344, ppi: 486, dpr: 3.5, os: 'android', viewportWidth: 412, viewportHeight: 923 },
  { id: 'pixel-9-pro', name: 'Google Pixel 9 Pro (6.3″)', category: 'android', diagonal: 6.3, width: 2856, height: 1280, ppi: 495, dpr: 3, os: 'android', viewportWidth: 412, viewportHeight: 919 },
  { id: 'pixel-9', name: 'Google Pixel 9 (6.3″)', category: 'android', diagonal: 6.3, width: 2424, height: 1080, ppi: 422, dpr: 2.75, os: 'android', viewportWidth: 412, viewportHeight: 919 },
  { id: 'pixel-8-pro', name: 'Google Pixel 8 Pro (6.7″)', category: 'android', diagonal: 6.7, width: 2992, height: 1344, ppi: 489, dpr: 3.5, os: 'android', viewportWidth: 412, viewportHeight: 923 },
  { id: 'pixel-8', name: 'Google Pixel 8 (6.2″)', category: 'android', diagonal: 6.2, width: 2400, height: 1080, ppi: 428, dpr: 2.75, os: 'android', viewportWidth: 412, viewportHeight: 892 },
  { id: 'pixel-8a', name: 'Google Pixel 8a / 7a (6.1″)', category: 'android', diagonal: 6.1, width: 2400, height: 1080, ppi: 430, dpr: 2.75, os: 'android', viewportWidth: 412, viewportHeight: 915 },
  { id: 'pixel-7-pro', name: 'Google Pixel 7 Pro (6.7″)', category: 'android', diagonal: 6.7, width: 3120, height: 1440, ppi: 512, dpr: 3.5, os: 'android', viewportWidth: 412, viewportHeight: 892 },
  { id: 'pixel-tablet', name: 'Google Pixel Tablet (10.95″)', category: 'android', diagonal: 10.95, width: 2560, height: 1600, ppi: 276, dpr: 2, os: 'android', viewportWidth: 800, viewportHeight: 1280 },

  // Xiaomi, Redmi & POCO
  { id: 'xiaomi-14-ultra', name: 'Xiaomi 14 Ultra / 14 Pro (6.73″)', category: 'android', diagonal: 6.73, width: 3200, height: 1440, ppi: 522, dpr: 3.5, os: 'android', viewportWidth: 393, viewportHeight: 873 },
  { id: 'xiaomi-14', name: 'Xiaomi 14 (6.36″)', category: 'android', diagonal: 6.36, width: 2670, height: 1200, ppi: 460, dpr: 3, os: 'android', viewportWidth: 400, viewportHeight: 890 },
  { id: 'xiaomi-13t-pro', name: 'Xiaomi 13T / 13T Pro (6.67″)', category: 'android', diagonal: 6.67, width: 2712, height: 1220, ppi: 446, dpr: 3, os: 'android', viewportWidth: 393, viewportHeight: 873 },
  { id: 'redmi-note-13-pro', name: 'Redmi Note 13 Pro+ / Pro 5G (6.67″)', category: 'android', diagonal: 6.67, width: 2712, height: 1220, ppi: 446, dpr: 3, os: 'android', viewportWidth: 393, viewportHeight: 873 },
  { id: 'redmi-note-13', name: 'Redmi Note 13 / 12 (6.67″)', category: 'android', diagonal: 6.67, width: 2400, height: 1080, ppi: 395, dpr: 2.75, os: 'android', viewportWidth: 393, viewportHeight: 873 },
  { id: 'poco-x6-pro', name: 'POCO X6 Pro / F6 Pro (6.67″)', category: 'android', diagonal: 6.67, width: 2712, height: 1220, ppi: 446, dpr: 3, os: 'android', viewportWidth: 393, viewportHeight: 873 },
  { id: 'poco-f5', name: 'POCO F5 / X5 Pro (6.67″)', category: 'android', diagonal: 6.67, width: 2400, height: 1080, ppi: 395, dpr: 2.75, os: 'android', viewportWidth: 393, viewportHeight: 873 },
  { id: 'xiaomi-pad-6', name: 'Xiaomi Pad 6 / 6 Pro (11.0″)', category: 'android', diagonal: 11.0, width: 2880, height: 1800, ppi: 309, dpr: 2, os: 'android', viewportWidth: 800, viewportHeight: 1280 },

  // OnePlus, OPPO, Vivo, Realme
  { id: 'oneplus-12', name: 'OnePlus 12 / 12R (6.82″)', category: 'android', diagonal: 6.82, width: 3168, height: 1440, ppi: 510, dpr: 3.5, os: 'android', viewportWidth: 412, viewportHeight: 915 },
  { id: 'oneplus-open', name: 'OnePlus Open (Inner 7.82″)', category: 'android', diagonal: 7.82, width: 2440, height: 2268, ppi: 426, dpr: 3, os: 'android', viewportWidth: 813, viewportHeight: 756 },
  { id: 'oppo-find-x7', name: 'OPPO Find X7 Ultra (6.82″)', category: 'android', diagonal: 6.82, width: 3168, height: 1440, ppi: 510, dpr: 3.5, os: 'android', viewportWidth: 412, viewportHeight: 915 },
  { id: 'oppo-reno-11', name: 'OPPO Reno 11 Pro / Reno 10 (6.7″)', category: 'android', diagonal: 6.7, width: 2412, height: 1080, ppi: 394, dpr: 2.75, os: 'android', viewportWidth: 412, viewportHeight: 919 },
  { id: 'vivo-x100-pro', name: 'Vivo X100 Pro / X90 Pro (6.78″)', category: 'android', diagonal: 6.78, width: 2800, height: 1260, ppi: 453, dpr: 3, os: 'android', viewportWidth: 412, viewportHeight: 919 },
  { id: 'vivo-v30', name: 'Vivo V30 / V29 5G (6.78″)', category: 'android', diagonal: 6.78, width: 2800, height: 1260, ppi: 453, dpr: 3, os: 'android', viewportWidth: 412, viewportHeight: 919 },
  { id: 'realme-12-pro', name: 'Realme 12 Pro+ / 11 Pro+ (6.7″)', category: 'android', diagonal: 6.7, width: 2412, height: 1080, ppi: 394, dpr: 2.75, os: 'android', viewportWidth: 412, viewportHeight: 919 },
];

/**
 * Intelligent hardware detector function.
 * Evaluates screen width/height, devicePixelRatio, userAgent and touch capabilities to pinpoint the active device.
 */
export function detectCurrentDevice(): { match: DeviceSpec | null; estimatedPpi: number; confidence: 'exact' | 'high' | 'medium' | 'fallback' } {
  if (typeof window === 'undefined' || typeof screen === 'undefined') {
    return { match: null, estimatedPpi: 96, confidence: 'fallback' };
  }

  const dpr = window.devicePixelRatio || 1;
  const sw = Math.round(screen.width);
  const sh = Math.round(screen.height);
  const maxDim = Math.max(sw, sh);
  const minDim = Math.min(sw, sh);
  const ua = navigator.userAgent.toLowerCase();

  // Check for exact viewport match in database
  for (const dev of DEVICE_DATABASE) {
    if (dev.viewportWidth && dev.viewportHeight) {
      const devMax = Math.max(dev.viewportWidth, dev.viewportHeight);
      const devMin = Math.min(dev.viewportWidth, dev.viewportHeight);
      const isDprMatch = Math.abs(dev.dpr - dpr) < 0.25;

      if (Math.abs(maxDim - devMax) <= 2 && Math.abs(minDim - devMin) <= 2 && isDprMatch) {
        const cssPpi = Math.round((dev.ppi / dev.dpr) * 10) / 10;
        // Double check OS hints
        if (dev.os === 'macos' && ua.includes('macintosh')) {
          return { match: dev, estimatedPpi: cssPpi, confidence: 'exact' };
        }
        if (dev.os === 'ios' && (ua.includes('iphone') || ua.includes('ipad') || (ua.includes('macintosh') && navigator.maxTouchPoints > 1))) {
          return { match: dev, estimatedPpi: cssPpi, confidence: 'exact' };
        }
        if (dev.os === 'android' && ua.includes('android')) {
          return { match: dev, estimatedPpi: cssPpi, confidence: 'high' };
        }
        if (dev.os === 'windows' && ua.includes('windows')) {
          return { match: dev, estimatedPpi: cssPpi, confidence: 'high' };
        }
      }
    }
  }

  // OS heuristics
  if (ua.includes('macintosh')) {
    if (dpr >= 2) {
      // Modern Retina Mac
      if (maxDim >= 1700) {
        const dev = DEVICE_DATABASE.find(d => d.id === 'mbp-16-m3')!;
        return { match: dev, estimatedPpi: Math.round((254 / dpr) * 10) / 10, confidence: 'high' };
      } else if (maxDim >= 1500) {
        const dev = DEVICE_DATABASE.find(d => d.id === 'mbp-14-m3')!;
        return { match: dev, estimatedPpi: Math.round((254 / dpr) * 10) / 10, confidence: 'high' };
      } else if (maxDim >= 1400) {
        const dev = DEVICE_DATABASE.find(d => d.id === 'mba-15-m2')!;
        return { match: dev, estimatedPpi: Math.round((224 / dpr) * 10) / 10, confidence: 'high' };
      } else {
        const dev = DEVICE_DATABASE.find(d => d.id === 'mba-13-m2')!;
        return { match: dev, estimatedPpi: Math.round((224 / dpr) * 10) / 10, confidence: 'high' };
      }
    } else {
      // 1x Mac or External Monitor
      const dev = DEVICE_DATABASE.find(d => d.id === 'monitor-24-fhd')!;
      return { match: dev, estimatedPpi: 93, confidence: 'medium' };
    }
  }

  if (ua.includes('iphone')) {
    const dev = DEVICE_DATABASE.find(d => d.id === 'iphone-15')!;
    return { match: dev, estimatedPpi: Math.round((460 / dpr) * 10) / 10, confidence: 'high' };
  }

  if (ua.includes('ipad') || (ua.includes('macintosh') && navigator.maxTouchPoints > 1)) {
    const dev = DEVICE_DATABASE.find(d => d.id === 'ipad-air-11-m2')!;
    return { match: dev, estimatedPpi: Math.round((264 / dpr) * 10) / 10, confidence: 'high' };
  }

  if (ua.includes('android')) {
    const dev = DEVICE_DATABASE.find(d => d.id === 'galaxy-s24')!;
    return { match: dev, estimatedPpi: Math.round((416 / dpr) * 10) / 10, confidence: 'medium' };
  }

  // Windows / Linux Desktop or Laptop
  if (dpr > 1.2) {
    // High-DPI laptop display (e.g. 15.6" or 14" at 125% or 150% scaling)
    const dev = DEVICE_DATABASE.find(d => d.id === 'laptop-14-fhd')!;
    return { match: dev, estimatedPpi: Math.round((157 / dpr) * 10) / 10, confidence: 'medium' };
  }

  // Standard 96 PPI default PC monitor fallback
  const dev = DEVICE_DATABASE.find(d => d.id === 'monitor-24-fhd')!;
  return { match: dev, estimatedPpi: 93, confidence: 'fallback' };
}
