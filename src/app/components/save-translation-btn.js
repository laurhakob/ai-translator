"use client";

import { useSignIn, useUser } from "@clerk/nextjs";
import { Bookmark } from "lucide-react";
import { saveTranslation } from "../actions/save-translation";

export default function SaveBtn({
  sourceLan,
  targetLan,
  sourceText,
  targetText,
  isSaved,
  onHandleSave,
}) {
  const btnClasses = isSaved ? "fill-yellow-500" : "";

  return (
    <button
    type="button"
    onClick={async () => {
      await saveTranslation(sourceLan, targetLan, sourceText, targetText);
      onHandleSave();
    }}
  >
    <Bookmark className={btnClasses} />
  </button>

  );
}
