import Link from "next/link";

export const Component = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link href="/">Link /</Link>
      <Link href="/a">Link /a</Link>
      <Link href="/a/b">Link /a/b</Link>
    </div>
  );
};
