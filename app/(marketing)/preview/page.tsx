import type { Metadata } from "next";
import IndexPage from "../page";

export const metadata: Metadata = {
  title: "Website Preview | Sunday Houses",
  robots: { index: false, follow: false },
};

export default function PreviewPage() {
  return <IndexPage />;
}
