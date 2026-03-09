'use client';

export default function CriticalStyles() {
  return (
    <>
      <link
        rel="preload"
        href="/_next/static/css/chunks/051f2851c8f7de0c.css"
        as="style"
        onLoad={(e) => {
          const target = e.target as HTMLLinkElement;
          target.onload = null;
          target.rel = 'stylesheet';
        }}
      />
      <noscript>
        <link rel="stylesheet" href="/_next/static/css/chunks/051f2851c8f7de0c.css" />
      </noscript>
    </>
  );
}
