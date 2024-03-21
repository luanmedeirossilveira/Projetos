interface CommunicatedCardProps {
    handleNavigate: () => void;
    message: string;
    image: string;
    descriptionImage: string;
    width: number;
    height: number;
    buttonTitle: string;
}
export default function CommunicatedCard({ buttonTitle, descriptionImage, handleNavigate, image, message, width, height }: CommunicatedCardProps) {
    return (
        <ReloadPageContainer>
            <ReloadPageTitle>
                {message}
            </ReloadPageTitle>
            <img
                src={image}
                alt={descriptionImage}
                width={width}
                height={height}
            />
            <Button onClick={() => handleNavigate()}>
                {buttonTitle}
            </Button>
        </ReloadPageContainer>
    );
}