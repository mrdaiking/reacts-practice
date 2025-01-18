const Person = ({ name }) => {
  console.log('Person component rendered')

  return (
    <div>
      <h4>{name}</h4>
    </div>
  )
}

export default Person
