import { DiscourseDocument, getDiscourseDocumentMeta } from "@/components/discourse-doc";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/controller/become-a-controller")({
  component: () => <DiscourseDocument cn="7188" en="7214" />,
  head: getDiscourseDocumentMeta("7188", "7214"),
});
