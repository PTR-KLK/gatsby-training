import React from "react"
import {
  BioSection,
  Picture,
  InfoSection,
  Hyperlink,
} from "./heroContent.style"

export default function heroContent({ data }) {
  const { url, avatarUrl, name, login, isHireable } = data

  return (
    <Hyperlink href={url} target="_blank" rel="noopener noreferrer">
      <BioSection>
        <Picture src={avatarUrl} alt="Just me" />
        <InfoSection>
          <h1>{name}</h1>
          <p>{login}</p>
          {isHireable ? <p>I'm Hireable</p> : null}
        </InfoSection>
      </BioSection>
    </Hyperlink>
  )
}
