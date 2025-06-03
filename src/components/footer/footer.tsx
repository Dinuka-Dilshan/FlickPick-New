const Footer = () => {
  return (
    <footer className="bg-zinc-900  flex justify-between p-5 items-center">
      <div className="container mx-auto text-center">
        <a
          href="https://www.dinukadilshan.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          &copy; {new Date().getFullYear()} Dinuka Dilshan
        </a>
      </div>
    </footer>
  );
};
export default Footer;
