// Write your code here...
import Http from "./Http";
const filesListContainer = document.querySelector(".filesList > table > tbody");
const progressBar = document.querySelector("#uploadProgress");
const fileInput = document.querySelector("input[name=fileToUpload]");
const uploadBtn = document.querySelector("#uploadFileBtn");
const http = new Http("http://localhost:8080/api");

const Row = (filename, size) => `<tr>
  <td>${filename}</td>
  <td>${size}Kb</td>
</tr>`;

const renderList = async function () {
  try {
    const { response } = await http.get("/list");
    const listOfFiles = JSON.parse(response).map((ele) =>
      Row(ele.file, ele.size)
    );
    filesListContainer.innerHTML = listOfFiles.join("");
  } catch {
    alert("There was an error fetching the files");
  }
};

renderList();

uploadBtn.addEventListener("click", async function (e) {
  e.preventDefault();
  let fileToUpload = fileInput.files;
  if (fileToUpload.length !== 0) {
    //upload file and refresh UI

    try {
      await http.upload("/upload", fileToUpload[0], (progress) => {
        if (progress.lengthComputable) {
          progressBar.value = (progress.loaded / progress.total) * 100;
        }
      });

      progressBar.value = 0;
      fileInput.value = "";
      renderList();
    } catch {
      alert("Error in uploading the file");
    }
  }
});
