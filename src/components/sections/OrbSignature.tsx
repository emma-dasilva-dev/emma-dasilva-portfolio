import { PageContainer } from "@/components/layout/PageContainer";
import { Section } from "@/components/layout/Section";
import { AsciiOrb } from "@/components/ui/AsciiOrb";
import type { Locale } from "@/types/locale";

import styles from "./OrbSignature.module.css";

interface OrbSignatureProps {
  locale: Locale;
}

export function OrbSignature({ locale }: OrbSignatureProps) {
  return (
    <Section className={styles.section}>
      <PageContainer>
        <div className={styles.inner}>
          <AsciiOrb key={locale} locale={locale} />
        </div>
      </PageContainer>
    </Section>
  );
}
