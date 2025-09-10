// src/index.ts
import countries from "../countries.json";
import { Flags } from "./flags";

type FlagOptions = {
  type?: "code" | "file";
  isName?: boolean;
};

export function getFlag(
  iso: string,
  options: FlagOptions = {}
): string | undefined {
  const code = iso.toLowerCase();
  const { type = "code", isName = false } = options;

  if (isName) {
    return (countries as Record<string, string>)[iso.toUpperCase()];
  }

  if (type === "file") {
    return `./svg/${code}.svg`;
  }

  return Flags[code];
}

// React Component
import React from "react";

type FlagProps = {
  code: string;
  type?: "code" | "file";
  isName?: boolean;
  className?: string;
};

export const Flag: React.FC<FlagProps> = ({
  code,
  type = "code",
  isName = false,
  className
}) => {
  const flag = getFlag(code, { type, isName });

  if (!flag) return null;

  if (isName) {
    return <span>{flag}</span>;
  }

  if (type === "file") {
    return <img src={flag} alt={code} className={className} />;
  }

  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: flag }}
    />
  );
};
