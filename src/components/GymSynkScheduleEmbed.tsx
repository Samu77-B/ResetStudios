"use client";

import { useEffect } from "react";

const BASE =
  process.env.NEXT_PUBLIC_GYMSYNK_API_URL?.replace(/\/$/, "") ??
  "https://gymsynk.net";
const TENANT = process.env.NEXT_PUBLIC_GYMSYNK_TENANT ?? "reset";
const THEME = "reset";
const MOUNT_ID = "gymsynk-schedule";

export function GymSynkScheduleEmbed() {
  useEffect(() => {
    const mount = document.getElementById(MOUNT_ID);
    if (!mount) return;

    const script = document.createElement("script");
    script.src = `${BASE}/embed/schedule.js`;
    script.dataset.tenant = TENANT;
    script.dataset.theme = THEME;
    script.dataset.target = MOUNT_ID;
    script.dataset.apiBase = BASE;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      mount.replaceChildren();
    };
  }, []);

  return <div id={MOUNT_ID} />;
}
