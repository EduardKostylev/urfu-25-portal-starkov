import CommunicationLayout from '../../widgets/CommunicationLayout'

export default function Communication({ variant }) {
    return (
        <>
            {variant === 'communication' && <CommunicationLayout />}
        </>
    )
}
