"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { SiteData, defaultSiteData } from '@/lib/data';

interface ContentContextType {
  siteData: SiteData;
  isLoading: boolean;
  isSaving: boolean;
  saveData: (newSiteData: SiteData) => Promise<boolean>;
  resetToDefault: () => Promise<boolean>;
  refreshData: () => Promise<void>;
}

const ContentContext = createContext<ContentContextType | undefined>(undefined);

export function ContentProvider({ children }: { children: ReactNode }) {
  const [siteData, setSiteData] = useState<SiteData>(defaultSiteData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  const refreshData = useCallback(async () => {
    try {
      const res = await fetch('/api/content');
      const result = await res.json();
      if (result.success && result.data) {
        setSiteData(result.data);
      }
    } catch (err) {
      console.error('Failed to fetch site content:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let active = true;
    fetch('/api/content')
      .then((res) => res.json())
      .then((result) => {
        if (active && result.success && result.data) {
          setSiteData(result.data);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch site content:', err);
      })
      .finally(() => {
        if (active) {
          setIsLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, []);

  const saveData = async (newSiteData: SiteData): Promise<boolean> => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ siteData: newSiteData }),
      });
      const result = await res.json();
      if (result.success) {
        setSiteData(newSiteData);
        return true;
      }
      return false;
    } catch (err) {
      console.error('Failed to save site data:', err);
      return false;
    } finally {
      setIsSaving(false);
    }
  };

  const resetToDefault = async (): Promise<boolean> => {
    return await saveData(defaultSiteData);
  };

  return (
    <ContentContext.Provider value={{ siteData, isLoading, isSaving, saveData, resetToDefault, refreshData }}>
      {children}
    </ContentContext.Provider>
  );
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
}
