export function getSiteUrl(): URL {
  const configuredUrl = process.env.SITE_URL;

  if (configuredUrl) {
    return new URL(configuredUrl);
  }

  const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

  if (vercelProductionUrl) {
    return new URL(`https://${vercelProductionUrl}`);
  }

  return new URL("http://localhost:3000");
}
