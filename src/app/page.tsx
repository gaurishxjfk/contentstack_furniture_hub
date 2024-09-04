import Navbar from "@/components/Navbar/Navbar";
import { getAllEntries, getNavRes } from "@/helper";

export default async function Home() {
  const navRes = await getNavRes();
  if (!navRes) throw new Error("Status code 404");

  console.log(navRes, "c;linet");
  return <main className="h-[90vh]">basic pagess</main>;
}
