import React from "react";

function Fetch () {

fetch('http://localhost:3000/user/12/performance')
.then(response => response.json())
.then(data => {
    console.log("hey voici les datas", data)
})
.catch(function() {
    console.log('Error happened')
});

return (
    <div>test</div>

)
}

export default Fetch