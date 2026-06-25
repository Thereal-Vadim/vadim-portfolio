import { contactLinks } from "@/data/content";
import { AnimatedTitle } from "@/components/ui/AnimatedTitle";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function CTASection() {
  return (
    <header
      data-scroll="light"
      className="theme-light bg-[var(--color-background)] text-[var(--color-text)]"
    >
      <div className="padding-global">
        <div className="container-large">
          <div className="padding-section-large">
            <div className="max-w-3xl">
              <div className="mb-8">
                <AnimatedTitle
                  headline="Ready to start?"
                  alternate="Let's have a chat."
                  singleLine
                />
              </div>

              <div className="grid gap-8 md:grid-cols-[1fr_minmax(200px,max-content)]">
                <div>
                  <p className="text-medium mb-6 max-w-xl leading-relaxed">
                    Whether you have a brief ready or just an idea you want to talk
                    through, get in touch. No obligations, no agency pitch – just a
                    conversation.
                  </p>
                  <ButtonLink href="/contact" flipArrow>
                    start a conversation
                  </ButtonLink>
                </div>

                <div className="flex flex-col gap-3">
                  {contactLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      data-hover="no-cursor"
                      className="text-[0.9375rem] underline-offset-2 hover:underline"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http") ? "noopener noreferrer" : undefined
                      }
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
