async function ApiServices (id, action = '') {
    
const promise = await fetch(`http://localhost:3000/user/${id}/${action}`)

const datas = await promise.json()

return datas
}

export default ApiServices