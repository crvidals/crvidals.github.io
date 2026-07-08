function SectionSkeleton() {
  return (
    <div className="animate-pulse py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <div className="mb-3 h-9 w-48 rounded bg-slate-800" />
          <div className="h-1 w-12 rounded-full bg-slate-800" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="h-48 rounded-xl bg-card" />
          <div className="h-48 rounded-xl bg-card" />
        </div>
      </div>
    </div>
  );
}

export default SectionSkeleton;
