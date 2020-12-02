
let form=document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    new FormData(form);
    console.log(e);
});

form.addEventListener("formdata",(e)=>{
    console.log(e);
    const obj = Object.fromEntries(e.formData);
    console.log(obj);
})

/*
document.getElementById("checkbox-form").addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(e);
    new FormData(form);
    //const obj = Object.fromEntries(f.formData);
    //console.log(obj);
});

document.getElementById("checkbox-form").addEventListener("formdata",(e)=>{
    console.log(e);
    const obj = Object.fromEntries(e.formData);
    console.log(obj);
})
*/