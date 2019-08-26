import React from 'react'

const Search = ({value = '', onChange = () => {}}) => (
    <div className="name-filter">
        <input
            className="name-filter-text"
            type="text"
            value={value}
            onChange={(event) => {
                onChange(event.target.value)
            }} />
      </div>
)

export default Search