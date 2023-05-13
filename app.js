document.addEventListener('DOMContentLoaded', (e) =>{
    const list= document.querySelector('tbody');
    const form = document.getElementById('my-form');

    list.addEventListener('click', (e)=>{
        if (e.target.classList.contains('delete')){
            const tr = e.target.closest('tr');
            tr.remove();
        }
    });



form.addEventListener('submit', (e) =>{
    e.preventDefault()


const nameValue =form.querySelector('input[name="name"]').value
const idnoValue =form.querySelector('input[name="idno"]').value
const languageValue =form.querySelector('input[name="language"]').value
const countryValue =form.querySelector('select[name="country"]').value




const tr =document.createElement('tr');
const nameCell =document.createElement('td');
const idCell =document.createElement('td');
const countryCell =document.createElement('td');
const languageCell =document.createElement('td');
const deleteBtnCell =document.createElement('td');
const deleteBtn =document.createElement('button');

nameCell.textContent= nameValue
idCell.textContent = idnoValue
countryCell.textContent=countryValue
languageCell.textContent=languageValue
deleteBtn.textContent= 'delete'


tr.classList.add('my-list')
deleteBtn.classList.add('delete')

tr.appendChild(nameCell)
tr.appendChild(idCell)
tr.appendChild(countryCell)
tr.appendChild(languageCell)
deleteBtnCell.appendChild(deleteBtn)
tr.appendChild(deleteBtnCell)


list.appendChild(tr)

form.querySelector('input[name="name"]').value=''
form.querySelector('input[name="idno"]').value=''
form.querySelector('input[name="language"]').value=''
form.querySelector('select[name="country"]').value=''




})
});





  