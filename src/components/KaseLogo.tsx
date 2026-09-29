import React from 'react';
import officialLogoImg from '../assets/images/kase_official_logo.png';

interface KaseLogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'white';
}

export const KaseLogo: React.FC<KaseLogoProps> = ({ className = '', variant = 'full' }) => {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img
        src={officialLogoImg}
        alt="Kerala Academy for Skills Excellence (KASE) - State Skill Development Mission, Government of Kerala"
        className={`h-11 sm:h-12 md:h-14 w-auto max-w-[280px] sm:max-w-[340px] object-contain transition-opacity duration-150 ${
          variant === 'white' ? 'brightness-0 invert opacity-95' : ''
        }`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};
