import renderTree from './render.js';

export let state = {
    content: {
        news: {
            count: 14,
            articles: [
                { id: "babe77809ebdca0402a0e9e453937ea763571dd7081d505ddd2e26cdbc9948a1", header: "Ученые расшифровали записку на иврите, скрытую в старом молитвеннике", rate: "0", source: "https://people.onliner.by/2023/11/11/snachala-ustroili-doma-nochlezhku-na-matrasax", picture: "https://content.onliner.by/news/970x485/efadba9d80a95475a5f1ac15c95e3903.jpg", date: "00:31:53.985898+03:00" },
                { id: "5b092ee1ea17a305983c18b71f04fc9cead873ef6a057e50ab53378d9b8581e2", header: "Пятерка свежих Hyundai, которые меняют наше отношение к марке", rate: "0", source: "https://auto.onliner.by/2023/11/12/top-5-hyundai", picture: "https://content.onliner.by/news/1400x5616/5d1ca5972a6909d5b5374041cda35808.jpg", date: "00:31:53.985898+03:00" },
                { id: "babe77809ebdca0402a0e9e453937ea763571dd7081d505ddd2e26cdbc9948a3", header: "Ученые расшифровали записку на иврите, скрытую в старом молитвеннике", rate: "0", source: "https://people.onliner.by/2023/11/11/snachala-ustroili-doma-nochlezhku-na-matrasax", picture: "https://content.onliner.by/news/970x485/efadba9d80a95475a5f1ac15c95e3903.jpg", date: "00:31:53.985898+03:00" },
                { id: "5b092ee1ea17a305983c18b71f04fc9cead873ef6a057e50ab53378d9b8581e4", header: "Пятерка свежих Hyundai, которые меняют наше отношение к марке", rate: "0", source: "https://auto.onliner.by/2023/11/12/top-5-hyundai", picture: "https://content.onliner.by/news/1400x5616/5d1ca5972a6909d5b5374041cda35808.jpg", date: "00:31:53.985898+03:00" },
                { id: "babe77809ebdca0402a0e9e453937ea763571dd7081d505ddd2e26cdbc9948a5", header: "Ученые расшифровали записку на иврите, скрытую в старом молитвеннике", rate: "0", source: "https://people.onliner.by/2023/11/11/snachala-ustroili-doma-nochlezhku-na-matrasax", picture: "https://content.onliner.by/news/970x485/efadba9d80a95475a5f1ac15c95e3903.jpg", date: "00:31:53.985898+03:00" },
                { id: "5b092ee1ea17a305983c18b71f04fc9cead873ef6a057e50ab53378d9b8581e", header: "Пятерка свежих Hyundai, которые меняют наше отношение к марке", rate: "0", source: "https://auto.onliner.by/2023/11/12/top-5-hyundai", picture: "https://content.onliner.by/news/1400x5616/5d1ca5972a6909d5b5374041cda35808.jpg", date: "00:31:53.985898+03:00" }
            ]
        },
        
        login: {
            tempLoginField: "",
            tempPasswordField: "asd"
        }
    }
}
export let updateLogin = (newLogin)=>{

    state.content.login.tempLoginField=newLogin;
    
    renderTree(state, updateLogin, updatePassword);
}
export let updatePassword = (newPassword)=>{
    state.content.login.tempPasswordField=newPassword;
    renderTree(state, updateLogin, updatePassword);
}