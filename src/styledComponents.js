import styled from 'styled-components'

export const PlayListAppContainer = styled.div``

export const SingerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png ');
  background-size: cover;
  height: 53vh;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  justify-content: flex-end;
`

export const SingerName = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 30px;
  color: #ffffff;
  margin: 0px;
  padding: 0px;
`

export const ProfessionType = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 24px;
  color: #cbd5e1;
`
export const PlayListContainer = styled.ul`
  list-style-type: none;
  background-color: #152850;
  margin: 0px;
  padding: 20px;
  height: 100vh;
`
export const PlHeadingSearchBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const PlayListHeading = styled.h1`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 30px;
  color: white;
`

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ffffff;
  padding: 5px;
  border-radius: 6px;
  width: 250px;
`

export const Input = styled.input`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  border: none;
  background-color: transparent;
  outline: none;
  color: #ffffff;
`

export const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const EachPlItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const ImageElement = styled.img`
  height: 80px;
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 20px;
`

export const NameGenreContainer = styled.div``

export const SongName = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 18px;
  padding: 0px;
`

export const Genre = styled.p`
  color: #3b82f6;
  font-family: 'Roboto';
  font-size: 15px;
  padding: 0px;
`

export const DurationDelIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80px;
`

export const Duration = styled.p`
  color: #ffffff;
  font-weight: 400;
  font-family: 'Roboto';
  font-size: 16px;
`

export const DeleteButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0px;
`

export const NoSongsViewContainer = styled.div`
  background-color: #152850;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 47vh;
`

export const NoSongsText = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 30px;
  color: #ffffff;
`
