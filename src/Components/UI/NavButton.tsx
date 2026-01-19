import { Link } from "react-router-dom";

interface NavButtonProps {
  label: string;
}

const NavButton = ({ label }: NavButtonProps) => {
  return (
    <Link
      to="#contacts"
      className=" hidden cursor-pointer sm:inline-block bg-primary text-white  rounded-2xl font-medium transition-colors hover:bg-[#015a50] text-sm sm:px-6 sm:py-2"
    >
      {label}
    </Link>
  );
};

export default NavButton;
