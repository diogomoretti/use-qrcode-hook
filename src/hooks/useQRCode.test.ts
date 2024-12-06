/// <reference types="vitest" />
import { renderHook, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useQRCode } from './useQRCode';
import QRCode from 'qrcode';

vi.mock('qrcode', () => ({
  default: {
    toDataURL: vi.fn()
  }
}));

describe('useQRCode', () => {
  it('should generate QR code with default options', async () => {
    const mockDataUrl = 'data:image/png;base64,mockQRCode';
    (QRCode.toDataURL as vi.Mock).mockResolvedValueOnce(mockDataUrl);

    const { result } = renderHook(() => useQRCode('https://example.com'));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.error).toBe(null);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.qrCodeDataUrl).toBe(mockDataUrl);
    expect(QRCode.toDataURL).toHaveBeenCalledWith('https://example.com', {
      width: 200,
      margin: 1,
      color: {
        foreground: '#000000',
        background: '#ffffff'
      }
    });
  });

  it('should generate QR code with custom options', async () => {
    const mockDataUrl = 'data:image/png;base64,mockQRCode';
    (QRCode.toDataURL as vi.Mock).mockResolvedValueOnce(mockDataUrl);

    const customOptions = {
      width: 300,
      margin: 2,
      color: {
        foreground: '#FF0000',
        background: '#FFFF00'
      }
    };

    const { result } = renderHook(() => useQRCode('https://example.com', customOptions));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.qrCodeDataUrl).toBe(mockDataUrl);
    expect(QRCode.toDataURL).toHaveBeenCalledWith('https://example.com', customOptions);
  });

  it('should handle errors', async () => {
    const mockError = new Error('Failed to generate QR code');
    (QRCode.toDataURL as vi.Mock).mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useQRCode('invalid-url'));

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });

    expect(result.current.error).toEqual(mockError);
    expect(result.current.qrCodeDataUrl).toBe('');
  });

  it('should update QR code when URL changes', async () => {
    const mockDataUrl1 = 'data:image/png;base64,mockQRCode1';
    const mockDataUrl2 = 'data:image/png;base64,mockQRCode2';
    
    (QRCode.toDataURL as vi.Mock)
      .mockResolvedValueOnce(mockDataUrl1)
      .mockResolvedValueOnce(mockDataUrl2);

    const { result, rerender } = renderHook(
      ({ url }) => useQRCode(url),
      { initialProps: { url: 'https://example1.com' } }
    );

    await waitFor(() => {
      expect(result.current.qrCodeDataUrl).toBe(mockDataUrl1);
    });

    rerender({ url: 'https://example2.com' });

    await waitFor(() => {
      expect(result.current.qrCodeDataUrl).toBe(mockDataUrl2);
    });
  });
});