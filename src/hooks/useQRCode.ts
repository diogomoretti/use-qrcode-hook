import { useState, useEffect } from 'react';
import QRCode from 'qrcode';

interface QRCodeOptions {
  width?: number;
  margin?: number;
  color?: {
    dark?: string;
    light?: string;
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
            dark: options.color?.dark || '#000000',
            light: options.color?.light || '#ffffff'
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
  }, [url, options.width, options.margin, options.color?.dark, options.color?.light]);

  return { qrCodeDataUrl, error, isLoading };
};