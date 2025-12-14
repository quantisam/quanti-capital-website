/**
 * Quanti Capital Design System
 * Extracted from iOS 15 UI Kit + Modern Gray Theme
 * 
 * Usage:
 *   import { colors, typography, spacing, components } from '@/lib/design-system';
 */

// =============================================================================
// COLOR PALETTE
// =============================================================================

export const colors = {
  // iOS 15 System Colors (Light Mode)
  system: {
    blue: '#007AFF',
    green: '#34C759',
    indigo: '#5856D6',
    orange: '#FF9500',
    pink: '#FF2D55',
    purple: '#AF52DE',
    red: '#FF3B30',
    teal: '#5AC8FA',
    yellow: '#FFCC00',
  },

  // iOS 15 System Colors (Dark Mode)
  systemDark: {
    blue: '#0A84FF',
    green: '#30DB5B',
    indigo: '#5E5CE6',
    orange: '#FF9F0A',
    pink: '#FF6482',
    purple: '#BF5AF2',
    red: '#FF453A',
    teal: '#64D2FF',
    yellow: '#FFD60A',
  },

  // iOS 15 Grays (Light Mode)
  gray: {
    1: '#8E8E93',
    2: '#AEAEB2',
    3: '#C7C7CC',
    4: '#D1D1D6',
    5: '#E5E5EA',
    6: '#F2F2F7',
  },

  // iOS 15 Grays (Dark Mode)
  grayDark: {
    1: '#8E8E93',
    2: '#636366',
    3: '#48484A',
    4: '#3A3A3C',
    5: '#2C2C2E',
    6: '#1C1C1E',
  },

  // Modern Gray Theme for Quanti Capital (B2B Premium)
  quanti: {
    // Primary neutrals
    white: '#FFFFFF',
    black: '#000000',
    
    // Background tiers
    bgBase: '#F9FAFB',
    bgSurface: '#FFFFFF',
    bgSubtle: '#F3F4F6',
    bgDark: '#111827',
    bgDarker: '#030712',
    
    // Text colors
    textPrimary: '#111827',
    textSecondary: '#4B5563',
    textMuted: '#6B7280',
    textDisabled: '#9CA3AF',
    textInverse: '#F9FAFB',
    
    // Borders
    borderSubtle: '#E5E7EB',
    borderMid: '#D1D5DB',
    borderStrong: '#9CA3AF',
    
    // Accent (subtle indigo for CTAs)
    accent: '#4F46E5',
    accentHover: '#4338CA',
    accentLight: '#EEF2FF',
    
    // Status
    success: '#16A34A',
    successLight: '#DCFCE7',
    error: '#DC2626',
    errorLight: '#FEF2F2',
    warning: '#F97316',
    warningLight: '#FFF7ED',
    info: '#0EA5E9',
    infoLight: '#E0F2FE',
  },
};

// =============================================================================
// TYPOGRAPHY
// =============================================================================

export const typography = {
  // Font families
  fontFamily: {
    display: '"SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    text: '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: '"SF Mono", "Fira Code", "Consolas", monospace',
  },

  // iOS 15 Type Scale (adapted for web)
  scale: {
    largeTitle: { size: '34px', lineHeight: '41px', weight: 700, family: 'display' },
    title1: { size: '28px', lineHeight: '34px', weight: 700, family: 'display' },
    title2: { size: '22px', lineHeight: '28px', weight: 700, family: 'display' },
    title3: { size: '20px', lineHeight: '25px', weight: 600, family: 'display' },
    headline: { size: '17px', lineHeight: '22px', weight: 600, family: 'text' },
    body: { size: '17px', lineHeight: '22px', weight: 400, family: 'text' },
    callout: { size: '16px', lineHeight: '21px', weight: 400, family: 'text' },
    subheadline: { size: '15px', lineHeight: '20px', weight: 400, family: 'text' },
    footnote: { size: '13px', lineHeight: '18px', weight: 400, family: 'text' },
    caption1: { size: '12px', lineHeight: '16px', weight: 400, family: 'text' },
    caption2: { size: '11px', lineHeight: '13px', weight: 400, family: 'text' },
  },

  // Web-optimized scale for Quanti Capital
  web: {
    display: { size: '48px', lineHeight: '1.1', weight: 500, tracking: '-0.02em' },
    h1: { size: '36px', lineHeight: '1.2', weight: 500, tracking: '-0.01em' },
    h2: { size: '30px', lineHeight: '1.25', weight: 500, tracking: '0' },
    h3: { size: '24px', lineHeight: '1.3', weight: 500, tracking: '0' },
    h4: { size: '20px', lineHeight: '1.35', weight: 500, tracking: '0' },
    bodyLarge: { size: '18px', lineHeight: '1.6', weight: 400, tracking: '0' },
    body: { size: '16px', lineHeight: '1.6', weight: 400, tracking: '0' },
    bodySmall: { size: '14px', lineHeight: '1.5', weight: 400, tracking: '0' },
    label: { size: '12px', lineHeight: '1.4', weight: 500, tracking: '0.05em', transform: 'uppercase' },
  },
};

// =============================================================================
// SPACING
// =============================================================================

export const spacing = {
  px: '1px',
  0: '0',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  2.5: '10px',
  3: '12px',
  3.5: '14px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  11: '44px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
};

// =============================================================================
// COMPONENT STYLES
// =============================================================================

export const components = {
  // Buttons
  button: {
    primary: {
      bg: colors.quanti.black,
      bgHover: '#1F2937',
      text: colors.quanti.white,
      border: 'none',
      radius: '8px',
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 500,
    },
    secondary: {
      bg: 'transparent',
      bgHover: colors.quanti.bgSubtle,
      text: colors.quanti.textPrimary,
      border: `1px solid ${colors.quanti.borderMid}`,
      radius: '8px',
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 500,
    },
    ghost: {
      bg: 'transparent',
      bgHover: colors.quanti.bgSubtle,
      text: colors.quanti.textSecondary,
      border: 'none',
      radius: '8px',
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 500,
    },
    accent: {
      bg: colors.quanti.accent,
      bgHover: colors.quanti.accentHover,
      text: colors.quanti.white,
      border: 'none',
      radius: '8px',
      padding: '12px 24px',
      fontSize: '16px',
      fontWeight: 500,
    },
    // iOS-style pill buttons
    pill: {
      radius: '999px',
      padding: '10px 20px',
    },
  },

  // Inputs
  input: {
    default: {
      bg: colors.quanti.bgSurface,
      border: `1px solid ${colors.quanti.borderMid}`,
      borderFocus: colors.quanti.accent,
      radius: '8px',
      padding: '12px 16px',
      fontSize: '16px',
      text: colors.quanti.textPrimary,
      placeholder: colors.quanti.textMuted,
    },
    error: {
      border: colors.quanti.error,
      bg: colors.quanti.errorLight,
    },
  },

  // Cards
  card: {
    default: {
      bg: colors.quanti.bgSurface,
      border: `1px solid ${colors.quanti.borderSubtle}`,
      radius: '12px',
      padding: '24px',
      shadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    },
    elevated: {
      bg: colors.quanti.bgSurface,
      border: 'none',
      radius: '12px',
      padding: '24px',
      shadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
    },
    dark: {
      bg: colors.quanti.bgDark,
      border: `1px solid ${colors.grayDark[4]}`,
      radius: '12px',
      padding: '24px',
      shadow: 'none',
    },
  },

  // Navigation
  nav: {
    height: '80px',
    bg: 'rgba(255, 255, 255, 0.95)',
    backdropBlur: '12px',
    borderBottom: `1px solid ${colors.quanti.borderSubtle}`,
  },

  // Section
  section: {
    paddingY: { mobile: '64px', desktop: '96px' },
    paddingX: { mobile: '24px', desktop: '48px' },
    maxWidth: '1280px',
  },

  // Dividers
  divider: {
    light: `1px solid ${colors.quanti.borderSubtle}`,
    dark: `1px solid ${colors.grayDark[4]}`,
  },
};

// =============================================================================
// TAILWIND CSS CLASS UTILITIES
// =============================================================================

export const tw = {
  // Buttons
  btnPrimary: 'bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium',
  btnSecondary: 'bg-transparent text-gray-900 px-6 py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors font-medium',
  btnGhost: 'bg-transparent text-gray-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium',
  btnAccent: 'bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium',
  btnPill: 'rounded-full',
  btnSmall: 'px-4 py-2 text-sm',
  btnLarge: 'px-8 py-4 text-lg',

  // Inputs
  input: 'w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors',
  inputError: 'border-red-500 bg-red-50 focus:border-red-500 focus:ring-red-500',
  textarea: 'w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none',
  select: 'w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors',
  label: 'block text-sm font-medium text-gray-700 mb-2',

  // Cards
  card: 'bg-white border border-gray-200 rounded-xl p-6 shadow-sm',
  cardElevated: 'bg-white rounded-xl p-6 shadow-lg',
  cardDark: 'bg-gray-900 border border-gray-800 rounded-xl p-6 text-white',
  cardHover: 'hover:border-gray-400 hover:shadow-md transition-all cursor-pointer',

  // Layout
  container: 'max-w-7xl mx-auto px-6 lg:px-12',
  section: 'py-16 md:py-24 px-6 lg:px-12',
  sectionDark: 'py-16 md:py-24 px-6 lg:px-12 bg-gray-900 text-white',

  // Typography
  displayText: 'text-5xl md:text-6xl font-medium tracking-tight',
  h1: 'text-4xl md:text-5xl font-medium tracking-tight',
  h2: 'text-3xl md:text-4xl font-medium',
  h3: 'text-2xl md:text-3xl font-medium',
  h4: 'text-xl font-medium',
  bodyLarge: 'text-lg text-gray-600 font-light leading-relaxed',
  body: 'text-base text-gray-600 leading-relaxed',
  bodySmall: 'text-sm text-gray-500',
  label: 'text-xs uppercase tracking-wider font-medium text-gray-500',

  // Navigation
  navLink: 'text-gray-600 hover:text-black transition-colors text-sm',
  navLinkActive: 'text-black font-medium',

  // Value Props (border-left accent style)
  valueProp: 'border-l-2 border-gray-300 pl-6',
  valuePropDark: 'border-l-2 border-gray-700 pl-6',

  // Grid patterns
  grid2: 'grid grid-cols-1 md:grid-cols-2 gap-8',
  grid3: 'grid grid-cols-1 md:grid-cols-3 gap-8',
  grid4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6',

  // Flexbox patterns
  flexCenter: 'flex items-center justify-center',
  flexBetween: 'flex items-center justify-between',
  flexCol: 'flex flex-col',
  flexColCenter: 'flex flex-col items-center',

  // Status badges
  badgeSuccess: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800',
  badgeError: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800',
  badgeWarning: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800',
  badgeInfo: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800',
  badgeNeutral: 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800',

  // Alerts
  alertSuccess: 'p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg',
  alertError: 'p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg',
  alertWarning: 'p-4 bg-orange-50 border border-orange-200 text-orange-800 rounded-lg',
  alertInfo: 'p-4 bg-blue-50 border border-blue-200 text-blue-800 rounded-lg',

  // Dividers
  divider: 'border-t border-gray-200',
  dividerDark: 'border-t border-gray-800',

  // Icons
  iconSm: 'w-4 h-4',
  iconMd: 'w-5 h-5',
  iconLg: 'w-6 h-6',
  iconXl: 'w-8 h-8',
};

// =============================================================================
// EXPORTS
// =============================================================================

export default {
  colors,
  typography,
  spacing,
  components,
  tw,
};
