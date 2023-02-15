const handleInsert = async () => {
    const inputUserName = document.getElementById("InsertuserName")
    const inputPassword = document.getElementById("Insertpassword")
    console.log(inputUserName)
    concole.log(inputPassword)

    const resp = await fetch('http://localhost:4002/Dashboard', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: inputUserName.value,
        password: inputPassword.value
      })
    })
  
    location.reload()
  }

const handleUpdate = async () => {
    const inputUserName = document.getElementById("Updateusername")
    const inputPassword = document.getElementById("Updatepassword")
    console.log(inputUserName)
    console.log(inputPassword)

    const resp = await fetch(`http://localhost:4002/userGame/${i.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: inputUserName.value,
        password: inputPassword.value
      })
    })
  
    location.reload()
  }
  const handleDelete = async () => {
    alert('Are you sure?')
    
    const resp = await fetch(`http://localhost:4002/userGame/${i.id}`, {
      method: 'DELETE',
    })
    location.reload()
  }