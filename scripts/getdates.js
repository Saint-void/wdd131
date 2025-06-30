// Get references to the footer paragraphs
const footer = document.querySelector('footer');
if (footer) {
    const paragraphs = footer.querySelectorAll('p');
    if (paragraphs.length >= 2) {
        // Set copyright year in the first paragraph
        const currentYear = new Date().getFullYear();
        paragraphs[0].textContent = `© ${currentYear} Sogolo Donaldson. Nigeria`;

        // Set last modified date in the second paragraph
        paragraphs[1].textContent = `Last Modified: ${document.lastModified}`;
    }
}