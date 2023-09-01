let tags = [];

let input = document.querySelector('input');

function addTags(e) {
    let tag = e.target.value.trim();

    if(tag < 1 || tags.includes(tag)) {
        e.target.value = '';
        return
    } else{
        tags.push(tag);
    }


    let tagItem = document.createElement('div');
    tagItem.classList.add('item');
    tagItem.innerHTML = `
            <div class="tag-name">
                <div class="delete-btn" onclick="deleteTag(this, '${tag}')">
                    &times;
                </div>
                <p>${tag}</p>
            </div>`;
    document.querySelector('.tag-list').appendChild(tagItem);
    e.target.value = '';
}

function deleteTag(ref,tag) {
    let parent = ref.parentNode.parentNode;
    parent.removeChild(ref.parentNode);
    let index = tags.indexOf(tag);
    tags.splice(index);
}

input.addEventListener('change', addTags)