import React from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import moment from "moment";
import DateRangePicker from "react-bootstrap-daterangepicker";

const CalculatorCard = () => {
  return (
    <Card className="calculator-card">
      <Form>
        <Row>
          <Col xs={24} lg={12} className="mb-2 mb-lg-0">
            <Form.Group as={Row} controlId="name">
              <Form.Label
                column
                xs={24}
                lg={6}
                xl={5}
                className="input-label d-flex align-items-center"
              >
                現場名
              </Form.Label>
              <Col xs={24} lg={16} xl={17}>
                <Form.Control
                  type="text"
                  className="form-options bold"
                  placeholder="減圧TTソフトチェック"
                  name="name"
                />
              </Col>
            </Form.Group>
          </Col>
          <Col xs={24} lg={12} className="mb-2 mb-lg-0">
            <Form.Group as={Row} controlId="date">
              <Form.Label
                column
                xs={24}
                lg={5}
                xl={4}
                className="input-label d-flex align-items-center"
              >
                作成日
              </Form.Label>
              <Col xs={24} lg={14} xl={13}>
                <DateRangePicker
                  initialSettings={{
                    singleDatePicker: true,
                    showDropdowns: true,
                    startDate: moment(),
                    minYear: 1901,
                    maxYear: parseInt(moment().format("YYYY"), 10),
                    locale: {
                      separator: " - ",
                      applyLabel: "更新",
                      cancelLabel: "取消",
                      format: "YYYY/MM/DD",
                      fromLabel: "From",
                      toLabel: "To",
                      customRangeLabel: "Custom",
                      weekLabel: "W",
                      daysOfWeek: ["日", "月", "火", "水", "木", "金", "土"],
                      monthNames: [
                        "1月",
                        "2月",
                        "3月",
                        "4月",
                        "5月",
                        "6月",
                        "7月",
                        "8月",
                        "9月",
                        "10月",
                        "11月",
                        "12月",
                      ],
                      firstDay: 1,
                    },
                  }}
                >
                  <Form.Control name="" className="form-options bold" />
                </DateRangePicker>
              </Col>
            </Form.Group>
          </Col>
        </Row>
        <Row className="mt-0 mt-lg-4">
          <Col xs={24} lg={12} className="mb-3 mb-lg-0">
            <Form.Group as={Row} controlId="dec_classification">
              <Form.Label
                column
                xs={24}
                lg={6}
                xl={5}
                className="input-label d-flex align-items-center"
              >
                減圧区分
              </Form.Label>
              <Col xs={24} lg={16} xl={17}>
                <Form.Select className="form-options" name="dec_classification">
                  <option>空気呼吸・空気減圧</option>
                  <option>1</option>
                  <option>2</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Col>
          <Col xs={24} lg={12} className="d-flex flex-row align-items-center">
            <div className="updater">最終更新者</div>
            <div className="ms-4 updater-name">鈴木二郎</div>
          </Col>
        </Row>
        <div style={{ height: "39px" }} className="border-bottom"></div>
        <div style={{ height: "45px" }}></div>
        <Row className="g-0">
          <Col xs={24} lg={13} xl={12}>
            <Table bordered className="values-table">
              <tbody>
                <tr>
                  <th>最大作業時間</th>
                  <td>
                    <Form.Control type="number" placeholder="123456" name="max_working_time" />
                  </td>
                </tr>
                <tr>
                  <th>減圧ピッチ</th>
                  <td>
                    <Form.Control type="number" placeholder="30" name="decompression_pitch" />
                  </td>
                </tr>
                <tr>
                  <th>減圧速度1</th>
                  <td>
                    <Form.Control type="number" placeholder="123456" name="decompression_speed_1" />
                  </td>
                </tr>
                <tr>
                  <th>減圧速度2</th>
                  <td>
                    <Form.Control type="number" placeholder="123456" name="decompression_speed_2" />
                  </td>
                </tr>
                <tr>
                  <th>減圧速度2適用気圧</th>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="123456"
                      name="decompression_speed_2_pressure"
                    />
                  </td>
                </tr>
                <tr>
                  <th>酸素減圧の開始気圧</th>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="123456"
                      name="pressure_oxygen_decompression"
                    />
                  </td>
                </tr>
                <tr>
                  <th>純酸素呼吸時の窒素濃度</th>
                  <td>
                    <Form.Control type="number" placeholder="0.0" name="nitrogen_concentration" />
                  </td>
                </tr>
                <tr>
                  <th>純酸素呼吸時の酸素濃度UPTD</th>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="123456"
                      name="oxygen_concentration_uptd"
                    />
                  </td>
                </tr>
                <tr>
                  <th>混合ガス呼吸開始気圧</th>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="123456"
                      name="mixed_gas_start_pressure"
                    />
                  </td>
                </tr>
                <tr>
                  <th>混合ガス呼吸終了気圧</th>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="123456"
                      name="mixed_gas_end_pressure"
                    />
                  </td>
                </tr>
                <tr>
                  <th>混合ガスの窒素濃度</th>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="123456"
                      name="nitrogen_concentration_mixed_gas"
                    />
                  </td>
                </tr>
                <tr>
                  <th>混合ガスのヘリウム濃度</th>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="0.0"
                      name="helium_concentration_mixed_gas"
                    />
                  </td>
                </tr>
                <tr>
                  <th>混合ガスの酸素濃度</th>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="0.0"
                      name="oxygen_concentration_mixed_gas"
                    />
                  </td>
                </tr>
                <tr>
                  <th>混合ガスの酸素濃度UPTD</th>
                  <td>
                    <Form.Control
                      type="number"
                      placeholder="0.0"
                      name="oxygen_concentration_mixed_gas_uptd"
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col xs={24} lg={11} xl={12}>
            <Row>
              <Col className="d-flex justify-content-center justify-content-lg-start">
                <Button
                  style={{ paddingLeft: 32, paddingRight: 32, marginTop: 6 }}
                  className="ms-lg-3 ms-xl-5"
                >
                  確定
                </Button>
              </Col>
            </Row>
            <Row className="mt-3 mt-lg-5">
              <Col className="d-flex flex-row align-items-center">
                <Form.Check
                  type="checkbox"
                  label="減圧表を15分間隔にする"
                  id="every_15_min"
                  value="every_15_min"
                  className="custom-checkbox ms-lg-3 ms-xl-5 d-flex align-items-center"
                />
                <Button style={{ paddingLeft: 32, paddingRight: 32 }} className="ms-3">
                  計算
                </Button>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col>
                <Form.Check
                  type="checkbox"
                  label="作業を1日1回にする"
                  id="once_a_day"
                  value="once_a_day"
                  className="custom-checkbox ms-lg-3 ms-xl-5 d-flex align-items-center"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default CalculatorCard;
