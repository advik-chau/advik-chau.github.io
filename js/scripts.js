const clickableDivs = document.querySelectorAll('.project-button, .social-button');

clickableDivs.forEach(div => {
  div.style.cursor = 'pointer';
});

function showElement(el) {
    document.getElementById(el + '-popup').style.display='block';
    document.getElementById('popup-overlay').style.display='block';
    
}
// for testing
// showElement('projects')

function hideElement(el) {
    document.getElementById(el + '-popup').style.display='none';
    document.getElementById('popup-overlay').style.display='none'
}

document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        closeAll();
    }
});

function closeAll() {
    document.querySelectorAll('.popup').forEach(div => {
        div.style.display = 'none';
    })
    document.getElementById('popup-overlay').style.display = 'none';
        // document.getElementById('about-popup').style.display = 'none';
}


/* writing in markdown
document.addEventListener('DOMContentLoaded', () => {
    console.log("Marked is:", marked);
  const markdownBlocks = document.querySelectorAll('.markdown');

  markdownBlocks.forEach(block => {
    const raw = block.innerText;
    block.innerHTML = marked.parse(raw);
    console.log(marked.parse(raw))
  });
});*/