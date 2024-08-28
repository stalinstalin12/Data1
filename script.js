fetch('http://localhost:3000/datas').
then(res=>{
    return res.json();
}).then(data=>{
    console.log(data);

    let container=document.getElementById('container');
    let datas='';
    for(let i=0;i<=20;i++){
        datas=datas+`
        <div class="box">
            <div class="img-div">
                <img src="${data[i].url}" alt="img">
            </div>
            <span class="title">${data[i].title}</span>
            <p class="album id">${data[i].id}</p>
        </div>
        `
    }
    container.innerHTML=datas;
}).catch(error=>{
    console.log(error)
})