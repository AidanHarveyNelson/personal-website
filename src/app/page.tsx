import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  CalendarDays,
  ChartColumn,
  CodeXml,
  Database,
  ServerCog,
  Workflow,
} from "lucide-react";
import { Section } from "@/components/Section";
import { PostList } from "@/components/PostList";
import { SocialLinks } from "@/components/SocialLinks";
import { getAllPosts } from "@/lib/posts";
import { site } from "@/lib/site";
import awsDataEngineer from "@/assets/certs/aws-data-engineer.png";
import awsDataAnalytics from "@/assets/certs/aws-data-analytics.png";
import awsDeveloper from "@/assets/certs/aws-developer.png";
import awsSolutionsArchitect from "@/assets/certs/aws-solutions-architect.png";
import azureFundamentals from "@/assets/certs/azure-fundamentals.png";

const stats = [
  { value: "4", label: "Data warehouse migrations to Snowflake" },
  { value: "15+", label: "Enterprise system integrations delivered" },
  { value: "4h → 12m", label: "Deployment time after CI/CD overhaul" },
  { value: "5", label: "AWS & Azure certifications" },
];

const services = [
  {
    Icon: Database,
    title: "Data Engineering",
    body: "Scalable pipelines, ETL/ELT and modern data warehouses that keep data flowing reliably across your organisation.",
  },
  {
    Icon: ChartColumn,
    title: "Reporting & Analytics",
    body: "Dashboards, automated reporting and analysis that give decision-makers clear, trustworthy answers.",
  },
  {
    Icon: Workflow,
    title: "Data Integration",
    body: "Connecting disparate systems and APIs into a unified data ecosystem that breaks down silos.",
  },
  {
    Icon: BrainCircuit,
    title: "AI & Machine Learning",
    body: "Predictive models and AI components that automate processes and surface insights you can act on.",
  },
  {
    Icon: ServerCog,
    title: "DevOps & Infrastructure",
    body: "CI/CD, infrastructure as code and cloud platforms that make delivery fast, repeatable and safe.",
  },
  {
    Icon: CodeXml,
    title: "Backend Development",
    body: "Robust APIs and microservices that power modern applications and handle complex business logic.",
  },
];

const work = [
  {
    title: "Data Warehouse Migration Program",
    body: "Migrated four on-premises data warehouses to Snowflake, using real-time ingestion with Kafka to minimise lag between source systems and the warehouse.",
    metrics: ["85% lower data latency", "99.9% uptime"],
    stack: ["Snowflake", "Kafka"],
  },
  {
    title: "Enterprise Integration Architecture",
    body: "Delivered 15+ integrations between core and bespoke platforms, including SAP, Workday, Salesforce, HubSpot, ClassPass and OpenPath, on a microservice architecture with standardised API patterns.",
    metrics: ["70% more efficient data flow", "60% less maintenance overhead"],
    stack: ["Microservices", "APIs"],
  },
  {
    title: "DevOps Transformation",
    body: "Modernised the development process with GitLab CI pipelines, Terraform infrastructure as code and automated testing across production environments.",
    metrics: ["78% fewer production bugs", "4 hours → 12 minutes to deploy", "95% deployment success rate"],
    stack: ["GitLab CI", "Terraform"],
  },
  {
    title: "Predictive Healthcare Analytics",
    body: "Built a machine learning model that identified residents most at risk of falling, enabling proactive intervention before incidents occurred across three healthcare facilities.",
    metrics: ["89% prediction accuracy", "42% fewer falls", "1,200+ residents supported"],
    stack: ["Machine Learning"],
  },
];

const certifications = [
  { name: "AWS Certified Data Engineer – Associate", issuer: "Amazon Web Services", year: 2024, image: awsDataEngineer },
  { name: "AWS Certified Data Analytics – Specialty", issuer: "Amazon Web Services", year: 2023, image: awsDataAnalytics },
  { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", year: 2023, image: awsDeveloper },
  { name: "AWS Certified Solutions Architect – Associate", issuer: "Amazon Web Services", year: 2023, image: awsSolutionsArchitect },
  { name: "Microsoft Certified: Azure Fundamentals", issuer: "Microsoft", year: 2020, image: azureFundamentals },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-5xl px-5 pt-20 pb-16 sm:px-8 sm:pt-28">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
          <span className="size-1.5 rounded-full bg-accent" />
          {site.role} · {site.location}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl sm:leading-[1.05]">
          Reliable data platforms that turn information into decisions.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">
          I&apos;m {site.name}. I help organisations modernise their data infrastructure, connect their systems and put
          analytics and AI to work, with the engineering discipline to make it last.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
          >
            Start a conversation <ArrowRight className="size-4" />
          </a>
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface"
          >
            Read the blog
          </Link>
        </div>

        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6">
              <dt className="text-sm leading-snug text-muted">{s.label}</dt>
              <dd className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section id="about" eyebrow="About" title="Technical depth, business focus">
        <div className="grid gap-6 text-base leading-relaxed text-muted sm:text-lg md:grid-cols-2 md:gap-10">
          <p>
            I&apos;m a data and analytics specialist with a track record of enterprise-scale data migrations, real-time
            integration architectures and predictive analytics models. I care about building things that work in
            production, not just in a demo.
          </p>
          <p>
            My work spans the full data lifecycle: architecting warehouses on platforms like Snowflake, building the
            pipelines and microservices that feed them, automating delivery with CI/CD, and developing machine
            learning models that deliver measurable impact.
          </p>
        </div>
      </Section>

      <Section id="services" eyebrow="Services" title="How I can help">
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, body }) => (
            <li key={title} className="bg-background p-7">
              <Icon className="mb-5 size-6 text-accent" strokeWidth={1.5} />
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="work" eyebrow="Selected work" title="Projects & impact">
        <div className="grid gap-5 md:grid-cols-2">
          {work.map((project) => (
            <article key={project.title} className="flex flex-col rounded-2xl border border-border p-7">
              <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{project.body}</p>
              <ul className="mt-5 space-y-2">
                {project.metrics.map((m) => (
                  <li key={m} className="flex items-center gap-2.5 text-sm font-medium">
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                    {m}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.stack.map((t) => (
                  <span key={t} className="rounded-md bg-surface px-2 py-1 font-mono text-xs text-muted">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {posts.length > 0 && (
        <Section
          id="writing"
          eyebrow="Writing"
          title="Latest articles"
          action={
            <Link href="/blog/" className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
              All articles <ArrowRight className="size-4" />
            </Link>
          }
        >
          <PostList posts={posts} />
        </Section>
      )}

      <Section id="certifications" eyebrow="Credentials" title="Certifications">
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {certifications.map((c) => (
            <li key={c.name} className="flex flex-col items-center rounded-2xl border border-border p-5 text-center">
              <Image src={c.image} alt="" width={96} height={96} className="size-24" />
              <p className="mt-4 text-sm leading-snug font-medium">{c.name}</p>
              <p className="mt-1 text-xs text-muted">
                {c.issuer} · {c.year}
              </p>
            </li>
          ))}
        </ul>
        <a
          href={site.links.credly}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          Verify on Credly <ArrowUpRight className="size-4" />
        </a>
      </Section>

      <section id="contact" className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <div className="rounded-3xl bg-foreground px-8 py-14 text-background sm:px-14 sm:py-16">
          <p className="text-sm font-medium opacity-60">Contact</p>
          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Have a data problem worth solving? Let&apos;s talk.
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed opacity-70">
            Whether you&apos;re planning a migration, untangling integrations or exploring what AI can do with your data,
            I&apos;m happy to have a no-obligation chat.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {site.links.booking && (
              <a
                href={site.links.booking}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              >
                <CalendarDays className="size-4" /> Book a call
              </a>
            )}
            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent("Let's chat")}`}
              className={
                site.links.booking
                  ? "inline-flex items-center gap-2 rounded-full border border-background/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-background/10"
                  : "inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
              }
            >
              Email me <ArrowRight className="size-4" />
            </a>
            {site.links.linkedin && (
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-background/25 px-6 py-3 text-sm font-medium transition-colors hover:bg-background/10"
              >
                Connect on LinkedIn <ArrowUpRight className="size-4" />
              </a>
            )}
          </div>
        </div>
        <SocialLinks className="mt-8 justify-center sm:hidden" />
      </section>
    </>
  );
}
