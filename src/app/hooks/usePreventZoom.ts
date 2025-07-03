import { useEffect } from 'react';

export const usePreventZoom = () => {
  useEffect(() => {
    // 줌 방지 이벤트 리스너
    const preventZoom = (e: Event) => {
      if ((e as any).touches && (e as any).touches.length > 1) {
        e.preventDefault();
      }
    };

    const preventDoubleClickZoom = (e: Event) => {
      e.preventDefault();
    };

    const preventKeyboardZoom = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '0')) {
        e.preventDefault();
      }
    };

    const preventWheelZoom = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };

    // 이벤트 리스너 등록
    document.addEventListener('touchstart', preventZoom, { passive: false });
    document.addEventListener('touchmove', preventZoom, { passive: false });
    document.addEventListener('dblclick', preventDoubleClickZoom);
    document.addEventListener('keydown', preventKeyboardZoom);
    document.addEventListener('wheel', preventWheelZoom, { passive: false });

    // Cleanup function
    return () => {
      document.removeEventListener('touchstart', preventZoom);
      document.removeEventListener('touchmove', preventZoom);
      document.removeEventListener('dblclick', preventDoubleClickZoom);
      document.removeEventListener('keydown', preventKeyboardZoom);
      document.removeEventListener('wheel', preventWheelZoom);
    };
  }, []);
}; 