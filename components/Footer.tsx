type FooterProps = {
  font?: string;
};

const Footer = ({ font }: FooterProps) => {
  return (
    <footer className="bg-navCol w-full border-blue-300 shadow-md">
      <div className="flex max-w-6xl mx-auto justify-center items-center py-2">
        <h2>Designed by Sparshak Nag.</h2>
      </div>
    </footer>
  );
};
export default Footer;
