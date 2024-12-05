import React, { useState } from 'react';
import { useQRCode } from '../hooks/useQRCode';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Logo from './Logo';
import './QRCodeDemo.css';

export const QRCodeDemo = () => {
  const [url, setUrl] = useState('https://google.com');
  const [width, setWidth] = useState(200);
  const [darkColor, setDarkColor] = useState('#000000');
  const [lightColor, setLightColor] = useState('#ffffff');

  const { qrCodeDataUrl, error, isLoading } = useQRCode(url, {
    width,
    color: {
      dark: darkColor,
      light: lightColor
    }
  });

  return (
    <div className="qr-container">
      <div className="qr-content">
        <div className="qr-card">
          <div className="qr-header">
            <div className="qr-logo">
              <Logo />
            </div>
            <h1 className="qr-title">useQRCode</h1>
            <div className="qr-github">
              <a href="https://github.com/mattrothenberg/useQRCode">
                View on GitHub
              </a>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">URL to encode</label>
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="form-input"
              placeholder="Enter URL"
            />
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label">Width (px)</label>
              <input
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Dark Color</label>
              <input
                type="color"
                value={darkColor}
                onChange={(e) => setDarkColor(e.target.value)}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Light Color</label>
              <input
                type="color"
                value={lightColor}
                onChange={(e) => setLightColor(e.target.value)}
                className="form-input"
              />
            </div>
          </div>

          <div className="qr-display">
            {isLoading && (
              <div className="qr-loading">
                <span>Generating QR Code...</span>
              </div>
            )}
            
            {error && (
              <div className="qr-error">
                Error: {error.message}
              </div>
            )}
            
            {!isLoading && !error && qrCodeDataUrl && (
              <img
                src={qrCodeDataUrl}
                alt="useQRCode image"
              />
            )}
          </div>
        </div>

        <div className="qr-card usage-section">
          <h2 className="usage-title">How to Use</h2>
          <div className="code-block">
          <SyntaxHighlighter language="javascript" style={irBlack}>
            {`import { useQRCode } from 'use-qrcode';

const MyComponent = () => {
  const { qrCodeDataUrl, error, isLoading } = useQRCode('https://example.com', {
    width: 200,
    color: {
      dark: '#000',
      light: '#fff'
    }
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  
  return <img src={qrCodeDataUrl} alt="QR Code" />;
};`}
            </SyntaxHighlighter>
          </div>
        </div>

        <div className="qr-card footer-section">
          <p>
            Made with 💙 by <a href="https://github.com/diogomoretti">Diogo Moretti</a>
          </p>
        </div>
      </div>
    </div>
  );
};