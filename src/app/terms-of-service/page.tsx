import { LegalDocument } from "@/components/sections/LegalDocument";
import { pageMetadata, siteEmail } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description:
    "Terms for using Vadim Filatov's portfolio: the site is informational, project work starts from a separate agreement.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <LegalDocument
      title="Terms of Service"
      path="/terms-of-service"
      lede="Using this site means reading it as a portfolio. Starting a project is a separate conversation, not something this page sells on its own."
    >
      <h2 className="heading-h5">The site</h2>
      <p>
        Case studies, prices, and notes describe how Vadim Filatov works. They are not an offer that binds either side. A project starts when scope, price, and timing are agreed in writing — usually by email.
      </p>
      <h2 className="heading-h5">Work shown here</h2>
      <p>
        Portfolio images and text stay with their owners. You can look, you cannot copy the work into another product or present it as your own. Trademarks of clients (Efsy, MSM, and others) belong to them.
      </p>
      <h2 className="heading-h5">Liability</h2>
      <p>
        The site is provided as it is. It may be updated or unavailable. Nothing here is legal, financial, or technical advice for your product. For a question about these terms, write to{" "}
        <a href={`mailto:${siteEmail}`}>{siteEmail}</a>.
      </p>
      <p>Updated 22 September 2026.</p>
    </LegalDocument>
  );
}