# Agent Guidelines

## Layout Components

**Do not use `Box` from `@radix-ui/themes`.** Use `Flex` instead for all layout needs. This rule is enforced by ESLint (`no-restricted-imports`).

## UI Components

**Use Radix Themes components instead of native HTML elements.** Prefer `Text`, `Heading`, `Link`, `Button`, `Avatar`, `Flex`, etc. from `@radix-ui/themes` over raw `<p>`, `<h1>`, `<a>`, `<img>`, `<span>`, `<header>`, `<footer>`, and similar. Use `role` attributes (e.g. `role="banner"`, `role="contentinfo"`) when Radix has no semantic equivalent.

## Styling

**Use Radix styling first before using Tailwind CSS classes.** Always determine whether you can use a Radix native prop such as (`px`, `py`, `size`, `weight`, `color`, `mx`, etc.) before using Tailwind CSS classes.

**Do not use inline `style` props.** The point of Radix is to keep formatting standard. Use Radix component props (size, weight, color, spacing props, etc.) exclusively.
