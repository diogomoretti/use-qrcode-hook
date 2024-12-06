import { useState, useEffect } from 'react';
import QRCode from 'qrcode';

export interface QRCodeOptions {
  width?: number;
  margin?: number;
  color?: {
    foreground?: string;
    background?: string;
  };
}

export const useQRCode = (url: string, options: QRCodeOptions = {}) => {
  const [qrCodeDataUrl, setQRCodeDataUrl] = useState<string>('');
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const dataUrl = await QRCode.toDataURL(url, {
          width: options.width || 200,
          margin: options.margin || 1,
          color: {
            dark: options.color?.foreground || '#000000',
            light: options.color?.background || '#ffffff'
          }
        });
        
        setQRCodeDataUrl(dataUrl);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to generate QR code'));
      } finally {
        setIsLoading(false);
      }
    };

    generateQRCode();
  }, [url, options.width, options.margin, options.color?.foreground, options.color?.background]);

  return { qrCodeDataUrl, error, isLoading };
};