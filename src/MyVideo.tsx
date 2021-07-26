import React, {CSSProperties, useMemo} from "react";
import {Img, Sequence, Video} from "remotion";
import getDurationInFramesFromTypeId from "./getDurationInFramesFromTypeId";
import bio from './bio.png'
import ExtraSequences from "./ExtraSquences";

interface MyVideoProps {
	typeId: string
	thumbnail: string
}

export const MyVideo: React.FC<MyVideoProps> = ({typeId, thumbnail}: MyVideoProps) => {

	const thumbnailStyle = useMemo<CSSProperties>(() => {
		const thumbnailStyle: CSSProperties = {}

		if (typeId === '1') {
			thumbnailStyle.marginTop = '55%'
			thumbnailStyle.marginLeft = '3%'
		} else if (typeId === '2') {
			thumbnailStyle.marginTop = '78%'
			thumbnailStyle.marginLeft = '33%'
		}

		return thumbnailStyle
	}, [typeId, thumbnail])

	const thumbnailFrom = useMemo<number>(() => {
		let thumbnailFrom = 0

		if (typeId === '1') {
			thumbnailFrom = 225
		} else if (typeId === '2') {
			thumbnailFrom = 92
		}

		return thumbnailFrom
	}, [typeId, thumbnail])

	const thumbnailDurationInFrames = useMemo<number>(() => {
		let thumbnailDurationInFrames = 100

		if (typeId === '1') {
			thumbnailDurationInFrames = 80
		} else if (typeId === '2') {
			thumbnailDurationInFrames = 30
		}

		return thumbnailDurationInFrames
	}, [typeId, thumbnail])

	const durationInFrames = useMemo<number>(() => {
		return getDurationInFramesFromTypeId(typeId)
	}, [typeId, getDurationInFramesFromTypeId])

	return (
		<>
			<Sequence
				name="Video"
				from={0}
				durationInFrames={durationInFrames}
			>
				<Video src={'https://instagram-notifier-videos.ggio.fr/' + typeId + '.webm'} />
			</Sequence>
			<Sequence
				name="Thumbnail"
				from={thumbnailFrom}
				durationInFrames={thumbnailDurationInFrames}
			>
				<Img
					src={thumbnail}
					style={thumbnailStyle}
					width={480}
					height={360}
				/>
			</Sequence>
			<ExtraSequences typeId={typeId} />
		</>
	)
};
