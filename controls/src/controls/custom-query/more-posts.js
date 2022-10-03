/**
 * WordPress Core Dependencies
*/
import { __ } from "@wordpress/i18n";
import {
	PanelBody,
	ToggleControl,
	TextControl,
	Button,
	ButtonGroup,
	BaseControl,
	RadioControl,
} from "@wordpress/components";
import {
    useEffect,
    useState
} from "@wordpress/element";

/**
 * Internal Dependencies
*/
import { TEXT_ALIGN } from './constants';
import {
	getNumberOfPosts
} from './apiData';

export default function MorePosts(props) {
	const { loadMoreOptions, queryData, setAttributes, initialOpen } = props;
	const [options, setOptions] = useState({});
	const [didMount, setDidMount] = useState(false);

	useEffect(() => {
		setDidMount(true);

		//If Exixsting query data exists in Attributes, set existing data to current options data
		if (typeof (loadMoreOptions) != 'undefined' && Object.keys(loadMoreOptions).length > 0) {
			setOptions({ ...loadMoreOptions })
		}
		else {
			setOptions({
				enableMorePosts: false,
				loadMoreType: '1',
				loadMoreButtonTxt: 'Load More',
				alignment: 'center',
			})
		}
	}, [])

	useEffect(() => {
		setAttributes({ loadMoreOptions: options })
	}, [options])

	useEffect(() => {
		if (typeof (queryData) != 'undefined' && Object.keys(queryData).length > 0) {
			const query = { ...queryData, per_page: '' }
			getNumberOfPosts(query)
				.then((result) => {
					setOptions({ ...loadMoreOptions, totalPosts: result });
				})
		}

	}, [queryData])

	return (
		<PanelBody title={__("More Posts Settings", "essential-blocks")} initialOpen={initialOpen}>
			{didMount && (
				<>
					<ToggleControl
						label={__("Enable More Posts Option?", "essential-blocks")}
						checked={options.enableMorePosts}
						onChange={() =>
							setOptions({ ...options, enableMorePosts: !options.enableMorePosts })
						}
					/>
					{options.enableMorePosts && (
						<>
							<RadioControl
								label="More Posts Type?"
								// help="The type of the current user"
								selected={options.loadMoreType}
								options={[
									{ label: 'Button', value: '1' },
									{ label: 'Pagination', value: '2' },
								]}
								onChange={(value) => setOptions({ ...options, loadMoreType: value })}
							/>
							{options.loadMoreType === '1' && (
								<>
									<TextControl
										label={__("Button Text", "essential-blocks")}
										value={options.loadMoreButtonTxt}
										onChange={(text) => setOptions({ ...options, loadMoreButtonTxt: text })}
									/>
								</>
							)}

							<BaseControl label={__("Alignment", "essential-blocks")} id="essential-blocks">
								<ButtonGroup id="essential-blocks">
									{TEXT_ALIGN.map((item, index) => (
										<Button
											key={index}
											isLarge
											isPrimary={options.alignment === item.value}
											isSecondary={options.alignment !== item.value}
											onClick={() =>
												setOptions({ ...options, alignment: item.value })
											}
										>
											{item.label}
										</Button>
									))}
								</ButtonGroup>
							</BaseControl>
						</>
					)}
				</>
			)}
		</PanelBody>
	)
}