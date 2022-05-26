/**
 * @name ApiServices
 * @description - This function call API to get users datas, and send them in one json file combinate them all
 * @returns {JSX. Element}
 */


 async function ApiServices (id) {
    
    const promiseUserInfos = await fetch(`http://localhost:3000/user/${id}`)
    const promiseActivity = await fetch(`http://localhost:3000/user/${id}/activity`)
    const promiseAverage = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
    const promisePerformance = await fetch(`http://localhost:3000/user/${id}/performance`)
    
    const datas = await Promise.all([promiseUserInfos.json(), promiseActivity.json(), promiseAverage.json(), promisePerformance.json()])
    
    const formatedDatas = datas.map(elt => elt.data)
    
    return formatedDatas
    }
    
    export default ApiServices