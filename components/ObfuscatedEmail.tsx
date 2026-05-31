"use client";

interface ObfuscatedEmailProps {
  className?: string;
  children?: React.ReactNode;
}

export function ObfuscatedEmail({ className, children }: ObfuscatedEmailProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const user = "info";
    const domain = "akshayvt.com";
    window.location.href = `mailto:${user}@${domain}`;
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className={className}
    >
      {children || <EmailText />}
    </a>
  );
}

export function EmailText() {
  return <span data-email="true">info@akshayvt.com</span>;
}

export function getEmailParts() {
  return { user: "info", domain: "akshayvt.com" };
}
