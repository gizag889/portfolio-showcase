import Hero from "./_components/hero";
import Gallery from "./_components/galley";
import { fetchRepoData } from "@/app/utils/api";
import { PROJECTS } from "@/app/_data/contents";
 
export default async function Home() {
  const projects = await Promise.all(
    PROJECTS.map(async (project, index) => {
      const data = await fetchRepoData(project.repoUrl);
      return {
        owner: data.owner,
        slug: data.slug,
        repoName: data.repoName,
        topics: data.topics,
        imageURL: project.imageURL,
        index,
      };
    })
  );
 
  return (
    <main className="space-y-32 pt-16">
      <Hero />
      <Gallery projects={projects.reverse()} />
    </main>
  );
}