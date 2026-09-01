import { detectCurrentDevice } from './devices';

export type MeasurementUnit = 'cm' | 'mm' | 'in' | 'px' | 'pt';
export type CalibrationMethod = 'auto' | 'device' | 'diagonal' | 'card' | 'custom';

export interface CalibrationState {
  ppi: number;
  method: CalibrationMethod;
  deviceName: string;
  isCalibrated: boolean;
  calibratedAt: string;
}

export const STORAGE_KEY_CALIBRATION = 'onlinepenggaris_calibration_v1';
export const STORAGE_KEY_UNIT = 'onlinepenggaris_unit_v1';
export const STORAGE_KEY_THEME = 'onlinepenggaris_theme_v1';
export const STORAGE_KEY_EDGES = 'onlinepenggaris_edges_v1';
export const STORAGE_KEY_LANG = 'onlinepenggaris_lang_v1';

// ISO/IEC 7810 ID-1 standard physical size
export const PHYSICAL_CARD = {
  widthMm: 85.60,
  heightMm: 53.98,
  widthIn: 85.60 / 25.4, // ~3.37008 inches
  heightIn: 53.98 / 25.4, // ~2.12520 inches
  aspectRatio: 85.60 / 53.98,
};

export const REFERENCE_OBJECTS = [
  { id: 'card', name: 'Credit Card / KTP', widthMm: 85.60, heightMm: 53.98 },
  { id: 'coin-idr', name: 'Koin Rp 1.000', widthMm: 24.15, heightMm: 24.15 },
  { id: 'coin-usd', name: 'US Quarter ($0.25)', widthMm: 24.26, heightMm: 24.26 },
  { id: 'coin-eur', name: 'Euro (€1)', widthMm: 23.25, heightMm: 23.25 },
  { id: 'battery-aa', name: 'AA Battery', widthMm: 50.5, heightMm: 14.5 },
  { id: 'sim-card', name: 'Nano SIM Card', widthMm: 12.3, heightMm: 8.8 },
];

/**
 * Get current calibration state from localStorage or auto-detect fallback.
 */
export function getSavedCalibration(): CalibrationState {
  if (typeof window === 'undefined') {
    return {
      ppi: 96,
      method: 'auto',
      deviceName: 'Default Display (96 PPI)',
      isCalibrated: false,
      calibratedAt: new Date().toISOString(),
    };
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEY_CALIBRATION);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed.ppi === 'number') {
        const dpr = window.devicePixelRatio || 1;
        // If legacy stored physical PPI > 250 on high-DPI screens, normalize to CSS space
        if (parsed.ppi > 260 && dpr > 1) {
          parsed.ppi = Math.round((parsed.ppi / dpr) * 10) / 10;
          localStorage.setItem(STORAGE_KEY_CALIBRATION, JSON.stringify(parsed));
        }
        if (parsed.ppi >= 40 && parsed.ppi <= 300) {
          return parsed;
        }
      }
    }
  } catch (e) {
    console.warn('Failed to parse saved calibration:', e);
  }

  // Auto-detect default
  const detected = detectCurrentDevice();
  return {
    ppi: detected.estimatedPpi,
    method: 'auto',
    deviceName: detected.match ? detected.match.name : `Detected Screen (~${Math.round(detected.estimatedPpi)} PPI)`,
    isCalibrated: detected.confidence === 'exact' || detected.confidence === 'high',
    calibratedAt: new Date().toISOString(),
  };
}

/**
 * Save calibration state to localStorage and broadcast change.
 */
export function saveCalibration(state: CalibrationState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_CALIBRATION, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent('calibration-changed', { detail: state }));
  } catch (e) {
    console.error('Failed to save calibration:', e);
  }
}

/**
 * Calculate PPI from native screen diagonal (inches) and resolution.
 */
export function calculatePpiFromDiagonal(diagonalInches: number, widthPx?: number, heightPx?: number): number {
  if (diagonalInches <= 0) return 96;
  const dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1;
  const w = widthPx ?? (typeof screen !== 'undefined' ? screen.width * dpr : 1920);
  const h = heightPx ?? (typeof screen !== 'undefined' ? screen.height * dpr : 1080);
  
  // PPI = sqrt(w^2 + h^2) / diagonal
  const diagonalPx = Math.sqrt(w * w + h * h);
  // We return CSS-level or physical PPI. In CSS canvas measurements, 1 CSS inch = PPI / dpr or physical PPI
  // Standard CSS pixels per physical inch:
  return Math.round((diagonalPx / diagonalInches / dpr) * 10) / 10;
}

/**
 * Convert pixel distance to specified unit.
 */
export function convertPxToUnit(px: number, unit: MeasurementUnit, ppi: number): number {
  switch (unit) {
    case 'cm':
      return (px / ppi) * 2.54;
    case 'mm':
      return (px / ppi) * 25.4;
    case 'in':
      return px / ppi;
    case 'pt':
      return (px / ppi) * 72;
    case 'px':
    default:
      return px;
  }
}

/**
 * Convert unit distance to CSS pixels.
 */
export function convertUnitToPx(val: number, unit: MeasurementUnit, ppi: number): number {
  switch (unit) {
    case 'cm':
      return (val / 2.54) * ppi;
    case 'mm':
      return (val / 25.4) * ppi;
    case 'in':
      return val * ppi;
    case 'pt':
      return (val / 72) * ppi;
    case 'px':
    default:
      return val;
  }
}

/**
 * Format inch fractional representation (e.g. 2 3/16″).
 */
export function formatFractionalInches(inches: number): string {
  const isNegative = inches < 0;
  const abs = Math.abs(inches);
  const whole = Math.floor(abs);
  const remainder = abs - whole;

  // Round to nearest 1/32
  const fraction32 = Math.round(remainder * 32);
  if (fraction32 === 0) return `${isNegative ? '-' : ''}${whole}″`;
  if (fraction32 === 32) return `${isNegative ? '-' : ''}${whole + 1}″`;

  // Simplify fraction
  let num = fraction32;
  let den = 32;
  while (num % 2 === 0 && den % 2 === 0) {
    num /= 2;
    den /= 2;
  }

  const sign = isNegative ? '-' : '';
  if (whole === 0) {
    return `${sign}${num}/${den}″`;
  }
  return `${sign}${whole} ${num}/${den}″`;
}

/**
 * Nicely format any measurement string with units.
 */
export function formatMeasurement(
  px: number,
  unit: MeasurementUnit,
  ppi: number,
  options: { fractionalInches?: boolean; precision?: number } = {}
): string {
  const { fractionalInches = false, precision = 2 } = options;
  const val = convertPxToUnit(px, unit, ppi);

  switch (unit) {
    case 'mm':
      return `${val.toFixed(precision > 1 ? 1 : precision)} mm`;
    case 'cm':
      return `${val.toFixed(precision)} cm`;
    case 'in':
      if (fractionalInches) {
        return `${formatFractionalInches(val)} (${val.toFixed(2)}″)`;
      }
      return `${val.toFixed(precision)}″`;
    case 'pt':
      return `${val.toFixed(1)} pt`;
    case 'px':
    default:
      return `${Math.round(val)} px`;
  }
}
