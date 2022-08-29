// Function named getFullYear that will return the current year
function getFullYear() {
    let year = new Date();
    return year.getFullYear();
}

function getFooterCopy(isIndex) {
    if (isIndex === true) {
        let msg = "Holberton School"
        return msg
    } else {
        let msgfalse = "Holberton School main dashboard"
        return msgfalse
    }
}

// Export functions
export { getFullYear, getFooterCopy };
