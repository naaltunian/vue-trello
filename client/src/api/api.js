const baseURL = "http://localhost:5000";

async function checkIn() {
    const url = `${baseURL}/users/check`;

    let response = await fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ 'token': localStorage.token })
    });

    const data = await response.json();

    if (data.message === 'expired') {
        return false;
    } else {
        return true;
    }
}

async function getBoards() {
    const url = `${baseURL}/boards`;
    
    let response = await fetch(url, {
        method: "GET",
        headers: {
            'content-type': 'application/json',
            'Authorization': `Bearer ${localStorage.token}`
        }
    });

    let data = await response.json();

    return data;
}

export default {
    checkIn,
    getBoards
}