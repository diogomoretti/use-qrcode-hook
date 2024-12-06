<p align="center">
  <img src="https://github.com/diogomoretti/use-qrcode/blob/main/logo.png?raw=true" width="100">
</p>
<h1 align="center">
  use-qrcode-hook
</h1>
<p>
  <p align="center"><em>A React Hook for generating QR codes.</em></p>
  <p align="center">
    <img alt="GitHub Actions Workflow Status" src="https://img.shields.io/github/actions/workflow/status/diogomoretti/use-qrcode-hook/demo.yml?style=for-the-badge">
  </p>
  <p align="center">
    <a href="https://diogomoretti.github.io/use-qrcode-hook/">View demo ➔</a>
  </p>
</p>

<br>

## Installation

**Using npm:**

```bash
npm install use-qrcode-hook
```

**Using yarn:**

```bash
yarn add use-qrcode-hook
```

**Using pnpm:**

```bash
pnpm add use-qrcode-hook
```

## Usage

1. Import the hook:

```tsx
import useQRCode from 'use-qrcode-hook';
```

2. Use the hook in your component:

```tsx
const { qrCodeDataUrl, error, isLoading } = useQRCode('https://example.com', {
  width: 200,
  color: {
    foreground: '#000',
    background: '#fff',
  }
});
```

**Example:**

```tsx
import useQRCode from 'use-qrcode-hook';

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

The first parameter is the URL to encode in the QR code, and this is the only required parameter. The second parameter is an object with the following options:

| Parameter | Type | Default | Description | Required |
|-----------|------|--------|-----------|----------|
| `width` | number | 200 | QR code width in pixels | No |
| `color.foreground` | string | #000 | Foreground color (hex) | No |
| `color.background` | string | #fff | Background color (hex) | No |

## License

[MIT License](./license.md)
