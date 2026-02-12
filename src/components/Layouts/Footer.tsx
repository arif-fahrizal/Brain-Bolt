const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="px-4 py-8 border-t border-white/10">
      <div className="text-sm text-center text-gray-400">
        <p>&copy; {currentYear} BrainBolt. Made with ❤️ for quiz enthusiasts</p>
      </div>
    </footer>
  );
}
