async function checkIn() {
    const url = "http://localhost:5000/users/check";

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

export default {
    checkIn
}