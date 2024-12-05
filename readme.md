# useQRCode

> A React Hook for generating QR codes.

## Installation

```bash
npm install use-qrcode
```

## Usage

```tsx
import { useQRCode } from 'use-qrcode';
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

| Option | Type | Default | Description |
|-------|------|--------|-----------|
| width | number | 128 | QR code width in pixels |
| color.dark | string | '#000' | Dark module color (hex, rgb or color name) |
| color.light | string | '#fff' | Light module color (hex, rgb or color name) |
