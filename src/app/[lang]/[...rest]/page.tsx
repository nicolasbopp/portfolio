import { notFound } from "next/navigation";

// This route only ever answers "not found", so there is nothing to prefetch.
export const instant = false;

// Any address that matches no page ends up here and shows the not-found page in the right language.
export default function CatchAll() {
  notFound();
}
