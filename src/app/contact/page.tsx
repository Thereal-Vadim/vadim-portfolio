import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact | Vadim Filatov",
  description:
    "Get in touch with Vadim Filatov - UI/UX engineer and visual designer in Prague. Brief or early idea, start a direct conversation.",
};

export default function ContactPage() {
  return <ContactSection />;
}
