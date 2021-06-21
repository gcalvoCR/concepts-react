import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button color={showAdd? '#ED553B' :'#173F5F'} text={showAdd? 'Close': 'Add'} onClick={onAdd} />
            )}
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JS
//<h1 style={headingStyle}>{title}</h1>
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'Black'
// }

export default Header
