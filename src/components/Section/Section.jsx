import { SectionWraper } from "./Section.styled"

export const Section = ({ title, children }) => {
    return (
        <SectionWraper>
            <h2>{title}</h2>
            {children}
        </SectionWraper>
    )
}