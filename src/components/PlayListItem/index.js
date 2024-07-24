import {FaTrash} from 'react-icons/fa'

import {
  EachPlItem,
  ImageElement,
  ContentContainer,
  NameGenreContainer,
  SongName,
  Genre,
  DurationDelIconContainer,
  Duration,
  DeleteButton,
} from '../../styledComponents'

const PlayListItem = props => {
  const {eachTrackDetails, OnDelete} = props
  const {id, imageUrl, name, genre, duration} = eachTrackDetails

  const onClickDeleteIcon = () => {
    OnDelete(id)
  }

  return (
    <EachPlItem>
      <ImageElement src={imageUrl} alt="track" />
      <ContentContainer>
        <NameGenreContainer>
          <SongName>{name}</SongName>
          <Genre>{genre}</Genre>
        </NameGenreContainer>
        <DurationDelIconContainer>
          <Duration>{duration}</Duration>
          <DeleteButton
            type="button"
            data-testid="delete"
            onClick={onClickDeleteIcon}
          >
            <FaTrash color="white" />
          </DeleteButton>
        </DurationDelIconContainer>
      </ContentContainer>
    </EachPlItem>
  )
}

export default PlayListItem
