/* eslint-disable react/react-in-jsx-scope */
import ReactCountryFlag from 'react-country-flag';

const appPage = {
  id: {
    title: 'Aplikasi Catatan',
    nav: {
      active: 'Aktif',
      archive: 'Arsip',
      title: 'Ganti Tema',
      flag: <ReactCountryFlag countryCode="ID" svg title="Ganti Bahasa" />,
    },
    msg: {
      confirm: 'Apakah kamu yakin?',
      loading: 'Memuat data...',
      error: 'Terjadi kesalahan. Mohon coba lagi',
    },
    add: 'Tambah Catatan',
    back: 'Kembali',
    notFound: 'Halaman Tidak Ditemukan',
    logout: 'Keluar',
  },
  en: {
    title: 'Note App',
    nav: {
      active: 'Active',
      archive: 'Archive',
      title: 'Change Theme',
      flag: <ReactCountryFlag countryCode="GB" svg title="Change Language" />,
    },
    msg: {
      confirm: 'Are you sure?',
      loading: 'Loading...',
      error: 'Error. Please Try Again',
    },
    add: 'Add Note',
    back: 'Back',
    notFound: 'Page Not Found',
    logout: 'Logout',
  },
};

const registerPage = {
  id: {
    title: 'Daftarkan Akunmu',
    placeholderName: 'Nama',
    placeholderEmail: 'Email',
    placeholderPassword: 'Kata Sandi',
    placeholderConfirmPassword: 'Konfirmasi Kata Sandi',
    buttonRegister: 'Daftar',
  },
  en: {
    title: 'Register Your Account',
    placeholderName: 'Name',
    placeholderEmail: 'Email',
    placeholderPassword: 'Password',
    placeholderConfirmPassword: 'Confirm Password',
    buttonRegister: 'Register',
  },
};

const loginPage = {
  id: {
    title: 'Masuk ke akunmu',
    placeholderEmail: 'Email',
    placeholderPassword: 'Kata Sandi',
    buttonLogin: 'Masuk',
  },
  en: {
    title: 'Enter to Your Account',
    placeholderEmail: 'Email',
    placeholderPassword: 'Password',
    buttonLogin: 'Login',
  },
};

const notePage = {
  id: {
    placeholderSearch: 'Cari berdasarkan judul ...',
    add: 'Tambahkan Catatan',
    active: {
      title: 'Catatan Aktif',
      empty: 'Catatan Kosong',
    },
    archive: {
      title: 'Catatan Arsip',
      empty: 'Catatan Kosong',
    },
  },
  en: {
    placeholderSearch: 'Search by title ...',
    add: 'Add Note',
    active: {
      title: 'Active Notes',
      empty: 'Empty Notes',
    },
    archive: {
      title: 'Archive Notes',
      empty: 'Empty Notes',
    },
  },
};

const addPage = {
  id: {
    title: 'Tambahkan Catatan',
    placeholderTitle: 'Masukkan judul catatan',
    placeholderBody: 'Masukkan catatan kamu',
    cancelButton: 'Batalkan',
    addButton: 'Tambahkan',
    character: 'Sisa Karakter',
  },
  en: {
    title: 'Add Note',
    placeholderTitle: 'Input note title',
    placeholderBody: 'Input your notes',
    cancelButton: 'Cancel',
    addButton: 'Add',
    character: 'Character Remaining',
  },
};

const detailPage = {
  id: {
    backButton: 'Kembali',
    date: 'Dibuat pada',
    archive: 'Arsipkan Catatan',
    unArchive: 'Urungkan Arsip Catatan',
    delete: 'Hapus Catatan',
  },
  en: {
    backButton: 'Back',
    date: 'Created At',
    archive: 'Archive Note',
    unArchive: 'UnArchive Note',
    delete: 'Delete Note',
  },
};

const content = {
  appPage,
  loginPage,
  registerPage,
  notePage,
  addPage,
  detailPage,
};

export { appPage, loginPage, registerPage, notePage, addPage, detailPage };

export default content;
