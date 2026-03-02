import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ButtonAsChild({ btn, PageLink, handleClick }) {
  if (PageLink) {
    return (
      <Button asChild>
        <Link to={PageLink}>{btn}</Link>
      </Button>
    );
  }
  return <Button onClick={() => handleClick()}>{btn}</Button>;
}
