console.log('script sourced.');


function getQuotes() {
    // Axios GET request (http request for information from the server)
    axios({
        method: 'GET',
        url: '/quotes' 
    })
    .then((response) => {
        // Code that will run on successful response
        // from the server.
        console.log(response);
        // quotesFromServer will be an Array of quotes
        let quotesFromServer = response.data;
        let contentDiv = document.querySelector('#content');
        contentDiv.innerHTML = '';
        // ??? Loop over array of quotes and append to the content div
        for(let quote of quotesFromServer) {
            contentDiv.innerHTML += `<div>
                    "${quote.text}" ${quote.author}
                </div>`
        }
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    }); // ALWAYS add .catch
}
// Call the function
getQuotes();

function submitForm(event) {
    // stop page from refreshing
    event.preventDefault();
    console.log('In submitForm function');
    let quote = document.querySelector('#quoteInput').value;
    let author = document.querySelector('#authorInput').value;
    console.log('Inputs ', quote, author);
    let quoteForServer = {
        text: quote,
        author: author,
    };
    // ??? fixed data
    axios({
        method: 'POST',
        url: '/quotes', 
        data: { 
            text: quote,
            author: author,
        }
    }).then((response) => {
        console.log(response);
        getQuotes();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    });
}