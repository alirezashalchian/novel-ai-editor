import TailwindAdvancedEditor from "@/components/tailwind/advanced-editor";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 py-4 sm:px-5">
      <h1>Share your story here</h1>
      <TailwindAdvancedEditor />
    </div>
  );
}
