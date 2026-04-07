# 🧠 Brain Bolt - Quiz Application

Aplikasi quiz interaktif yang dibangun dengan **React**, **TypeScript**, dan **Vite**. Brain Bolt menawarkan pengalaman belajar yang menarik dengan berbagai kategori pertanyaan, sistem skoring, dan antarmuka yang modern dan responsif.

## 📋 Daftar Isi

- [Overview](#overview)
- [Fitur Utama](#fitur-utama)
- [Tech Stack](#tech-stack)
- [Struktur Proyek](#struktur-proyek)
- [Instalasi & Setup](#instalasi--setup)
- [Menjalankan Aplikasi](#menjalankan-aplikasi)
- [Script yang Tersedia](#script-yang-tersedia)
- [Arsitektur Proyek](#arsitektur-proyek)
- [Panduan Kontribusi](#panduan-kontribusi)

---

## 📱 Overview

**Brain Bolt** adalah aplikasi quiz berbasis web yang dirancang untuk memberikan pengalaman pembelajaran yang interaktif dan engaging. Pengguna dapat:

- Membuat akun dan login
- Memilih dari berbagai kategori quiz
- Menjawab pertanyaan dengan tingkat kesulitan berbeda
- Melacak skor dan statistik performa
- Melihat riwayat quiz yang telah dikerjakan

Aplikasi ini menggunakan arsitektur modern dengan context API untuk state management, React Router untuk navigasi, dan Tailwind CSS untuk styling.

---

## ✨ Fitur Utama

### 🔐 Autentikasi

- **Registrasi Pengguna**: Sistem pendaftaran lengkap dengan validasi form menggunakan Zod
- **Login Pengguna**: Autentikasi aman dengan enkripsi password menggunakan bcryptjs
- **Persistensi Session**: Session pengguna disimpan di localStorage untuk continuity
- **Protected Routes**: Halaman quiz dan score dilindungi dengan authentication

### 📚 Kategori Quiz

- Berbagai kategori pertanyaan (Sains, Teknologi, Sejarah, dll)
- Tampilan kategori yang menarik dengan loading skeleton
- Fitur pencarian dan filtering kategori
- Deskripsi kategori yang informatif

### 🎯 Gameplay Quiz

- **Pertanyaan Dinamis**: Pertanyaan dimuat berdasarkan kategori pilihan
- **Timer**: Timer yang dinamis berdasarkan level kesulitan
  - Easy: 30 detik per pertanyaan
  - Medium: 22.5 detik per pertanyaan
  - Hard: 15 detik per pertanyaan
- **Multiple Choice**: Format pilihan ganda dengan 4 opsi jawaban
- **Progress Tracking**: Menampilkan progress pertanyaan (1/10, dst)
- **Instant Feedback**: Feedback langsung untuk setiap jawaban

### 📊 Sistem Skoring

- **Scoring Berdasarkan Difficulty**: Skor bertambah sesuai tingkat kesulitan
- **Statistik Detail**: Menampilkan:
  - Total skor
  - Jumlah jawaban benar
  - Jumlah jawaban salah
  - Persentase keberhasilan
  - Kategori quiz
- **Riwayat Quiz**: Menyimpan riwayat semua quiz yang pernah dikerjakan

### 🎨 User Interface

- **Design Modern**: Menggunakan gradient, blur effects, dan animasi smooth
- **Responsive Design**: Penyesuaian otomatis untuk semua ukuran layar
- **Loading States**: Loading skeleton untuk performa UI yang optimal
- **Error Handling**: Penanganan error yang user-friendly

---

## 🛠 Tech Stack

### Frontend Framework

- **React 19.2.0**: Library UI terkini dengan fitur terbaru
- **TypeScript 5.9.3**: Type safety untuk JavaScript
- **Vite 7.2.4**: Build tool yang cepat dan efisien

### Routing & Navigation

- **React Router DOM 7.13.0**: Client-side routing untuk SPA

### Form Management & Validation

- **React Hook Form 7.71.2**: Lightweight form handling library
- **Zod 4.3.6**: Schema validation dengan TypeScript support
- **@hookform/resolvers 5.2.2**: Integration antara React Hook Form dan Zod

### Styling

- **Tailwind CSS 4.1.18**: Utility-first CSS framework
- **@tailwindcss/vite 4.1.18**: Integration plugin untuk Vite

### Security

- **bcryptjs 3.0.3**: Password hashing dan enkripsi

### Icons

- **Lucide React 0.563.0**: Icon library modern dengan React support

### Developer Tools

- **ESLint 9.39.1**: Code quality dan consistency
- **TypeScript ESLint 8.46.4**: ESLint rules untuk TypeScript
- **Vite React Plugin 5.1.1**: React Fast Refresh support

---

## 📁 Struktur Proyek

```
brain-bolt/
├── public/                          # File statis
│   ├── icons/                       # Icon files
│   └── images/                      # Gambar dan assets
│
├── src/
│   ├── assets/                      # Asset lokal
│   │
│   ├── components/                  # Komponen React
│   │   ├── Layouts/                 # Komponen layout utama
│   │   │   ├── AuthLayout.tsx       # Layout untuk auth pages
│   │   │   ├── Header.tsx           # Header navbar
│   │   │   └── Footer.tsx           # Footer
│   │   │
│   │   ├── Loading/                 # Loading skeleton components
│   │   │   ├── CategorySkeleton.tsx
│   │   │   └── QuizSkeleton.tsx
│   │   │
│   │   ├── Pages/                   # Page-specific components
│   │   │   ├── HomePage/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── CategoriesSection.tsx
│   │   │   │   ├── StatsSection.tsx
│   │   │   │   └── FeaturesSection.tsx
│   │   │   ├── QuizPage/
│   │   │   │   ├── QuizCard.tsx      # Pertanyaan & opsi jawaban
│   │   │   │   ├── QuizHeader.tsx    # Header quiz info
│   │   │   │   └── QuizTimer.tsx     # Timer countdown
│   │   │   └── ScorePage/
│   │   │       ├── ScoreHeader.tsx
│   │   │       └── ScoreDetails.tsx
│   │   │
│   │   └── UI/                      # Reusable UI components
│   │       ├── Inputs/
│   │       │   ├── Input.tsx         # Text input component
│   │       │   ├── AuthInput.tsx     # Input untuk auth
│   │       │   └── Select.tsx        # Select/dropdown component
│   │       └── PopUp/
│   │           └── PopUp.tsx         # Modal/popup component
│   │
│   ├── contexts/                    # React Context untuk state management
│   │   ├── Auth/
│   │   │   ├── AuthContext.tsx       # Context definition
│   │   │   └── AuthProvider.tsx      # Context provider component
│   │   └── Questions/
│   │       ├── QuestionsContext.tsx  # Context definition
│   │       └── QuestionsProvider.tsx # Context provider component
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useAuth.ts               # Hook untuk auth context
│   │   ├── useQuestions.ts          # Hook untuk questions context
│   │   └── useBoolean.ts            # Hook untuk boolean state
│   │
│   ├── pages/                       # Page-level components (routes)
│   │   ├── Home.tsx                 # Home/landing page
│   │   ├── Quiz.tsx                 # Quiz page
│   │   ├── Scores.tsx               # Scores/history page
│   │   ├── SignIn.tsx               # Login page
│   │   └── SignUp.tsx               # Register page
│   │
│   ├── schemas/                     # Zod validation schemas
│   │   └── auth.schema.ts           # Auth form validation
│   │
│   ├── services/                    # API & business logic
│   │   └── auth.service.ts          # Authentication service
│   │
│   ├── types/                       # TypeScript type definitions
│   │   ├── auth.types.ts            # Auth types
│   │   ├── category.types.ts        # Category types
│   │   └── question.types.ts        # Question types
│   │
│   ├── utils/                       # Utility functions
│   │   ├── auth.utils.ts            # Authentication utilities
│   │   ├── categories.utils.ts      # Category utilities
│   │   ├── difficulty.utils.ts      # Difficulty level utilities
│   │   ├── score.utils.ts           # Scoring calculations
│   │   └── stripCategoryPrefix.utils.ts
│   │
│   ├── lib/                         # Library configurations
│   │   └── api.ts                   # API client setup
│   │
│   ├── index.css                    # Global styles (Tailwind)
│   └── main.tsx                     # React entry point
│
├── eslint.config.js                 # ESLint configuration
├── vite.config.ts                   # Vite configuration
├── tsconfig.json                    # TypeScript configuration
├── tsconfig.app.json                # App-specific TS config
├── tsconfig.node.json               # Node/build TS config
├── tailwind.config.js               # Tailwind CSS configuration
├── package.json                     # Dependencies & scripts
├── pnpm-lock.yaml                   # Locked dependencies (pnpm)
└── README.md                        # Dokumentasi (file ini)
```

---

## 🚀 Instalasi & Setup

### Prerequisites

Pastikan Anda memiliki:

- **Node.js** v16 atau lebih tinggi
- **npm**, **yarn**, atau **pnpm** (direkomendasikan: pnpm)

### Langkah-langkah Instalasi

1. **Clone Repository**

   ```bash
   git clone https://github.com/yourusername/brain-bolt.git
   cd brain-bolt
   ```

2. **Install Dependencies**

   Menggunakan pnpm (recommended):

   ```bash
   pnpm install
   ```

   Atau menggunakan npm:

   ```bash
   npm install
   ```

   Atau menggunakan yarn:

   ```bash
   yarn install
   ```

3. **Setup Environment Variables** (jika diperlukan)

   Buat file `.env.local` di root directory:

   ```env
   VITE_API_BASE_URL=http://localhost:3000/api
   # Tambahkan environment variables lainnya sesuai kebutuhan
   ```

---

## 🎯 Menjalankan Aplikasi

### Development Mode

Jalankan aplikasi dalam mode development dengan HMR (Hot Module Replacement):

```bash
pnpm dev
```

Aplikasi akan berjalan di `http://localhost:5173` (port bisa berbeda jika 5173 sudah terpakai)

### Production Build

Compile TypeScript dan build untuk production:

```bash
pnpm build
```

Hasil build akan tersimpan di folder `dist/`

### Preview Build

Preview hasil build sebelum production deploy:

```bash
pnpm preview
```

### Linting

Jalankan ESLint untuk mengecek code quality:

```bash
pnpm lint
```

---

## 📦 Script yang Tersedia

| Script         | Deskripsi                                        |
| -------------- | ------------------------------------------------ |
| `pnpm dev`     | Jalankan dev server dengan Vite                  |
| `pnpm build`   | Type-check dengan tsc dan build untuk production |
| `pnpm lint`    | Jalankan ESLint untuk code quality check         |
| `pnpm preview` | Preview production build secara lokal            |

---

## 🏗 Arsitektur Proyek

### State Management

Aplikasi menggunakan **React Context API** untuk state management:

1. **Auth Context**
   - Mengelola state autentikasi pengguna
   - Menyimpan user info (username, email, dll)
   - Handle login/logout/register

2. **Questions Context**
   - Mengelola state quiz
   - Menyimpan pertanyaan yang dimuat
   - Track jawaban pengguna
   - Manage timer quiz

### Data Flow

```
User Input → Component → Hook (useAuth/useQuestions)
    ↓
Context Provider → Update Context State
    ↓
Component meng-subscribe Context → Re-render
```

### Type Safety

Semua data flow dilindungi dengan TypeScript types:

- **auth.types.ts**: `User`, `AuthContextType`, `SignInFormData`, dll
- **question.types.ts**: `Question`, `Category`, `QuizHistory`, dll
- **category.types.ts**: Category-related types

### Form Validation

Validasi form menggunakan **Zod** untuk schema validation:

```typescript
// Contoh: auth.schema.ts
export const signUpSchema = z
  .object({
    username: z.string().min(3).max(20),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string(),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });
```

### Styling Approach

- **Tailwind CSS**: Utility-first CSS untuk rapid development
- **Global Styles**: `src/index.css` berisi konfigurasi Tailwind
- **Custom Animations**: Gradient blobs dan animations di berbagai komponen

---

## 🎨 Komponen Utama

### Pages

#### Home Page

- Hero section dengan call-to-action
- Statistik/stats section
- Kategori quiz yang tersedia
- Features section
- Header dan Footer

#### Quiz Page

- Menampilkan satu pertanyaan per satu
- 4 pilihan jawaban
- Timer yang countdown
- Progress indicator
- Navigation prev/next

#### Scores Page

- Menampilkan skor terakhir
- Riwayat quiz yang pernah dikerjakan
- Detail score breakdown
- Option untuk restart atau pilih kategori baru

#### Auth Pages (Sign In / Sign Up)

- Form input dengan validasi
- Error handling
- Links untuk switch between sign in/sign up

### Components

**UI Components**: Reusable components seperti Input, Select, PopUp
**Layout Components**: Header, Footer, AuthLayout
**Page Components**: Specific components untuk setiap halaman
**Loading Components**: Skeleton loaders untuk UX yang lebih baik

---

## 🔒 Security Features

1. **Password Hashing**: Password di-hash menggunakan bcryptjs
2. **Client-side Validation**: Input validation dengan Zod
3. **Protected Routes**: Routes yang memerlukan authentication
4. **Type Safety**: TypeScript untuk mencegah type-related bugs
5. **XSS Protection**: React automatically escapes content

---

## 📱 Browser Compatibility

Aplikasi ini kompatibel dengan:

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 🤝 Panduan Kontribusi

### Cara Berkontribusi

1. Fork repository
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

### Coding Standards

- Gunakan TypeScript untuk type safety
- Ikuti structure folder yang sudah ada
- Gunakan functional components dengan hooks
- Tambahkan proper typing untuk semua props dan returns
- Validasi input menggunakan Zod
- Ikuti ESLint rules

### Commit Message Guidelines

- Use clear, descriptive commit messages
- Format: `type(scope): description`
- Contoh: `feat(quiz): add timer functionality`
- Types: feat, fix, docs, style, refactor, test, chore

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah MIT License - lihat file LICENSE untuk detail.

---

## 💡 Tips Pengembangan

### Menambah Feature Baru

1. Buat type definitions di `src/types/`
2. Buat service/utility di `src/services/` atau `src/utils/`
3. Buat hook custom di `src/hooks/` jika diperlukan
4. Buat component/page di `src/components/` atau `src/pages/`
5. Update context jika perlu state management

### Debug Tips

- Gunakan React DevTools untuk inspect component state
- Gunakan Redux DevTools (jika ada) untuk state management
- Check browser console untuk error messages
- Use TypeScript error messages untuk guidance

### Performance Tips

- Gunakan React.lazy() untuk code splitting (lihat Home.tsx)
- Memoize expensive calculations
- Use useCallback untuk function dependencies
- Avoid unnecessary re-renders dengan proper dependency arrays

---

## 📞 Support

Jika ada pertanyaan atau issue, silakan buat Issues di GitHub repository atau hubungi tim development.

---

**Happy Coding! 🚀**
