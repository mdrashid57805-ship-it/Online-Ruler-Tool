export type Language = 'id' | 'en';

export interface TranslationDict {
  siteName: string;
  tagline: string;
  metaDescription: string;
  edges: {
    title: string;
    left: string;
    right: string;
    top: string;
    bottom: string;
    all: string;
    floating: string;
    protractor: string;
  };
  tools: {
    guides: string;
    crosshair: string;
    grid: string;
    caliper: string;
    silhouettes: string;
    fullscreen: string;
    theme: string;
    calibrate: string;
    help: string;
    clear: string;
    copy: string;
    copied: string;
  };
  units: {
    cm: string;
    mm: string;
    in: string;
    px: string;
    pt: string;
  };
  welcome: {
    title: string;
    subtitle: string;
    selectEdge: string;
    top: string;
    bottom: string;
    left: string;
    right: string;
    fullFrame: string;
    floatingRuler: string;
    calStatusNot: string;
    calStatusCalibrated: string;
    calWrongDevice: string;
    hideInfo: string;
  };
  calModal: {
    title: string;
    badge: string;
    tabAuto: string;
    tabDevice: string;
    tabDiagonal: string;
    tabCard: string;
    autoDetecting: string;
    autoMatched: string;
    autoConfidenceExact: string;
    autoConfidenceHigh: string;
    autoConfidenceMedium: string;
    autoConfidenceFallback: string;
    autoDesc: string;
    applyAuto: string;
    deviceSearchPlaceholder: string;
    deviceCategoryAll: string;
    deviceCategoryMacbook: string;
    deviceCategoryIphone: string;
    deviceCategoryIpad: string;
    deviceCategoryMonitor: string;
    deviceCategoryLaptop: string;
    deviceCategoryAndroid: string;
    diagonalLabel: string;
    diagonalPlaceholder: string;
    diagonalDesc: string;
    diagonalApply: string;
    diagonalPresets: string;
    cardInstruction: string;
    cardInstructionSub: string;
    cardAdjustPpi: string;
    cardRefLabel: string;
    cardApply: string;
    resetDefault: string;
  };
  caliper: {
    title: string;
    pointA: string;
    pointB: string;
    distance: string;
    deltaX: string;
    deltaY: string;
    angle: string;
    copyValue: string;
    close: string;
  };
  floatingRuler: {
    title: string;
    rotate: string;
    resetAngle: string;
    snapAngle: string;
    close: string;
  };
  howTo: {
    badge: string;
    title: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    shortcutsTitle: string;
    shortcutGuides: string;
    shortcutCrosshair: string;
    shortcutGrid: string;
    shortcutCaliper: string;
    shortcutFullscreen: string;
    shortcutTheme: string;
    shortcutClear: string;
    shortcutUnits: string;
    shortcutHelp: string;
    gotIt: string;
  };
  seo: {
    h1: string;
    lead: string;
    accuracyTitle: string;
    accuracyText: string;
    method1Title: string;
    method1Text: string;
    method2Title: string;
    method2Text: string;
    method3Title: string;
    method3Text: string;
    featuresTitle: string;
    featuresText: string;
    tableTitle: string;
    tableSubtitle: string;
    faqTitle: string;
  };
  footer: {
    home: string;
    calGuide: string;
    about: string;
    privacy: string;
    terms: string;
    contact: string;
    copyright: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDict> = {
  id: {
    siteName: 'Online Penggaris',
    tagline: 'Penggaris Online Akurat Seukuran Asli (cm, mm, inci)',
    metaDescription: 'Penggaris online gratis akurat seukuran asli dalam cm, mm, dan inci. Kalibrasi layar otomatis, diagonal layar, atau kartu ATM/KTP untuk pengukuran presisi.',
    edges: {
      title: 'Posisi Penggaris',
      left: 'Penggaris Kiri (Vertikal)',
      right: 'Penggaris Kanan (Vertikal)',
      top: 'Penggaris Atas (Horizontal)',
      bottom: 'Penggaris Bawah (Horizontal)',
      all: 'Bingkai 4 Sisi (Full Frame)',
      floating: 'Penggaris Bebas (Bisa Diputar)',
      protractor: 'Busur Derajat (Sudut)',
    },
    tools: {
      guides: 'Garis Panduan (G)',
      crosshair: 'Crosshair Kursor (C)',
      grid: 'Matriks Grid (M)',
      caliper: 'Jangka Sorong / Caliper (K)',
      silhouettes: 'Bandingkan Ukuran Objek (O)',
      fullscreen: 'Layar Penuh (F)',
      theme: 'Mode Gelap / Terang (D)',
      calibrate: 'Kalibrasi Layar',
      help: 'Panduan & Tombol Pintas (H)',
      clear: 'Hapus Panduan (Esc)',
      copy: 'Salin Pengukuran',
      copied: 'Tersalin!',
    },
    units: {
      cm: 'cm',
      mm: 'mm',
      in: 'inci',
      px: 'px',
      pt: 'pt',
    },
    welcome: {
      title: 'Pilih posisi penggaris pada layar Anda',
      subtitle: 'Aktifkan penggaris pada tepi layar yang diinginkan, atau gunakan tombol cepat di bawah:',
      selectEdge: 'PILIH POSISI',
      top: 'ATAS',
      bottom: 'BAWAH',
      left: 'KIRI',
      right: 'KANAN',
      fullFrame: 'BINGKAI 4 SISI',
      floatingRuler: 'PENGGARIS BEBAS',
      calStatusNot: 'Belum terkalibrasi — perkiraan default layar',
      calStatusCalibrated: 'Terkalibrasi akurat seukuran asli',
      calWrongDevice: 'Bukan perangkat Anda? Klik di sini untuk memilih model.',
      hideInfo: 'Tutup Info Ini',
    },
    calModal: {
      title: 'Kalibrasi Skala Layar',
      badge: 'Presisi Ukuran Asli',
      tabAuto: '1. Deteksi Otomatis',
      tabDevice: 'Pilih Perangkat',
      tabDiagonal: '2. Diagonal Layar',
      tabCard: '3. Kartu ATM / KTP',
      autoDetecting: 'Menganalisis konfigurasi hardware layar Anda…',
      autoMatched: 'Perangkat terdeteksi:',
      autoConfidenceExact: 'Kecocokan Sangat Akurat (Pabrikan)',
      autoConfidenceHigh: 'Kecocokan Tinggi',
      autoConfidenceMedium: 'Perkiraan Tipe Layar',
      autoConfidenceFallback: 'Estimasi Standar (96 PPI)',
      autoDesc: 'Mendeteksi resolusi piksel asli, pixel ratio (DPR), dan spesifikasi pabrikan layar secara instan.',
      applyAuto: 'Terapkan Deteksi Otomatis',
      deviceSearchPlaceholder: 'Cari tipe laptop, HP, tablet, atau monitor…',
      deviceCategoryAll: 'Semua',
      deviceCategoryMacbook: 'MacBook & iMac',
      deviceCategoryIphone: 'iPhone',
      deviceCategoryIpad: 'iPad',
      deviceCategoryMonitor: 'Monitor PC',
      deviceCategoryLaptop: 'Laptop Windows',
      deviceCategoryAndroid: 'Android',
      diagonalLabel: 'Ukuran Diagonal Layar (Inci)',
      diagonalPlaceholder: 'Contoh: 14.0 atau 15.6 atau 27',
      diagonalDesc: 'Masukkan ukuran diagonal layar Anda dalam inci (dapat dilihat di dus/spesifikasi laptop/monitor).',
      diagonalApply: 'Hitung & Terapkan PPI',
      diagonalPresets: 'Pilihan Populer:',
      cardInstruction: 'Tempelkan Kartu ATM / Debit / KTP fisik Anda pada layar di samping kanan.',
      cardInstructionSub: 'Geser slider atau gunakan tombol panah keyboard sampai ukuran kotak di layar sama persis dengan kartu fisik Anda (Standar ISO 85.60 × 53.98 mm).',
      cardAdjustPpi: 'Atur Ukuran Kotak:',
      cardRefLabel: 'Referensi Objek:',
      cardApply: 'Simpan Kalibrasi Kartu',
      resetDefault: 'Reset ke Standar (96 PPI)',
    },
    caliper: {
      title: 'Jangka Sorong Interaktif (Two-Point Measure)',
      pointA: 'Titik A',
      pointB: 'Titik B',
      distance: 'Jarak Terukur',
      deltaX: 'Lebar (ΔX)',
      deltaY: 'Tinggi (ΔY)',
      angle: 'Kemiringan',
      copyValue: 'Salin Hasil',
      close: 'Tutup',
    },
    floatingRuler: {
      title: 'Penggaris Bebas (Draggable & Rotatable)',
      rotate: 'Putar Sudut:',
      resetAngle: '0° (Horizontal)',
      snapAngle: 'Snap 45°/90°',
      close: 'Sembunyikan',
    },
    howTo: {
      badge: 'PANDUAN LENGKAP',
      title: 'Cara Menggunakan Online Penggaris',
      step1Title: '1. Kalibrasi Layar untuk Ukuran Asli 1:1',
      step1Desc: 'Setiap layar memiliki kerapatan piksel (PPI) yang berbeda. Buka menu Kalibrasi untuk menyamakan 1 cm di layar dengan 1 cm fisik di dunia nyata.',
      step2Title: '2. Pilih Sisi Penggaris yang Dibutuhkan',
      step2Desc: 'Pilih penggaris Atas, Bawah, Kiri, Kanan, atau Bingkai 4 Sisi untuk meletakkan barang fisik langsung pada tepi layar kaca Anda.',
      step3Title: '3. Gunakan Garis Panduan & Jangka Sorong',
      step3Desc: 'Klik pada area penggaris untuk membuat garis bantu presisi, atau gunakan Jangka Sorong (Caliper) untuk mengukur jarak antara dua titik.',
      shortcutsTitle: 'Tombol Pintas Keyboard (Shortcuts)',
      shortcutGuides: 'Garis Panduan',
      shortcutCrosshair: 'Crosshair Kursor',
      shortcutGrid: 'Grid Matriks',
      shortcutCaliper: 'Jangka Sorong (Caliper)',
      shortcutFullscreen: 'Layar Penuh (Fullscreen)',
      shortcutTheme: 'Mode Gelap/Terang',
      shortcutClear: 'Hapus Garis Panduan',
      shortcutUnits: 'Ganti Unit (cm/mm/in/px/pt)',
      shortcutHelp: 'Buka Panduan Ini',
      gotIt: 'Mengerti, Mulai Mengukur',
    },
    seo: {
      h1: 'Penggaris Online Akurat Seukuran Asli — cm, mm, dan Inci',
      lead: 'OnlinePenggaris.com adalah alat ukur penggaris digital gratis berbasis web yang mengubah layar laptop, HP, tablet, atau monitor PC Anda menjadi penggaris seukuran asli dengan kalibrasi presisi tinggi.',
      accuracyTitle: 'Akurasi Ukuran Fisik Sebenarnya (1:1 Skala Asli)',
      accuracyText: 'Kebanyakan penggaris web hanya mengasumsikan standar kuno 96 PPI. Padahal layar modern memiliki kerapatan antara 82 PPI (monitor murah) hingga 460+ PPI (Retina Display & HP flagship). Kami menyediakan 3 metode kalibrasi mutakhir agar 1 cm di layar benar-benar sama dengan 1 cm fisik.',
      method1Title: 'Metode 1: Deteksi Perangkat Otomatis',
      method1Text: 'Sistem cerdas kami langsung mengenali resolusi layar, perbandingan pixel ratio (DPR), dan mencocokkannya dengan database spesifikasi pabrikan dari ratusan laptop, tablet, dan smartphone.',
      method2Title: 'Metode 2: Ukuran Diagonal Layar',
      method2Text: 'Cukup masukkan ukuran diagonal layar dalam inci (misalnya 14.0", 15.6", atau 27"). Rumus matematika geometris akan menghitung nilai PPI eksak berdasarkan resolusi layar aktif.',
      method3Title: 'Metode 3: Kalibrasi Kartu ATM / KTP',
      method3Text: 'Gunakan kartu kredit, debit, e-Toll, SIM, atau KTP fisik (standar internasional ISO/IEC 7810: 85.60 mm). Sesuaikan kotak pada layar hingga ukurannya sama persis dengan kartu Anda.',
      featuresTitle: 'Fitur Pengukuran Lengkap & Fleksibel',
      featuresText: 'Tempatkan penggaris pada sisi atas, bawah, kiri, atau kanan. Gunakan penggaris bebas yang dapat diputar 360°, busur derajat untuk mengukur sudut, garis panduan bermagnet, hingga jangka sorong 2 titik.',
      tableTitle: 'Daftar Kerapatan Piksel (PPI) Layar Populer',
      tableSubtitle: 'Referensi spesifikasi kerapatan piksel untuk berbagai jenis layar laptop, monitor, dan smartphone:',
      faqTitle: 'Pertanyaan yang Sering Diajukan (FAQ)',
    },
    footer: {
      home: 'Beranda',
      calGuide: 'Cara Kalibrasi',
      about: 'Tentang Kami',
      privacy: 'Kebijakan Privasi',
      terms: 'Syarat & Ketentuan',
      contact: 'Kontak',
      copyright: '© 2026 Online Penggaris. Gratis digunakan tanpa instalasi.',
    },
  },
  en: {
    siteName: 'Online Penggaris',
    tagline: 'Accurate Actual Size Online Ruler (cm, mm, inches)',
    metaDescription: 'Free accurate online ruler at true physical scale in cm, mm, and inches. Auto screen calibration, diagonal calculation, or credit card alignment for 100% precision.',
    edges: {
      title: 'Ruler Placement',
      left: 'Left Ruler (Vertical)',
      right: 'Right Ruler (Vertical)',
      top: 'Top Ruler (Horizontal)',
      bottom: 'Bottom Ruler (Horizontal)',
      all: '4-Way Frame (Full Border)',
      floating: 'Floating Ruler (Rotatable)',
      protractor: 'Protractor (Angle Meter)',
    },
    tools: {
      guides: 'Guide Lines (G)',
      crosshair: 'Crosshair Cursor (C)',
      grid: 'Matrix Grid (M)',
      caliper: 'Dual Calipers (K)',
      silhouettes: 'Scale Reference Items (O)',
      fullscreen: 'Fullscreen Mode (F)',
      theme: 'Dark / Light Theme (D)',
      calibrate: 'Calibrate Screen',
      help: 'User Guide & Shortcuts (H)',
      clear: 'Clear Guides (Esc)',
      copy: 'Copy Measurement',
      copied: 'Copied!',
    },
    units: {
      cm: 'cm',
      mm: 'mm',
      in: 'in',
      px: 'px',
      pt: 'pt',
    },
    welcome: {
      title: 'Place a ruler on any screen edge',
      subtitle: 'Activate rulers along your display borders or use the quick start actions below:',
      selectEdge: 'SELECT EDGE',
      top: 'TOP',
      bottom: 'BOTTOM',
      left: 'LEFT',
      right: 'RIGHT',
      fullFrame: '4-WAY FRAME',
      floatingRuler: 'FLOATING RULER',
      calStatusNot: 'Not calibrated — default display estimate',
      calStatusCalibrated: 'Calibrated to true physical scale',
      calWrongDevice: 'Wrong device? Click here to choose your exact model.',
      hideInfo: 'Hide Welcome Info',
    },
    calModal: {
      title: 'Screen Size & PPI Calibration',
      badge: 'True Scale Precision',
      tabAuto: '1. Auto-Detect',
      tabDevice: 'Device Catalog',
      tabDiagonal: '2. Screen Diagonal',
      tabCard: '3. Credit Card / ID',
      autoDetecting: 'Analyzing your hardware specifications…',
      autoMatched: 'Detected Device Profile:',
      autoConfidenceExact: 'Exact Factory Match',
      autoConfidenceHigh: 'High Confidence Profile',
      autoConfidenceMedium: 'Estimated Screen Category',
      autoConfidenceFallback: 'Standard Fallback (96 PPI)',
      autoDesc: 'Automatically reads screen bounds, device pixel ratio (DPR), and matches against our hardware database.',
      applyAuto: 'Apply Auto Detection',
      deviceSearchPlaceholder: 'Search laptop, monitor, iPhone, iPad, or Android…',
      deviceCategoryAll: 'All',
      deviceCategoryMacbook: 'MacBook & iMac',
      deviceCategoryIphone: 'iPhone',
      deviceCategoryIpad: 'iPad',
      deviceCategoryMonitor: 'PC Monitors',
      deviceCategoryLaptop: 'Windows Laptops',
      deviceCategoryAndroid: 'Android',
      diagonalLabel: 'Screen Diagonal (Inches)',
      diagonalPlaceholder: 'e.g. 14.0, 15.6, or 27',
      diagonalDesc: 'Enter your display diagonal in inches as specified on your product box or spec sheet.',
      diagonalApply: 'Calculate & Apply PPI',
      diagonalPresets: 'Common Screen Sizes:',
      cardInstruction: 'Hold any physical Credit Card, Debit Card, or ID Card against your screen.',
      cardInstructionSub: 'Adjust the slider or use your keyboard arrow keys until the on-screen card matches the physical card exactly (ISO standard 85.60 × 53.98 mm).',
      cardAdjustPpi: 'Adjust Card Dimensions:',
      cardRefLabel: 'Reference Item:',
      cardApply: 'Save Card Calibration',
      resetDefault: 'Reset to Standard (96 PPI)',
    },
    caliper: {
      title: 'Interactive Dual Calipers (Two-Point Delta)',
      pointA: 'Point A',
      pointB: 'Point B',
      distance: 'Total Span',
      deltaX: 'Width (ΔX)',
      deltaY: 'Height (ΔY)',
      angle: 'Angle',
      copyValue: 'Copy Distance',
      close: 'Close',
    },
    floatingRuler: {
      title: 'Floating Ruler (Draggable & Rotatable)',
      rotate: 'Rotation Angle:',
      resetAngle: '0° (Horizontal)',
      snapAngle: 'Snap 45°/90°',
      close: 'Hide Floating Ruler',
    },
    howTo: {
      badge: 'QUICK START GUIDE',
      title: 'How to Use the Online Ruler',
      step1Title: '1. Calibrate for Actual Physical Size',
      step1Desc: 'Every screen has a unique pixel density (PPI). Click the Calibrate button to ensure 1 cm on screen equals 1 real physical cm.',
      step2Title: '2. Select Your Preferred Ruler Edge',
      step2Desc: 'Activate Top, Bottom, Left, Right, or a 4-Way full border frame to place physical objects directly against your bezel.',
      step3Title: '3. Drop Guides & Use Precision Calipers',
      step3Desc: 'Click anywhere on the ruler canvas to place magnetic guide lines or open the 2-point caliper tool for delta measurements.',
      shortcutsTitle: 'Keyboard Shortcuts',
      shortcutGuides: 'Toggle Guide Lines',
      shortcutCrosshair: 'Toggle Crosshair Cursor',
      shortcutGrid: 'Toggle Matrix Grid',
      shortcutCaliper: 'Toggle Dual Calipers',
      shortcutFullscreen: 'Toggle Fullscreen Mode',
      shortcutTheme: 'Toggle Dark / Light Theme',
      shortcutClear: 'Clear All Guide Lines',
      shortcutUnits: 'Cycle Units (cm/mm/in/px/pt)',
      shortcutHelp: 'Open This Help Guide',
      gotIt: 'Got It, Start Measuring',
    },
    seo: {
      h1: 'Free Accurate Online Ruler — Measure in cm, mm & Inches at Actual Size',
      lead: 'OnlinePenggaris.com is a free, high-precision browser measurement utility that transforms your laptop, smartphone, tablet, or monitor into a 1:1 true-scale physical ruler.',
      accuracyTitle: 'True Physical Scale — Calibrated to Your Screen',
      accuracyText: 'Most web rulers assume a standard 96 PPI, which is inaccurate on modern high-DPI displays ranging from 82 to 460+ PPI. Online Penggaris provides 3 advanced calibration methods for pixel-perfect scale.',
      method1Title: 'Method 1: Auto-Detect Hardware',
      method1Text: 'Our hardware engine detects your screen dimensions, devicePixelRatio (DPR), and matches against our database of 100+ laptops, tablets, and phones.',
      method2Title: 'Method 2: Screen Diagonal Calculation',
      method2Text: 'Enter your screen diagonal in inches (e.g. 13.3″, 14″, 15.6″, 27″). The Pythagorean formula calculates exact horizontal and vertical PPI.',
      method3Title: 'Method 3: Credit Card Alignment',
      method3Text: 'Place any physical bank card or ID card against the screen and adjust the interactive slider until the boundary matches the standard 85.60 mm width.',
      featuresTitle: 'Full-Featured Measurement Studio',
      featuresText: 'Place rulers along any screen edge, use a free-floating 360° rotatable ruler, measure angles with a protractor overlay, drop magnetic guidelines, and inspect two-point distances with interactive calipers.',
      tableTitle: 'Display Pixel Density (PPI) Reference Table',
      tableSubtitle: 'Factory pixel densities for popular laptops, monitors, tablets, and smartphones:',
      faqTitle: 'Frequently Asked Questions',
    },
    footer: {
      home: 'Home',
      calGuide: 'How to Calibrate',
      about: 'About Us',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact',
      copyright: '© 2026 Online Penggaris. Free to use, no installation required.',
    },
  },
};
