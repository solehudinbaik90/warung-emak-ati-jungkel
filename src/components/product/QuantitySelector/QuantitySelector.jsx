export default function QuantitySelector({ qty, onChange, min = 1, max = 99 }) {
  return (
    <div className="flex items-center border border-item-border rounded-md w-fit">
      <button
        className="w-8 h-8 text-lg"
        onClick={() => onChange(Math.max(min, qty - 1))}
        aria-label="Kurangi jumlah"
      >
        −
      </button>
      <input
        className="w-10 text-center outline-none"
        value={qty}
        readOnly
        aria-label="Jumlah"
      />
      <button
        className="w-8 h-8 text-lg"
        onClick={() => onChange(Math.min(max, qty + 1))}
        aria-label="Tambah jumlah"
      >
        +
      </button>
    </div>
  );
}

