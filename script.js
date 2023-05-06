
const info=document.getElementById("info");
const btnPrev=document.getElementById("prev");
const btnNext=document.getElementById("next");
let selectedIndex=0;

async function getFilePaths() {
    let data=await fetch("http://localhost:4000/audio/10");
    let files=await data.json();
    return files;
}

async function main() {
    const files=await getFilePaths();
    btnNext.addEventListener("click",(e)=> {
        if (selectedIndex<files.files.length-1) {
            selectedIndex+=1
            addDataToList(selectedIndex)
        }
    })

    btnPrev.addEventListener("click",(e)=> {
        if (selectedIndex>0) {
            selectedIndex-=1
            addDataToList(selectedIndex)
        }
    })

    function addDataToList(num) {
        info.innerHTML="";
        const {title,path,length,uploaded_by}=files.files[num];
        const titleItem=document.createElement("li")
        titleItem.textContent=`title: ${title}`
        const pathItem=document.createElement("li")
        pathItem.textContent=`path to file: ${path}`
        const lengthItem=document.createElement("li")
        lengthItem.textContent=`length: ${length}`
        const uploadItem=document.createElement("li")
        uploadItem.textContent=`uploaded by: ${uploaded_by}`
        info.appendChild(titleItem)
        info.appendChild(pathItem)
        info.appendChild(lengthItem)
        info.appendChild(uploadItem)
    }
    addDataToList(selectedIndex);
}
main()