import React from "react";
import NHead from "next/head";

export default function Head({
  title = "Hälsodagbok",
  description = "Streamlined reporting regarding wellbeing",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <NHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </NHead>
  );
}
