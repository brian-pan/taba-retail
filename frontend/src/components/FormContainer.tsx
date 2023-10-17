import * as React from "react";
import { PropsWithChildren } from "react";
import { Container, Row, Col } from "react-bootstrap";

interface FormContainerProps {}

const FormContainer: React.FunctionComponent<
  PropsWithChildren<FormContainerProps>
> = (props) => {
  return <Container>{props.children}</Container>;
};

export default FormContainer;
