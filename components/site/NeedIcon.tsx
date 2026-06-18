export function NeedIcon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "pin":
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M12 21s-7-6-7-11a7 7 0 0 1 14 0c0 5-7 11-7 11Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
    case "spark":
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" /></svg>;
    case "chat":
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l.9-5.4A8 8 0 1 1 21 12Z" /></svg>;
    case "code":
      return <svg viewBox="0 0 24 24" className={className} {...common}><path d="M8 9l-3 3 3 3M16 9l3 3-3 3M13 7l-2 10" /></svg>;
    case "ai":
      return <svg viewBox="0 0 24 24" className={className} {...common}><rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 9h6v6H9zM3 10v4M21 10v4M10 3h4M10 21h4" /></svg>;
    case "gear":
      return <svg viewBox="0 0 24 24" className={className} {...common}><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></svg>;
    default:
      return null;
  }
}
