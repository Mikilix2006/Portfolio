import type { ReactNode } from "react";
import { langs } from "@/data/dictionary";

export const dynamicParams = false;
export const generateStaticParams = () => langs.map((lang) => ({ lang }));

export default async function LangLayout({ children, params }: { children: ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  return <div lang={lang}>{children}</div>;
}
