import {Composition, getInputProps} from 'remotion';
import {MyVideo} from './MyVideo';
import {useMemo} from "react";
import getDurationInFramesFromTypeId from "./getDurationInFramesFromTypeId";

export const RemotionVideo: React.FC = () => {
	const {typeId} = getInputProps()

	const durationInFrames = useMemo<number>(() => {
		return getDurationInFramesFromTypeId(typeId)
	}, [typeId, getDurationInFramesFromTypeId])

	return (
		<>
			<Composition
				id="MyVideo"
				component={MyVideo}
				durationInFrames={durationInFrames}
				fps={60}
				width={1080}
				height={1920}
				defaultProps={{
					typeId: '4',
					thumbnail : 'https://www.stored-youtube-video-thumbnails.ggio.fr/2256'
				}}
			/>
		</>
	);
};
