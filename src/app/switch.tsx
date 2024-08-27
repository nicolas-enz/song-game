'use client';

import { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react'
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(theme == 'dark' ? true : false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (

    <Switch
      onChange={() => {
        theme == 'dark' ? setTheme('light'): setTheme('dark');
        theme == 'dark' ? setEnabled(false): setEnabled(true)
      }}
      checked={enabled}
      className="group inline-flex h-5 w-10 items-center rounded-full bg-gray-200 transition data-[checked]:bg-slate-600">
      <span className="size-3 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
    </Switch>

  );
};

export default ThemeSwitcher;