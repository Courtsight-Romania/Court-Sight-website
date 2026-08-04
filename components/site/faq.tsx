"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { FAQ } from "@/lib/faq";
import { Container, Section, SectionHeader } from "@/components/site/ui/primitives";

export function Faq() {
  return (
    <Section id="intrebari" tone="paper-2" className="border-t border-hairline">
      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
          <SectionHeader
            eyebrow="Întrebări frecvente"
            title="Ce ne întreabă avocații prima dată."
            lead="Majoritatea întrebărilor sunt despre limite: de unde vin datele, cât sunt de proaspete și ce nu putem promite."
          />

          <Accordion.Root type="single" collapsible className="border-t border-hairline">
            {FAQ.map((item) => (
              <Accordion.Item key={item.q} value={item.q} className="border-b border-hairline">
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-start justify-between gap-6 py-5 text-left transition-colors hover:text-fg-muted">
                    <span className="text-[1.0625rem] leading-snug font-medium">{item.q}</span>
                    <span
                      aria-hidden
                      className="relative mt-1.5 size-3.5 shrink-0 text-fg-faint transition-transform duration-200 group-data-[state=open]:rotate-45"
                    >
                      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                      <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
                    </span>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-[cs-collapse_.2s_ease-out] data-[state=open]:animate-[cs-expand_.24s_ease-out]">
                  <p className="max-w-[62ch] pr-8 pb-6 text-[0.9375rem] leading-relaxed text-fg-muted">
                    {item.a}
                  </p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </Container>
    </Section>
  );
}
