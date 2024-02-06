// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActivateTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabButton = () => {
    updateActivateTabId(tabId)
  }

  const activeTabstyles = isActive?'active-tab-btn':'tab-btn'

  return (
    <li className="tab-item-container">
      <button
        className={activeTabstyles}
        onClick={onClickTabButton}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
