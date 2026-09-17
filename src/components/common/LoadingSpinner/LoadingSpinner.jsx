export default function LoadingSpinner({ label = "Memuat..." }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-2 text-meta">
      <div className="w-8 h-8 border-4 border-main border-t-transparent rounded-full animate-spin" />
      <span className="text-sm">{label}</span>
    </div>
  );
}

