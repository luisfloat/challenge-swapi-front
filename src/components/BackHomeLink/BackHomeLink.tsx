import { FC } from "react";
import { Link } from "react-router-dom";

const BackHomeLink: FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <span className="font-roboto text-xs text-[#009CDA]">
              &lt;&lt; Back
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default BackHomeLink;