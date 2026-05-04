export default function NotFound() {
  return (
    <div className="h-screen bg-deep-black flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-9xl font-black text-white/10 absolute select-none">404</h1>
      <h2 className="text-3xl font-bold text-white mb-4 relative">Halaman Tidak Ditemukan</h2>
      <p className="text-gray-400 mb-8 max-w-md">Sepertinya Anda tersesat di dimensi lain. Mari kembali ke markas Zilabs.</p>
      <a href="/" className="px-8 py-3 bg-gradient-brand text-white font-bold rounded-full hover:scale-105 transition-all">
        Kembali ke Beranda
      </a>
    </div>
  )
}
