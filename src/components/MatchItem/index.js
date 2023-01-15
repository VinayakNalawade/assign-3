import './index.css'

const MatchItem = props => {
  const {item, onClickImage} = props

  const onClickItem = () => {
    onClickImage(item)
  }

  return (
    <li className="matchItem">
      <button className="matchItemButton" type="button" onClick={onClickItem}>
        <img
          className="matchthumbnail"
          alt="thumbnail"
          src={item.thumbnailUrl}
        />
      </button>
    </li>
  )
}

export default MatchItem
