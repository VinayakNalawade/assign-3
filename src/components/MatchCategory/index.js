import './index.css'

const MatchCategory = props => {
  const {tab, selected, changeTab} = props

  const onClickTab = () => {
    changeTab(tab)
  }

  return (
    <li
      className={
        selected.tabId === tab.tabId ? 'selectedcategoryItem' : 'categoryItem'
      }
    >
      <button
        type="button"
        onClick={onClickTab}
        className={selected.tabId === tab.tabId ? 'selectedtab' : 'tab'}
      >
        {tab.displayText}
      </button>
    </li>
  )
}

export default MatchCategory
