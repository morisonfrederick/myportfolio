import Mybutton from "../components/Mybutton";
import { FC } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  {
    href: "#contacts",
    label: "Contact me",
    bg_color: "bg-main-yellow",
    text_color: "text-white",
  },
];
interface closeButtonType {
  closeButton: () => void;
}

const Navlinks: FC<closeButtonType> = ({ closeButton }) => {
  return (
    <nav role="navigation" className="flex flex-col sm:flex-row gap-3">
      {links.map(({ href, label, bg_color, text_color }) => (
        <a key={href} href={href} onClick={closeButton} aria-label={label}>
          <Mybutton
            bg_color={bg_color}
            text_color={text_color}
            cb={closeButton}
          >
            {label}
          </Mybutton>
        </a>
      ))}
    </nav>
  );
};

export default Navlinks;
