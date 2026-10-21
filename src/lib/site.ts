export const site = {
  name: "Aidan Harvey-Nelson",
  brand: "Aidan Harvey-Nelson Consulting",
  role: "Data & Analytics Consultant",
  description:
    "Data engineering, analytics and AI consulting. I help organisations build reliable data platforms and turn their data into decisions.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://aidanharveynelson.github.io/personal-website",
  email: "fizen2550@gmail.com",
  location: "Melbourne, Australia",
  links: {
    booking: "https://calendar.app.google/RgkJWFChuzr8PeCV6",
    linkedin: "https://www.linkedin.com/in/aidan-harvey-nelson-863145160/",
    github: "https://github.com/AidanHarveyNelson",
    credly: "https://www.credly.com/users/aidan-harvey-nelson.3565c4f2",
  },
};

export function absoluteUrl(path = "/") {
  return `${site.url.replace(/\/$/, "")}${path}`;
}
