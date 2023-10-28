import * as React from "react";
import { PropsWithChildren } from "react";
import { Alert } from "react-bootstrap";

interface MessageProps {
  variant: string;
}

const Message: React.FunctionComponent<PropsWithChildren<MessageProps>> = ({
  variant,
  children,
}) => {
  return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
