import React, { ReactNode } from "react";
import Header from "@/src/components/common/Header";
import Footer from "@/src/components/common/Footer";
import { Container } from "react-bootstrap";

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Container style={{ minHeight: "100vh" }}>{children}</Container>
      <Footer />
    </>
  );
};

export default Layout;
