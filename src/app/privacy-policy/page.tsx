import { LegalDocument } from "@/components/sections/LegalDocument";
import { pageMetadata, siteEmail } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description:
    "How Vadim Filatov's portfolio handles personal data: contact by email, no account, and optional analytics only when configured.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      path="/privacy-policy"
      lede="This site is a portfolio. It does not ask you to create an account, and the contact form does not store what you type."
    >
      <h2 className="heading-h5">Who this covers</h2>
      <p>
        The site is operated by Vadim Filatov, Prague, under Kefir Software Company. Questions about this page go to{" "}
        <a href={`mailto:${siteEmail}`}>{siteEmail}</a>.
      </p>
      <h2 className="heading-h5">What is collected</h2>
      <p>
        The contact form opens your own email app. The message is sent only if you send that email. Nothing from the form is written to a database on this site.
      </p>
      <p>
        Server logs from the host (for example Vercel) may include IP address, browser, and the page requested. Those logs are used to keep the site available and are kept for the host&apos;s normal retention period.
      </p>
      <h2 className="heading-h5">Analytics</h2>
      <p>
        Google Analytics and Yandex Metrika are not loaded unless a measurement ID is configured for the deployment. If they are enabled, they set cookies and receive pages you visit, a client identifier, and approximate location. You can block them with your browser or an extension.
      </p>
      <h2 className="heading-h5">How long, and your choices</h2>
      <p>
        Emails you send are kept as long as the conversation needs them, then deleted. You can ask for a copy or deletion of an email thread by writing to the address above. If you are in the EEA or UK, you can also complain to your local data authority. For Czechia, that is the Office for Personal Data Protection.
      </p>
      <p>Updated 22 September 2026.</p>
    </LegalDocument>
  );
}
