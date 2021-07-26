import {Img, Sequence, useCurrentFrame} from "remotion";
import bio from './bio.png'
import {useMemo} from "react";
import './font.css'

interface ExtraSequencesProps {
    typeId: string
}

const getInverseProgressionBetweenNumber = (start: number, end: number, current: number): number => {
    return Math.max(Math.min(1 - (current - start) / (end - start), 1), 0)
}

const ExtraSequences = ({typeId}: ExtraSequencesProps): JSX.Element => {

    const frame = useCurrentFrame()
    const opacity = useMemo<number>(() => {
        if (typeId === '1') {
            return getInverseProgressionBetweenNumber(400, 419, frame)
        } else if (typeId === '2') {
            return getInverseProgressionBetweenNumber(291, 331, frame)
        }

        return 1
    }, [typeId, frame, getInverseProgressionBetweenNumber])

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
    } else if (typeId === '2') {
        return (
	        <Sequence
		        name="Bio"
		        from={228}
		        durationInFrames={103}
	        >
                <h1
                    style={{
                        fontFamily: 'Montserrat',
                        fontSize: 100,
                        color: '#FFF',
                        textAlign: 'center',
                        position: 'absolute',
                        top: 1400,
                        left: 0,
                        right: 0,
                        opacity
                    }}
                >
                    Lien dans la bio !
                </h1>
		        <Img
			        src={bio}
			        width={1.5 * 485}
			        height={1.5 * 184}
			        style={{
                        marginTop: 1600,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        opacity
			        }}
                />
	        </Sequence>
        )
    }

    return (<></>)
}

export default ExtraSequences