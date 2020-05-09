const baseURL = "http://localhost:5000";

function authHeaders() {
    return {
        'content-type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`
    }
}

async function checkIn() {
    const url = `${baseURL}/users/check`;

    let response = await fetch(url, {
        method: "POST",
        headers: authHeaders(),
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
        headers: authHeaders()
    });

    let data = await response.json();

    return data;
}

async function getBoard(id) {
    const url = `${baseURL}/boards/${id}`;

    let response = await fetch(url, {
        method: "GET",
        headers: authHeaders(),
    });

    let data = await response.json();

    return data;
}

async function createBoard(name) {
    const url = `${baseURL}/boards`;

    let response = await fetch(url, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify({'name': name})
    });

    const data = await response.json();

    return data;
}

async function createList(list) {
    const url = `${baseURL}/list`;

    let response = await fetch(url, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify(list)
    });

    const data = await response.json();

    return data;
}

export default {
    checkIn,
    getBoards,
    createBoard,
    getBoard,
    createList
}