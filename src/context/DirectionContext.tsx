"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Direction = "ltr" | "rtl";
export type Locale = "en" | "ar";

interface DirectionContextType {
  dir: Direction;
  locale: Locale;
  setDirection: (dir: Direction) => void;
  setLocale: (locale: Locale) => void;
  toggleDirection: () => void;
}

const STORAGE_KEY = "zelliny_dir";

const DirectionContext = createContext<DirectionContextType | undefined>(
  undefined
);

export function DirectionProvider({ children }: { children: React.ReactNode }) {
  const [dir, setDirState] = useState<Direction>("ltr");

  // Sync state from localStorage / DOM on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Direction | null;
      if (saved === "rtl" || saved === "ltr") {
        setDirState(saved);
        document.documentElement.setAttribute("dir", saved);
      } else {
        const currentAttr = document.documentElement.getAttribute("dir") as Direction | null;
        if (currentAttr === "rtl" || currentAttr === "ltr") {
          setDirState(currentAttr);
        }
      }
    } catch {
      // LocalStorage access might fail in restricted environments
    }
  }, []);

  const updateDirection = (newDir: Direction) => {
    setDirState(newDir);
    try {
      document.documentElement.setAttribute("dir", newDir);
      localStorage.setItem(STORAGE_KEY, newDir);
      document.cookie = `${STORAGE_KEY}=${newDir}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {
      // Ignore storage errors
    }
  };

  const setDirection = (newDir: Direction) => {
    updateDirection(newDir);
  };

  const setLocale = (newLocale: Locale) => {
    updateDirection(newLocale === "ar" ? "rtl" : "ltr");
  };

  const toggleDirection = () => {
    updateDirection(dir === "rtl" ? "ltr" : "rtl");
  };

  const locale: Locale = dir === "rtl" ? "ar" : "en";

  return (
    <DirectionContext.Provider
      value={{
        dir,
        locale,
        setDirection,
        setLocale,
        toggleDirection,
      }}
    >
      {children}
    </DirectionContext.Provider>
  );
}

export function useDirection(): DirectionContextType {
  const context = useContext(DirectionContext);
  if (!context) {
    throw new Error("useDirection must be used within a DirectionProvider");
  }
  return context;
}
