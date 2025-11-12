import { marked } from "marked";
// import {
//   Card,
//   CardHeader,
//   CardContent,
//   CardDescription,
// } from ""
import { Card } from "@/app/components/ui/card";
import { CardHeader } from "@/app/components/ui/card";
import { CardContent } from "@/app/components/ui/card";
import { CardDescription } from "@/app/components/ui/card";
import { fetchRepoData } from "@/app/utils/api";

interface MarkdownViewerProps {
  repoUrl: string;
}
 
export default async function MarkdownViewer({ repoUrl }: MarkdownViewerProps) {

  const repoData = await fetchRepoData(repoUrl);
 
  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardDescription>/README.md</CardDescription>
      </CardHeader>
      <CardContent>
        {repoData.readme && (
          <article
            className="prose max-w-full"
            dangerouslySetInnerHTML={{
              __html: marked.parse(repoData.readme),
            }}
          />
        )}
      </CardContent>
    </Card>
  );
}