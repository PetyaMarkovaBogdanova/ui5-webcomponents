import"../../bundle.esm-d4a6f9a6.js";(function(){var a=document.getElementById("uploadCollection");function i(e){switch(e.split(".").pop()){case"bmp":case"jpg":case"jpeg":case"png":return"card";case"csv":case"xls":case"xlsx":return"excel-attachment";case"doc":case"docx":case"odt":return"doc-attachment";case"pdf":return"pdf-attachment";case"ppt":case"pptx":return"ppt-attachment";case"txt":return"document-text";default:return"document"}}function l(e){var t=document.createElement("ui5-icon");return t.name=i(e),t.slot="thumbnail",t}function o(e){var t=document.createElement("ui5-upload-collection-item"),n=document.createTextNode("Last modified: "+e.lastModifiedDate+", size: "+e.size);return t.appendChild(l(e.name)),t.appendChild(n),t.file=e,t.fileName=e.name,t}document.getElementById("changeMode").addEventListener("ui5-change",function(e){a.selectionMode=e.detail.selectedOption.textContent}),document.getElementById("changeType").addEventListener("ui5-change",function(e){a.items.forEach(function(t){t.type=e.detail.selectedOption.textContent})}),document.getElementById("fileUploader").addEventListener("ui5-change",function(e){for(var t=e.detail.files,n=0;n<t.length;n++)a.appendChild(o(t[n]));document.getElementById("fileUploader").value=""}),a.addEventListener("ui5-selection-change",function(e){var t=e.detail.selectedItems.reduce(function(n,d){return n+d.fileName+","},"[");t+="]",document.getElementById("selectedItems").innerText=t}),a.addEventListener("ui5-item-delete",function(e){a.removeChild(e.detail.item)}),a.addEventListener("ui5-rename",function(e){document.getElementById("renamedFileIndex").innerText=a.items.indexOf(e.target)}),document.getElementById("startUploading").addEventListener("click",function(e){a.items.forEach(function(t){if(t.uploadState==="Ready"&&t.file){var n=new XMLHttpRequest;n.open("POST","/upload",!0),n.onreadystatechange=function(){this.status!==200&&(t.uploadState="Error")},n.send(t.file),t.uploadState="Uploading"}})}),document.getElementById("uploadCollectionDnD").addEventListener("drop",function(e){e.preventDefault();for(var t=e.dataTransfer.files,n=0;n<t.length;n++){var d=o(t[n]);document.getElementById("uploadCollectionDnD").appendChild(d)}});var c=document.getElementById("uploadCollectionStates");c.addEventListener("ui5-retry",function(e){console.log("Retry uploading: ",e.target),document.getElementById("uploadStateEvent").innerText="Retry"}),c.addEventListener("ui5-terminate",function(e){console.log("Terminate uploading of: ",e.target),document.getElementById("uploadStateEvent").innerText="Terminate"})})();