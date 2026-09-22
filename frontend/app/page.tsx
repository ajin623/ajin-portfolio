import { redirect } from "next/navigation";

export default function HomeRedirectPage() {
  // Redirect root path to default locale route
  redirect("/en");
}
