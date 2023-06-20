const $emoji = document.getElementById('emoji')
const emoji= []

for(let i=129410; i<=129432; i++) {
    emoji.push (` 
    <div class="emojis">
    <div class="emoji">&#${i}</div>
    <div class="code">${i}</div>
    </div> `)
}

$emoji.innerHTML += emoji.join ('')