import React from 'react'

const cadangan = () => {
  return (
    <div>          2. Saklar Rahasia (tetap di sini)
          <input type="checkbox" className="peer hidden" id="navbar-open" />

          {/* 3. Tombol Burger (tidak berubah) */}
          <label
            htmlFor="navbar-open"
            className="cursor-pointer text-xl sm:hidden"
          >
            <span className="sr-only">Toggle Navigation</span>
            {/* <i className="ri-menu-3-fill ri-lg font-bold"></i> */}
            <Logs size={24} color="currentColor" strokeWidth={3} />
          </label>

          {/* 4. Div Menu (Ini bagian yang paling banyak berubah) */}
          <div
            className={`
                /* --- Gaya untuk Mobile (menu dropdown absolut) --- */
                absolute top-full left-0 z-10 w-full max-h-0 overflow-hidden border-gray-700 bg-slate-800 shadow-md peer-checked:max-h-screen
                
                 /* === KELAS ANIMASI DITAMBAHKAN DI SINI === */
                transition-all duration-300 ease-in-out

                /* --- Reset/Gaya untuk Desktop (kembali jadi normal) --- */
                sm:static sm:z-auto sm:w-auto sm:max-h-full sm:bg-transparent sm:shadow-none
            `}
          >
            <ul className="flex flex-col gap-y-4 p-4 text-center sm:flex-row sm:gap-x-8 sm:p-0 text-white sm:text-slate-800">
              <li>
                <Link href={"#beranda"}>Beranda</Link>
              </li>
              <li>
                <Link href={"#layanan"}>Layanan</Link>
              </li>
              <li>
                <Link href={"#proyek"}>Proyek</Link>
              </li>
              <li>
                <Link href={"#kontak"}>Kontak</Link>
              </li>
            </ul>
          </div></div>
  )
}

export default cadangan
