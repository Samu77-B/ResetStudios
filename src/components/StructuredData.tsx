import { RESET_STUDIOS_LD_JSON } from "@/lib/structured-data";

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(RESET_STUDIOS_LD_JSON),
      }}
    />
  );
}
