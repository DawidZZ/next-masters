import { redirect } from "next/navigation";

export default async function Products() {
  return redirect("/products/1");
}
