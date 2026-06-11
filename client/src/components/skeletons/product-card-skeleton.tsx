export const ProductCardSkeleton = () => {
  return (
    <div className="rounded-3xl border border-white/10 p-5 animate-pulse">
      <div className="aspect-square rounded-2xl bg-white/10" />

      <div className="mt-5 space-y-3">
        <div className="h-4 w-20 rounded bg-white/10" />

        <div className="h-8 w-40 rounded bg-white/10" />

        <div className="h-4 w-full rounded bg-white/10" />
        <div className="h-4 w-3/4 rounded bg-white/10" />

        <div className="flex justify-between items-center pt-6">
          <div className="h-10 w-24 rounded bg-white/10" />

          <div className="h-14 w-14 rounded-2xl bg-white/10" />
        </div>
      </div>
    </div>
  );
};