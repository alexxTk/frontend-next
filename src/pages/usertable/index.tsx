import React from "react";
import Layout from "@/src/components/common/Layout";
import { Button, Col, Row, Table, Form, Card, Container } from "react-bootstrap";
import CalculatorCard from "@/src/components/create/CalculatorCard";
import { AiOutlinePlus } from "react-icons/ai";



const UserInfornation = () => {
  return (
    <Layout>
      <div style={{ height: "116px" }}></div>
      <Row className="g-0">
        <Col className="d-flex flex-row align-items-center justify-content-between">
          <div className="d-flex flex-row">
            <div className="title">ユーザー一覧</div>
          </div>
          <div className="space-btn-icon">
            <Button>
              <AiOutlinePlus className="me-2" />
              <span>新規追加</span>
            </Button>
          </div>
        </Col>
      </Row>
        <div className="center-ro">
            <div className="table-pos">
            <Table borderless>
              <thead>
                <tr> 
                <div className="brd-don">
                  <th>氏名</th>
                  <th>メールアドレス</th>
                  <th></th>
                  </div>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <div className="brd-don">
                  <td>斉藤太郎</td>
                  <td>satito.tarou@xxx.com</td>
                  <td>削除</td>
                  </div>
                </tr>
                <tr>
                  <div className="brd-don">
                  <td>山田一郎</td>
                  <td>yamada.ichiro@xxx.com</td>
                  <td>削除</td>
                  </div>
                </tr>
                <tr>
                  <div className="brd-don">
                  <td>長谷川花子</td>
                  <td>hasegawa.hanako@xxx.com</td>
                  <td>削除</td>
                  </div>
                </tr>
                <tr>
                  <div className="brd-don">
                  <td>山本幸子</td>
                  <td>yamamoto.sachiko@xxx.com</td>
                  <td>削除</td>
                  </div>
                </tr>
              </tbody>
            </Table>
            </div>
        </div>
    </Layout>
  );
};

export default UserInfornation;
