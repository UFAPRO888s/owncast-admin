import React, { useState, useContext, useEffect } from 'react';
import { Typography } from 'antd';
import TextFieldWithSubmit, {
	TEXTFIELD_TYPE_TEXTAREA,
	TEXTFIELD_TYPE_URL,
} from './form-textfield-with-submit';
import { ServerStatusContext } from '../../utils/server-status-context';
import {
	postConfigUpdateToAPI,
	TEXTFIELD_PROPS_INSTANCE_URL,
	TEXTFIELD_PROPS_SERVER_NAME,
	TEXTFIELD_PROPS_SERVER_SUMMARY,
	API_YP_SWITCH,
	// FIELD_PROPS_YP,
	// FIELD_PROPS_NSFW,
} from '../../utils/config-constants';
import { UpdateArgs } from '../../types/config-section';
// import ToggleSwitch from './form-toggleswitch';
// import EditLogo from './edit-logo';
const { Title } = Typography;
export default function EditInstanceDetails() {
	const [formDataValues, setFormDataValues] = useState(null);
	const serverStatusData = useContext(ServerStatusContext);
	const { serverConfig } = serverStatusData || {};
	const { instanceDetails, yp } = serverConfig;
	// const { instanceUrl } = yp;

	useEffect(() => {
		setFormDataValues({
			...instanceDetails,
			...yp,
		});
	}, [instanceDetails, yp]);

	if (!formDataValues) {
		return null;
	}

	// if instanceUrl is empty, we should also turn OFF the `enabled` field of directory.
	const handleSubmitInstanceUrl = () => {
		if (formDataValues.instanceUrl === '') {
			if (yp.enabled === true) {
				postConfigUpdateToAPI({
					apiPath: API_YP_SWITCH,
					data: { value: false },
				});
			}
		}
	};

	const handleFieldChange = ({ fieldName, value }: UpdateArgs) => {
		setFormDataValues({
			...formDataValues,
			[fieldName]: value,
		});
	};

	// const hasInstanceUrl = instanceUrl !== '';

	return (
		<div className="edit-general-settings">
			<Title level={3} className="section-title">
				กำหนดค่ารายละเอียดอินสแตนซ์
			</Title>
			<br />

			<TextFieldWithSubmit
				fieldName="name"
				{...TEXTFIELD_PROPS_SERVER_NAME}
				value={formDataValues.name}
				initialValue={instanceDetails.name}
				onChange={handleFieldChange}
			/>

			<TextFieldWithSubmit
				fieldName="instanceUrl"
				{...TEXTFIELD_PROPS_INSTANCE_URL}
				value={formDataValues.instanceUrl}
				initialValue={yp.instanceUrl}
				type={TEXTFIELD_TYPE_URL}
				onChange={handleFieldChange}
				onSubmit={handleSubmitInstanceUrl}
			/>

			<TextFieldWithSubmit
				fieldName="summary"
				{...TEXTFIELD_PROPS_SERVER_SUMMARY}
				type={TEXTFIELD_TYPE_TEXTAREA}
				value={formDataValues.summary}
				initialValue={instanceDetails.summary}
				onChange={handleFieldChange}
			/>

			{/* Logo section 
      <EditLogo />

      <br />
      <p className="description">
        Increase your audience by appearing in the{' '}
        <a href="https://ufapro888s.info/" target="_blank" rel="noreferrer">
          <strong>Owncast Directory</strong>
        </a>
        . This is an external service run by the Owncast project.{' '}
        <a
          href="https://ufapro888s.info/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
        .
      </p>
      {!yp.instanceUrl && (
        <p className="description">
          You must set your <strong>Server URL</strong> above to enable the directory.
        </p>
      )}

      <div className="config-yp-container">
        <ToggleSwitch
          fieldName="enabled"
          useSubmit
          {...FIELD_PROPS_YP}
          checked={formDataValues.enabled}
          disabled={!hasInstanceUrl}
        />
        <ToggleSwitch
          fieldName="nsfw"
          useSubmit
          {...FIELD_PROPS_NSFW}
          checked={formDataValues.nsfw}
          disabled={!hasInstanceUrl}
        />
      </div> */}
		</div>
	);
}
