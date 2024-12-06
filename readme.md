# useQRCode

> A React Hook for generating QR codes.

## Installation

*Using npm:*

```bash
npm install use-qrcode
```

*Using yarn:*

```bash
yarn add use-qrcode
```

## Usage

```tsx
import useQRCode from 'use-qrcode';
```

```tsx
const { qrCodeDataUrl, error, isLoading } = useQRCode('https://example.com', {
  width: 200,
  color: {
    dark: '#000',
    light: '#fff'
  }
});
```

## Options

| Option | Type | Default | Description | Required |
|-------|------|--------|-----------|----------|
| `url` | string | - | URL to encode in the QR code | Yes |
| `width` | number | 200 | QR code width in pixels | No |
| `color.foreground` | string | #000 | Foreground color (hex) | No |
| `color.background` | string | #fff | Background color (hex) | No |

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
