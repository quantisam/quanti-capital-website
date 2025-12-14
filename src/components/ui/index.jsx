/**
 * Quanti Capital UI Component Library
 * Reusable React components based on iOS 15 UI Kit + Modern Gray Theme
 * 
 * Usage:
 *   import { Button, Input, Card, Section, Badge } from '@/components/ui';
 */

import React from 'react';
import { ArrowRight, Check, AlertCircle, Info, AlertTriangle } from 'lucide-react';

// =============================================================================
// BUTTON COMPONENT
// =============================================================================

export const Button = ({
  children,
  variant = 'primary',
  size = 'default',
  pill = false,
  icon,
  iconPosition = 'right',
  disabled = false,
  loading = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800 focus:ring-gray-500 disabled:bg-gray-400',
    secondary: 'bg-transparent text-gray-900 border border-gray-300 hover:bg-gray-50 focus:ring-gray-300 disabled:text-gray-400',
    ghost: 'bg-transparent text-gray-600 hover:bg-gray-100 focus:ring-gray-200 disabled:text-gray-400',
    accent: 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 disabled:bg-indigo-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-400',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm gap-1.5',
    default: 'px-6 py-3 text-base gap-2',
    large: 'px-8 py-4 text-lg gap-2.5',
  };

  const radiusClass = pill ? 'rounded-full' : 'rounded-lg';

  return (
    <button
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${radiusClass}
        ${disabled || loading ? 'cursor-not-allowed opacity-70' : ''}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4\" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {icon && iconPosition === 'left' && !loading && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && !loading && <span className="shrink-0">{icon}</span>}
    </button>
  );
};

// =============================================================================
// TEXT LINK COMPONENT
// =============================================================================

export const TextLink = ({
  children,
  href = '#',
  showArrow = true,
  className = '',
  ...props
}) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center text-sm font-medium group hover:text-gray-600 transition-colors ${className}`}
      {...props}
    >
      <span className="mr-2">{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      )}
    </a>
  );
};

// =============================================================================
// INPUT COMPONENT
// =============================================================================

export const Input = ({
  label,
  error,
  helpText,
  className = '',
  ...props
}) => {
  const inputClasses = `
    w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder-gray-500
    focus:outline-none focus:ring-1 transition-colors
    ${error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
    }
    disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
  `;

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <input className={inputClasses} {...props} />
      {error && (
        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
      {helpText && !error && (
        <p className="mt-1.5 text-sm text-gray-500">{helpText}</p>
      )}
    </div>
  );
};

// =============================================================================
// TEXTAREA COMPONENT
// =============================================================================

export const Textarea = ({
  label,
  error,
  helpText,
  className = '',
  rows = 4,
  ...props
}) => {
  const textareaClasses = `
    w-full px-4 py-3 border rounded-lg bg-white text-gray-900 placeholder-gray-500 resize-none
    focus:outline-none focus:ring-1 transition-colors
    ${error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
    }
    disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
  `;

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <textarea className={textareaClasses} rows={rows} {...props} />
      {error && (
        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
      {helpText && !error && (
        <p className="mt-1.5 text-sm text-gray-500">{helpText}</p>
      )}
    </div>
  );
};

// =============================================================================
// SELECT COMPONENT
// =============================================================================

export const Select = ({
  label,
  error,
  options = [],
  placeholder = 'Select an option',
  className = '',
  ...props
}) => {
  const selectClasses = `
    w-full px-4 py-3 border rounded-lg bg-white text-gray-900
    focus:outline-none focus:ring-1 transition-colors appearance-none
    ${error
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
    }
    disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
  `;

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <select className={selectClasses} {...props}>
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {error && (
        <p className="mt-1.5 text-sm text-red-600 flex items-center gap-1">
          <AlertCircle className="w-4 h-4" />
          {error}
        </p>
      )}
    </div>
  );
};

// =============================================================================
// CARD COMPONENT
// =============================================================================

export const Card = ({
  children,
  variant = 'default',
  hoverable = false,
  className = '',
  ...props
}) => {
  const variants = {
    default: 'bg-white border border-gray-200 shadow-sm',
    elevated: 'bg-white shadow-lg',
    dark: 'bg-gray-900 border border-gray-800 text-white',
    outline: 'bg-transparent border border-gray-200',
  };

  const hoverClass = hoverable
    ? 'hover:border-gray-400 hover:shadow-md transition-all cursor-pointer'
    : '';

  return (
    <div
      className={`rounded-xl p-6 ${variants[variant]} ${hoverClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// =============================================================================
// SECTION COMPONENT
// =============================================================================

export const Section = ({
  children,
  variant = 'light',
  className = '',
  id,
  ...props
}) => {
  const variants = {
    light: 'bg-white',
    subtle: 'bg-gray-50',
    dark: 'bg-gray-900 text-white',
    black: 'bg-black text-white',
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 px-6 lg:px-12 ${variants[variant]} ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

// =============================================================================
// SECTION HEADER COMPONENT
// =============================================================================

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  const alignClass = centered ? 'text-center' : '';
  const maxWidthClass = centered ? 'max-w-3xl mx-auto' : 'max-w-4xl';

  return (
    <div className={`mb-12 md:mb-16 ${maxWidthClass} ${alignClass} ${className}`}>
      {eyebrow && (
        <div className="text-xs uppercase tracking-wider font-medium text-gray-500 mb-4">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

// =============================================================================
// VALUE PROP BLOCK COMPONENT
// =============================================================================

export const ValueProp = ({
  title,
  description,
  variant = 'light',
  className = '',
}) => {
  const borderClass = variant === 'dark' ? 'border-gray-700' : 'border-gray-300';

  return (
    <div className={`border-l-2 ${borderClass} pl-6 ${className}`}>
      <h4 className="text-xl md:text-2xl font-light mb-3">{title}</h4>
      <p className={`font-light leading-relaxed ${variant === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
};

// =============================================================================
// STAT CARD COMPONENT
// =============================================================================

export const StatCard = ({
  label,
  value,
  description,
  className = '',
}) => {
  return (
    <div className={className}>
      <div className="text-xs uppercase tracking-wider font-medium text-gray-500 mb-2">
        {label}
      </div>
      <div className="text-3xl md:text-4xl font-light mb-1">
        {value}
      </div>
      {description && (
        <div className="text-sm text-gray-600 font-light">
          {description}
        </div>
      )}
    </div>
  );
};

// =============================================================================
// BADGE COMPONENT
// =============================================================================

export const Badge = ({
  children,
  variant = 'neutral',
  className = '',
}) => {
  const variants = {
    neutral: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    error: 'bg-red-100 text-red-800',
    warning: 'bg-orange-100 text-orange-800',
    info: 'bg-blue-100 text-blue-800',
    accent: 'bg-indigo-100 text-indigo-800',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

// =============================================================================
// ALERT COMPONENT
// =============================================================================

export const Alert = ({
  children,
  variant = 'info',
  title,
  className = '',
}) => {
  const variants = {
    success: {
      bg: 'bg-green-50 border-green-200 text-green-800',
      icon: <Check className="w-5 h-5 text-green-600" />,
    },
    error: {
      bg: 'bg-red-50 border-red-200 text-red-800',
      icon: <AlertCircle className="w-5 h-5 text-red-600" />,
    },
    warning: {
      bg: 'bg-orange-50 border-orange-200 text-orange-800',
      icon: <AlertTriangle className="w-5 h-5 text-orange-600" />,
    },
    info: {
      bg: 'bg-blue-50 border-blue-200 text-blue-800',
      icon: <Info className="w-5 h-5 text-blue-600" />,
    },
  };

  const { bg, icon } = variants[variant];

  return (
    <div className={`p-4 border rounded-lg ${bg} ${className}`}>
      <div className="flex gap-3">
        <div className="shrink-0">{icon}</div>
        <div>
          {title && <div className="font-medium mb-1">{title}</div>}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};

// =============================================================================
// DIVIDER COMPONENT
// =============================================================================

export const Divider = ({
  variant = 'light',
  className = '',
}) => {
  const borderClass = variant === 'dark' ? 'border-gray-800' : 'border-gray-200';
  return <hr className={`border-t ${borderClass} ${className}`} />;
};

// =============================================================================
// ICON BOX COMPONENT
// =============================================================================

export const IconBox = ({
  icon: Icon,
  variant = 'default',
  size = 'default',
  className = '',
}) => {
  const variants = {
    default: 'bg-gray-100 text-gray-600',
    accent: 'bg-indigo-100 text-indigo-600',
    dark: 'bg-gray-800 text-white',
  };

  const sizes = {
    small: 'w-10 h-10',
    default: 'w-12 h-12',
    large: 'w-16 h-16',
  };

  const iconSizes = {
    small: 18,
    default: 24,
    large: 32,
  };

  return (
    <div
      className={`${sizes[size]} rounded-xl flex items-center justify-center ${variants[variant]} ${className}`}
    >
      <Icon size={iconSizes[size]} strokeWidth={1.5} />
    </div>
  );
};

// =============================================================================
// CONTAINER COMPONENT
// =============================================================================

export const Container = ({
  children,
  size = 'default',
  className = '',
}) => {
  const sizes = {
    small: 'max-w-3xl',
    default: 'max-w-7xl',
    large: 'max-w-screen-2xl',
    full: 'max-w-full',
  };

  return (
    <div className={`${sizes[size]} mx-auto px-6 lg:px-12 ${className}`}>
      {children}
    </div>
  );
};

// =============================================================================
// EXPORTS
// =============================================================================

export default {
  Button,
  TextLink,
  Input,
  Textarea,
  Select,
  Card,
  Section,
  SectionHeader,
  ValueProp,
  StatCard,
  Badge,
  Alert,
  Divider,
  IconBox,
  Container,
};
