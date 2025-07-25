import { DiscourseDocument } from "@/components/discourse-doc";
import { DocList } from "@/components/doc-list";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { getAllDocuments } from "@/lib/doc";
import { m } from "@/lib/i18n/messages";
import { getLocale } from "@/lib/i18n/runtime";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/airspace/sop")({
  component: Page,
  loader() {
    return getAllDocuments();
  },
  head: () => ({ meta: [{ title: m["pages_airspace_sop_title"]() }] }),
});

function Page() {
  const locale = getLocale();
  const documents = Route.useLoaderData();

  return (
    <>
      {locale === "en" && (
        <Alert variant="destructive">
          <AlertTitle>{m["pages_airspace_sop_no-english"]()}</AlertTitle>
        </Alert>
      )}
      <h1 className="my-4 text-center text-3xl font-bold">{m["pages_airspace_sop_new"]()}</h1>
      <DocList
        documents={documents.filter(
          (doc) =>
            doc.webPath.startsWith("/docs/aerodromes") ||
            doc.webPath.startsWith("/docs/enroute") ||
            doc.webPath.startsWith("/docs/terminal_area"),
        )}
      />
      <hr />
      <h1 className="my-4 text-center text-3xl font-bold">{m["pages_airspace_sop_legacy"]()}</h1>
      <DiscourseDocument en="7532" />
    </>
  );
}
