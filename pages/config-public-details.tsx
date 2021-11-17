import React from 'react';
import { Typography } from 'antd';

import EditInstanceDetails from '../components/config/edit-instance-details';
import EditInstanceTags from '../components/config/edit-tags';
import EditSocialLinks from '../components/config/edit-social-links';
import EditPageContent from '../components/config/edit-page-content';
import EditCustomStyles from '../components/config/edit-custom-css';

const { Title } = Typography;

export default function PublicFacingDetails() {
  return (
    <div className="config-public-details-page">
      <Title>การตั้งค่าทั่วไป</Title>
      <p className="description">
      ข้อมูลต่อไปนี้ จะแสดงบนไซต์ของคุณ เพื่ออธิบายสตรีมและเนื้อหาของคุณ.{' '}
        <a
          href="https://ufapro888s.info/"
          target="_blank"
          rel="noopener noreferrer"
        >
          เรียนรู้เพิ่มเติม
        </a>
      </p>

      <div className="top-container">
        <div className="form-module instance-details-container">
          <EditInstanceDetails />
        </div>

        <div className="form-module social-items-container ">
          <div className="form-module tags-module">
            <EditInstanceTags />
          </div>

          <div className="form-module social-handles-container">
            <EditSocialLinks />
          </div>
        </div>
      </div>
      <div className="form-module page-content-module">
        <EditPageContent />
      </div>
      <div className="form-module page-content-module">
        <EditCustomStyles />
      </div>
    </div>
  );
}
