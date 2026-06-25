import Link from "next/link";
import { ArrowIcon } from "@/components/ui/ArrowIcon";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  flipArrow?: boolean;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  flipArrow = false,
  external = false,
}: ButtonLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      <span className="button-arrow">
        <ArrowIcon flip={flipArrow} />
      </span>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className="button-link"
        data-hover="no-cursor"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="button-link" data-hover="no-cursor">
      {content}
    </Link>
  );
}
