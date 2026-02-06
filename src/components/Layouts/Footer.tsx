const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8 border-t border-white/10">
      <div className="text-center text-gray-400 text-sm">
        <p>&copy; {currentYear} BrainBolt. Made with ❤️ for quiz enthusiasts</p>
      </div>
    </footer>
  );
}
