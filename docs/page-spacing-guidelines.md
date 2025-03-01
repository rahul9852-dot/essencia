# Page Spacing Guidelines

## Overview

This document outlines the guidelines for maintaining consistent spacing and padding in page layouts, particularly in relation to the fixed navbar. Following these guidelines will ensure a consistent user experience across the application.

## The PageContainer Component

We've created a reusable `PageContainer` component to handle proper spacing with the navbar. This component should be used as the outer wrapper for all page content.

### Import

```tsx
import PageContainer from '@/lib/components/PageContainer/PageContainer';
```

### Basic Usage

```tsx
export default function YourPage() {
  return <PageContainer>{/* Your page content here */}</PageContainer>;
}
```

### Props

The `PageContainer` component accepts the following props:

| Prop               | Type      | Default    | Description                                  |
| ------------------ | --------- | ---------- | -------------------------------------------- |
| `children`         | ReactNode | (required) | The page content                             |
| `className`        | string    | `''`       | Additional classes to apply to the container |
| `withGradient`     | boolean   | `false`    | Whether to apply a gradient background       |
| `withExtraPadding` | boolean   | `false`    | Whether to add extra padding at the bottom   |

### Examples

#### Basic Page

```tsx
<PageContainer>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1>Your Page Title</h1>
    <p>Your content here...</p>
  </div>
</PageContainer>
```

#### Page with Gradient Background

```tsx
<PageContainer withGradient>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1>Your Page Title</h1>
    <p>Your content here...</p>
  </div>
</PageContainer>
```

#### Page with Extra Bottom Padding

```tsx
<PageContainer withExtraPadding>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1>Your Page Title</h1>
    <p>Your content here...</p>
  </div>
</PageContainer>
```

#### Page with Custom Classes

```tsx
<PageContainer className="bg-gray-100">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1>Your Page Title</h1>
    <p>Your content here...</p>
  </div>
</PageContainer>
```

### Dynamic Routes

For dynamic routes (like category or product pages), make sure to use the PageContainer component as well:

```tsx
// Example for a dynamic category page
export default function CategoryPage({ params }) {
  const { category } = params;

  return (
    <PageContainer>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1>{category} Collection</h1>
        {/* Category content */}
      </div>
    </PageContainer>
  );
}
```

## Spacing Guidelines

### Top Padding

The `PageContainer` component automatically adds the following top padding to account for the fixed navbar:

- Mobile: `pt-28` (7rem, 112px)
- Desktop: `sm:pt-32` (8rem, 128px)

### Bottom Padding

The `PageContainer` component adds the following bottom padding by default:

- Default: `pb-16` (4rem, 64px)
- With extra padding: `pb-20 sm:pb-24` (5rem/6rem, 80px/96px)

### Content Width

For consistent content width, use the following pattern inside the `PageContainer`:

```tsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Your content here */}
</div>
```

## Best Practices

1. **Always use the PageContainer**: This ensures consistent spacing across all pages.
2. **Responsive considerations**: The component handles responsive spacing, but consider additional adjustments for your specific content.
3. **Content width**: Use the `max-w-7xl` class for consistent content width across pages.
4. **Gradient background**: Use the `withGradient` prop for pages that need a subtle background gradient.
5. **Extra padding**: Use the `withExtraPadding` prop for pages with less content to improve visual balance.
6. **Dynamic routes**: Don't forget to use PageContainer for all dynamic route pages (category pages, product pages, etc.).

## Troubleshooting

If you encounter spacing issues:

1. Ensure you're using the `PageContainer` component as the outermost wrapper for your page content.
2. Check that you haven't overridden the padding with custom classes.
3. For pages with special requirements, you can add custom classes via the `className` prop.
4. If you're working with a dynamic route page, make sure the PageContainer is applied to that page as well.
