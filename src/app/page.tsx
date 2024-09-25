import Heroes from "@/components/pages/heroes";
import LanguageSelest from "@/components/ui/LanguageSelest";

export default function Example() {
  return (
    <div className="flex flex-col items-center w-full h-full">
      <Heroes />
      <LanguageSelest />
    </div>
  );
}
