
module.exports = {
    create,
    sendFront,
    sendBack
}

async function create(params, key) {
    const myHeaders = new Headers();
    myHeaders.append("Truora-API-Key", key);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("type", "document-validation");
    urlencoded.append("country", "CO");
    urlencoded.append("document_type", "national-id");
    urlencoded.append("user_authorized", "true");

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
    };

    fetch("https://api.validations.truora.com/v1/validations", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
} 


async function sendFront(params, front_url) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "image/jpeg");

    const file = "<file contents here>";

    const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: file,
    redirect: "follow"
    };

    fetch(front_url, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}


async function sendBack(params, reverse_url) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "image/jpeg");

    const file = "<file contents here>";

    const requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: file,
    redirect: "follow"
    };

    fetch(reverse_url, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));
}