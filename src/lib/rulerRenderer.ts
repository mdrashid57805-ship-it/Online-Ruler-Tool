import type { MeasurementUnit } from './calibration';

export interface GuideLine {
  id: string;
  type: 'h' | 'v';
  position: number; // in CSS pixels from origin
}

export interface CaliperState {
  enabled: boolean;
  p1: { x: number; y: number };
  p2: { x: number; y: number };
  activeHandle: 'p1' | 'p2' | 'body' | null;
}

export interface RenderOptions {
  canvas: HTMLCanvasElement;
  edge: 'top' | 'bottom' | 'left' | 'right';
  unit: MeasurementUnit;
  ppi: number;
  isDark: boolean;
  offset?: number;
}

/**
 * Render a single high-DPI edge ruler onto its canvas with exact physical sub-millimeter precision.
 */
export function renderRulerEdge(options: RenderOptions): void {
  const { canvas, edge, unit, ppi, isDark } = options;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
  }

  ctx.save();
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, width, height);

  const isHorizontal = edge === 'top' || edge === 'bottom';
  const length = isHorizontal ? width : height;

  // Colors based on theme
  const bgColor = isDark ? '#11131f' : '#f8fafc';
  const borderColor = isDark ? '#222638' : '#e2e8f0';
  const minorTickColor = isDark ? 'rgba(148, 163, 184, 0.45)' : 'rgba(148, 163, 184, 0.7)';
  const midTickColor = isDark ? 'rgba(203, 213, 225, 0.8)' : 'rgba(71, 85, 105, 0.85)';
  const majorTickColor = isDark ? '#f1f5f9' : '#0f172a';
  const textColor = isDark ? '#e2e8f0' : '#1e293b';
  const unitBadgeColor = isDark ? '#818cf8' : '#4f46e5';

  // Background
  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, width, height);

  // Border line along active inner edge
  ctx.strokeStyle = borderColor;
  ctx.lineWidth = 1;
  ctx.beginPath();
  if (edge === 'top') {
    ctx.moveTo(0, height - 0.5);
    ctx.lineTo(width, height - 0.5);
  } else if (edge === 'bottom') {
    ctx.moveTo(0, 0.5);
    ctx.lineTo(width, 0.5);
  } else if (edge === 'left') {
    ctx.moveTo(width - 0.5, 0);
    ctx.lineTo(width - 0.5, height);
  } else if (edge === 'right') {
    ctx.moveTo(0.5, 0);
    ctx.lineTo(0.5, height);
  }
  ctx.stroke();

  // Unit text style
  ctx.font = '500 10px "JetBrains Mono", ui-monospace, monospace';

  // --- UNIT: CENTIMETER (cm) or MILLIMETER (mm) ---
  if (unit === 'cm' || unit === 'mm') {
    const mmPx = ppi / 25.4;
    const totalMm = Math.ceil(length / mmPx);

    for (let mm = 0; mm <= totalMm; mm++) {
      const pos = Math.round(mm * mmPx) + 0.5;
      if (pos > length) break;

      const is10mm = mm % 10 === 0;
      const is5mm = mm % 5 === 0 && !is10mm;

      let tickHeight = 6;
      let strokeColor = minorTickColor;
      let strokeWidth = 0.8;

      if (is10mm) {
        tickHeight = 20;
        strokeColor = majorTickColor;
        strokeWidth = 1.2;
      } else if (is5mm) {
        tickHeight = 13;
        strokeColor = midTickColor;
        strokeWidth = 1.0;
      }

      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = strokeWidth;

      ctx.beginPath();
      if (edge === 'top') {
        ctx.moveTo(pos, height - tickHeight);
        ctx.lineTo(pos, height);
      } else if (edge === 'bottom') {
        ctx.moveTo(pos, 0);
        ctx.lineTo(pos, tickHeight);
      } else if (edge === 'left') {
        ctx.moveTo(width - tickHeight, pos);
        ctx.lineTo(width, pos);
      } else if (edge === 'right') {
        ctx.moveTo(0, pos);
        ctx.lineTo(tickHeight, pos);
      }
      ctx.stroke();

      // Numbers on major ticks
      if (is10mm && mm > 0) {
        // When unit is 'cm', show 1, 2, 3...
        // When unit is 'mm', show 10, 20, 30...
        const text = unit === 'cm' ? `${mm / 10}` : `${mm}`;
        ctx.fillStyle = is10mm ? majorTickColor : textColor;
        ctx.font = '600 10px "JetBrains Mono", ui-monospace, monospace';

        if (edge === 'top') {
          ctx.textAlign = 'left';
          ctx.textBaseline = 'top';
          ctx.fillText(text, pos + 3, 4);
        } else if (edge === 'bottom') {
          ctx.textAlign = 'left';
          ctx.textBaseline = 'bottom';
          ctx.fillText(text, pos + 3, height - 4);
        } else if (edge === 'left') {
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, 4, pos + 7);
        } else if (edge === 'right') {
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, width - 4, pos + 7);
        }
      }
    }

    // Origin 0 mark + Unit Badge
    ctx.fillStyle = unitBadgeColor;
    ctx.font = 'bold 10px "JetBrains Mono", monospace';
    const originLabel = `0 ${unit}`;
    if (edge === 'top') {
      ctx.textAlign = 'left';
      ctx.fillText(originLabel, 4, height - 8);
    } else if (edge === 'bottom') {
      ctx.textAlign = 'left';
      ctx.fillText(originLabel, 4, 14);
    } else if (edge === 'left') {
      ctx.textAlign = 'left';
      ctx.fillText(originLabel, 4, 14);
    } else if (edge === 'right') {
      ctx.textAlign = 'right';
      ctx.fillText(originLabel, width - 4, 14);
    }

  // --- UNIT: INCHES (in) ---
  } else if (unit === 'in') {
    const inchPx = ppi;
    const sixteenthPx = inchPx / 16;
    const total16th = Math.ceil(length / sixteenthPx);

    for (let i = 0; i <= total16th; i++) {
      const pos = Math.round(i * sixteenthPx) + 0.5;
      if (pos > length) break;

      const isInch = i % 16 === 0;
      const isHalf = i % 8 === 0 && !isInch;
      const isQuarter = i % 4 === 0 && !isHalf && !isInch;
      const isEighth = i % 2 === 0 && !isQuarter && !isHalf && !isInch;

      let tickHeight = 5;
      let strokeColor = minorTickColor;
      let strokeWidth = 0.8;

      if (isInch) {
        tickHeight = 22;
        strokeColor = majorTickColor;
        strokeWidth = 1.2;
      } else if (isHalf) {
        tickHeight = 16;
        strokeColor = midTickColor;
        strokeWidth = 1.0;
      } else if (isQuarter) {
        tickHeight = 11;
        strokeColor = midTickColor;
        strokeWidth = 0.9;
      } else if (isEighth) {
        tickHeight = 8;
        strokeColor = minorTickColor;
        strokeWidth = 0.8;
      }

      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = strokeWidth;

      ctx.beginPath();
      if (edge === 'top') {
        ctx.moveTo(pos, height - tickHeight);
        ctx.lineTo(pos, height);
      } else if (edge === 'bottom') {
        ctx.moveTo(pos, 0);
        ctx.lineTo(pos, tickHeight);
      } else if (edge === 'left') {
        ctx.moveTo(width - tickHeight, pos);
        ctx.lineTo(width, pos);
      } else if (edge === 'right') {
        ctx.moveTo(0, pos);
        ctx.lineTo(tickHeight, pos);
      }
      ctx.stroke();

      if (isInch && i > 0) {
        const inchVal = i / 16;
        const text = `${inchVal}″`;
        ctx.fillStyle = majorTickColor;
        ctx.font = '600 10px "JetBrains Mono", ui-monospace, monospace';

        if (edge === 'top') {
          ctx.textAlign = 'left';
          ctx.textBaseline = 'top';
          ctx.fillText(text, pos + 3, 4);
        } else if (edge === 'bottom') {
          ctx.textAlign = 'left';
          ctx.textBaseline = 'bottom';
          ctx.fillText(text, pos + 3, height - 4);
        } else if (edge === 'left') {
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, 4, pos + 7);
        } else if (edge === 'right') {
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, width - 4, pos + 7);
        }
      }
    }

    // Origin 0 mark + Unit Badge
    ctx.fillStyle = unitBadgeColor;
    ctx.font = 'bold 10px "JetBrains Mono", monospace';
    const originLabel = '0 in';
    if (edge === 'top') {
      ctx.textAlign = 'left';
      ctx.fillText(originLabel, 4, height - 8);
    } else if (edge === 'bottom') {
      ctx.textAlign = 'left';
      ctx.fillText(originLabel, 4, 14);
    } else if (edge === 'left') {
      ctx.textAlign = 'left';
      ctx.fillText(originLabel, 4, 14);
    } else if (edge === 'right') {
      ctx.textAlign = 'right';
      ctx.fillText(originLabel, width - 4, 14);
    }

  // --- UNIT: PIXELS (px) or POINTS (pt) ---
  } else if (unit === 'px' || unit === 'pt') {
    const step = unit === 'px' ? 10 : 6;
    const majorStep = unit === 'px' ? 100 : 72;
    const midStep = unit === 'px' ? 50 : 36;
    const totalSteps = Math.ceil(length / step);

    for (let s = 0; s <= totalSteps; s++) {
      const val = s * step;
      const pos = Math.round(val) + 0.5;
      if (pos > length) break;

      const isMajor = val % majorStep === 0;
      const isMid = val % midStep === 0 && !isMajor;

      let tickHeight = 5;
      let strokeColor = minorTickColor;
      let strokeWidth = 0.8;

      if (isMajor) {
        tickHeight = 18;
        strokeColor = majorTickColor;
        strokeWidth = 1.2;
      } else if (isMid) {
        tickHeight = 10;
        strokeColor = midTickColor;
        strokeWidth = 1.0;
      }

      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = strokeWidth;

      ctx.beginPath();
      if (edge === 'top') {
        ctx.moveTo(pos, height - tickHeight);
        ctx.lineTo(pos, height);
      } else if (edge === 'bottom') {
        ctx.moveTo(pos, 0);
        ctx.lineTo(pos, tickHeight);
      } else if (edge === 'left') {
        ctx.moveTo(width - tickHeight, pos);
        ctx.lineTo(width, pos);
      } else if (edge === 'right') {
        ctx.moveTo(0, pos);
        ctx.lineTo(tickHeight, pos);
      }
      ctx.stroke();

      if (isMajor && val > 0) {
        const text = `${val}`;
        ctx.fillStyle = majorTickColor;
        ctx.font = '600 9px "JetBrains Mono", ui-monospace, monospace';

        if (edge === 'top') {
          ctx.textAlign = 'left';
          ctx.textBaseline = 'top';
          ctx.fillText(text, pos + 3, 4);
        } else if (edge === 'bottom') {
          ctx.textAlign = 'left';
          ctx.textBaseline = 'bottom';
          ctx.fillText(text, pos + 3, height - 4);
        } else if (edge === 'left') {
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, 4, pos + 7);
        } else if (edge === 'right') {
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, width - 4, pos + 7);
        }
      }
    }

    // Origin 0 mark + Unit Badge
    ctx.fillStyle = unitBadgeColor;
    ctx.font = 'bold 10px "JetBrains Mono", monospace';
    const originLabel = `0 ${unit}`;
    if (edge === 'top') {
      ctx.textAlign = 'left';
      ctx.fillText(originLabel, 4, height - 8);
    } else if (edge === 'bottom') {
      ctx.textAlign = 'left';
      ctx.fillText(originLabel, 4, 14);
    } else if (edge === 'left') {
      ctx.textAlign = 'left';
      ctx.fillText(originLabel, 4, 14);
    } else if (edge === 'right') {
      ctx.textAlign = 'right';
      ctx.fillText(originLabel, width - 4, 14);
    }
  }

  ctx.restore();
}

/**
 * Render matrix grid background overlay.
 */
export function renderGridOverlay(
  canvas: HTMLCanvasElement,
  unit: MeasurementUnit,
  ppi: number,
  isDark: boolean
): void {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const dpr = window.devicePixelRatio || 1;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
  }

  ctx.save();
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, width, height);

  const stepPx = unit === 'in' ? ppi * 0.5 : (unit === 'px' ? 50 : (ppi / 2.54)); // 1cm or 0.5 in or 50px
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.04)';
  const majorGridColor = isDark ? 'rgba(99, 102, 241, 0.12)' : 'rgba(83, 58, 253, 0.08)';

  ctx.lineWidth = 1;

  for (let x = 0; x < width; x += stepPx) {
    const isMajor = Math.round(x / stepPx) % 5 === 0;
    ctx.strokeStyle = isMajor ? majorGridColor : gridColor;
    ctx.beginPath();
    ctx.moveTo(Math.round(x) + 0.5, 0);
    ctx.lineTo(Math.round(x) + 0.5, height);
    ctx.stroke();
  }

  for (let y = 0; y < height; y += stepPx) {
    const isMajor = Math.round(y / stepPx) % 5 === 0;
    ctx.strokeStyle = isMajor ? majorGridColor : gridColor;
    ctx.beginPath();
    ctx.moveTo(0, Math.round(y) + 0.5);
    ctx.lineTo(width, Math.round(y) + 0.5);
    ctx.stroke();
  }

  ctx.restore();
}
