export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex flex-row gap-4">
          <textarea className="border border-slate-800 rounded-md p-4 " />
          <textarea className="border border-slate-800 rounded-md p-4 " />
        </div>
      </main>
    </div>
  );
}
