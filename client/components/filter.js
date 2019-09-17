import React from 'react'

const Filter = () => (
  <div>
    <p>-------------------------</p>
    <p>THIS IS A FILTER PART</p>
    <p>Genre PlaceHolder</p>
    <label>
      <input name="genre" type="checkbox" />
      Action
    </label>
    <label>
      <input name="genre" type="checkbox" />
      Comedy
    </label>
    <p>FILTER ENDS HERE</p>
    <p>-------------------------</p>
  </div>
)

export default Filter
