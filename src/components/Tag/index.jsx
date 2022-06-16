/**
 * Return tag
 * @param {Object} props
 * @param {String} props.name
 * @returns {React.ReactElement} JSX.Element
 */
function Tag(props) {
  console.log(props)
  return <button className="tag">{props.name}</button>
}
export default Tag
