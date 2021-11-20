/* eslint-disable camelcase */
/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';
import { Collapse, Typography, Skeleton } from 'antd';
import format from 'date-fns/format';

import { fetchExternalData } from '../utils/apis';

const { Panel } = Collapse;
const { Title, Link } = Typography;

const OWNCAST_FEED_URL = 'https://ufapro888s.info/index.json';
const OWNCAST_BASE_URL = 'https://ufapro888s.info';

interface Article {
	title: string;
	url: string;
	content_html: string;
	date_published: string;
}

function ArticleItem({ title, url, content_html: content, date_published: date }: Article) {
	const dateObject = new Date(date);
	const dateString = format(dateObject, 'dd MMM, yyyy, HH:mm');
	return (
		<article>
			<Collapse>
				<Panel header={title} key={url}>
					<p className="timestamp">
						{dateString} (
						<Link href={`${OWNCAST_BASE_URL}${url}`} target="_blank" rel="noopener noreferrer">
							Link
						</Link>
						)
					</p>
					<div dangerouslySetInnerHTML={{ __html: content }} />
				</Panel>
			</Collapse>
		</article>
	);
}

export default function NewsFeed() {
	const [feed, setFeed] = useState<Article[]>([]);
	const [loading, setLoading] = useState<Boolean>(true);

	const getFeed = async () => {
		setLoading(false);

		try {
			const result = await fetchExternalData(OWNCAST_FEED_URL);
			if (result?.items.length > 0) {
				setFeed(result.items);
			}
		} catch (error) {
			console.log('==== error', error);
		}
	};

	useEffect(() => {
		getFeed();
	}, []);

	const loadingSpinner = loading ? <Skeleton loading active /> : null;
	const noNews = !loading && feed.length === 0 ? <div>ไม่มี ประกาศ.</div> : null;

	return (
		<section className="news-feed form-module">
			<Title level={2}>ข่าวสาร &amp;จากแอดมิน</Title>
			{loadingSpinner}
			{feed.map(item => (
				<ArticleItem {...item} key={item.url} />
			))}

			{noNews}
		</section>
	);
}
