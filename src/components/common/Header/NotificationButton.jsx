import { useState } from "react";

export default function NotificationButton() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      {/* Tombol Lonceng Notifikasi */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="relative px-2 focus:outline-none" 
        title="Notifikasi" 
        aria-label="Notifikasi"
      >
        🔔
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 z-50 p-2 bg-white border border-item-border rounded-lg shadow-lg w-64">
          <div className="flex justify-between items-center mb-1">
            <span className="text-xs font-bold text-title">Notifikasi Baru</span>
            {/* Tombol Tutup (X) */}
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              ✕
            </button>
          </div>

          <img 
            src="/images/promo.png" 
            alt="Promo Warung Emak Ati" 
            className="w-full h-auto rounded object-cover"
          />
        </div>
      )}
    </div>
  );
}
