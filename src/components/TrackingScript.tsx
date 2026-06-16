"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

// Saves UTM + ASP click tracking params to sessionStorage on first visit
export default function TrackingScript() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const trackingKeys = [
      "click_id",
      "transaction_id",
      "media_id",
      "affiliate_id",
      "campaign_id",
      "creative_id",
      "sub_id",
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ];

    const stored: Record<string, string> = {};
    let hasNew = false;

    trackingKeys.forEach((key) => {
      const val = searchParams.get(key);
      if (val) {
        stored[key] = val;
        hasNew = true;
      }
    });

    if (hasNew) {
      const existing = JSON.parse(sessionStorage.getItem("hitoribizu_tracking") || "{}");
      // First click wins — preserve existing click_id if already set
      const merged = { ...stored, ...existing };
      sessionStorage.setItem("hitoribizu_tracking", JSON.stringify(merged));
    }
  }, [searchParams]);

  return null;
}
