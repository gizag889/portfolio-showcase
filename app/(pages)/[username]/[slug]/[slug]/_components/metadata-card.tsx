import { Button } from "@/app/components/ui/button";
import { Card } from "@/app/components/ui/card";
import { CardHeader } from "@/app/components/ui/card";
import { CardContent } from "@/app/components/ui/card";
import { CardDescription } from "@/app/components/ui/card";
import { fetchRepoData } from "@/app/utils/api";
import { CardTitle } from "@/app/components/ui/card";
import { CardFooter } from "@/app/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";
 
const MetaDataCard = async ({ repoUrl }: { repoUrl: string }) => {
  const repoData = await fetchRepoData(repoUrl);
  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>About</CardTitle>
          <div className="flex items-center gap-1">
            <Star className="text-yellow-500" />
            <span>{repoData.stargazersCount}</span>
          </div>
        </CardHeader>
 
        <CardContent className="space-y-6">
          <CardDescription className="text-3xl">
            {repoData.description}
          </CardDescription>
          <div className="flex gap-2 w-full">
            <Button className="w-1/2" size={"lg"} asChild>
              <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </Button>
            <Button className="w-1/2" size={"lg"} variant={"outline"} asChild>
              <Link
                href={repoData.homepage}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo
              </Link>
            </Button>
          </div>
        </CardContent>
 
        <CardFooter className="flex-col items-start">
          {/* リアクションボタンの設置 */}
        </CardFooter>
      </Card>
      <p className="text-muted-foreground text-sm p-4">
        ログインせずに、リアクションできます;)
      </p>
    </>
  );
};
 
export default MetaDataCard;