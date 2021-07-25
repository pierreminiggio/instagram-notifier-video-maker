import {Img, Sequence, useCurrentFrame} from "remotion";
import bio from './bio.png'
import {useMemo} from "react";

interface ExtraSequencesProps {
    typeId: string
}

const ExtraSequences = ({typeId}: ExtraSequencesProps): JSX.Element => {

    const frame = useCurrentFrame()
    const opacity = useMemo<number>(() => {
        const startFadingAt = 400
        const endFadingAt = 419

        if (frame < startFadingAt) {
            return 1
        } else if (frame > endFadingAt) {
            return 0
        }

        return 1 - (frame - startFadingAt) / (endFadingAt - startFadingAt)
    }, [frame])

    if (typeId === '1') {
        return (
	        <Sequence
		        name="Bio"
		        from={340}
		        durationInFrames={80}
	        >
		        <Img
			        src={bio}
			        width={485}
			        height={184}
			        style={{
                        marginTop: '50%',
                        marginLeft: '40%',
                        opacity
			        }}
                />
	        </Sequence>
        )
    }

    return (<></>)
}

export default ExtraSequences