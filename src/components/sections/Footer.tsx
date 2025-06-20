import { BRAND_NAME } from '../../globals';

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-primary/30 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
