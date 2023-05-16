export async function couresRecommendation(){
    return fetch(`https://ode-seoul.fly.dev/`).then(response=>response.json());
}