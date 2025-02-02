const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/eglaf-tf" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://codolio.com/profile/eglaf_tf"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon">
          <p className="text-white text-sm">{`<>`}</p>
        </a>
      </div>

      <p className="text-white-500">© 2025 Akshit Thakur. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
