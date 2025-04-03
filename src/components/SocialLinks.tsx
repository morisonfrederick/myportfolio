import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faWhatsapp,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function SocialLinks() {
  return (
    <div className="flex justify-center lg:ml-40 lg:mr-40 mt-5 sm:ml-2  sm:mr-2">
      <div className="flex gap-16 sm:gap-56">
        <a href="https://www.linkedin.com/in/morisonf/">
          <FontAwesomeIcon
            className="text-blue-600"
            icon={faLinkedin}
            size="xl"
          />
        </a>
        <a href="https://api.whatsapp.com/send?phone=353834398388">
          <FontAwesomeIcon
            className="text-green-700"
            icon={faWhatsapp}
            size="xl"
          />
        </a>
        <a href="https://github.com/morisonfrederick">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </a>
        <a href="#">
          <FontAwesomeIcon
            className="text-blue-600"
            icon={faTwitter}
            size="xl"
          />
        </a>
      </div>
    </div>
  );
}

export default SocialLinks;
