import { VariantColorsResolver, defaultVariantColorsResolver } from '@good/ui/core';

/*
 * Custom variant color resolver, used to add customised theme colors for components.
 * Applies to several components; see https://v7.mantine.dev/styles/variants-sizes#variantcolorresolver
 */

export const variantColorResolver: VariantColorsResolver = (input) => {
	const defaultResolvedColors = defaultVariantColorsResolver(input);

	const { color, variant } = input;

	if (variant === 'filled') {
		switch (color) {
			case 'accent':
				return {
					background: 'var(--brand-accent-main)',
					color: 'white',
					hover: 'var(--brand-accent-dark-1)',
					border: 'calc(0.0625rem * var(--mantine-scale)) solid var(--brand-accent-main)',
					// border: "2px solid var(--brand-accent-main)",
				};
			case 'danger':
				return {
					background: 'var(--color-red-main)',
					color: 'white',
					hover: 'var(--color-red-dark-1)',
					border: 'calc(0.0625rem * var(--mantine-scale)) solid var(--color-red-main)',
					// border: "2px solid var(--color-red-main)",
				};
			case 'warning':
				return {
					background: 'var(--color-orange-main)',
					color: 'white',
					hover: 'var(--color-orange-dark-1)',
					border: 'calc(0.0625rem * var(--mantine-scale)) solid var(--color-orange-main)',
					// border: "2px solid var(--color-orange-main)",
				};
			case 'neutral':
				return {
					background: 'var(--brand-body-light-2)',
					color: '--brand-body-dark-2',
					hover: 'var(--brand-body-light-1)',
					border: 'calc(0.0625rem * var(--mantine-scale)) solid var(--brand-body-light-2)',
					// border: "2px solid var(--brand-body-light-2)",
				};
			default:
				return defaultResolvedColors;
		}
	}

	if (variant === 'outline') {
		switch (color) {
			case 'accent':
				return {
					...defaultResolvedColors,
					color: 'var(--brand-accent-main)',
					border: '2px solid var(--brand-body-light-1)',
					hover: 'var(--brand-primary-white)',
				};
			case 'danger':
				return {
					...defaultResolvedColors,
					color: 'var(--color-red-main)',
					border: '2px solid var(--brand-body-light-1)',
					hover: 'var(--brand-primary-white)',
				};
			case 'warning':
				return {
					...defaultResolvedColors,
					color: 'var(--color-orange-main)',
					border: '2px solid var(--brand-body-light-1)',
					hover: 'var(--brand-primary-white)',
				};
			case 'neutral':
				return {
					...defaultResolvedColors,
					color: 'var(--brand-body-dark-2)',
					border: '2px solid var(--brand-body-light-1)',
					hover: 'var(--brand-body-light-2)',
				};
			default:
				return defaultResolvedColors;
		}
	}

	if (variant === 'transparent') {
		switch (color) {
			case 'accent':
				return {
					...defaultResolvedColors,
					color: 'var(--brand-accent-main)',
					border: '2px solid var(--color-misc-transparent)',
					// border: "calc(0.0625rem * var(--mantine-scale)) solid var(--color-misc-transparent)",
				};
			case 'danger':
				return {
					...defaultResolvedColors,
					color: 'var(--color-red-main)',
					border: '2px solid var(--color-misc-transparent)',
					// border: "calc(0.0625rem * var(--mantine-scale)) solid var(--color-misc-transparent)",
				};
			case 'warning':
				return {
					...defaultResolvedColors,
					color: 'var(--color-orange-main)',
					border: '2px solid var(--color-misc-transparent)',
					// border: "calc(0.0625rem * var(--mantine-scale)) solid var(--color-misc-transparent)",
				};
			case 'neutral':
				return {
					...defaultResolvedColors,
					color: 'var(--brand-body-dark-2)',
					border: '2px solid var(--color-misc-transparent)',
					hover: 'var(--brand-body-light-2)',
					// border: "calc(0.0625rem * var(--mantine-scale)) solid var(--color-misc-transparent)",
				};
			default:
				return defaultResolvedColors;
		}
	}

	return defaultResolvedColors;
};
