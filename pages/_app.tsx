// prettier-ignore
import 'antd/dist/antd.css';
import '../styles/variables.scss';
import '../styles/ant-overrides.scss';
import '../styles/markdown-editor.scss';
import '../styles/globals.scss';
import '../styles/main-layout.scss';
import '../styles/form-textfields.scss';
import '../styles/form-misc-elements.scss';
import '../styles/config-socialhandles.scss';
import '../styles/config-storage.scss';
import '../styles/config-edit-string-tags.scss';
import '../styles/config-video-variants.scss';
import '../styles/config-public-details.scss';
import '../styles/home.scss';
import '../styles/chat.scss';
import '../styles/pages.scss';
import '../styles/offline-notice.scss';
import { AppProps } from 'next/app';
import ServerStatusProvider from '../utils/server-status-context';
import AlertMessageProvider from '../utils/alert-message-context';
import MainLayout from '../components/main-layout';

declare module '*.png';

function App({ Component, pageProps }: AppProps) {
	return (
		<ServerStatusProvider>
			<AlertMessageProvider>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</AlertMessageProvider>
		</ServerStatusProvider>
	);
}

export default App;
