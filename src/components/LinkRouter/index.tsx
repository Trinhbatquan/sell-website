import { Link, LinkProps } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const LinkRouter = (props: LinkRouterProps) => {
  return <Link {...props} component={RouterLink as any} />;
};

export default LinkRouter;
