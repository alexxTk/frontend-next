import React from "react";
import Layout from "@/src/components/common/Layout";
import { Button, Col, Row } from "react-bootstrap";
import CalculatorCard from "@/src/components/create/CalculatorCard";

const Calculator = () => {
  return (
    <Layout>
      <div style={{ height: "116px" }}></div>
      <Row className="g-0">
        <Col className="d-flex flex-row align-items-center justify-content-between">
          <div className="d-flex flex-row">
            <div className="title">減圧TTソフトチェック 詳細</div>
            <div className="title-badge">新規作成中</div>
          </div>
          <div>
            <Button style={{ paddingLeft: 32, paddingRight: 32 }}>複製</Button>
          </div>
        </Col>
      </Row>
      <div style={{ height: "35px" }}></div>
      <CalculatorCard />
      <div style={{ height: "88px" }}></div>
    </Layout>
  );
};

export default Calculator;
