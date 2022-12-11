export default function site(
  base,
  lang,
  title,
  description,
  head,
  lastUpdated,
  markdown
) {
  return {
    base,
    lang,
    title,
    description,
    head,
    lastUpdated,
    markdown,
  };
}
