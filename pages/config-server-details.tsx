import React from 'react';
import { Typography } from 'antd';
import EditServerDetails from '../components/config/edit-server-details';

const { Title } = Typography;

export default function ConfigServerDetails() {
	return (
		<div className="config-server-details-form">
			<Title>การตั้งค่าเซิร์ฟเวอร์</Title>
			<p className="description">ควรเปลี่ยนสตรีมคีย์ ไปเรื่อยๆ หรือ ตั้งแล้ว เก็บให้ดี</p>
			<div className="form-module config-server-details-container">
				<EditServerDetails />
			</div>
		</div>
	);
}
