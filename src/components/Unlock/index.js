// Write your code here
import {useState} from 'react'
import {
  UnLockContainer,
  ImageAndTextContainer,
  Image,
  Text,
  Button,
} from './styledComponents'

const Unlock = () => {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const imageUrl = isUnlocked
    ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const altText = isUnlocked ? 'unlock' : 'lock'
  const text = isUnlocked ? 'Your Device is UnLocked' : 'Your Device is Locked'
  const buttonText = isUnlocked ? 'Lock' : 'Unlock'

  const onButtonClick = () => setIsUnlocked(prevState => !prevState)

  return (
    <UnLockContainer>
      <ImageAndTextContainer>
        <Image src={imageUrl} className="image" alt={altText} />
        <Text>{text}</Text>
      </ImageAndTextContainer>
      <Button type="button" onClick={onButtonClick}>
        {buttonText}
      </Button>
    </UnLockContainer>
  )
}

export default Unlock
