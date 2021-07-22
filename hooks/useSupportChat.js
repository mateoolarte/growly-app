import { useEffect } from 'react';

export function useSupportChat(Component) {
  useEffect(() => {
    const chat = window.Tawk_API;

    if (chat.minimize) {
      chat.minimize();
    }
  }, [Component]);
}
