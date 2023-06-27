import React, {useState} from 'react'

const titles = [
    'title',
    'title 2',
    'title 202',
]
const App = () => {
    const [itemEl, setItemEl] = useState(null)
    const handleClick = (event) => {
        console.log('handleClick', event.currentTarget)
        setItemEl(event.currentTarget)
    }
    return (
        <div>
            <ul>
                {titles.map(t => {
                    return (
                        <li key={t}><span onClick={handleClick}>{t}</span></li>
                    )
                })}
            </ul>
            <div>{itemEl ? itemEl.offsetWidth : 0}</div>

        </div>
    )
}

export default App
