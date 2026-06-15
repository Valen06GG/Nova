export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div
        className="
          w-12
          h-12
          border-4
          border-violet-500
          border-t-transparent
          rounded-full
          animate-spin
        "
      />
    </div>
  );
}