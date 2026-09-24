import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="page-shell"
      style={{ paddingBlock: "8rem" }}
    >
      <p className="section-label">404 / NOT FOUND</p>
      <h1 className="section-heading">Nothing here.</h1>
      <p style={{ color: "var(--text-secondary)", maxWidth: "34rem" }}>
        The route does not exist or the project name is invalid.
      </p>
      <Link
        href="/en"
        style={{
          display: "inline-block",
          marginTop: "2rem",
          borderBottom: "1px solid var(--accent)",
        }}
      >
        Return home
      </Link>
    </main>
  );
}
