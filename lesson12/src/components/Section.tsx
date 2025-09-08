import type { ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  title?: string;
};

const Section = ({ children, title = "My Subheading" }: SectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default Section;
