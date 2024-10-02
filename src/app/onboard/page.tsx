
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";


export default function ItemSearch() {

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center py-8">
        <h1 className="text-3xl font-bold mb-8 ">
          Want to join us or collaborate?
        </h1>
      </div>

      <div className="flex flex-col">
        <a href="mailto:librizzimatteo.ml@gmail.com">
          <Button className="mt-4 w-full gap-2">
            Contact us <MailIcon className="mr-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </main>
  );
}
