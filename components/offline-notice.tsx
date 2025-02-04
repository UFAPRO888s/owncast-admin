import {
	BookTwoTone,
	MessageTwoTone,
	// PlaySquareTwoTone,
	ProfileTwoTone,
	QuestionCircleTwoTone,
} from '@ant-design/icons';
import { Card, Col, Row, Typography } from 'antd';
// import Link from 'next/link';
import { useContext } from 'react';
import LogTable from './log-table';
import OwncastLogo from './logo';
import NewsFeed from './news-feed';
import { ConfigDetails } from '../types/config-section';
import { ServerStatusContext } from '../utils/server-status-context';

const { Paragraph, Text } = Typography;

const { Title } = Typography;
const { Meta } = Card;

function generateStreamURL(serverURL, rtmpServerPort) {
	return `rtmp://${serverURL.replace(/(^\w+:|^)\/\//, '')}:${rtmpServerPort}/live/`;
}

type OfflineProps = {
	logs: any[];
	config: ConfigDetails;
};

export default function Offline({ logs = [], config }: OfflineProps) {
	const serverStatusData = useContext(ServerStatusContext);

	const { serverConfig } = serverStatusData || {};
	const { streamKey, rtmpServerPort } = serverConfig;
	const instanceUrl = global.window?.location.hostname || '';

	const data = [
		{
			icon: <BookTwoTone twoToneColor="#6f42c1" />,
			title: 'หาก live ผ่านโปรแกรม ให้ตั้งค่า RTMP ตามนนี้',
			content: (
				<div>
					<a href="https://ufapro888s.info/" target="_blank" rel="noopener noreferrer">
						หากไม่เข้าใจติดต่อ ผู้ดูแลระบบ
					</a>
					<div className="stream-info-container">
						<Text strong className="stream-info-label">
							Streaming URL:
						</Text>
						<Paragraph className="stream-info-box" copyable>
							{generateStreamURL(instanceUrl, rtmpServerPort)}
						</Paragraph>
						<Text strong className="stream-info-label">
							Stream Key:
						</Text>
						<Paragraph className="stream-info-box" copyable={{ text: streamKey }}>
							*********************
						</Paragraph>
					</div>
				</div>
			),
		},
		// {
		//   icon: <PlaySquareTwoTone twoToneColor="#f9826c" />,
		//   title: 'Embed your video onto other sites',
		//   content: (
		//     <div>
		//       <a
		//         href="https://owncast.online/docs/embed?source=admin"
		//         target="_blank"
		//         rel="noopener noreferrer"
		//       >
		//         Learn how you can add your Owncast stream to other sites you control.
		//       </a>
		//     </div>
		//   ),
		// },
	];

	if (!config?.chatDisabled) {
		data.push({
			icon: <MessageTwoTone twoToneColor="#0366d6" />,
			title: 'แชทถูกปิดการใช้งาน',
			content: <span>แชทจะถูกปิดใช้งานต่อไปจนกว่าคุณจะเริ่มสตรีมแบบสด</span>,
		});
	}

	if (!config?.yp?.enabled) {
		data.push({
			icon: <ProfileTwoTone twoToneColor="#D18BFE" />,
			title: 'ความปลอดภัยสำหรับ การ LIVE ที่นี่',
			content: (
				<div>
					ระบบกำลัง พัฒนา โปรแกรมป้องการ บันทึกหน้าจอจาก USER{' '}
					<a href="https://ufapro888s.info/">กำลังสร้างอยู่</a>
				</div>
			),
		});
	}

	data.push({
		icon: <QuestionCircleTwoTone twoToneColor="#ffd33d" />,
		title: 'ไม่แน่ใจว่าจะทำอย่างไรต่อไป?',
		content: (
			<div>
				ต้องการความช่วยเหลือ หรือ สอบถามการใช้งาน{' '}
				<a href="https://line.me/R/ti/p/panutchakorn_2533"> ติดต่อผู้ดูแล ระบบ</a>
			</div>
		),
	});

	return (
		<>
			<Row>
				<Col span={12} offset={6}>
					<div className="offline-intro">
						<span className="logo-svg">
							<OwncastLogo />
						</span>
						<div>
							<Title level={2}>ไม่มีสตรีมที่ใช้งานอยู่</Title>
							<p>ตวรที่จะเปิด ทิ้งไว้ หรือไม่สะดวกก็ปิด.</p>
						</div>
					</div>
				</Col>
			</Row>
			<Row gutter={[16, 16]} className="offline-content">
				<Col span={12} xs={24} sm={24} md={24} lg={12} className="list-section">
					{data.map(item => (
						<Card key={item.title} size="small" bordered={false}>
							<Meta avatar={item.icon} title={item.title} description={item.content} />
						</Card>
					))}
				</Col>
				<Col span={12} xs={24} sm={24} md={24} lg={12}>
					<NewsFeed />
				</Col>
			</Row>
			<LogTable logs={logs} pageSize={5} />
		</>
	);
}
