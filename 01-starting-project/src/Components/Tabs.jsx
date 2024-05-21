export default function Tabs({children,button,buttonContainer}){
    const ButtonsContainer = buttonContainer;
    return (
        <>
            <ButtonsContainer>{button}</ButtonsContainer>
            {children}
        </> 
    )
}