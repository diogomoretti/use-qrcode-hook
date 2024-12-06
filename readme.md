# useQRCode

> A React Hook for generating QR codes.

## Installation

**Using npm:**

```bash
npm install use-qrcode
```

**Using yarn:**

```bash
yarn add use-qrcode
```

## Usage

1. Import the hook:

```tsx
import useQRCode from 'use-qrcode';
```

2. Use the hook in your component:

```tsx
const { qrCodeDataUrl, error, isLoading } = useQRCode('https://example.com', {
  width: 200,
  color: {
    dark: '#000',
    light: '#fff',
  }
});
```

**Example:**

```tsx
import useQRCode from 'use-qrcode';

const MyComponent = () => {
  const { qrCodeDataUrl, error, isLoading } = useQRCode('https://example.com', {
    width: 200,
    color: {
      foreground: '#000',
      background: '#fff',
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <img src={qrCodeDataUrl} alt="QR Code" />;
};
```

## Options

| Parameter | Type | Default | Description | Required |
|-----------|------|--------|-----------|----------|
| `url` | string | - | URL to encode in the QR code | Yes |
| `width` | number | 200 | QR code width in pixels | No |
| `color.foreground` | string | #000 | Foreground color (hex) | No |
| `color.background` | string | #fff | Background color (hex) | No |

## License

[MIT License](./license.md)
