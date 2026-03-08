/**
 * Typography Components Index
 * Exports all typography-related components
 */

import React from 'react';

export { default as Heading } from './Heading';
export { default as Text } from './Text';
export { default as Link } from './Link';

// Composants de convenance pour les titres
import Heading from './Heading';

export const H1 = (props) => React.createElement(Heading, { level: 1, ...props });
export const H2 = (props) => React.createElement(Heading, { level: 2, ...props });
export const H3 = (props) => React.createElement(Heading, { level: 3, ...props });
export const H4 = (props) => React.createElement(Heading, { level: 4, ...props });
export const H5 = (props) => React.createElement(Heading, { level: 5, ...props });
export const H6 = (props) => React.createElement(Heading, { level: 6, ...props });

// Composants de convenance pour le texte
import Text from './Text';

export const Body = (props) => React.createElement(Text, { variant: 'body', ...props });
export const Caption = (props) => React.createElement(Text, { variant: 'caption', ...props });
export const Label = (props) => React.createElement(Text, { variant: 'label', ...props });
export const Code = (props) => React.createElement(Text, { variant: 'code', as: 'code', ...props });
export const Quote = (props) => React.createElement(Text, { variant: 'quote', as: 'blockquote', ...props });

