export default function getDurationInFramesFromTypeId(typeId: string): number {
    let durationInFrames = 500

    if (typeId === '1') {
        durationInFrames = 438
    } else if (typeId === '2') {
        durationInFrames = 331
    } else if (typeId === '3') {
        durationInFrames = 255
    } else if (typeId === '4') {
        durationInFrames = 462
    }

    return durationInFrames
}