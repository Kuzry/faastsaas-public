import {
  FrontLayoutHero,
  FrontLayoutHeroText,
  FrontLayoutHeroTitle,
  FrontLayoutSection,
} from "@faastsaas/ui/layout";

export default function Home() {
  return (
    <>
      <FrontLayoutSection>
        <FrontLayoutHero>
          <FrontLayoutHeroTitle>
            Beautifully designed website templates
          </FrontLayoutHeroTitle>
          <FrontLayoutHeroText>
            50+ beautiful sections and templates built with React, Typescript,
            Tailwind CSS, and Framer Motion. Save thousands of hours, create a
            beautiful landing page, and convert your visitors into customers.
          </FrontLayoutHeroText>
          <button className="rounded bg-red-500 px-4">Button</button>
        </FrontLayoutHero>
      </FrontLayoutSection>
      <FrontLayoutSection>
        <div className="container">
          Pocket is a beautiful mobile app marketing template built with
          Tailwind CSS and Next.js, designed and built by the Tailwind CSS team.
          It’s production-ready and easy to customize, making it the perfect
          starting point for your new mobile app website. We’ve taken just as
          much care with the code as we have with the design, so it’s also an
          invaluable resource if you want to study how experts build a website
          with Tailwind CSS and React. Built by experts — you can trust that all
          of the code is written following Tailwind CSS best practices, because
          it’s written by the same team who created and maintain the framework.
          Easy to customize — everything is styled with utility classes,
          directly in the markup. No configuration variables or complex CSS to
          wrestle with, just open the markup in your editor and change whatever
          you want. Built with Next.js — the template is a well-structured,
          thoughtfully componentized Next.js project, giving you a codebase
          that’s productive and enjoyable to work in. Keyboard accessible —
          everything we build is keyboard accessible, and we carefully craft the
          markup to deliver the best screenreader experience we know how.
          TypeScript or JavaScript — authored with the latest version of
          TypeScript by nerds who get way too much satisfaction out of getting
          the types just right, giving you the best possible developer
          experience. We also include a plain JavaScript version, just in case
          TypeScript is your thing. Production-ready — rigorously tested in the
          latest versions of all browsers to handle lots of edge-cases you might
          easily miss yourself. Simple to deploy — production-ready and easily
          deployed anywhere that you can deploy a Next.js application, like
          Vercel or Netlify.
        </div>
      </FrontLayoutSection>
    </>
  );
}
