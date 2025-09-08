"use client";
import React from "react";
import Head from "next/head";

interface SeoHeadProps {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  jsonLd?: object;
}

export default function SeoHead({
  title,
  description,
  url,
  ogImage = "/og-image.png",
  ogTitle,
  ogDescription,
  jsonLd,
}: SeoHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
    </Head>
  );
}
