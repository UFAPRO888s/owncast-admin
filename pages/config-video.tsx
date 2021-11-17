import { Col, Collapse, Row, Typography } from 'antd';
import React from 'react';
import VideoCodecSelector from '../components/config/video-codec-selector';
import VideoLatency from '../components/config/video-latency';
import VideoVariantsTable from '../components/config/video-variants-table';

const { Panel } = Collapse;
const { Title } = Typography;

export default function ConfigVideoSettings() {
  return (
    <div className="config-video-variants">
      <Title>Video configuration</Title>
      <p className="description">ก่อนเปลี่ยนการกำหนดค่าวิดีโอของคุณ{' '}
      <a
          href="https://ufapro888s.info/"
          target="_blank"
          rel="noopener noreferrer"
        >
         เยี่ยมชมเว็บไซต์
        </a>{' '}
        เพื่อจะได้เพิ่มยอด Trffic ให้หน่อย
      </p>

      <Row gutter={[16, 16]}>
        <Col md={24} lg={12}>
          <div className="form-module variants-table-module">
            <VideoVariantsTable />
          </div>
        </Col>
        <Col md={24} lg={12}>
          <div className="form-module latency-module">
            <VideoLatency />
          </div>

          <Collapse className="advanced-settings codec-module">
            <Panel header="Advanced Settings" key="1">
              <div className="form-module variants-table-module">
                <VideoCodecSelector />
              </div>
            </Panel>
          </Collapse>
        </Col>
      </Row>
    </div>
  );
}
