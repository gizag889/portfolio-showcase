import Hero from "./_components/hero";
import { PROJECTS } from "@/app/_data/contents";
import { fetchRepoData } from "@/app/utils/api";

export default async function Home() {
  const res = await fetchRepoData(PROJECTS[0].repoUrl);
  console.log(res);
  return <div>Hello</div>;
}