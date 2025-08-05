const fetch = require('node-fetch');
const fs = require('fs')
let sleep = require('sleep')
let list = []
let max = 24
i=1;

Promise.all(f())
.then(r=>{
  p=[]
  r.map(rr=>{rr.map(rrr=>p.push("git clone git@gitlab.com:kalilinux/packages/"+rrr+".git;\n"))})
  console.log(p)
  fs.appendFile('data1.sh', p.toString().replace(',',/ /gm), function (err) {
    if (err) {
      console.error(err);
    } else {
      console.log('Data Saved to data.json file');
      
    }
});
  //console.log([...[...r]].map(rr=>("git clone git@gitlab.com:kalilinux/packages/"+rr+".git")))
})

function f() {
  return [...Array(max).keys()].map(ak=>{
    return fetch("https://gitlab.com/groups/kalilinux/packages/-/children.json?page="+ak)
      .then(j=>j.json())
      .then(data=>{
        //console.log()
        return data.map(m=>m.name)
      })
  })
}
